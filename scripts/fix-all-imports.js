#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

/**
 * Comprehensive script to fix all incorrect imports based on file renames
 * This scans the entire codebase and fixes imports that still use old paths
 */

// Common import mappings based on the renaming patterns
const IMPORT_MAPPINGS = {
  // Main layout imports
  '@/components/layout/main-layout': '@/components/layout/MainLayout',
  '@/components/layout/indie-layout': '@/components/layout/IndieLayout',
  '@/components/layout/theme-provider': '@/components/layout/ThemeProvider',
  '@/components/layout/theme-toggle': '@/components/layout/ThemeToggle',
  
  // GraphQL client imports - keeping generated path as is since it's auto-generated
  '@/libs/client/graphql-client/apollo-client': '@/libs/client/graphql-client/apolloClient',
  '@/libs/client/graphql-client/provider': '@/libs/client/graphql-client/GraphQLProvider',
  
  // Store imports
  '@/store/create-issue-store': '@/store/createIssueStore',
  '@/store/filter-store': '@/store/filterStore',
  '@/store/issue-side-panel-store': '@/store/issueSidePanelStore',
  '@/store/search-store': '@/store/searchStore',
  '@/store/update-issue-store': '@/store/updateIssueStore',
  '@/store/view-store': '@/store/viewStore',
  
  // Hooks imports
  '@/hooks/use-edges': '@/hooks/useEdges',
  '@/hooks/use-mobile': '@/hooks/useIsMobile',
  '@/libs/client/hooks/issues/queries/issues/use-search-issues': '@/libs/client/hooks/issues/queries/issues/useSearchIssues',
  '@/libs/client/hooks/issues/queries/reference/use-display-issue-statuses': '@/libs/client/hooks/issues/queries/reference/useDisplayIssueStatuses',
  
  // Issues feature imports
  '@/features/issues/hooks/use-issue-status-icon': '@/features/issues/hooks/useIssueStatusIcon',
  '@/features/issues/hooks/use-sort-issues-by-priority': '@/features/issues/hooks/useSortIssuesByPriority',
  '@/features/issues/store/create-issue-store': '@/features/issues/store/createIssueStore',
  '@/features/issues/store/issue-filter-store': '@/features/issues/store/issueFilterStore',
  '@/features/issues/store/search-store': '@/features/issues/store/searchStore',
  '@/features/issues/types/api.types': '@/features/issues/types/apiTypes',
  '@/features/issues/types/filters.types': '@/features/issues/types/filtersTypes',
  '@/features/issues/types/issue.types': '@/features/issues/types/issueTypes',
  '@/features/issues/types/views.types': '@/features/issues/types/viewsTypes',
  '@/features/issues/utils/issue-helpers': '@/features/issues/utils/issueHelpers',
  
  // Components imports - Icons
  '@/components/icons/issue-status-icons': '@/components/icons/BacklogIcon',
  
  // Components imports - UI
  '@/components/ui/alert-dialog': '@/components/ui/AlertDialog',
  '@/components/ui/calendar': '@/components/ui/Calendar',
  '@/components/ui/context-menu': '@/components/ui/ContextMenu',
  '@/components/ui/dropdown-menu': '@/components/ui/DropdownMenu',
  '@/components/ui/form': '@/components/ui/FormItem',
  '@/components/ui/sidebar': '@/components/ui/SidebarProvider',
  '@/components/ui/tooltip': '@/components/ui/TooltipProvider',
  
  // Mock data imports
  '@/mock-data/indie-sidebar-nav': '@/mock-data/indieSidebarNav',
  '@/mock-data/side-bar-nav': '@/mock-data/sideBarNav',
  '@/mock-data/status': '@/mock-data/StatusIcon',
  
  // Constants imports
  '@/features/issues/constants/priority-icons': '@/features/issues/constants/NoPriorityIcon',
  '@/features/issues/constants/status-icons': '@/features/issues/constants/BacklogIcon',
};

// Additional relative import mappings for common patterns
const RELATIVE_MAPPINGS = {
  // Relative imports that commonly need fixing
  './main-layout': './MainLayout',
  './indie-layout': './IndieLayout',
  './theme-provider': './ThemeProvider',
  './theme-toggle': './ThemeToggle',
  './apollo-client': './apolloClient',
  './provider': './GraphQLProvider',
  
  // Feature relative imports
  './use-issue-status-icon': './useIssueStatusIcon',
  './use-sort-issues-by-priority': './useSortIssuesByPriority',
  './create-issue-store': './createIssueStore',
  './issue-filter-store': './issueFilterStore',
  './search-store': './searchStore',
  './filter-store': './filterStore',
  './view-store': './viewStore',
  './update-issue-store': './updateIssueStore',
  './issue-side-panel-store': './issueSidePanelStore',
  
  // Types
  './api.types': './apiTypes',
  './filters.types': './filtersTypes',
  './issue.types': './issueTypes',
  './views.types': './viewsTypes',
  
  // Utils
  './issue-helpers': './issueHelpers',
  
  // Components
  './assignee-user': './AssigneeUser',
  './issue-context-menu': './IssueContextMenu',
  './issue-grid': './IssueDragType',
  './issue-line': './IssueLine',
  './search-issues': './SearchIssues',
  './assignee-selector': './AssigneeSelector',
  './priority-selector': './PrioritySelector',
  './status-selector': './StatusSelector',
  './label-selector': './LabelSelector',
  './project-selector': './ProjectSelector',
  
  // Forms
  './issue-description-section': './IssueDescriptionSection',
  './issue-details-section': './IssueDetailsSection',
  './issue-header': './IssueHeader',
  './issue-side-panel': './IssueSidePanel',
  './issue-title-editor': './IssueTitleEditor',
  './markdown-editor': './MarkdownEditor',
  './subtask-item': './SubtaskItem',
  './subtasks-section': './SubtasksSection',
  './update-issue-modal': './UpdateIssueModal',
  
  // Headers
  './filter': './Filter',
  './header-nav': './HeaderNav',
  './header-options': './HeaderOptions',
  './header': './Header',
  './notifications': './Notifications',
  
  // Views
  './all-issues': './AllIssues',
  './group-issues-grid': './GroupIssuesGrid',
  './group-issues-list': './GroupIssuesList',
  './issue-grid-view': './issueGridView',
  './issue-list-view': './issueListView',
  
  // Sidebar
  './app-sidebar': './AppSidebar',
  './back-to-app': './BackToApp',
  './help-button': './HelpButton',
  './indie-sidebar': './IndieSidebar',
  './mode-switcher': './ModeSwitcher',
  './nav-account': './NavAccount',
  './nav-features': './NavFeatures',
  './nav-inbox': './NavInbox',
  './nav-teams': './NavTeams',
  './nav-teams-settings': './NavTeamsSettings',
  './nav-workspace': './NavWorkspace',
  './org-switcher': './OrgSwitcher',
  
  // Badges
  '../badges/label-badge': '../badges/LabelBadge',
  '../badges/project-badge': '../badges/ProjectBadge',
  
  // Hooks relative
  '../hooks/use-issue-status-icon': '../hooks/useIssueStatusIcon',
  '../../hooks/use-issue-status-icon': '../../hooks/useIssueStatusIcon',
  
  // Constants relative
  '../constants/priority-icons': '../constants/NoPriorityIcon',
  '../../constants/priority-icons': '../../constants/NoPriorityIcon',
  '../constants/status-icons': '../constants/BacklogIcon',
  '../../constants/status-icons': '../../constants/BacklogIcon',
  
  // Store relative
  '../store/create-issue-store': '../store/createIssueStore',
  '../../store/create-issue-store': '../../store/createIssueStore',
  '../store/search-store': '../store/searchStore',
  '../../store/search-store': '../../store/searchStore',
  '../store/issue-filter-store': '../store/issueFilterStore',
  '../../store/issue-filter-store': '../../store/issueFilterStore',
  
  // Types relative
  '../types/issue.types': '../types/issueTypes',
  '../../types/issue.types': '../../types/issueTypes',
  '../types/filters.types': '../types/filtersTypes',
  './filters.types': './filtersTypes',
  '../types/views.types': '../types/viewsTypes',
  './views.types': './viewsTypes',
  './issue.types': './issueTypes',
};

function getAllFiles() {
  try {
    const output = execSync('find . -name "*.tsx" -o -name "*.ts" | grep -v node_modules | grep -v ".git" | grep -v "scripts/fix"', 
      { encoding: 'utf8', cwd: process.cwd() });
    return output.trim().split('\n').filter(Boolean);
  } catch (error) {
    console.error('Error finding files:', error.message);
    return [];
  }
}

function fixImportsInFile(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      return { updated: false, changes: [] };
    }

    const content = fs.readFileSync(filePath, 'utf8');
    let updatedContent = content;
    const changes = [];
    
    // Combine all mappings
    const allMappings = { ...IMPORT_MAPPINGS, ...RELATIVE_MAPPINGS };
    
    // Fix each import mapping
    for (const [oldImport, newImport] of Object.entries(allMappings)) {
      // Create regex to match the import, being careful about quotes and word boundaries
      const patterns = [
        // Match imports like: from 'old-import'
        new RegExp(`from\\s+['"]${oldImport.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}['"]`, 'g'),
        // Match imports like: import('old-import')
        new RegExp(`import\\s*\\(\\s*['"]${oldImport.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}['"]\\s*\\)`, 'g'),
      ];
      
      patterns.forEach(pattern => {
        const matches = updatedContent.match(pattern);
        if (matches) {
          matches.forEach(match => {
            const newMatch = match.replace(oldImport, newImport);
            updatedContent = updatedContent.replace(match, newMatch);
            changes.push({
              old: match,
              new: newMatch,
              import: oldImport
            });
          });
        }
      });
    }
    
    const wasUpdated = updatedContent !== content;
    
    if (wasUpdated) {
      fs.writeFileSync(filePath, updatedContent, 'utf8');
    }
    
    return { updated: wasUpdated, changes };
    
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return { updated: false, changes: [], error: error.message };
  }
}

function main() {
  console.log('🔍 Scanning all files for incorrect imports...\n');
  
  const files = getAllFiles();
  console.log(`Found ${files.length} TypeScript files to check\n`);
  
  let totalFiles = 0;
  let updatedFiles = 0;
  let totalChanges = 0;
  
  files.forEach(file => {
    totalFiles++;
    const result = fixImportsInFile(file);
    
    if (result.error) {
      console.log(`❌ Error in ${file}: ${result.error}`);
    } else if (result.updated) {
      updatedFiles++;
      totalChanges += result.changes.length;
      
      console.log(`✅ Updated ${file}:`);
      result.changes.forEach(change => {
        console.log(`   ${change.old} → ${change.new.replace(change.old.replace(change.import, change.import), '')}`);
      });
      console.log('');
    }
  });
  
  console.log('='.repeat(60));
  console.log(`📊 Import fixing completed!`);
  console.log(`   Total files scanned: ${totalFiles}`);
  console.log(`   Files updated: ${updatedFiles}`);
  console.log(`   Total import changes: ${totalChanges}`);
  
  if (updatedFiles > 0) {
    console.log('\n✨ Import fixes applied successfully!');
    console.log('💡 Run `git diff` to see all changes made');
    console.log('💡 Run `git status` to see which files were modified');
    console.log('💡 Consider running your linter/formatter to ensure code consistency');
  } else {
    console.log('\nℹ️  No import updates needed - all imports appear to be correct!');
  }
}

if (require.main === module) {
  main();
}

module.exports = { fixImportsInFile, getAllFiles, IMPORT_MAPPINGS, RELATIVE_MAPPINGS };