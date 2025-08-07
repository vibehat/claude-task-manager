# Microinteractions & Animation Design

## Overview

Microinteractions provide subtle feedback and delightful moments throughout the Task Management interface, enhancing usability while maintaining professional polish and emotional comfort.

## Task Completion Animations

### Task Checkbox Animation

**Completion Sequence**

```
State 1: ☐ [Empty checkbox]
State 2: ◐ [Filling animation - 200ms ease-out]
State 3: ☑ [Complete with checkmark - 100ms ease-in]
State 4: ✨ [Subtle sparkle effect - 300ms fade-out]
```

**Implementation Details**

- **Duration**: 600ms total animation sequence
- **Easing**: `cubic-bezier(0.4, 0.0, 0.2, 1)` for smooth progression
- **Color Transition**: Gray → Brand Primary → Success Green
- **Scale Effect**: 1.0 → 1.1 → 1.0 for satisfying "pop" feedback

### Task Card Completion

**Card Animation Sequence**

1. **Checkbox fills** with success color (200ms)
2. **Card background** briefly glows green (300ms)
3. **Slide animation** moves card to "Done" section (400ms)
4. **Micro-confetti** celebration at completion point (500ms)

**Visual Effects**

```css
@keyframes task-complete {
  0% {
    background-color: var(--card-background);
    transform: scale(1);
  }
  25% {
    background-color: var(--success-light);
    transform: scale(1.02);
  }
  100% {
    background-color: var(--success-background);
    transform: scale(1);
  }
}
```

## Hover & Focus States

### Button Hover Effects

**Primary Button Hover**

```
Default State: [Submit Task]
Hover State:   [Submit Task] (10% darker, 2px subtle lift)
Active State:  [Submit Task] (pressed appearance, no lift)
```

**Animation Properties**

- **Transition Duration**: 150ms for responsive feel
- **Transform**: `translateY(-2px)` for lift effect
- **Box Shadow**: Increased depth on hover
- **Color Transition**: Smooth brand color darkening

### Card Hover States

**Task Card Hover**

```
Default: ┌─────────────────┐
         │ Task Content    │
         └─────────────────┘

Hover:   ┌─────────────────┐ ← Subtle lift + shadow
         │ Task Content    │ ← Actions reveal
         │ [Edit] [Delete] │
         └─────────────────┘
```

**Progressive Disclosure**

- **Actions appear**: Fade in secondary actions on hover
- **Content preview**: Expand truncated descriptions
- **Metadata reveal**: Show additional task information
- **Connection indicators**: Highlight related items

### Interactive Elements

**Form Input Focus**

```
Unfocused: [_________________]
Focused:   [_________________] ← Brand color border, subtle glow
           ↑ Smooth border color transition (200ms)
```

**Tooltip Animations**

```
Trigger: [?] ← Hover target
Tooltip: ┌─────────────────┐ ← Fade in from bottom (150ms)
         │ Helpful context │   Scale from 0.95 to 1.0
         └─────────────────┘
```

## Loading States & Feedback

### Skeleton Loading Animation

**Content Loading Pattern**

```
┌─────────────────────────────┐
│ ░░░░░░░░░░░░░░░░░░░░░░░░░   │ ← Shimmer animation
│ ░░░░░░░░░░░░░    ░░░░░░░░   │   Moving highlight
│ ░░░░░░░░░░░░░░░░░░░░░░░░░   │   Left to right sweep
└─────────────────────────────┘
```

**Shimmer Animation**

```css
@keyframes shimmer {
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
}

.skeleton {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200px 100%;
  animation: shimmer 1.5s infinite;
}
```

### Progress Indicators

**Linear Progress Bar**

```
Loading: ████████░░░░░░░░ 45%
         ↑ Smooth fill animation, 300ms transitions
```

**Circular Progress**

```
    ╭───╮
   ╱ 45% ╲    ← Animated arc drawing
  │   %   │     Clockwise progression
   ╲     ╱     Smooth easing curve
    ╰───╯
```

**Indeterminate Spinner**

```
⟳ Loading...  ← Continuous 1s rotation
              Pause on completion
              Fade to success checkmark
```

## Navigation Transitions

### Page Transitions

**Slide Navigation**

```
Current Page ←─────── New Page
             ↑ 300ms slide transition
             Easing: ease-out
```

**Fade Transitions**

- **Modal overlays**: 200ms fade-in with backdrop blur
- **Tab switching**: 150ms cross-fade between content
- **Section changes**: 250ms fade with slight vertical offset

### Sidebar Animations

**Sidebar Collapse/Expand**

```
Expanded (240px)    Collapsed (60px)
┌─────────────────┐  ┌───┐
│ 🎯 Right Now    │  │🎯 │
│ ├ Working On    │  │   │
│ └ Up Next       │  │📝 │
│                 │  │   │
│ [« Collapse]    │  │[»]│
└─────────────────┘  └───┘
    ↑ 300ms width transition + content fade
```

**Animation Details**

- **Width transition**: CSS `width` property with `ease-in-out`
- **Content behavior**: Text fades out before width change
- **Icon persistence**: Icons remain visible throughout transition
- **Tooltip reveal**: Icons show tooltips when collapsed

## Status Change Animations

### Task Status Transitions

**Status Pill Animation**

```
Pending → In Progress → Complete
   ○    →     ◐       →    ●
   Gray      Blue         Green

Animation: 200ms color transition + scale pulse (1.0 → 1.1 → 1.0)
```

**Priority Changes**

```
Low Priority:    🔵 (Blue dot)
Medium Priority: 🟡 (Yellow dot)
High Priority:   🔴 (Red dot)

Transition: 150ms color morph with gentle pulsing effect
```

### Real-time Updates

**Activity Feed Updates**

```
New Activity appears:
┌─ Slide in from top ─┐
│ 🗓️ Just now │ Added │  ← 250ms slide down
│              note   │    with fade-in
└─────────────────────┘
```

**Notification Badges**

```
Badge Count Change:
(2) → (3)
 ↑ Scale animation: 1.0 → 1.3 → 1.0 (200ms)
 ↑ Color pulse for attention
```

## Drag & Drop Interactions

### Visual Feedback

**Drag State Indicators**

```
Dragging:
┌─ Ghost Element ──────┐  ← 50% opacity
│ Task being moved     │    Follows cursor
│ [Attachment point]   │
└──────────────────────┘

Drop Zones:
┌═ Valid Drop Zone ════┐  ← Highlighted border
║ Drop task here       ║    Pulsing background
╚══════════════════════╝

┌─ Invalid Drop Zone ──┐  ← Disabled appearance
│ Cannot drop here     │    Red tint overlay
└──────────────────────┘
```

**Drop Animations**

- **Successful drop**: Smooth settle animation to final position
- **Snap back**: Elastic return animation for invalid drops
- **Reordering**: Other items smoothly slide to accommodate new position

### Touch Interactions

**Long Press Recognition**

```
Touch Start → 500ms delay → Drag Mode
             ↑ Subtle vibration feedback
             ↑ Visual lift indicates drag ready
```

**Swipe Gestures**

```
Task Card Swipe:
Right Swipe: ← [Complete] [Task Content]
Left Swipe:  [Task Content] [Archive] →
             ↑ 200ms reveal animation
             ↑ Elastic resistance at limits
```

## Form Interaction Animations

### Input Validation

**Real-time Validation**

```
Valid Input:   [text input]         ← Green border glow
Invalid Input: [text input]         ← Red border + shake animation
               ↓ Error message
               "This field is required"
               ↑ Slide down 150ms
```

**Shake Animation for Errors**

```css
@keyframes shake {
  0%,
  100% {
    transform: translateX(0);
  }
  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translateX(-2px);
  }
  20%,
  40%,
  60%,
  80% {
    transform: translateX(2px);
  }
}
```

### Form Submission

**Submit Button States**

```
Default:    [Save Task]
Loading:    [⟳ Saving...] ← Spinner + disabled state
Success:    [✓ Saved!]    ← Brief success state (2s)
Error:      [⚠ Try Again] ← Error state with retry option
```

## Accessibility Animations

### Reduced Motion Support

**Respect User Preferences**

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

**Alternative Feedback**

- **Color changes** instead of movement animations
- **Opacity transitions** replace complex animations
- **Instant state changes** for critical interactions
- **Focus outline** enhancements for keyboard users

### Screen Reader Announcements

**Live Region Updates**

```html
<div aria-live="polite" aria-atomic="true">Task "JWT Implementation" marked as complete</div>
```

**Status Announcements**

- Task status changes announced immediately
- Progress updates communicated clearly
- Error states described with corrective guidance
- Success confirmations provide closure

## Performance Considerations

### Animation Optimization

**GPU Acceleration**

```css
.animated-element {
  will-change: transform;
  transform: translateZ(0); /* Hardware acceleration */
}
```

**Efficient Properties**

- **Prefer**: `transform`, `opacity`, `filter`
- **Avoid**: `width`, `height`, `top`, `left` (layout thrashing)
- **Use**: `transform: scale()` instead of dimension changes
- **Apply**: `will-change` judiciously for active animations

### Battery Consideration

**Smart Animation Reduction**

- **Disable on low battery**: System battery API integration
- **Reduce on slow devices**: Performance-based adaptation
- **Pause on background tabs**: Page Visibility API usage
- **Throttle refresh rates**: Match display capabilities

---

**Related Documents:**

- [Keyboard Shortcuts](./keyboard-shortcuts.md) - Keyboard interaction patterns
- [Drag Drop Behaviors](./drag-drop-behaviors.md) - Complete drag & drop specifications
- [Design Principles](../01-overview/design-principles.md) - Animation philosophy and guidelines
