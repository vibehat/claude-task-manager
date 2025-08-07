# Working Page - Task Overview & Navigation

## Overview

The Working Page provides an overview and navigation interface for active tasks, featuring focus timer integration, progress tracking, and efficient task switching for productive work sessions.

## Layout & Structure

### Full Page Layout

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ 🏠 Dashboard  │  📋 Tasks  │  ⚡ Working  │  👥 Team  │  📊 Analytics       │
├─────────────────────────────────────────────────────────────────────────────┤
│                                Working On                                   │
│                                                                             │
│ ┌─ Active Tasks ─────────────────────┐  ┌─ Focus Timer ─────────────────────┐ │
│ │ 🔥 Currently Working               │  │        ⏱️ 25:00                   │ │
│ │ ⚡ 1.2.1 JWT Token Generation     │  │                                   │ │
│ │   Started 2h ago • 45% complete   │  │     Working on Task 1.2.1        │ │
│ │   [📝 Add Note] [⏸️ Pause]        │  │                                   │ │
│ │                                   │  │ [⏸️ Pause] [✅ Complete Pomodoro] │ │
│ │ 📋 Up Next                        │  └───────────────────────────────────┘ │
│ │ ⭕ 1.2.2 Token Validation         │                                       │ │
│ │ ⭕ 1.2.3 Refresh Logic            │  ┌─ Today's Progress ─────────────────┐ │
│ │ ⭕ 2.1.1 User Registration Form   │  │ 📊 3/7 tasks completed            │ │
│ │                                   │  │ ⏰ 4.5 hours worked               │ │
│ │ [🎯 Start Next Task]              │  │ 🔥 2 focus sessions               │ │
│ └───────────────────────────────────┘  │ 📝 8 notes added                 │ │
│                                       └───────────────────────────────────┘ │
│                                                                             │
│ ┌─ Recent Activity ──────────────────────────────────────────────────────────┐ │
│ │ 🗓️ 2 min ago  │ Added note to Task 1.2.1 about JWT secret handling       │ │
│ │ 🗓️ 15 min ago │ Completed research phase for Task 1.2.1                  │ │
│ │ 🗓️ 1h ago     │ Started working on Task 1.2.1                            │ │
│ │ 🗓️ 2h ago     │ Completed Task 1.1.2 - Database schema design            │ │
│ └───────────────────────────────────────────────────────────────────────────┘ │
│                                                                             │
│ ┌─ Blocked & Waiting ────────────────┐  ┌─ Quick Capture ───────────────────┐ │
│ │ ⛔ 3.1.2 API Integration           │  │ 💡 Idea or Note                   │ │
│ │   Waiting for API documentation    │  │ ┌─────────────────────────────────┐ │ │
│ │                                    │  │ │ Remember to check error         │ │ │
│ │ ⏸️ 2.3.1 Email Templates           │  │ │ handling in auth middleware...  │ │ │
│ │   Paused - waiting for design     │  │ └─────────────────────────────────┘ │ │
│ └────────────────────────────────────┘  │ 📋 [Save to Current Task]        │ │
│                                       │ 📝 [Save as Standalone Note]     │ │
│                                       └───────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────┘
```

## Key Components

### Active Tasks Panel

**Currently Working Section**

```
🔥 Currently Working
⚡ 1.2.1 JWT Token Generation
  Started 2h ago • 45% complete
  [📝 Add Note] [⏸️ Pause]
```

**Features**

- **Active task highlight** with flame icon
- **Progress tracking** with percentage and time started
- **Quick actions** for note-taking and session control
- **Visual progress bar** showing completion status

**Up Next Queue**

```
📋 Up Next
⭕ 1.2.2 Token Validation
⭕ 1.2.3 Refresh Logic
⭕ 2.1.1 User Registration Form

[🎯 Start Next Task]
```

**Features**

- **Prioritized task queue** based on dependencies and priority
- **One-click task switching** via "Start Next Task" button
- **Visual task status** indicators (pending, blocked, ready)
- **Smart ordering** based on context and readiness

### Focus Timer Widget

**Timer Display**

```
⏱️ 25:00
Working on Task 1.2.1
[⏸️ Pause] [✅ Complete Pomodoro]
```

**Timer Features**

- **Pomodoro technique integration** (25min work, 5min break)
- **Visual countdown** with circular progress indicator
- **Audio notifications** for session transitions
- **Break reminders** and session tracking
- **Custom timer durations** for different work styles

**Timer States**

- **Active**: Counting down with pause option
- **Paused**: Stopped with resume option
- **Break**: Break period with return-to-work countdown
- **Complete**: Session finished with next session option

### Today's Progress Dashboard

**Progress Metrics**

```
📊 3/7 tasks completed
⏰ 4.5 hours worked
🔥 2 focus sessions
📝 8 notes added
```

**Visual Progress**

- **Circular progress rings** for task completion
- **Time tracking bars** showing daily work distribution
- **Achievement badges** for focus sessions and productivity milestones
- **Note activity indicator** showing knowledge capture

### Recent Activity Feed

**Activity Timeline**

```
🗓️ 2 min ago  │ Added note to Task 1.2.1 about JWT secret handling
🗓️ 15 min ago │ Completed research phase for Task 1.2.1
🗓️ 1h ago     │ Started working on Task 1.2.1
🗓️ 2h ago     │ Completed Task 1.1.2 - Database schema design
```

**Features**

- **Chronological activity stream** with timestamps
- **Rich activity descriptions** with context
- **Clickable items** linking to relevant tasks/notes
- **Activity filtering** by type (tasks, notes, time)
- **Auto-refresh** for real-time updates

### Blocked & Waiting Tasks

**Blocked Tasks Display**

```
⛔ 3.1.2 API Integration
  Waiting for API documentation

⏸️ 2.3.1 Email Templates
  Paused - waiting for design
```

**Features**

- **Clear blocking reasons** with descriptive text
- **Visual distinction** from active tasks
- **Quick unblock actions** when dependencies resolve
- **Notification system** for status changes

### Quick Capture Widget

**Idea Capture Interface**

```
💡 Idea or Note
┌─────────────────────────────────┐
│ Remember to check error         │
│ handling in auth middleware...  │
└─────────────────────────────────┘
📋 [Save to Current Task]
📝 [Save as Standalone Note]
```

**Features**

- **Instant note capture** without losing focus
- **Smart suggestions** for task association
- **Markdown support** for formatted notes
- **Auto-categorization** based on content and context

## Responsive Design

### Mobile Layout (< 768px)

```
┌─────────────────┐
│ ⚡ Working       │
├─────────────────┤
│ 🔥 Current Task │
│ JWT Generation  │
│ 45% • 2h ago    │
│ [Note] [Pause]  │
├─────────────────┤
│ ⏱️ Timer: 25:00 │
│ [⏸️] [✅ Done]   │
├─────────────────┤
│ 📊 Today        │
│ 3/7 • 4.5h • 2🔥│
├─────────────────┤
│ 📋 Up Next (3)  │
│ [View All]      │
├─────────────────┤
│ 💡 Quick Note   │
│ [Capture Idea]  │
└─────────────────┘
```

**Mobile Optimizations**

- **Stacked widget layout** for vertical scrolling
- **Condensed information display** with essential data only
- **Large touch targets** for timer controls
- **Swipe gestures** for quick task switching
- **Bottom action sheet** for detailed task actions

### Tablet Layout (768px - 1024px)

- **2x2 grid layout** for main widgets
- **Collapsible side panels** for additional information
- **Touch-optimized controls** with adequate spacing
- **Horizontal scrolling** for task queues when needed

## Interaction Patterns

### Focus Mode Integration

**Starting Focus Session**

1. Select task from "Up Next" queue
2. Timer automatically starts (default 25 minutes)
3. Task moves to "Currently Working" section
4. All notifications minimized during session

**Session Transitions**

- **Work → Break**: Automatic 5-minute break timer
- **Break → Work**: Return to task or start new task
- **Session Complete**: Option to continue or switch tasks

### Task Switching Workflow

**Quick Switch Pattern**

1. Click "Start Next Task" from Up Next
2. Current task automatically pauses and saves context
3. New task becomes active with timer reset
4. Previous task moves back to appropriate queue

### Progressive Disclosure

**Collapsed State**: Show essential information only
**Hover State**: Reveal additional context and actions  
**Expanded State**: Full task details and interaction options

## State Management

### Session Persistence

**Auto-Save Features**

- **Timer state** preserved across browser refresh
- **Current task context** maintained during navigation
- **Quick notes** auto-saved to prevent loss
- **Activity history** synchronized across sessions

### Real-Time Updates

**Live Data Sync**

- **Timer synchronization** across multiple browser tabs
- **Task status updates** reflected immediately
- **Activity feed updates** in real-time
- **Progress metrics** calculated automatically

## Accessibility Features

### Screen Reader Support

**Structured Content**

- **Clear headings** for each major section
- **Descriptive labels** for all interactive elements
- **Status announcements** for timer and task changes
- **Activity descriptions** with full context

### Keyboard Navigation

**Focus Management**

- **Logical tab order** through interface sections
- **Skip links** to major content areas
- **Keyboard shortcuts** for common actions:
  - `Space`: Start/pause timer
  - `N`: Quick note capture
  - `T`: Switch to next task
  - `Escape`: Exit focus mode

### Visual Accessibility

- **High contrast** timer and progress indicators
- **Color-independent** status communication
- **Scalable interface** elements up to 200%
- **Reduced motion** options for animations

## Performance Considerations

### Efficient Updates

- **Selective re-rendering** for timer updates only
- **Debounced activity feed** updates
- **Lazy loading** of historical data
- **Optimistic UI updates** for immediate feedback

### Background Processing

- **Service worker** for timer continuity
- **Background sync** for offline capability
- **Intelligent caching** of frequently accessed data
- **Progressive loading** for large activity histories

---

**Related Documents:**

- [Focus Modes](./focus-modes.md) - Detailed focus mode specifications
- [Progress Tracking](./progress-tracking.md) - Complete progress tracking features
- [Task Detail Page](../task-management/task-detail-page.md) - Integration with detailed task view
