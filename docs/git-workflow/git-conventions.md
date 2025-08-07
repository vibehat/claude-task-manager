# 🤝 Git Conventions Guide

Welcome! Thanks for your interest in contributing to **PayDirection API Services**.

This guide explains how to contribute effectively, including how to commit, branch, and create pull requests in a way that aligns with our automated workflows and release process.

---

## 📁 Table of Contents

- [Development Workflow](#-development-workflow)
- [Commit Message Format](#-commit-message-format)
- [Branch Naming Convention](#-branch-naming-convention)
- [Pull Request Guidelines](#-pull-request-guidelines)
- [Pull Request Title Format](#-pull-request-title-format)
- [Release Process Overview](#-release-process-overview)
- [Domain Sync System](#-domain-sync-system)
- [Before You Submit](#-before-you-submit)

---

## 🧰 Development Workflow

1. Fork or clone the repository
2. Create a new branch from `master`
3. Make your changes
4. Commit using the proper format
5. Open a Pull Request (PR) against `master`

> ℹ️ Do not commit directly to `master`.

---

## 📝 Commit Message Format

We follow the [Conventional Commits](https://www.conventionalcommits.org/) standard.

### Format

```

<type>(<scope>): <short description> \[JIRA-1234]

<body> (optional)
```

### Example

```bash
feat(auth): support biometric login [PD-7890]
bug(api): fix response error on /users endpoint
enhance(ui): smooth transition on modal
```

📎 **See the full [Commit Types & Scopes Reference](./commit-reference.md)** for all valid values.

---

## 🌱 Branch Naming Convention

Branch from `master`. Use one of:

```bash
feature-<short-description>
fix-<short-description>
hotfix-<short-description>
```

**Examples:**

```bash
git checkout -b feature-payment-otp
git checkout -b fix-invalid-token-bug
```

---

## 🔀 Pull Request Guidelines

1. Keep PRs focused — one feature/fix per PR.
2. Use the **same format as commits** in the PR title.
3. Describe what you're solving and why.
4. Link to relevant issues or JIRA tickets.
5. Assign a reviewer and apply labels (`bug`, `feature`, etc.).

---

## 📋 Pull Request Title Format

**PR titles must follow the exact same format as commit messages:**

### Format

```
<type>(<scope>): <short description> [JIRA-1234]
```

### Examples:

```
feat(auth): support OTP login [PD-1234]
fix(api): resolve null pointer exception in user service [PD-5678]
enhance(ui): improve loading states for better UX [PD-9012]
```

> ℹ️ This ensures consistency between commits and PRs, and helps with automated release note generation.

---

## 🚀 Release Process Overview

Our release process is **automated via GitHub Actions**:

1. **Draft a Release**
   Triggered manually via Actions → `Draft A Release`

2. **Release Notes Generation**
   Automatically runs when a `release-*` branch is pushed.

3. **Publish a Release**
   Triggered manually via Actions → `Publish A Release`

Ensure commits follow the **correct format** or they may be skipped from release notes.

---

## 🔄 Domain Sync System

We use a **single source of truth** approach for managing domain configurations:

- **Source of Truth**: `apps/api/src/domains/` directory structure
- **Auto-synced**: PR labeler and release notes configurations
- **Zero dependencies**: Runs instantly without installation

📎 **See the full [Domain Sync Guide](./domain-sync.md)** for details on how this works.

---

## ✅ Before You Submit

- [ ] Code builds without errors
- [ ] Tests added or updated
- [ ] Lint passes (`npm run lint`)
- [ ] Commit messages follow [Conventional Commits](#-commit-message-format)
- [ ] PR title follows [same format as commits](#-pull-request-title-format)
- [ ] You rebased from `master`

---

Thank you for helping us build a better platform! 💙
