# AI Agent Manager (Agents-as-Markdown)

## Key takeaways

- **Agents are Markdown files**: Store each agent as a readable/editable `.md` file under `.claude/agents`
- **UI placement**: Add an `Agents` entry under **🤖 AI Helper** in the workspace sidebar
- **Browse agents**: Provide a list/browse view with search and filters
- **Edit agents**: Side panel editor with Markdown preview and fullscreen editing
- **APIs**: Implement under `src/app/api/claude/agents/*`
- **Reuse Markdown functions**: Copy the fetch/save flow from `src/features/notes/components/NoteBrowser/NoteSidePanel.tsx` and `docsClient`

## File system structure

- Base directory: `.claude/agents/`
- Support nested folders: `.claude/agents/{team|project|personal}/AgentName.md`
- Git-native: Agents are diffable, reviewable, and versioned with the repo

## UI placement and navigation

- Sidebar (`src/mock-data/workspaceSidebarNav.ts`): under **AI Helper** add
  - `Agents` → URL: `/workspace/agents`
- Page: `src/app/workspace/agents/page.tsx`
  - List view with name, description, tags, last modified, path
  - Click to open a side panel editor (Markdown preview/edit), fullscreen mode
  - Actions: Create, Rename, Delete, Duplicate

## APIs (Next.js App Router)

Implement under `src/app/api/claude/agents`:

- `GET /api/claude/agents/list` → `{ items: Array<{ path, name, description, tags, lastModified }> }`
- `GET /api/claude/agents/content?path=...` → `{ path, content }`
- `PUT /api/claude/agents/content` → body `{ path, content }` → writes `.md`
- `POST /api/claude/agents/create` → body `{ path, content? }` → creates with template if missing
- `DELETE /api/claude/agents/content?path=...`
- Optional: `GET /api/claude/agents/search?q=...`

Implementation notes:

- Base dir: `process.cwd() + '/.claude/agents'`
- Normalize/verify paths to prevent traversal
- Ensure directories exist on write; no-store caching

## Client services (mirror Notes `docsClient`)

Create `src/features/agents/services/agentClient.ts`:

- `fetchAgentsList()` → `/api/claude/agents/list`
- `fetchAgentContent(path)` → `/api/claude/agents/content?path=...`
- `saveAgentContent(path, content)` → `PUT /api/claude/agents/content`
- `createAgent(path, content?)` → `POST /api/claude/agents/create`
- `deleteAgent(path)` → `DELETE /api/claude/agents/content?path=...`
- `searchAgents(q)` → `/api/claude/agents/search?q=...` (optional)

## Reuse of Markdown editor behavior

- Copy the load/edit/save pattern from `NoteSidePanel`:
  - `src/features/notes/components/NoteBrowser/NoteSidePanel.tsx`
  - `src/features/notes/services/docsClient.ts`
- Use `@uiw/react-md-editor` with SSR disabled, same keyboard shortcuts and fullscreen support

## Components

- `src/features/agents/components/AgentBrowser/AgentBrowser.tsx` (list + actions)
- `src/features/agents/components/AgentBrowser/AgentSidePanel.tsx` (editor)
- `src/features/agents/stores/agentsSidePanelStore.ts` (open/close, state)
- `src/app/workspace/agents/page.tsx` (page shell)

## Agent markdown format example

```md
---
name: Code Architect
description: Designs architecture, enforces patterns, and reviews PRs.
model: claude-3-7-sonnet
temperature: 0.2
tools:
  - repo_reader
  - test_runner
memory:
  scope: project
  paths:
    - docs/prd/main.md
    - docs/architecture/*
tags: [architecture, review, governance]
visibility: team
role: system
version: 1
---

# Operating Guidelines

- Always begin with a system-level plan…
- Require acceptance criteria…
- Provide diffs where possible…
```

## Rollout

1. Add APIs under `src/app/api/claude/agents/*`
2. Add client `src/features/agents/services/agentClient.ts`
3. Create `/workspace/agents` with browser + side panel
4. Add sidebar link under AI Helper (`workspaceSidebarNav.ts`)
5. Seed example agents in `.claude/agents/`
6. Add analytics around edits/saves for adoption insights
