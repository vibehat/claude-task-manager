# Agents Feature - Execution Plan

## Overview

Agents are managed as human-readable Markdown files under `.claude/agents`. This feature delivers a first-class UI for browsing, editing, creating, and organizing agents, aligning with the PRD’s context-aware collaboration, living documentation, and multi-agent orchestration principles.

## Goals

- Agents-as-Markdown: Readable, diffable, version-controlled `.md` files
- Seamless UI under AI Helper: Browse and edit agents quickly
- Safe, robust APIs: List, read, write, create, delete, search
- Reuse existing Markdown editor flows for consistency
- Keep privacy and local-first principles (no cloud dependency)

## High-Level Architecture

- Data: `.claude/agents/**/*.md`
- APIs (App Router): `src/app/api/claude/agents/{list,content,create,search}`
- Client services: `src/features/agents/services/agentClient.ts`
- UI: `src/features/agents/components/AgentBrowser/*`, `AgentSidePanel`
- Page: `src/app/workspace/agents/page.tsx`
- Sidebar nav: update `src/mock-data/workspaceSidebarNav.ts` under AI Helper

## Agent File Schema

- Format: YAML frontmatter + Markdown body
- Required fields:
  - `name: string`
  - `description: string`
  - `model: string` (e.g., `claude-3-7-sonnet`)
  - `role: string` (e.g., `system`)
- Optional fields:
  - `temperature: number`
  - `tools: string[]`
  - `memory: { scope: 'project' | 'team' | 'personal'; paths?: string[] }`
  - `tags: string[]`
  - `visibility: 'team' | 'project' | 'personal'`
  - `version: number`
- Body: operating guidelines, prompts, examples

Example frontmatter:

```md
---
name: Implementation Buddy
description: Helps implement features based on PRD and tasks.
model: claude-3-7-sonnet
role: system
temperature: 0.3
tools: [repo_reader, test_runner, planner]
memory:
  scope: project
  paths: [docs/prd/main.md, docs/mvp/features.md]
tags: [implementation, tasks]
visibility: team
version: 1
---

# Guidelines

- Read PRD context before coding
- Propose tests before changes
- Update related docs if behavior changes
```

## Directory Structure & Path Rules

- Root: `.claude/agents/`
- Support nested subfolders:
  - `.claude/agents/personal/…`
  - `.claude/agents/project/…`
  - `.claude/agents/team/…`
- Validate paths to prevent traversal: enforce that resolved path is under base dir
- Ensure directories exist on write; create if missing

## API Design (Next.js App Router)

Base: `/api/claude/agents`

- `GET /list`

  - Response: `{ items: Array<{ path: string; name?: string; description?: string; tags?: string[]; lastModified: string }> }`
  - Implementation: recursive scan for `*.md`; parse frontmatter (best-effort); sort by modified time

- `GET /content?path=REL_PATH`

  - Response: `{ path: string; content: string }`
  - Implementation: resolve path under `.claude/agents`; read file

- `PUT /content`

  - Body: `{ path: string; content: string }`
  - Response: `{ success: boolean; path: string }`
  - Implementation: validate path; ensure parent dir; write file

- `POST /create`

  - Body: `{ path: string; content?: string }`
  - Behavior: if `content` missing, write a default template with minimal frontmatter
  - Response: `{ success: boolean; path: string }`

- `DELETE /content?path=REL_PATH`

  - Response: `{ success: boolean }`
  - Implementation: unlink; ignore if not exists with `{ success: true }`

- `GET /search?q=QUERY` (optional)
  - Response: `{ query: string; results: Array<{ path: string; title?: string; match?: string }> }`
  - Implementation: simple substring search in frontmatter fields and body (limit results)

### API Implementation Notes

- Node runtime (not edge) to access `fs/promises` and `path`
- Base dir: `const agentsDir = path.join(process.cwd(), '.claude', 'agents')`
- Path safety:
  - `const safePath = path.normalize(path.join(agentsDir, relPath))`
  - Verify `safePath.startsWith(agentsDir)`
- Ensure `await fs.mkdir(path.dirname(safePath), { recursive: true })` before writes
- Caching: `cache: 'no-store'` on client calls; set `revalidate = 0` in route handlers if needed
- Error handling: return `{ error: string }` with appropriate HTTP codes

## Client Services

`src/features/agents/services/agentClient.ts`

- `fetchAgentsList()` → GET `/api/claude/agents/list`
- `fetchAgentContent(path)` → GET `/api/claude/agents/content?path=...`
- `saveAgentContent(path, content)` → PUT `/api/claude/agents/content`
- `createAgent(path, content?)` → POST `/api/claude/agents/create`
- `deleteAgent(path)` → DELETE `/api/claude/agents/content?path=...`
- `searchAgents(q)` → GET `/api/claude/agents/search?q=...` (optional)

Follow the patterns from Notes services for consistency:

```startLine:1:endLine:71:src/features/notes/services/docsClient.ts
import type {
  NoteContentResponse,
  NotesCategoriesConfig,
  NotesListResponse,
} from '../types/note.types';

export async function fetchNoteContent(
  pathParam: string,
  signal?: AbortSignal
): Promise<NoteContentResponse> {
  const url = new URL('/api/docs/content', window.location.origin);
  url.searchParams.set('path', pathParam);
  const res = await fetch(url.toString(), { signal, cache: 'no-store' });
  if (!res.ok) throw new Error(`Failed to read doc: ${res.status}`);
  return res.json();
}
```

## UI Implementation

Create a new feature area mirroring Notes:

- `src/features/agents/components/AgentBrowser/AgentBrowser.tsx` (list + actions)
- `src/features/agents/components/AgentBrowser/AgentSidePanel.tsx` (preview/edit)
- `src/features/agents/stores/agentsSidePanelStore.ts` (open/close, width, fullscreen)
- `src/app/workspace/agents/page.tsx` (page shell + provider wiring)

Side panel editor reuses logic from Notes:

```startLine:13:endLine:20:src/features/notes/components/NoteBrowser/NoteSidePanel.tsx
const MDEditor = dynamic(() => import('@uiw/react-md-editor').then((m) => m.default), {
  ssr: false,
});
```

```startLine:55:endLine:93:src/features/notes/components/NoteBrowser/NoteSidePanel.tsx
const loadNoteContent = async () => {
  if (!notePath) return;
  setLoading(true);
  setError(null);
  try {
    const result = await fetchNoteContent(notePath);
    setNoteContent(result.content);
  } catch (err) {
    setError('Failed to load note content');
  } finally {
    setLoading(false);
  }
};

const handleSave = async () => {
  if (!notePath) return;
  setLoading(true);
  setError(null);
  try {
    await saveNoteContent(notePath, editContent);
    setNoteContent(editContent);
    setIsEditing(false);
  } catch (err) {
    setError('Failed to save note');
  } finally {
    setLoading(false);
  }
};
```

### UX Details

- List columns: Name, Description, Tags, Path, Last Modified
- Bulk actions: Delete, Move (repath), Duplicate
- Create flow: pick folder and filename; pre-fill default template
- Editing: Markdown preview by default; toggle edit; fullscreen; `Cmd+S` to save
- Optimistic update on save with rollback if failed
- Empty states: clear guidance; CTA to create first agent
- Errors: toast + inline message

## Sidebar Integration

Add Agents item under AI Helper in `src/mock-data/workspaceSidebarNav.ts`:

```startLine:101:endLine:115:src/mock-data/workspaceSidebarNav.ts
// 🤖 AI Helper
export const aiHelperItems: WorkspaceNavItem[] = [
   {
      name: 'Chat History',
      url: '/workspace/chat-history',
      icon: MessageSquare,
      description: 'Access to your previous conversations and context',
   },
   {
      name: 'Assistant Settings',
      url: '/workspace/assistant-settings',
      icon: SettingsIcon,
      description: 'Simple configuration for how AI helps you',
   },
];
```

- Add a new entry `{ name: 'Agents', url: '/workspace/agents', icon: Robot }`.

## Types & Validation

- Minimal types in `src/features/agents/types/agent.types.ts` (frontmatter shape)
- Validation on save: warn (non-blocking) if required keys missing
- Optional schema using `zod` if we want strict validation in API

## Telemetry & Analytics

- Track: list viewed, agent opened, saves, creates, deletes
- Measure: time-to-first-edit, save success rates, error rates
- Respect local-first: keep analytics local or behind an opt-in flag

## Testing Plan

- Unit tests (Node): path normalization, frontmatter parsing, list scanning
- API tests: happy paths, traversal attempts, missing files, large files
- Component tests (React): list rendering, open/edit/save flows
- Visual review via Storybook (optional) for AgentBrowser and AgentSidePanel

## Performance

- Avoid reading entire trees repeatedly; cache directory listing in-memory (optional)
- Cap search results; debounce search queries
- Keep `cache: 'no-store'` for correctness in local dev

## Security

- Path traversal protection mandatory
- Only operate within repo (no external network needed)
- Avoid executing any agent-defined code in the UI; treat as text only

## Accessibility

- Keyboard navigable list and editor
- ARIA labels on actions; focus management on open/close panel
- High-contrast friendly

## Feature Flag (optional)

- Gate `/workspace/agents` behind a simple config flag to enable gradual rollout

## Rollout Steps

1. Create API routes: `list`, `content`, `create`, `search` (optional), `DELETE content`
2. Implement `agentClient.ts` mirroring notes `docsClient`
3. Build UI: `AgentBrowser`, `AgentSidePanel`, Zustand store
4. Add page at `/workspace/agents`
5. Update sidebar nav under AI Helper
6. Seed `.claude/agents/` with a couple example agents
7. Add tests for API + core UI flows
8. Add basic analytics (optional)

## Acceptance Criteria

- Browse shows all `.md` agents under `.claude/agents`
- Open agent displays Markdown preview within side panel
- Edit/save updates file and UI without reload
- Create new agent using default template
- Delete agent removes file and updates list
- Sidebar includes Agents under AI Helper
- Path traversal attempts are rejected safely

## Risks & Mitigations

- Path traversal → strict normalization and base-dir checks
- Large workspaces → lazy loading, caching, and debounced search
- Schema drift → non-blocking validation with clear warnings; optional strict mode
- Editor complexity → reuse existing Notes editor pattern to minimize new surface

## Timeline (estimate)

- Day 1: APIs + client services + types
- Day 2: UI list + side panel read/preview
- Day 3: Editing + save + create + delete
- Day 4: Sidebar integration + tests + seed examples
- Day 5: Polish (errors, accessibility, analytics), review
