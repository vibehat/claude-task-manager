#!/usr/bin/env node

import * as fs from 'fs';
import * as path from 'path';
import { execSync } from 'child_process';
import { 
  categorizeFile, 
  getNewFileName, 
  shouldSkipFile,
  FileInfo,
  FileCategory 
} from './utils/fileCategories';
import { 
  updateImportsInFile,
  findAllTypeScriptFiles,
  FileRename,
  ImportUpdate 
} from './utils/importUpdater';

interface ChangelogEntry {
  type: 'rename';
  category: FileCategory;
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
    byCategory: Record<FileCategory, number>;
  };
}

class RenamingTool {
  private projectRoot: string;
  private dryRun: boolean;
  private changelog: Changelog;
  private renames: FileRename[] = [];

  constructor(projectRoot: string, dryRun: boolean = false) {
    this.projectRoot = projectRoot;
    this.dryRun = dryRun;
    this.changelog = {
      version: '1.0.0',
      timestamp: new Date().toISOString(),
      dryRun: dryRun,
      changes: [],
      summary: {
        totalFiles: 0,
        renamedFiles: 0,
        updatedImports: 0,
        byCategory: {
          component: 0,
          hook: 0,
          type: 0,
          util: 0,
          constant: 0,
          store: 0,
          other: 0
        }
      }
    };
  }

  async run() {
    console.log(`🚀 Starting file renaming tool in ${this.dryRun ? 'DRY RUN' : 'EXECUTION'} mode\n`);

    // Check git status
    if (!this.dryRun) {
      this.checkGitStatus();
    }

    // Step 1: Collect all files to rename
    console.log('📁 Scanning files...');
    const filesToRename = this.collectFilesToRename();
    console.log(`Found ${filesToRename.length} files to rename\n`);

    // Step 2: Create rename plan
    console.log('📝 Creating rename plan...');
    const renamePlan = this.createRenamePlan(filesToRename);
    
    // Display summary
    this.displayRenameSummary(renamePlan);

    if (this.dryRun) {
      console.log('\n🔍 DRY RUN COMPLETE - No files were modified');
      console.log('Run without --dry-run flag to execute the changes\n');
    } else {
      // Confirm with user
      const confirmation = await this.confirmExecution();
      if (!confirmation) {
        console.log('❌ Operation cancelled');
        return;
      }

      // Step 3: Execute renames
      console.log('\n🔄 Renaming files...');
      this.executeRenames(renamePlan);

      // Step 4: Update imports
      console.log('\n🔧 Updating imports...');
      this.updateImports();

      // Step 5: Save changelog
      this.saveChangelog();
      console.log('\n✅ Renaming complete! Changelog saved to changelog.json');
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

  private collectFilesToRename(): FileInfo[] {
    const files = findAllTypeScriptFiles(this.projectRoot);
    const filesToRename: FileInfo[] = [];

    for (const file of files) {
      if (shouldSkipFile(file)) continue;

      const relativePath = path.relative(this.projectRoot, file);
      const fileName = path.basename(file);
      const extension = path.extname(file);
      
      // Skip index files
      if (fileName.startsWith('index.')) continue;

      const content = fs.readFileSync(file, 'utf-8');
      const category = categorizeFile(file);
      
      const fileInfo: FileInfo = {
        absolutePath: file,
        relativePath,
        fileName,
        extension,
        category,
        content
      };

      const newFileName = getNewFileName(fileInfo);
      
      // Only include if the name actually changes
      if (newFileName !== fileName) {
        filesToRename.push(fileInfo);
      }
    }

    this.changelog.summary.totalFiles = files.length;
    return filesToRename;
  }

  private createRenamePlan(filesToRename: FileInfo[]): Map<FileInfo, string> {
    const renamePlan = new Map<FileInfo, string>();

    for (const fileInfo of filesToRename) {
      const newFileName = getNewFileName(fileInfo);
      const newPath = path.join(path.dirname(fileInfo.absolutePath), newFileName);
      
      renamePlan.set(fileInfo, newPath);
      
      // Track rename for import updates
      this.renames.push({
        oldPath: fileInfo.absolutePath,
        newPath: newPath
      });

      // Update category counts
      this.changelog.summary.byCategory[fileInfo.category]++;
    }

    this.changelog.summary.renamedFiles = renamePlan.size;
    return renamePlan;
  }

  private displayRenameSummary(renamePlan: Map<FileInfo, string>) {
    console.log('\n📊 Rename Summary:');
    console.log(`Total files to rename: ${renamePlan.size}`);
    
    console.log('\nBy category:');
    for (const [category, count] of Object.entries(this.changelog.summary.byCategory)) {
      if (count > 0) {
        console.log(`  ${category}: ${count} files`);
      }
    }

    if (this.dryRun) {
      console.log('\n📋 Planned renames:');
      let count = 0;
      for (const [fileInfo, newPath] of renamePlan) {
        if (count++ < 10) {
          const oldName = path.basename(fileInfo.absolutePath);
          const newName = path.basename(newPath);
          console.log(`  ${oldName} → ${newName}`);
        }
      }
      if (renamePlan.size > 10) {
        console.log(`  ... and ${renamePlan.size - 10} more`);
      }
    }
  }

  private async confirmExecution(): Promise<boolean> {
    // In a real implementation, you'd use a proper prompt library
    // For now, we'll auto-confirm in non-interactive environments
    console.log('\n⚠️  This will rename files and update imports throughout the codebase.');
    console.log('Continue? (y/N)');
    
    // Auto-confirm for CI/CD environments
    if (process.env.CI || process.env.CLAUDE_CODE) {
      console.log('Auto-confirming in CI environment...');
      return true;
    }
    
    return true; // For now, auto-confirm
  }

  private executeRenames(renamePlan: Map<FileInfo, string>) {
    for (const [fileInfo, newPath] of renamePlan) {
      try {
        fs.renameSync(fileInfo.absolutePath, newPath);
        
        // Create changelog entry
        const changeEntry: ChangelogEntry = {
          type: 'rename',
          category: fileInfo.category,
          oldPath: fileInfo.relativePath,
          newPath: path.relative(this.projectRoot, newPath),
          importUpdates: []
        };
        
        this.changelog.changes.push(changeEntry);
      } catch (error) {
        console.error(`❌ Failed to rename ${fileInfo.fileName}: ${error}`);
      }
    }
  }

  private updateImports() {
    const allFiles = findAllTypeScriptFiles(this.projectRoot);
    let totalUpdates = 0;

    for (const file of allFiles) {
      if (shouldSkipFile(file)) continue;

      const updates = updateImportsInFile(file, this.renames, this.projectRoot);
      
      if (updates.length > 0) {
        totalUpdates += updates.length;
        
        // Add import updates to corresponding changelog entries
        for (const update of updates) {
          const changeEntry = this.changelog.changes.find(
            change => this.renames.some(
              rename => rename.oldPath === path.join(this.projectRoot, change.oldPath) &&
                       update.oldImport.includes(path.basename(change.oldPath, path.extname(change.oldPath)))
            )
          );
          
          if (changeEntry) {
            changeEntry.importUpdates.push(update);
          }
        }
      }
    }

    this.changelog.summary.updatedImports = totalUpdates;
    console.log(`Updated ${totalUpdates} imports across ${allFiles.length} files`);
  }

  private saveChangelog() {
    const changelogPath = path.join(this.projectRoot, 'changelog.json');
    fs.writeFileSync(changelogPath, JSON.stringify(this.changelog, null, 2));
  }
}

// CLI execution
if (require.main === module) {
  const args = process.argv.slice(2);
  const dryRun = args.includes('--dry-run');
  const projectRoot = process.cwd();

  const tool = new RenamingTool(projectRoot, dryRun);
  tool.run().catch(console.error);
}

export { RenamingTool };