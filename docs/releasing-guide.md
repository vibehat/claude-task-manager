# 🚀 Releasing Guide

This guide provides step-by-step instructions for developers on how to create and manage releases in the PayDirection API Services project.

---

## 📋 Overview

Our release process follows the versioning strategy outlined in [Versioning Strategy](./versioning-strategy.md), supporting **manual prerelease flows** and **manual production releases** using semantic versioning with the following progression:

```
Beta (Manual) → Release Candidate (Manual) → Production (Manual)
v1.50.0-beta.1 → v1.50.0-rc.1 → v1.50.0
```

### 🎯 Release Types

| Type | Pattern | Purpose | Trigger |
|------|---------|---------|---------|
| **Beta** | `v1.50.0-beta.1` | Development testing | Manual |
| **RC** | `v1.50.0-rc.1` | Pre-production testing | Manual |
| **Production** | `v1.50.0` | Live environment | Manual |
| **Hotfix** | `v1.50.1` | Critical fixes | Manual |

---

## 🛠️ Implementation Status

### ✅ Available Features

| Feature | Status | Description |
|---------|--------|-------------|
| **Manual Beta Bump** | ✅ Active | Manual beta creation via GitHub Actions |
| **Release Notes Generation** | ✅ Active | Auto-generated from commit history |
| **Dev Deployment** | ✅ Active | Triggers on beta tags |
| **Prerelease GitHub Releases** | ✅ Active | Auto-marks beta/RC as prerelease |
| **Semantic Version Validation** | ✅ Active | Validates all version transitions |

### 🔧 Available Workflows

| Workflow | Trigger | Purpose |
|----------|---------|---------|
| **Release Beta Version** | Manual | Create beta versions with different increment types |
| **Draft A Release** | Manual | Create RC or production release |
| **Publish A Release** | Manual | Tag and publish to GitHub |

---

## ✅ Release Checklist

Before creating any release, ensure:

### 🔍 **Pre-Release Validation**
- [ ] All tests are passing
- [ ] Code has been reviewed and approved
- [ ] No critical bugs in the target branch
- [ ] Release notes requirements are identified
- [ ] Deployment environment is ready

### 📝 **Documentation**
- [ ] CHANGELOG.md is updated (auto-generated)
- [ ] Breaking changes are documented
- [ ] Migration guides are prepared (if needed)
- [ ] API documentation is current

### 🔒 **Security & Compliance**
- [ ] Security scan completed
- [ ] Dependencies are up to date
- [ ] No exposed secrets or sensitive data
- [ ] Compliance requirements met

---

## 📚 Release Scenarios

### 🔥 Scenario 1: Create Beta Minor Version

**When to use**: Starting development on a new minor version with new features.

**Example**: `1.49.6` → `1.50.0-beta.1`

#### **Method A: GitHub Actions (Recommended)**

1. **Navigate to GitHub Actions**
   ```
   GitHub > Actions > Release Beta Version
   ```

2. **Create Minor Version Beta**
   - Click `Run workflow`
   - **Release type**: `beta_minor`
   - Click `Run workflow`
   - Result: `1.49.6` → `1.50.0-beta.1`

#### **Method B: Command Line**

```bash
# Create minor version beta (two steps)
./scripts/release.sh minor
./scripts/release.sh prerelease beta
# Result: 1.49.6 → 1.50.0 → 1.50.0-beta.1
```

#### **What Happens Next**
- ✅ Version bumped to new minor with beta suffix
- ✅ Git tag created: `v1.50.0-beta.1`
- ✅ GitHub Release marked as prerelease
- ✅ Ready for development environment deployment

---

### 🔥 Scenario 2: Increment Existing Beta Version

**When to use**: Regular development iterations to increment an existing beta version during development.

**Example**: `1.49.7-beta.1` → `1.49.7-beta.2`

**Branch**: This should be run on the `develop` branch

#### **Method A: GitHub Actions (Recommended)**

1. **Navigate to GitHub Actions**
   ```
   GitHub > Actions > Release Beta Version
   ```

2. **Increment Beta Version**
   - Click `Run workflow`
   - **Release type**: `beta_increment`
   - Click `Run workflow`
   - Result: `1.49.7-beta.1` → `1.49.7-beta.2`

#### **Method B: Command Line**

```bash
# Increment existing beta version
./scripts/release.sh prerelease beta
# Result: 1.49.7-beta.1 → 1.49.7-beta.2
```

#### **What Happens Next**
- ✅ Version incremented to next beta number
- ✅ Git tag created: `v1.49.7-beta.2`
- ✅ GitHub Release marked as prerelease
- ✅ Auto-deploy to dev environment (if configured)
- ✅ Ready for continued development testing

---

### 🚀 Scenario 3: Promote a Beta Version to Live

**When to use**: Promoting a beta version to production after testing is complete.

**Example**: `1.50.0-beta.1` → `1.50.0`

#### **Step 1: Draft Production Release**

**GitHub Actions:**
1. Navigate to `Actions > Draft A Release`
2. **Release type**: `patch` (or `minor`/`major` as appropriate)
3. Click `Run workflow`

**Result:**
- ✅ Release branch created: `release-v1.50.0`
- ✅ Version bumped from beta to production version
- ✅ Release notes generated automatically

#### **Step 2: Create Pull Request to Main**

```bash
# Developer creates PR from release branch to master
# PR: release-v1.50.0 → master
```

#### **Step 3: Push/PR/Pick Changes to Release Branch**

- Push any additional changes needed to the release branch
- Cherry-pick specific commits if needed
- Ensure all required features and fixes are included

#### **Step 4: Review & Test**

1. **Review Release Notes**
   - Check auto-generated release notes in `RELEASE_NOTES.md`
   - Edit and refine as necessary
   - Ensure all features and fixes are documented

2. **Local Testing**
   - Deploy to staging environment
   - Run acceptance tests
   - Perform final validation

#### **Step 5: Merge to Main**

```bash
# If all tests pass and review is complete:
# Merge the PR: release-v1.50.0 → master
```

#### **Step 6: All Done! 🎉**

Once merged to master:
- ✅ Git tag automatically created: `v1.50.0`
- ✅ GitHub Release published with notes
- ✅ Production deployment triggered
- ✅ Release is live!

---

### 🔥 Scenario 4: Release a Patch

**When to use**: Critical bugs in production that need immediate fixes.

**Example**: `1.50.0` → `1.50.1`

#### **Step 1: Create Hotfix Branch**

```bash
# Create hotfix branch from master
git checkout master
git pull origin master
git checkout -b hotfix-v1.50.1
```

#### **Step 2: Apply Fix and Test**

```bash
# Make your fixes
# Test thoroughly
# Commit changes
git add .
git commit -m "hotfix(critical): fix payment processing issue [PD-1234]"
```

#### **Step 3: Draft Patch Release & Check Release Branch Creation**

**Via GitHub Actions:**
1. Push your hotfix branch
2. Go to `Actions > Draft A Release`
3. **Release type**: `patch`
4. Click `Run workflow`
5. **Verify**: Check that release branch `release-v1.50.1` was created

**Via Command Line:**
```bash
./scripts/release.sh patch
# Result: 1.50.0 → 1.50.1
# Check that release branch was created:
git branch -r | grep release-v1.50.1
```

#### **Step 4: Create Pull Request from Release Branch to Main**

```bash
# Create PR from release branch to master
# PR: release-v1.50.1 → master
# This can be done via GitHub UI or CLI
```

#### **Step 5: Cherry-pick Changes to Release Branch**

If additional fixes are needed, cherry-pick them to the release branch:

```bash
# Switch to release branch
git checkout release-v1.50.1

# Option A: Cherry-pick specific commits
git cherry-pick <commit-hash>

# Option B: Create PR to release branch
# Create PR: hotfix-branch → release-v1.50.1

# Option C: Push additional changes directly
git add .
git commit -m "hotfix(critical): additional fix for edge case [PD-1235]"
git push origin release-v1.50.1
```

#### **Step 6: Merge Release Branch to Main**

```bash
# After all fixes are applied and tested:
# Merge the PR: release-v1.50.1 → master
# This triggers automatic tagging and deployment
```

#### **Step 7: Expedited Review & Deploy**

- ✅ Fast-track code review of the release PR
- ✅ Deploy to staging for verification
- ✅ Deploy to production immediately after verification
- ✅ Monitor production metrics

#### **What Happens After Merge**

Once the release branch is merged to master:
- ✅ Git tag automatically created: `v1.50.1`
- ✅ GitHub Release published with notes
- ✅ Production deployment triggered
- ✅ Hotfix is live!

---

## 🧪 Local Testing & Validation

### Test Version Bumping:

```bash
# Test beta bump
./scripts/release.sh prerelease beta
# Result: v1.49.6 → v1.49.6-beta.1

# Test RC creation
./scripts/release.sh prerelease rc  
# Result: v1.49.6-beta.5 → v1.49.6-rc.1

# Test production release
./scripts/release.sh patch
# Result: v1.49.6-rc.1 → v1.49.6
```

### Direct Script Usage:

```bash
node scripts/bump-version.js prerelease beta
node scripts/bump-version.js prerelease rc
node scripts/bump-version.js patch
```

### Run Complete Demo:

```bash
./scripts/version-flow-demo.sh
```

---

## 🧬 Version Validation Rules

All version transitions are validated to ensure semantic versioning compliance:

```bash
✅ v1.49.6 → v1.49.6-beta.1     # First beta from production
✅ v1.49.6-beta.1 → v1.49.6-beta.2 # Beta increment
✅ v1.49.6-beta.5 → v1.49.6-rc.1   # Beta to RC
✅ v1.49.6-rc.1 → v1.49.6-rc.2     # RC increment
✅ v1.49.6-rc.2 → v1.49.7          # RC to production
```

---

## 🛠️ Technical Implementation

### **Key Files & Workflows:**

| File/Workflow | Purpose |
|---------------|---------|
| `.github/workflows/release-beta.yml` | Manual beta releases with increment options |
| `.github/workflows/release-draft.yml` | Draft releases (supports prerelease) |
| `.github/workflows/release-notes.yml` | Auto-generate release notes |
| `.github/workflows/release-publish.yml` | Tag and publish releases |
| `.github/workflows/build-and-deploy-to-gcp-dev-env.yaml` | Deploy to Dev |
| `scripts/release.sh` | CLI script with prerelease support |
| `scripts/bump-version.js` | Core version bumping logic |
| `scripts/release-notes.js` | Changelog generation from commits |
| `scripts/version-flow-demo.sh` | Complete flow demonstration |

### Enhanced Files:

- ✨ **New**: Manual beta workflow with increment types, demo script
- 🔧 **Enhanced**: All scripts now support prerelease types
- 📋 **Updated**: Workflows detect and handle prerelease versions

---

## 🛠️ Tools & Commands Reference

### **Quick Commands**

```bash
# Create major beta version (two steps)
./scripts/release.sh major && ./scripts/release.sh prerelease beta

# Create minor beta version (two steps)
./scripts/release.sh minor && ./scripts/release.sh prerelease beta

# Create patch beta version
./scripts/release.sh prerelease beta

# Create release candidate
./scripts/release.sh prerelease rc

# Create production release
./scripts/release.sh patch  # or minor/major

# Test version flow (demo)
./scripts/tests/version-flow-demo.sh
```

### **GitHub Actions Workflows**

| Workflow | Purpose | Trigger |
|----------|---------|---------|
| `Release Beta Version` | Create beta versions with increment options | Manual |
| `Draft A Release` | Create release branches | Manual |
| `Publish A Release` | Create tags and GitHub releases | Manual |
| `Release Notes` | Generate changelog | Automatic on release branch |

---

## 🔄 Version Flow Examples

### **Standard Patch Flow**
```
1.49.6 → 1.49.6-beta.1 → 1.49.6-beta.2 → 1.49.6-rc.1 → 1.49.7
```

### **Minor Version Flow**
```
1.49.6 → 1.50.0-beta.0 → 1.50.0-beta.1 → 1.50.0-rc.1 → 1.50.0
```

### **Major Version Flow**
```
1.49.6 → 2.0.0-beta.0 → 2.0.0-beta.1 → 2.0.0-rc.1 → 2.0.0
```

### **Hotfix Flow**
```
1.50.0 (production) → 1.50.1 (hotfix) → 1.50.1 (deploy)
```

---

## 🚀 Quick Start Guide

### For New Team Members:

1. **Develop**: Work on feature branches, merge PRs to master branches
2. **Beta Testing**: Create manual beta versions for testing in Dev environment
3. **RC Creation**: Use GitHub Actions when ready for broader testing
4. **Production**: Use GitHub Actions for final release

### For Release Managers:

1. **Create**: Manually create beta versions using Release Beta Version workflow
2. **Test**: Validate features in Dev environment
3. **Promote**: Create RC when beta is stable
4. **Release**: Create production version after RC testing

---

## 🔄 Migration Notes

### ✅ Backward Compatibility:
- All existing release workflows remain functional
- No breaking changes to current processes
- Beta flow is now manual for better control

### 🎯 Benefits:
- **Controlled releases**: Manual beta creation prevents unwanted releases
- **Better testing**: Clear Dev → PPE → PROD progression
- **Safer releases**: Multiple validation stages
- **Consistent versioning**: Automated semantic versioning
- **Flexible increment types**: Choose exactly how to increment versions

---

## 🚨 Troubleshooting

### **Common Issues**

**Problem**: Version bump fails
```bash
# Solution: Check package.json and VERSION file sync
git status
git checkout -- package.json VERSION
```

**Problem**: Release notes are empty
```bash
# Solution: Check commit history and format
git log --oneline HEAD~10..HEAD
# Ensure commits follow conventional format
```

**Problem**: GitHub Actions workflow fails
```bash
# Solution: Check workflow permissions and branch protection
# Ensure GITHUB_TOKEN has write permissions
```

**Beta not auto-bumping?**
- Check that PR was merged to `develop` branch
- Verify `.github/workflows/release-beta.yml` is enabled

**Release workflow failing?**
- Ensure you have admin permissions
- Check workflow logs in GitHub Actions

**Version validation errors?**
- Review semantic versioning rules above
- Use local testing scripts to validate

### **Emergency Procedures**

**Critical Hotfix Process:**
1. Create hotfix branch immediately
2. Apply minimal fix
3. Skip normal review process (with approval)
4. Deploy directly to production
5. Follow up with proper documentation

**Rollback Process:**
1. Identify last known good version
2. Revert deployment to previous tag
3. Create hotfix for any critical issues
4. Plan proper fix for next release

### Getting Help:

1. Check GitHub Actions logs
2. Test locally with provided scripts
3. Review this documentation
4. Contact the release team

---

## 📞 Support

- **Strategy**: [Versioning Strategy](./versioning-strategy.md)
- **Git Conventions**: [Git Conventions](./git-conventions.md)
- **Issues**: Create GitHub issue with `release` label
- **Urgent Issues**: Contact DevOps team directly

---

**Remember**: Always test in staging before production, and monitor deployments closely! 🎯

*Happy releasing with our enhanced beta → RC → production flow! ✨* 
