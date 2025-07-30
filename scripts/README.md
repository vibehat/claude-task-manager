# File Naming Convention Tool

This tool standardizes file naming conventions across the React/TypeScript codebase to follow best practices.

## Overview

The renaming tool automatically updates file names based on their type:
- **Components**: PascalCase matching the component name (e.g., `AlertDialog.tsx`)
- **Hooks**: Exact hook name in camelCase (e.g., `useMobile.ts`)
- **Other files**: camelCase (e.g., `apiTypes.ts`, `userHelpers.ts`)

## Features

- 🔍 **Smart file categorization**: Automatically detects components, hooks, types, utilities, etc.
- 📝 **Changelog tracking**: Records all changes in `changelog.json` for full traceability
- 🔄 **Import updates**: Automatically updates all import statements across the codebase
- ↩️ **Revertable**: Can rollback all changes using the changelog
- ✅ **Validation**: Built-in validation to ensure no broken imports
- 🧪 **Dry-run mode**: Preview changes before executing

## Usage

### 1. Preview Changes (Dry Run)

```bash
pnpm rename:dry-run
```

This will:
- Scan all TypeScript/JavaScript files
- Show what files would be renamed
- Display a summary by category
- No files are actually modified

### 2. Execute Renaming

```bash
pnpm rename:execute
```

This will:
- Check that git working directory is clean
- Rename all files according to conventions
- Update all import statements
- Generate `changelog.json` with all changes

### 3. Validate Changes

```bash
pnpm rename:validate
```

This will:
- Run TypeScript compilation check
- Validate all imports are working
- Check for missing files
- Run linting

### 4. Revert Changes

```bash
pnpm rename:revert
```

This will:
- Read the `changelog.json`
- Revert all file renames
- Restore original import statements
- Create a backup before reverting

## File Categories

The tool categorizes files based on content and location:

1. **Components** (`.tsx` files)
   - Contains React component exports
   - Renamed to PascalCase

2. **Hooks** (`use*.ts` files)
   - Contains React hook functions
   - Renamed to exact hook name

3. **Types** (`*.types.ts`, `types/` directory)
   - Contains TypeScript type definitions
   - Renamed to camelCase

4. **Utilities** (`utils/`, `helpers/` directories)
   - Contains utility functions
   - Renamed to camelCase

5. **Constants** (`constants/`, `*.constants.ts`)
   - Contains constant definitions
   - Renamed to camelCase

6. **Store** (`store/`, `*.store.ts`)
   - Contains state management files
   - Renamed to camelCase

## Changelog Format

The tool generates a `changelog.json` file:

```json
{
  "version": "1.0.0",
  "timestamp": "2025-01-29T10:00:00Z",
  "dryRun": false,
  "changes": [
    {
      "type": "rename",
      "category": "component",
      "oldPath": "components/ui/alert-dialog.tsx",
      "newPath": "components/ui/AlertDialog.tsx",
      "importUpdates": [
        {
          "file": "app/page.tsx",
          "oldImport": "./components/ui/alert-dialog",
          "newImport": "./components/ui/AlertDialog",
          "line": 5
        }
      ]
    }
  ],
  "summary": {
    "totalFiles": 250,
    "renamedFiles": 45,
    "updatedImports": 120,
    "byCategory": {
      "component": 20,
      "hook": 5,
      "type": 10,
      "util": 5,
      "constant": 3,
      "store": 2,
      "other": 0
    }
  }
}
```

## Safety Features

1. **Git Status Check**: Ensures working directory is clean before execution
2. **Dry Run Mode**: Preview all changes without modifying files
3. **Validation Suite**: Verify no broken imports after renaming
4. **Backup Creation**: Automatic backup before reverting
5. **Detailed Logging**: Track all operations and changes

## Troubleshooting

### TypeScript Compilation Errors

If validation shows TypeScript errors:
1. Check the error messages for broken imports
2. Ensure all files were renamed successfully
3. Run `pnpm typecheck` to see detailed errors

### Broken Imports

If imports are broken after renaming:
1. Check if the file exists at the new location
2. Verify the import path is correct
3. Consider reverting and running in dry-run mode first

### Revert Issues

If revert fails:
1. Check that `changelog.json` exists
2. Ensure git working directory is clean
3. Check backup directory `.rename-backup/`

## Implementation Details

The tool consists of several modules:

- `renamingTool.ts`: Main renaming logic
- `revertRenaming.ts`: Revert functionality
- `validateRename.ts`: Validation suite
- `utils/fileCategories.ts`: File categorization logic
- `utils/importUpdater.ts`: Import update logic

## Best Practices

1. Always run in dry-run mode first
2. Ensure git working directory is clean
3. Run validation after renaming
4. Keep the changelog.json for future reference
5. Consider creating a git branch for the renaming