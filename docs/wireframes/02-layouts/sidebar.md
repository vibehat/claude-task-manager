# Simplified Sidebar Wireframes

## Overview

This document presents clean, minimal sidebar wireframes following the "Simple by Default, Smart by Design" philosophy. The design prioritizes human workflow clarity and Air-like simplicity while keeping AI collaboration features accessible but unobtrusive.

**Success Measure**: Users can focus immediately on their current work with zero cognitive overhead while having AI assistance available when needed.

---

## 1. Desktop Sidebar (>1200px) - Clean Focus

### 1.1 Default State - Air-like Simplicity

```
┌─────────────────────────────────────┐
│ Task Master                    v2.1 │
├─────────────────────────────────────┤
│                                     │
│ 🎯 Right Now                        │
│    Working on User Auth             │
│                                     │
│ 📋 My Work                          │
│    15 tasks ready                   │
│                                     │
│ 📚 Context & Notes                  │
│    28 notes linked                  │
│                                     │
│ 🏗️ Big Picture                     │
│    Project healthy                  │
│                                     │
│ 🤖 AI Helper                       │
│    Claude available                 │
│                                     │
│ ────────────────────────────         │
│ ⚙️ Setup                            │
│ 👤 Profile                          │
│                                     │
└─────────────────────────────────────┘
```

### 1.2 Hover State - Progressive Disclosure

```
┌─────────────────────────────────────┐
│ Task Master                    v2.1 │
├─────────────────────────────────────┤
│                                     │
│ 🎯 Right Now                  ──┐   │
│    Working on User Auth         │   │
│    • JWT token validation       │   │
│    • Session management         │   │
│    Started 2 hours ago          │   │
│                                 │   │
│    [Hand Off to AI]             │   │
│                          ───────┘   │
│ 📋 My Work                          │
│    15 tasks ready                   │
│                                     │
│ 📚 Context & Notes                  │
│    28 notes linked                  │
│                                     │
│ 🏗️ Big Picture                     │
│    Project healthy                  │
│                                     │
│ 🤖 AI Helper                       │
│    Claude available                 │
│                                     │
└─────────────────────────────────────┘
```

### 1.3 AI Helper - Simple When Expanded

```
┌─────────────────────────────────────┐
│ Task Master                    v2.1 │
├─────────────────────────────────────┤
│                                     │
│ 🎯 Right Now                        │
│    Working on User Auth             │
│                                     │
│ 📋 My Work                          │
│    15 tasks ready                   │
│                                     │
│ 📚 Context & Notes                  │
│    28 notes linked                  │
│                                     │
│ 🏗️ Big Picture                     │
│    Project healthy                  │
│                                     │
│ 🤖 AI Helper                 ──┐   │
│    Claude available            │   │
│    Last used: 30 min ago       │   │
│                                │   │
│    [Start Conversation]        │   │
│    [Ask About Current Task]    │   │
│                         ───────┘   │
│ ────────────────────────────         │
│ ⚙️ Setup                            │
│ 👤 Profile                          │
│                                     │
└─────────────────────────────────────┘
```

---

## 2. Tablet Sidebar (768-1200px) - Collapsible

### 2.1 Collapsed State - Icons Only

```
┌───────────────────────────────┐
│ Task Manager             v2.1 │
├───────────────────────────────┤
│                               │
│ 🎯                            │
│                               │
│ 📋                            │
│                               │
│ 📚                            │
│                               │
│ 🏗️                           │
│                               │
│ 🤖                            │
│                               │
│ ──                            │
│ ⚙️                            │
│ 👤                            │
│                               │
└───────────────────────────────┘
```

### 2.2 Tap to Expand - Right Now Section

```
┌───────────────────────────────┐
│ Task Manager             v2.1 │
├───────────────────────────────┤
│                               │
│ 🎯 Right Now            ──┐   │
│    Working on User Auth   │   │
│    15 tasks ready         │   │
│                    ───────┘   │
│ 📋                            │
│                               │
│ 📚                            │
│                               │
│ 🏗️                           │
│                               │
│ 🤖                            │
│                               │
│ ──                            │
│ ⚙️                            │
│ 👤                            │
│                               │
└───────────────────────────────┘
```

---

## 3. Mobile Bottom Navigation (<768px) - Essential Only

### 3.1 Bottom Navigation - Clean and Simple

```
┌─────────────────────────────────────────┐
│                                         │
│                                         │
│           Main Content                  │
│                                         │
│                                         │
│                                         │
│                                         │
│                                         │
│                                         │
│                                         │
│                                         │
│                                         │
├─────────────────────────────────────────┤
│  🎯      📋      📚      🏗️      🤖    │
│ Now     Work   Notes   Picture   AI     │
└─────────────────────────────────────────┘
```

---

## 4. Design Principles Applied

### 4.1 Simple by Default

**Visual Clarity:**

- Clean typography without overwhelming indicators
- Plenty of white space for visual breathing room
- Essential information only, no cognitive overload
- Human-centered language that feels welcoming

**Information Hierarchy:**

- "Right Now" gets primary focus and prominence
- Task counts show simple, relevant numbers (15 tasks ready)
- Health status uses clear, non-technical terms (Project healthy)
- AI status is friendly and approachable (Claude available)

### 4.2 Smart by Design (Progressive Disclosure)

**Level 1 - Default View:**

```
🎯 Right Now
   Working on User Auth
```

**Level 2 - Hover/Tap Expansion:**

```
🎯 Right Now                  ──┐
   Working on User Auth         │
   • JWT token validation       │
   • Session management         │
   Started 2 hours ago          │
   [Hand Off to AI]             │
                         ───────┘
```

**Level 3 - On Demand (Full Context):**
Available when user actively seeks it, not overwhelming the default experience.

### 4.3 Human-AI Collaboration Focus

**Human Orchestration First:**

- "Right Now" shows human work focus, not AI status dashboard
- AI assistance available but not dominating the interface
- Clear handoff points when human is ready for AI help
- Emotional comfort through progress celebration

**Context-First Design:**

- Current work prominently displayed
- Related notes and context linked naturally
- Project health visible at a glance
- AI readiness indicated simply

---

## 5. Responsive Behavior

### 5.1 Breakpoint Strategy

**Desktop (>1200px):** Full sidebar with hover interactions
**Tablet (768-1200px):** Collapsible sidebar with tap interactions  
**Mobile (<768px):** Bottom navigation with essential functions

### 5.2 Progressive Enhancement

- Core functionality works at all screen sizes
- Advanced features enhance experience on larger screens
- Touch-friendly interactions on mobile devices
- Accessibility maintained across all breakpoints

---

## 6. Implementation Notes

### 6.1 Key Components

```
Sidebar/
├── SidebarContainer.tsx       # Main responsive container
├── SidebarSection.tsx         # Individual section wrapper
├── SidebarItem.tsx           # Navigation items
├── ProgressiveDisclosure.tsx  # Hover/tap expansion logic
└── MobileNavigation.tsx      # Bottom navigation bar
```

### 6.2 State Management

```typescript
interface SidebarState {
  currentSection: string;
  expandedSections: string[];
  workingSummary: {
    currentTask: string;
    tasksReady: number;
    notesLinked: number;
    projectHealth: 'healthy' | 'warning' | 'critical';
    aiStatus: 'available' | 'busy' | 'offline';
  };
}
```

---

## 7. Success Metrics

**Simplicity Achieved:**

- Zero cognitive overhead on first glance
- Immediate clarity on current work focus
- No overwhelming technical details by default

**Smart Features Available:**

- Rich context accessible through progressive disclosure
- AI assistance ready when needed, not intrusive
- Project intelligence visible but unobtrusive

**Human-AI Collaboration:**

- Clear human work focus with AI support available
- Natural handoff points without technical complexity
- Emotional comfort through approachable language

---

## Conclusion

This simplified sidebar design achieves Air-like simplicity while maintaining the intelligent features needed for human-AI collaboration. The key insight is that **intelligence should be invisible until useful** - users see a clean, focused interface that reveals its depth only when they need it.

**Success Measure:** Users can focus immediately on their current work with zero cognitive overhead while having AI assistance naturally available when ready.

---

_Updated: January 2025_  
_Version: 2.0 - Simplified for Human Focus_  
_Status: Ready for Clean Implementation_
