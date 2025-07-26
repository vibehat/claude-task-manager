# 🏷️ PR Labels Quick Reference

Below is a **refined and expanded label set proposal** based on your project structure (`apps/`, `packages/`, `infra/`, `scripts/`, etc.) and your goal: **review routing, semantic insight, and deployment risk**.

---

## 🔹 **📍 Scope Labels** – *Where is the change?*

| Label            | Match Glob(s)                              | Description                           |
| ---------------- | ------------------------------------------ | ------------------------------------- |
| `📦 API`         | `apps/api/**`                              | Backend business logic                |
| `🌉 Gateway`     | `apps/gateway/**`                          | Gateway logic or BFF                  |
| `🧩 Packages`    | `packages/**`                              | Internal shared libraries             |
| `⚙️ Infrastructure` | `infra/**`, `.github/**`, `scripts/**`     | Infra, CI/CD, GitHub Actions, tooling |
| `🧪 Tests`       | `**/__tests__/**`, `**/*.spec.ts`          | Unit/integration test updates         |
| `📖 Documentation` | `docs/**`, `README.md`, `*.md`             | Documentation only                    |
| `🧷 Dependencies` | `package.json`, `yarn.lock`                | Dependency changes                    |
| `🔧 Configuration` | `apps/**/config/**`, `.env*`, `*.config.*` | Runtime or service configuration      |

---

## 🔹 **🎯 Change Type Labels** – *What kind of change is it?*

| Label           | Description                                 |
| --------------- | ------------------------------------------- |
| `✨ Feature`     | Adds new functionality                      |
| `🐞 Fix`        | Fixes bugs                                  |
| `🔨 Refactor`   | Internal rework without changing behavior   |
| `🧹 Cleanup`    | Code/style tweaks with no behavior change   |
| `⚡ Performance` | Improves performance                        |
| `🛡️ Security`  | Changes to auth, roles, secrets, encryption |
| `🎨 UI`         | UI or visual presentation changes           |
| `🧪 Test Only`  | Test logic or test infra only               |

---

## 🔹 **🚨 Risk/Deployment Labels** – *What needs attention?*

| Label               | Description                                               |
| ------------------- | --------------------------------------------------------- |
| `⚠️ Breaking`       | Requires coordinated deploy / non-backward compatible     |
| `📦 Migration`      | Alters DB schema or data                                  |
| `📡 Event`          | New/updated emitters or subscribers                       |
| `⏰ Scheduler`      | CRON or background job changes                            |
| `🧷 Config`         | Runtime/config logic change                               |
| `🧵 Threaded Logic` | Messaging, async queues, or third-party async interaction |
| `🔒 Security`       | Permission/role change, secret, or crypto change          |

---

## 🔹 **🧠 Domain Labels** – *Who should review this?*

Auto-labeled by checking `apps/api/src/domains/**`

| Label            | Match Path                            |
| ---------------- | ------------------------------------- |
| `🧠 User`        | `apps/api/src/domains/user/**`        |
| `🧠 Maintenance` | `apps/api/src/domains/maintenance/**` |
| `🧠 Finance`     | `apps/api/src/domains/finance/**`     |
| `🧠 Customer`    | `apps/api/src/domains/customer/**`    |
| `🧠 Alert`       | `apps/api/src/domains/alert/**`       |
| `🧠 QA`          | `apps/api/src/domains/qa-reports/**`  |
| `🧠 DataSync`    | `apps/api/src/domains/data-sync/**`   |
| `🧠 PSP`         | `apps/api/src/domains/psp/**`         |
| *(+ add per domain)* | *One per major domain folder*         |

---

## 🔹 **🔁 Git Flow Labels** – *Meta PR context*

| Label        | Description                           |
| ------------ | ------------------------------------- |
| `🔄 Sync`    | Sync from `master` to `develop` or vice |
| `🏁 Release` | PR made for production release        |
| `🧪 Beta`    | Feature in beta stage or behind flag  |
| `🚧 WIP`     | Work-in-progress, not for review yet  |
