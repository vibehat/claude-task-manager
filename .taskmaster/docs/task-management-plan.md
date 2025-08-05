# Focused Implementation Plan: Individual Mode Layout & Task Management

Based on the existing project structure and focusing only on layout and task management (Issues) for this milestone:

## Phase 1: Individual Mode Layout Foundation (Tasks 1-3)

### Task 1: Create Individual Mode Layout System

**Description**: Implement core layout structure for individual project management mode

- Create `/app/indie/layout.tsx` using existing `MainLayout` pattern
- Implement `IndieLayout` component in `/components/layout/indie-layout.tsx`
- Reuse existing `SidebarProvider` and component patterns
- Set up individual mode project context

### Task 2: Build Individual Mode Sidebar

**Description**: Create simplified sidebar for individual project focus

- Create `IndieSidebar` component in `/components/layout/sidebar/indie-sidebar.tsx`
- Build navigation data in `/mock-data/indie-sidebar-nav.ts` with:
  - Dashboard
  - Tasks (reusing existing issue components)
  - Settings
- Implement mode switcher to toggle between team and individual modes
- Reuse existing sidebar UI components and patterns

### Task 3: Implement Individual Mode Routes

**Description**: Set up route structure for individual task management

- Create `/app/indie/page.tsx` (project dashboard)
- Set up `/app/indie/tasks/page.tsx` (reusing existing AllIssues component)
- Create `/app/indie/tasks/[taskId]/page.tsx` (task detail view)
- Add `/app/indie/settings/page.tsx` (individual settings)

## Phase 2: Hierarchical Task Management (Tasks 4-7)

### Task 4: Create Unified Task/Subtask Component

**Description**: Build a flexible issue UI component that handles both tasks and subtasks with hierarchical structure

- Create `TaskItem` component in `/components/common/tasks/task-item.tsx` that can:
  - Display as a main task or subtask based on hierarchy level
  - Show nested subtasks with proper indentation/visual hierarchy
  - Handle task data with `subtasks: Task[]` array
  - Support expand/collapse for subtask visibility
  - Provide different visual treatments for different nesting levels
- Extend existing Issue interface to include:
  - `parentId?: string` for parent task reference
  - `subtasks: Task[]` for child tasks
  - `depth: number` for nesting level indication
- Implement recursive rendering for unlimited subtask nesting
- Add visual indicators for task hierarchy (indentation, icons, borders)

### Task 5: Adapt Existing Issue System for Hierarchical Tasks

**Description**: Modify existing issue/task components for individual project context with hierarchy support

- Update existing `AllIssues` component to render hierarchical tasks using new `TaskItem`
- Modify issue filtering to work with parent-child relationships
- Adapt existing `GroupIssues` to handle nested task structures
- Ensure existing search functionality works across task hierarchy

### Task 6: Enhanced Task Detail View with Subtask Management

**Description**: Create comprehensive task detail page with subtask creation/management

- Build task detail page using existing issue components
- Add subtask creation interface within task detail view
- Implement subtask reordering and management
- Integrate existing `IssueContextMenu` for both tasks and subtasks
- Add breadcrumb navigation showing task hierarchy path

### Task 7: Individual Mode Dashboard with Hierarchical View

**Description**: Create project-focused dashboard showing task hierarchy

- Build dashboard with collapsible task tree view
- Show task completion progress including subtask completion
- Add quick actions for creating tasks and subtasks
- Display project progress with hierarchy-aware calculations

## Phase 3: Mode Integration (Tasks 8-9)

### Task 8: Update Application Entry Point

**Description**: Modify routing to support individual mode

- Update `app/page.tsx` and `getDefaultRoute()` to detect individual mode
- Add user preference storage for mode selection
- Implement seamless switching between team and individual modes
- Update existing navigation components to support mode context

### Task 9: Individual Mode Data Context with Hierarchy Support

**Description**: Adapt existing data management for individual mode with task hierarchy

- Create individual project context wrapper
- Modify existing Zustand stores for hierarchical task data
- Update task CRUD operations to handle parent-child relationships
- Ensure existing GraphQL integration supports task hierarchy
- Maintain compatibility with existing Task Master CLI integration

## Success Criteria:

- Individual mode accessible via `/indie` routes
- Unified `TaskItem` component handles both tasks and subtasks seamlessly
- Task hierarchy with unlimited nesting levels
- Visual hierarchy representation with proper indentation/styling
- Existing issue management functionality fully available in individual mode
- Task completion progress includes subtask completion
- Seamless mode switching between team and individual modes

This focused approach creates a hierarchical task management system while leveraging existing infrastructure.
