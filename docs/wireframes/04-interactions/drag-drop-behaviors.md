# Drag & Drop Behaviors

## Overview

Comprehensive drag and drop system that provides intuitive task organization, file attachment, and hierarchy management while maintaining accessibility and providing keyboard alternatives for all drag operations.

## Task Drag & Drop Operations

### Task Reordering

**Within Same List**

```
Before Drag:
┌─ Task A ─┐
┌─ Task B ─┐  ← Drag source
┌─ Task C ─┐
┌─ Task D ─┐

During Drag:
┌─ Task A ─┐
┌──────────┐  ← Ghost element (50% opacity)
│ Task B   │    Follows cursor
└──────────┘
┌─ Task C ─┐  ← Drop indicator line
─────────────
┌─ Task D ─┐

After Drop:
┌─ Task A ─┐
┌─ Task C ─┐
┌─ Task B ─┐  ← New position
┌─ Task D ─┐
```

**Visual Indicators**

- **Ghost element**: Semi-transparent copy follows cursor
- **Drop indicator**: Horizontal line shows insertion point
- **Smooth transitions**: Other items slide to accommodate change
- **Elastic resistance**: Visual feedback at list boundaries

### Cross-Section Movement

**Status Column Drag**

```
To Do          In Progress     Done
┌─ Task A ─┐   ┌─ Task X ─┐    ┌─ Task Y ─┐
┌─ Task B ─┐   ┌─ Task Z ─┐    └─────────┘
└─────────┘   └─────────┘

Dragging Task B to In Progress:
┌─ Task B ─┐ ──────────→ ┌═ Drop Zone ═┐
                        ║   Valid      ║ ← Highlighted
                        ╚══════════════╝
```

**Drop Zone States**

- **Valid drop zone**: Green highlight with pulsing border
- **Invalid drop zone**: Red tint with disabled cursor
- **Active drop zone**: Enhanced highlight when hovering
- **Feedback animation**: Zone briefly flashes on successful drop

### Hierarchy Creation

**Parent-Child Relationships**

```
Flat Structure:
┌─ Auth System ─┐
┌─ JWT Tokens ──┐  ← Drag this onto Auth System
┌─ User Login ──┐

During Drag:
┌─ Auth System ─┐  ← Drop target highlighted
│               │    Shows indent preview
┌─ JWT Tokens ──┐  ← Ghost element
└───────────────┘

Result:
┌─ Auth System ─┐
│ └─ JWT Tokens ┐  ← Indented to show hierarchy
┌─ User Login ──┐
```

**Hierarchy Visual Cues**

- **Indent lines**: Show parent-child relationships
- **Expand/collapse**: Toggle visibility of child tasks
- **Depth indicators**: Visual markers for nesting levels
- **Maximum depth**: Prevent excessive nesting (3 levels max)

## File Attachment Drag & Drop

### File Upload Interface

**Drag Files onto Tasks**

```
Task Card (Normal):
┌─────────────────────────┐
│ JWT Implementation      │
│ Status: In Progress     │
│                         │
└─────────────────────────┘

Task Card (Drag Over):
┌═════════════════════════┐
║ 📎 Drop files here      ║  ← Visual feedback
║ JWT Implementation      ║    Dotted border
║ Status: In Progress     ║    Upload icon
║                         ║
╚═════════════════════════╝

Task Card (Processing):
┌─────────────────────────┐
│ ⟳ Uploading files...    │  ← Progress feedback
│ JWT Implementation      │    Spinner animation
│ Status: In Progress     │
│                         │
└─────────────────────────┘
```

**File Type Validation**

```
Valid Files:
📄 documents.pdf    ← Accepted file types
🖼️ screenshot.png     Green highlight
💻 config.json      Success indicators

Invalid Files:
🚫 malware.exe      ← Rejected file types
⚠️ too-large.zip      Red highlight
❌ unsupported.xyz    Warning indicators
```

**Multi-File Handling**

- **Batch upload**: Multiple files processed simultaneously
- **Progress indicators**: Individual and overall progress bars
- **Error handling**: Clear feedback for failed uploads
- **File preview**: Thumbnail generation for supported types

### Attachment Management

**Reorder Attachments**

```
Files Section:
📄 requirements.pdf    ← Drag handle (⋮⋮)
🖼️ mockup.png         ← Can reorder
💻 implementation.js   ← Within same task
📊 analytics.xlsx
```

**Move Between Tasks**

```
Source Task:          Target Task:
┌─ Files ─────────┐   ┌─ Files ─────────┐
│ 📄 spec.pdf     │   │ 📊 data.xlsx    │
│ 🖼️ design.png ──┼──→│ ┌─ Drop Here ─┐ │
└─────────────────┘   │ │  Valid Zone │ │
                      │ └─────────────┘ │
                      └─────────────────┘
```

## Note & Content Drag Operations

### Note Organization

**Note Collection Assignment**

```
Standalone Notes:     Collections:
┌─ JWT Research ──┐   ┌─ Security ─────┐
┌─ API Design ────┐   │ • Auth Methods │
┌─ Testing Guide ─┐   │ • Encryption   │
                      │ └─ Drop Here ──┘
                      └────────────────┘

After Drop:
                      ┌─ Security ─────┐
                      │ • Auth Methods │
                      │ • Encryption   │
                      │ • JWT Research │ ← New addition
                      └────────────────┘
```

### Task-Note Linking

**Link Notes to Tasks**

```
Notes Browser:        Task Detail:
┌─ Research Notes ─┐  ┌─ Linked Notes ────┐
│ 📝 JWT Guide     │  │                   │
│ 📝 Security Tips ┼──→│ ┌─ Drop Notes ─┐ │
│ 📝 Best Practice │  │ │   Here       │ │
└──────────────────┘  │ └──────────────┘ │
                      └───────────────────┘
```

**Bidirectional Linking**

- **Auto-backlinks**: Notes show which tasks reference them
- **Context preservation**: Maintain relationship metadata
- **Unlink capability**: Easy removal of relationships
- **Visual indicators**: Clear representation of linked content

## Mobile & Touch Drag Behaviors

### Touch Gesture Recognition

**Long Press Initiation**

```
Touch Timeline:
0ms     Touch Start
500ms   Long Press Recognition ← Haptic feedback
        Visual lift animation
        Drag mode activated
```

**Touch Drag States**

- **Touch start**: Initial contact recognition
- **Long press**: 500ms threshold for drag activation
- **Haptic feedback**: Vibration confirms drag mode
- **Visual lift**: Element elevates to indicate drag state

### Mobile-Optimized Interactions

**Enlarged Drop Zones**

```
Desktop Drop Zone:    Mobile Drop Zone:
┌─ Small Target ─┐    ┌═ Large Target ═┐
│   (40px min)   │    ║   (60px min)   ║  ← Touch-friendly
└────────────────┘    ╚════════════════╝     sizing
```

**Touch-Specific Features**

- **Larger targets**: Minimum 60px touch targets
- **Extended timeouts**: Longer hover states for touch
- **Gesture alternatives**: Swipe gestures as alternatives
- **Auto-scroll**: Drag near edges triggers scrolling

## Keyboard Alternatives

### Keyboard-Only Task Movement

**Move Task Commands**

```
Select Task → Press 'M' → Move Menu Appears:

┌─ Move Task ─────────────┐
│ Choose destination:     │
│ • ↑ Move Up            │
│ • ↓ Move Down          │
│ • → Move to Progress   │
│ • ← Move to To Do      │
│ • Tab: Move to Done    │
│ • Esc: Cancel          │
└─────────────────────────┘
```

**Hierarchy Management**

```
Selected Task Commands:
→ or Tab      Make Subtask (indent)
← or Shift+Tab Promote to Parent (outdent)
↑ or K        Move Up in List
↓ or J        Move Down in List
```

### Screen Reader Support

**Announcements**

```
Screen Reader Feedback:
"Task 'JWT Implementation' moved to In Progress column"
"File 'requirements.pdf' attached to task"
"Task indented, now subtask of 'Auth System'"
"Invalid drop location, task remains in original position"
```

**ARIA Labels**

```html
<div role="button" aria-label="Drag to reorder task" aria-describedby="drag-instructions">
  <span id="drag-instructions" class="sr-only">
    Use arrow keys to reorder, or use context menu for move options
  </span>
</div>
```

## Error Handling & Recovery

### Invalid Operations

**Circular Dependencies**

```
Attempted:
Task A (contains Task B) → Drop onto Task B

Result:
┌─ Error Message ─────────────┐
│ ⚠️ Cannot create circular    │
│    dependency. Task B is    │
│    already a subtask of     │
│    Task A.                  │
│                             │
│ [OK] [Show Hierarchy]       │
└─────────────────────────────┘
```

**Permission Restrictions**

```
Drag Attempt on Read-Only Task:
┌─ Task Card (Locked) ─┐
│ 🔒 Admin Task        │  ← Visual lock indicator
│ Cannot be modified   │    Drag cursor changes to 'no-drop'
└──────────────────────┘    Tooltip explains restriction
```

### Network Failure Recovery

**Offline Drag Operations**

```
During Network Outage:
┌─ Offline Mode ───────────┐
│ ⚠️ Changes saved locally  │  ← Status indicator
│ Will sync when online    │    Queue operations
│                          │    Show sync status
│ [View Queue] [Try Sync]  │    Manual retry option
└──────────────────────────┘
```

**Conflict Resolution**

```
Conflicting Changes Detected:
┌─ Sync Conflict ──────────────┐
│ Your change: Move to Done    │  ← User's change
│ Server change: Assigned to X │  ← Remote change
│                              │
│ [Keep Mine] [Keep Server]    │  ← Resolution options
│ [Merge Changes] [Review]     │    Advanced options
└──────────────────────────────┘
```

## Performance Optimization

### Efficient Rendering

**Virtual Scrolling**

```javascript
// Only render visible items during drag
const visibleRange = calculateVisibleRange(scrollTop, itemHeight);
const renderedItems = items.slice(visibleRange.start, visibleRange.end);

// Update positions without full re-render
const updateItemPosition = (dragIndex, hoverIndex) => {
  // Swap array positions
  // Update only affected DOM elements
  // Minimize layout thrashing
};
```

**Optimistic Updates**

- **Immediate UI response**: Update interface before server confirmation
- **Rollback capability**: Revert changes if operation fails
- **Progress indicators**: Show operation status during processing
- **Conflict detection**: Handle concurrent modifications gracefully

### Memory Management

**Clean Up Resources**

```javascript
// Remove event listeners after drag completion
const cleanupDragOperation = () => {
  document.removeEventListener('mousemove', handleDragMove);
  document.removeEventListener('mouseup', handleDragEnd);
  // Clear temporary DOM elements
  // Reset drag state
};
```

**Throttle Operations**

- **Drag move events**: Limit to 60fps for smooth performance
- **Auto-save**: Debounce save operations during drag
- **Network requests**: Queue and batch API calls
- **DOM updates**: Use RequestAnimationFrame for smooth animations

---

**Related Documents:**

- [Keyboard Shortcuts](./keyboard-shortcuts.md) - Keyboard alternatives to drag operations
- [Microinteractions](./microinteractions.md) - Drag & drop animation details
- [Accessibility](../06-implementation/accessibility.md) - Accessible drag & drop implementation
