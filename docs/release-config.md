# 🔧 Release Configuration Guide

This guide explains the updated `release.json` configuration structure that separates **scopes** and **features** for better commit categorization.

## 📋 Overview

The `release.json` file now has a cleaner structure that separates:

- **Types**: Commit types (feat, fix, chore, etc.)
- **Scopes**: Technical areas of the codebase (api, database, auth, etc.)
- **Features**: Business domains and functional areas (payment, user, admin, etc.)

## 🏗️ Configuration Structure

```json
{
  "authorBaseURL": "https://github.com/",
  "repoBaseURL": "https://github.com/Pay-Direction/paydirection-apiservices/",
  "ignoredAuthors": ["github-actions[bot]"],
  "refs": [
    {
      "name": "PD Board",
      "prefix": "PD-",
      "ticketBaseURL": "https://pd-tracker.com/browse/"
    }
  ],
  "types": { /* commit types */ },
  "scopes": { /* technical scopes */ },
  "features": { /* business features */ }
}
```

## 🎯 When to Use Scopes vs Features

### 🔧 Use **Scopes** for technical areas:
- `api` - API layer changes
- `database` - Database schema, queries, migrations
- `auth` - Authentication and authorization
- `graphql` - GraphQL schema and resolvers
- `ci` - CI/CD pipeline changes
- `docs` - Documentation updates
- `security` - Security-related changes
- `ui` - User interface components
- `core` - Core business logic

### 🎯 Use **Features** for business domains:
- `payment` - Payment processing functionality
- `user` - User management features
- `admin` - Admin panel features
- `fraud` - Fraud detection systems
- `notifications` - Notification systems
- `dashboards` - Dashboard and reporting features
- `marketplace` - Marketplace functionality
- `organization` - Organization management

## 📝 Commit Message Examples

### Technical Changes (Use Scopes)
```bash
feat(database): add user preferences table
fix(auth): resolve JWT token expiration issue
refactor(api): restructure endpoint validation
perf(graphql): optimize user query performance
chore(ci): update deployment pipeline
```

### Feature Changes (Use Features)
```bash
feat(payment): add cryptocurrency wallet support
fix(fraud): resolve false positive detection
enhance(notifications): improve email template system
feat(admin): add bulk user management tools
fix(user): resolve profile update validation
```

## 🛠️ Updated Scripts

All scripts have been updated to work with the new structure:

### ✅ Validation Script
`scripts/validate-pr-title.js` now accepts both scopes and features:

```bash
# Valid with technical scope
feat(database): add new migration

# Valid with business feature
feat(payment): add new gateway
```

### 📖 Documentation Generator
`scripts/commit-reference.js` now generates separate sections:

- **Scopes**: Technical areas
- **Features**: Business domains

### 📝 Release Notes Generator
`scripts/release-notes.js` properly labels commits using both scopes and features:

```markdown
## ✨ Features
- **Payment**: Add cryptocurrency wallet support
- **Database**: Add user preferences table
```

### 🔄 Sync Features Script
`scripts/sync-features.js` now supports both:

- `releaseScopes`: Syncs to `release.json` scopes section
- `releaseFeatures`: Syncs to `release.json` features section

## 🔍 Migration from Old Structure

The migration is **backward compatible**. Existing commits will continue to work because:

1. All existing scope values are preserved in either `scopes` or `features`
2. Scripts check both sections when validating commit messages
3. Release notes generation combines both sections for labeling

### Migration Mapping

| Old Scope | New Location | Reason |
|-----------|--------------|--------|
| `api` | `scopes` | Technical layer |
| `payment` | `features` | Business domain |
| `database` | `scopes` | Technical layer |
| `admin` | `features` | Business domain |
| `auth` | `scopes` | Technical layer |
| `user` | `features` | Business domain |

## 🧪 Testing the Configuration

### Test Validation
```bash
# Test technical scope
node scripts/validate-pr-title.js "feat(database): add new table"

# Test business feature
node scripts/validate-pr-title.js "feat(payment): add new gateway"

# Test invalid scope (should fail)
node scripts/validate-pr-title.js "feat(invalid): some change"
```

### Generate Documentation
```bash
# Generate updated commit reference
node scripts/commit-reference.js

# Check output at docs/commit-reference.md
```

### Test Release Notes
```bash
# Generate release notes (will use both scopes and features)
node scripts/release-notes.js
```

## 🎯 Best Practices

### 1. Choose the Right Category
- **Technical changes** → Use scopes
- **Business features** → Use features
- **When in doubt** → Consider the impact area

### 2. Be Consistent
- Use the same scope/feature for related changes
- Follow the established naming convention (camelCase)

### 3. Keep Labels Clear
- Scopes should reflect technical areas
- Features should reflect user-facing functionality

### 4. Update Configuration
- Add new scopes for new technical areas
- Add new features for new business domains
- Keep labels descriptive but concise

## 🔄 Configuration Updates

To add new scopes or features:

1. **Add to `release.json`**:
```json
{
  "scopes": {
    "newTechArea": {
      "label": "New Technical Area"
    }
  },
  "features": {
    "newFeature": {
      "label": "New Feature Domain"
    }
  }
}
```

2. **Regenerate documentation**:
```bash
node scripts/commit-reference.js
```

3. **Test validation**:
```bash
node scripts/validate-pr-title.js "feat(newTechArea): test"
node scripts/validate-pr-title.js "feat(newFeature): test"
```

## 🚀 Benefits

### Better Organization
- Clear separation between technical and business concerns
- More intuitive scope selection for developers

### Improved Release Notes
- Better categorization in changelogs
- More meaningful labels for stakeholders

### Enhanced Tracking
- Easier to track technical debt vs feature work
- Better insights into development patterns

### Future-Proof
- Scalable structure for growing codebase
- Easy to add new domains and technical areas

---

For questions or issues with the release configuration, check the existing scripts or create an issue in the repository. 
