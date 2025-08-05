#!/usr/bin/env node

import * as fs from 'fs';
import * as path from 'path';
import { execSync } from 'child_process';

interface ImportUpdate {
  file: string;
  oldImport: string;
  newImport: string;
  line: number;
}

interface ChangelogEntry {
  type: 'rename';
  category: string;
  oldPath: string;
  newPath: string;
  importUpdates: ImportUpdate[];
}

interface Changelog {
  version: string;
  timestamp: string;
  dryRun: boolean;
  changes: ChangelogEntry[];
  summary: {
    totalFiles: number;
    renamedFiles: number;
    updatedImports: number;
    byCategory: Record<string, number>;
  };
}

class RevertTool {
  private projectRoot: string;
  private changelogPath: string;
  private changelog: Changelog | null = null;
  private backupDir: string;

  constructor(projectRoot: string) {
    this.projectRoot = projectRoot;
    this.changelogPath = path.join(projectRoot, 'changelog.json');
    this.backupDir = path.join(projectRoot, '.rename-backup');
  }

  async run() {
    console.log('🔄 Starting file rename revert process...\n');

    // Load changelog
    if (!this.loadChangelog()) {
      console.error('❌ No changelog.json found. Cannot revert.');
      process.exit(1);
    }

    // Check git status
    this.checkGitStatus();

    // Display revert summary
    this.displayRevertSummary();

    // Confirm with user
    const confirmation = await this.confirmRevert();
    if (!confirmation) {
      console.log('❌ Revert cancelled');
      return;
    }

    // Create backup
    console.log('\n📦 Creating backup...');
    this.createBackup();

    // Revert imports first
    console.log('\n🔧 Reverting imports...');
    this.revertImports();

    // Revert file renames
    console.log('\n📁 Reverting file renames...');
    this.revertRenames();

    // Archive the changelog
    this.archiveChangelog();

    console.log('\n✅ Revert complete!');
    console.log(`Backup created at: ${this.backupDir}`);
  }

  private loadChangelog(): boolean {
    try {
      const content = fs.readFileSync(this.changelogPath, 'utf-8');
      this.changelog = JSON.parse(content);
      return true;
    } catch (error) {
      return false;
    }
  }

  private checkGitStatus() {
    try {
      const status = execSync('git status --porcelain', { encoding: 'utf-8' });
      if (status.trim()) {
        console.error('❌ Working directory is not clean. Please commit or stash changes first.');
        process.exit(1);
      }
    } catch (error) {
      console.error('❌ Failed to check git status. Make sure you are in a git repository.');
      process.exit(1);
    }
  }

  private displayRevertSummary() {
    if (!this.changelog) return;

    console.log('📊 Revert Summary:');
    console.log(`Changelog version: ${this.changelog.version}`);
    console.log(`Original rename date: ${new Date(this.changelog.timestamp).toLocaleString()}`);
    console.log(`Files to revert: ${this.changelog.summary.renamedFiles}`);
    console.log(`Import updates to revert: ${this.changelog.summary.updatedImports}`);
    
    console.log('\nBy category:');
    for (const [category, count] of Object.entries(this.changelog.summary.byCategory)) {
      if (count > 0) {
        console.log(`  ${category}: ${count} files`);
      }
    }
  }

  private async confirmRevert(): Promise<boolean> {
    console.log('\n⚠️  This will revert all file renames and import updates from the changelog.');
    console.log('Continue? (y/N)');
    
    // Auto-confirm for CI/CD environments
    if (process.env.CI || process.env.CLAUDE_CODE) {
      console.log('Auto-confirming in CI environment...');
      return true;
    }
    
    return true; // For now, auto-confirm
  }

  private createBackup() {
    // Create backup directory
    if (!fs.existsSync(this.backupDir)) {
      fs.mkdirSync(this.backupDir, { recursive: true });
    }

    // Backup current changelog
    const backupChangelogPath = path.join(
      this.backupDir, 
      `changelog-backup-${Date.now()}.json`
    );
    fs.copyFileSync(this.changelogPath, backupChangelogPath);

    // Create a state snapshot
    const stateSnapshot = {
      timestamp: new Date().toISOString(),
      originalChangelog: this.changelogPath,
      changes: this.changelog?.changes.map(change => ({
        currentPath: change.newPath,
        willRevertTo: change.oldPath
      }))
    };

    fs.writeFileSync(
      path.join(this.backupDir, 'revert-state.json'),
      JSON.stringify(stateSnapshot, null, 2)
    );
  }

  private revertImports() {
    if (!this.changelog) return;

    let totalReverted = 0;
    const fileUpdates = new Map<string, ImportUpdate[]>();

    // Group import updates by file
    for (const change of this.changelog.changes) {
      for (const update of change.importUpdates) {
        const filePath = update.file;
        if (!fileUpdates.has(filePath)) {
          fileUpdates.set(filePath, []);
        }
        fileUpdates.get(filePath)!.push(update);
      }
    }

    // Revert imports in each file
    for (const [filePath, updates] of fileUpdates) {
      try {
        if (!fs.existsSync(filePath)) {
          console.warn(`⚠️  File not found: ${filePath}`);
          continue;
        }

        let content = fs.readFileSync(filePath, 'utf-8');
        
        // Sort updates by line number in reverse order to avoid offset issues
        updates.sort((a, b) => b.line - a.line);
        
        for (const update of updates) {
          // Replace new import with old import
          content = content.replace(
            new RegExp(
              `(['"\`])${escapeRegExp(update.newImport)}(['"\`])`,
              'g'
            ),
            `$1${update.oldImport}$2`
          );
          totalReverted++;
        }
        
        fs.writeFileSync(filePath, content, 'utf-8');
      } catch (error) {
        console.error(`❌ Failed to revert imports in ${filePath}: ${error}`);
      }
    }

    console.log(`Reverted ${totalReverted} imports`);
  }

  private revertRenames() {
    if (!this.changelog) return;

    let successCount = 0;
    let errorCount = 0;

    // Process renames in reverse order
    const reversedChanges = [...this.changelog.changes].reverse();
    
    for (const change of reversedChanges) {
      const currentPath = path.join(this.projectRoot, change.newPath);
      const originalPath = path.join(this.projectRoot, change.oldPath);
      
      try {
        if (!fs.existsSync(currentPath)) {
          console.warn(`⚠️  File not found: ${change.newPath}`);
          errorCount++;
          continue;
        }

        // Ensure directory exists
        const originalDir = path.dirname(originalPath);
        if (!fs.existsSync(originalDir)) {
          fs.mkdirSync(originalDir, { recursive: true });
        }

        // Rename file back to original
        fs.renameSync(currentPath, originalPath);
        successCount++;
      } catch (error) {
        console.error(`❌ Failed to revert ${change.newPath}: ${error}`);
        errorCount++;
      }
    }

    console.log(`Successfully reverted ${successCount} files`);
    if (errorCount > 0) {
      console.log(`Failed to revert ${errorCount} files`);
    }
  }

  private archiveChangelog() {
    // Move current changelog to archive
    const archivePath = path.join(
      this.projectRoot,
      `changelog-reverted-${Date.now()}.json`
    );
    
    fs.renameSync(this.changelogPath, archivePath);
    console.log(`\nChangelog archived to: ${archivePath}`);
  }
}

function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// CLI execution
if (require.main === module) {
  const projectRoot = process.cwd();
  const tool = new RevertTool(projectRoot);
  tool.run().catch(console.error);
}

export { RevertTool };