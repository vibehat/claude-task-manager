# 🔖 Commit Types & Scopes Reference

This guide defines the **commit types**, **scopes**, and **features** used in this project.
Consistent commit messages help automate release notes and improve team communication.

---

## ✍️ Allowed Commit Types

Each commit should use a predefined type that reflects the nature of the change:

| Type       | Icon | Label        | Included in Release Notes | Visible to Users | Description                                                         |
| ---------- | ---- | ------------ | ------------------------- | ---------------- | ------------------------------------------------------------------- |
| `feat`     | ✨   | Feature      | Yes                       | Yes              | A new feature for the end user.                                     |
| `bug`      | 🐞   | Client Bug   | Yes                       | Yes              | A bug fix reported by clients or users.                             |
| `fix`      | 🛠️  | Internal Fix | Yes                       | Yes              | Internal fix found during development or QA; not user-reported.     |
| `hotfix`   | 🔥   | Hotfix       | Yes                       | Yes              | Critical fix deployed quickly to patch urgent issues.               |
| `enhance`  | 🔧   | Enhancement  | Yes                       | Yes              | Improvements to existing functionality without adding new features. |
| `docs`     | 📝   | Docs         | No                        | No               | Changes or additions to documentation.                              |
| `refactor` | ♻️  | Refactor     | Yes                       | Yes              | Code restructuring without changing its external behavior.          |
| `style`    | 🎨   | Style        | No                        | No               | Code style changes (e.g. formatting, white-space, etc.).            |
| `test`     | 🧪   | Tests        | No                        | No               | Adding or updating tests.                                           |
| `perf`     | ⚡   | Perf         | Yes                       | Yes              | Changes that improve performance.                                   |
| `build`    | 🏗️  | Build        | No                        | No               | Changes that affect the build system or external dependencies.      |
| `chore`    | 🧹   | Chore        | No                        | Yes              | Routine tasks, maintenance or non-functional changes.               |
| `revert`   | ⏪   | Revert       | No                        | No               | Reverts a previous commit.                                          |
| `other`    | 📦   | Other        | Yes                       | Yes              | Changes that don't fall into other predefined types.                |

> ✅ **Release Notes**: Whether this type is included in automated changelogs.
> ✅ **Visible**: Whether this type is visible to end users or stakeholders.

---

## 🧭 Allowed Scopes

Scopes help categorize commits by the technical area of the codebase affected:

| Scope         | Description     |
| ------------- | --------------- |
| `api`         | API             |
| `auth`        | Authentication  |
| `ci`          | CI/CD           |
| `core`        | Core Logic      |
| `database`    | Database        |
| `docs`        | Documentation   |
| `general`     | General         |
| `graphql`     | GraphQL         |
| `integration` | Integration     |
| `maintenance` | Maintenance     |
| `release`     | Release Process |
| `security`    | Security        |
| `styles`      | Styles          |
| `ui`          | UI/UX           |
| `ux`          | User Experience |
| `common-ui`   | Common UI       |

---

## 🎯 Allowed Features

Features help categorize commits by the functional area or business domain affected:

| Feature               | Description         |
| --------------------- | ------------------- |
| `account`             | account             |
| `buy-rates`           | buy-rates           |
| `client-settlements`  | client-settlements  |
| `export-matrix`       | export-matrix       |
| `global-modal`        | global-modal        |
| `integration`         | integration         |
| `maintenance`         | maintenance         |
| `manage-subscription` | manage-subscription |
| `matrix`              | matrix              |
| `sell-rates`          | sell-rates          |
| `subscription`        | subscription        |
