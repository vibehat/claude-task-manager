## Workflows Section

Simple, straightforward workflow guidance that adapts to your current state. When in doubt, click "🧠💡 Start Smart Workflow" - the 💡 icon indicates contextual help is available.

### Universal Workflow Layout

```
┌──────────────────────┐
│ WORKFLOW SECTION     │
│                      │
│ 🧠💡 Start Smart     │
│    Workflow          │
│                      │
│ ☐ Next Task          │
│ ☐ Plan Work          │
│ ☐ Code Feature       │
│ ☐ Fix Issues         │
│ ☐ Review & Test      │
│                      │
│ [🚀 Go] [🔄 Refresh] │
└──────────────────────┘
```

### 5 Core Workflow Types

#### 1. Next Task

```
When: Don't know what to do next
Action: Get the next available task
Command: task-master next
```

#### 2. Plan Work

```
When: Need to organize or break down work
Actions:
• Parse PRD into tasks
• Expand complex tasks
• Review dependencies
Command: task-master analyze-complexity
```

#### 3. Code Feature

```
When: Ready to implement
Actions:
• Start coding
• Update progress
• Add implementation notes
Command: task-master set-status --status=in-progress
```

#### 4. Fix Issues

```
When: Problems need solving
Actions:
• Debug errors
• Fix failing tests
• Resolve blockers
Command: task-master update-subtask --prompt="fix notes"
```

#### 5. Review & Test

```
When: Work is ready for validation
Actions:
• Run tests
• Code review
• Mark complete
Command: task-master set-status --status=done
```

### Smart Workflow Logic

**🧠💡 Start Smart Workflow** analyzes your situation and provides contextual guidance:

- **No active tasks** → Shows "Parse PRD" workflow
- **Tasks ready** → Highlights "Code Feature" option
- **Stuck/blocked** → Emphasizes "Fix Issues" workflow
- **Need planning** → Suggests "Plan Work" breakdown
- **Code complete** → Points to "Review & Test" completion

_The 💡 icon indicates intelligent, context-aware help is integrated._

### Simple State Adaptations

#### Empty State

```
┌──────────────────────┐
│ 🧠💡 Start Smart     │
│    Workflow          │
│                      │
│ ☐ Parse PRD          │
│ ☐ Select Tasks       │
│ ☐ Begin Work         │
│                      │
│ [🚀 Start]           │
└──────────────────────┘
```

#### Working State

```
┌──────────────────────┐
│ 🧠💡 Start Smart     │
│    Workflow          │
│                      │
│ ☐ Continue Task      │
│ ☐ Switch Context     │
│ ☐ Take Break         │
│                      │
│ [🚀 Go] [⏸️ Pause]    │
└──────────────────────┘
```

#### Completed State

```
┌──────────────────────┐
│ 🧠💡 Start Smart     │
│    Workflow          │
│                      │
│ ☐ Mark Done          │
│ ☐ Next Task          │
│ ☐ Plan Ahead         │
│                      │
│ [✅ Finish] [➡️ Next] │
└──────────────────────┘
```

## Workflow States in Action

### State 1: Empty Project (No Tasks)

```
┌──────────────────────┐
│ 🧠💡 Start Smart     │
│    Workflow          │
│                      │
│ ☐ Parse PRD          │
│ ☐ Select Tasks       │
│ ☐ Begin Work         │
│                      │
│ [🚀 Start]           │
└──────────────────────┘

*💡 No active tasks - Start by parsing your PRD*
```

### State 2: Tasks Ready (Current View)

```
┌──────────────────────┐
│ 🧠💡 Start Smart     │
│    Workflow          │
│                      │
│ ☐ Next Task          │
│ ☐ Plan Work          │
│ ☐ Code Feature       │
│ ☐ Fix Issues         │
│ ☐ Review & Test      │
│                      │
│ [🚀 Go] [🔄 Refresh] │
└──────────────────────┘

*💡 Code Feature ready - Implement JWT validation*
```

### State 3: Stuck/Blocked

```
┌──────────────────────┐
│ 🧠💡 Start Smart     │
│    Workflow          │
│                      │
│ ☐ Fix Issues         │
│ ☐ Research Problem   │
│ ☐ Ask for Help       │
│ ☐ Switch Context     │
│                      │
│ [🚀 Go] [🤔 Analyze] │
└──────────────────────┘

*💡 Fix Issues detected - Debug JWT library setup*
```

### State 4: Work Complete

```
┌──────────────────────┐
│ 🧠💡 Start Smart     │
│    Workflow          │
│                      │
│ ☐ Review & Test      │
│ ☐ Mark Done          │
│ ☐ Next Task          │
│ ☐ Plan Ahead         │
│                      │
│ [✅ Finish] [➡️ Next] │
└──────────────────────┘

*💡 Review & Test ready - Run tests and mark complete*
```

### State 5: Need Planning

```
┌──────────────────────┐
│ 🧠💡 Start Smart     │
│    Workflow          │
│                      │
│ ☐ Plan Work          │
│ ☐ Break Down Tasks   │
│ ☐ Research Approach  │
│ ☐ Review Dependencies│
│                      │
│ [📋 Plan] [🔍 Analyze]│
└──────────────────────┘

*💡 Plan Work needed - Expand Task 29.1 into subtasks*
```

## Updated Wireframe with Smart Workflows

### Main Working State - Smart Workflow Active

```
┌─────────────────────────────────────────────────────────────────────────────────────────┐
│ UNIVERSAL SIDEBAR (240px) │  MAIN CONTENT (col-span-9)        │ RIGHT PANEL (col-span-3) │
├──────────────────────────┼───────────────────────────────────┼──────────────────────────┤
│                          │ ┌─────────────────────────────────┐ │ ┌──────────────────────┐ │
│ [Logo/Brand]             │ │ CONTEXT SECTION                 │ │ │ 🧠💡 Start Smart     │ │
│                          │ │ Tag: user-auth • 3 active       │ │ │    Workflow          │ │
│ ─────────────            │ │ Project: Task Master UI         │ │ │                      │ │
│                          │ │ [Command ⌘K] [Settings]         │ │ │ ☐ Next Task          │ │
│ 🎯 RIGHT NOW             │ └─────────────────────────────────┘ │ │ ☐ Plan Work          │ │
│ ├── Working On ●         │                                   │ │ │ ☐ Code Feature       │ │
│ └── Up Next              │ ┌─────────────────────────────────┐ │ │ ☐ Fix Issues         │ │
│                          │ │ MY TASKS SECTION                │ │ │ ☐ Review & Test      │ │
│ 📝 MY WORK               │ │                                 │ │ │                      │ │
│ ├── To Do                │ │ ┌──────┐ ┌──────┐ ┌──────┐ [+] │ │ │ [🚀 Go] [🔄 Refresh] │ │
│ ├── In Progress          │ │ │28.2  │ │28.3  │ │29.1  │ Add │ │ └──────────────────────┘ │
│ └── Done                 │ │ │ JWT  │ │ API  │ │ Rate │Task │ │                        │
│                          │ │ │ ●    │ │ →    │ │ ...  │     │ │ ┌──────────────────────┐ │
│ 📚 NOTES & DOCS          │ │ └──────┘ └──────┘ └──────┘     │ │ │ QUICK ACTIONS        │ │
│ ├── Browse Files         │ │ [Working][Ready] [Queued]       │ │ │                      │ │
│ └── Create New           │ └─────────────────────────────────┘ │ │ ⚡ Start Work        │ │
│                          │                                   │ │ │ 📝 Add Note          │ │
│ 🔍 PROJECT OVERVIEW      │ ┌─────────────────────────────────┐ │ │ 🔄 Sync Tasks        │ │
│ ├── Big Picture          │ │ TASK DETAILS SECTION            │ │ │ 📋 View All Tasks    │ │
│ └── Planning             │ │                                 │ │ │ 🎯 Focus Mode        │ │
│                          │ │ 28.2 — JWT Token Implementation │ │ │ 📊 Progress Report   │ │
│ 🤖 AI HELPER             │ │ 📊 In Progress • ⏱️ 2h left      │ │ │ 🗒️ Open Notes        │ │
│ ├── Chat History         │ │ 🎯 Priority: High • Due: Today   │ │ │ ⚙️ Task Settings     │ │
│ └── Assistant Settings   │ │                                 │ │ │                      │ │
│                          │ │ 📋 Subtasks (2/3 done):        │ │                        │
│ ⚙️ PREFERENCES           │ │ ✅ 28.2.1 Setup JWT library      │ │ ┌──────────────────────┐ │
│ ├── Project Setup        │ │ ✅ 28.2.2 Create token gen      │ │ │ QUICK ACTIONS        │ │
│ └── My Settings          │ │ ☐ 28.2.3 Add validation middleware │ │ │                      │ │
│                          │ │                                 │ │ │ ⚡ Start Work        │ │
│ ─────────────            │ │ 📁 Related Files:               │ │ │ 📝 Add Note          │ │
│                          │ │ • src/auth/jwt.ts (modified)    │ │ │ 🔄 Sync Tasks        │ │
│ USER                     │ │ • src/middleware/auth.ts (new)  │ │ │ 📋 View All Tasks    │ │
│ [Profile] [Logout]       │ │                                 │ │ │ 🎯 Focus Mode        │ │
│                          │ │ 📚 Documentation:               │ │ │ 📊 Progress Report   │ │
│                          │ │ • docs/prd/main.md#auth         │ │ │ 🗒️ Open Notes        │ │
│                          │ │ • docs/api/authentication.md    │ │ │ ⚙️ Task Settings     │ │
│                          │ │                                 │ │ │                      │ │
│                          │ │ 🔗 Dependencies:                │ │ │ [⌘K Command Palette]│ │
│                          │ │ • Blocked by: none              │ │ └──────────────────────┘ │
│                          │ │ • Blocks: 28.3, 29.1           │ │                        │
│                          │ │                                 │ │                        │
│                          │ │ 📝 Notes (2):                   │ │                        │
│                          │ │ • "Use HS256 for development"   │ │                        │
│                          │ │ • "Consider RS256 for production" │                        │
│                          │ │                                 │ │                        │
│                          │ │ [⚡ Start Work] [📝 Add Note]   │ │                        │
│                          │ └─────────────────────────────────┘ │                        │
│                          │                                   │                        │
└──────────────────────────┴───────────────────────────────────┴────────────────────────┘
```
