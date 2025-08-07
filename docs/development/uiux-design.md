# UI/UX Design Guide - Claude Task Manager

> **Design Phase Instructions**: Design principles, visual system, and user experience patterns for developer-focused AI interfaces.

## Target User Profile

**Primary Users**: Individual developers using AI assistants (Claude Code, Cursor, VS Code extensions)
**Context**: Deep focus coding sessions, 3AM development, AI-powered workflows
**Goals**: Flow state preservation, context retention, minimal cognitive overhead

---

## Core Design Philosophy

### Flow State First

- **No interruptions** - Every interaction should feel seamless
- **Context preservation** - Never force users to re-explain their project
- **Invisible interface** - Best UI is one developers don't notice
- **Terminal-native** - Honor developer keyboard-first workflows

### Human-Centered Navigation

Research-based sidebar structure that reduces decision fatigue:

```
🎯 Right Now        ← Immediate clarity (what to work on)
📝 My Work          ← Personal task management
📚 Notes & Docs     ← Knowledge without complexity
🤖 AI Helper        ← Friendly, not intimidating
⚙️ Preferences      ← Simple configuration
```

---

## Visual Design System

### Color Philosophy

**Dark Mode First** - Optimized for long coding sessions

- Deep blacks for eye comfort
- High contrast for readability
- Calm blues to reduce strain
- Subtle grays for hierarchy

```css
Primary Colors:
--background: 0 0% 3.9%      /* Deep black comfort */
--foreground: 0 0% 98%       /* High contrast text */
--primary: 210 40% 65%       /* Calm blue focus */
--muted: 0 0% 14.9%          /* Subtle backgrounds */
--accent: 210 40% 70%        /* Interactive elements */
--destructive: 0 62.8% 30.6% /* Error states */
--success: 120 60% 40%       /* Success feedback */
```

### Typography System

**Code-friendly fonts** that developers recognize

- Primary: JetBrains Mono, SF Mono, Monaco
- Hierarchy: .text-sm (body) → .text-base (default) → .text-lg (headings)
- Focus on readability over aesthetics

### Spacing Philosophy

**Consistent rhythm** for visual comfort

- `gap-2` (8px) - Related items
- `gap-4` (16px) - Component spacing
- `gap-6` (24px) - Section spacing
- Based on 8px grid system

---

## Component Design Patterns

### TaskCard Design

**Visual Priority**: Status → Title → Description → Actions

```
┌─────────────────────────────────────────┐
│ ● Status              🔥 Priority       │
│                                         │
│ Task Title (Bold, Prominent)            │
│ Description text (Muted, Readable)      │
│                                         │
│ #label #tags           [Actions] [Menu] │
└─────────────────────────────────────────┘
```

**States to Design**:

- Default (calm, readable)
- Hover (subtle elevation)
- Focus (clear ring indicator)
- Loading (invisible skeleton)
- Error (non-intrusive feedback)

### Sidebar Information Architecture

**Cognitive Load Reduction**:

- Maximum 2-3 items per section
- Clear visual hierarchy with emojis
- Real-time counts for context
- Collapsible sections for focus

**Visual Hierarchy**:

1. **🎯 Right Now** - Most prominent (primary color)
2. **📝 My Work** - Core functionality (standard weight)
3. **📚 Notes & Docs** - Supporting features (muted)
4. **🤖 AI Helper** - Advanced features (accent color)

### Command Palette Design

**Terminal-Inspired Interface**:

- Dark overlay with subtle blur
- Monospace font for familiarity
- Instant search results
- Keyboard shortcut hints
- Recent actions prioritized

---

## Interaction Design Patterns

### Keyboard-First Philosophy

**Every action keyboard accessible**:

- `Cmd+K` - Universal command palette
- `Cmd+N` - Quick task creation
- `Cmd+/` - Toggle sidebar
- `Cmd+1-4` - Section navigation
- `Cmd+Enter` - Complete current task

### Loading State Design

**Invisible by Design**:

- Skeleton screens matching content structure
- Optimistic updates for instant feedback
- Subtle opacity changes (50%) for processing
- No spinners or jarring transitions

### Error State Design

**Non-Intrusive Recovery**:

- Gentle error messages with context
- Clear retry mechanisms
- Maintain user's work in progress
- Toast notifications for background errors

---

## AI Integration Design

### Context Sharing Philosophy

**Seamless AI Collaboration**:

- Persistent project context across sessions
- Current task always visible to AI
- Easy access to conversation history
- Smart suggestions based on work patterns

### AI Task Creation Flow

**Natural Language to Action**:

```
1. Simple textarea: "Describe what you want to build..."
2. Context hints: Show current project phase
3. AI generation: Visual feedback during processing
4. Review & edit: Allow refinement before creation
5. Integration: New task appears in workflow
```

---

## Mobile & Responsive Design

### Mobile Strategy

**Developer Tools on Mobile**:

- Bottom sheet navigation (80% height)
- Touch-friendly target sizes (44px minimum)
- Swipe gestures for common actions
- Simplified layouts without losing functionality

### Responsive Breakpoints

```css
Mobile:  < 768px  - Bottom sheet navigation
Tablet:  768-1024px - Condensed sidebar
Desktop: > 1024px - Full sidebar layout
```

---

## Accessibility Design Requirements

### Visual Accessibility

- **4.5:1 contrast ratio** minimum for all text
- **Clear focus indicators** for keyboard navigation
- **No color-only information** - use icons + color
- **Scalable interface** - supports zoom up to 200%

### Cognitive Accessibility

- **Consistent patterns** across all components
- **Clear labeling** with descriptive text
- **Progressive disclosure** - advanced features hidden initially
- **Undo mechanisms** for destructive actions

### Motor Accessibility

- **Large touch targets** (44px minimum)
- **Keyboard alternatives** for all mouse actions
- **Reduced motion** options for animations
- **Voice control** compatibility

---

## Design Component Specifications

### TaskCard Variants

**Compact Mode**: Single line, status + title only
**Default Mode**: Full card with description and metadata
**Expanded Mode**: Include subtasks and full details

### Button Hierarchy

```css
Primary:   Main actions (Create Task, Save)
Secondary: Supporting actions (Cancel, Edit)
Ghost:     Subtle actions (Menu, Options)
Outline:   Alternative actions (Retry, Reset)
```

### Icon Usage

**Consistent Icon Language**:

- Circle variants for task status
- Plus for creation actions
- Gear for settings
- Terminal for developer actions
- Sparkles for AI features

---

## Success Metrics for Design

### User Experience Metrics

- **Decision Time**: < 3 seconds to choose next action
- **Context Retention**: 95% of preferences remembered
- **Error Recovery**: < 2 clicks to fix any mistake
- **Flow Interruption**: Zero forced explanations

### Visual Design Metrics

- **Contrast Compliance**: 100% WCAG AA standards
- **Loading Perception**: No perceived delays under 100ms
- **Visual Hierarchy**: Clear priority ordering in user testing
- **Brand Consistency**: Aligned with developer tool expectations

---

## Design Deliverables Checklist

### Component Designs

- [ ] TaskCard (all states and variants)
- [ ] Sidebar navigation structure
- [ ] Command palette interface
- [ ] AI integration components
- [ ] Loading and error states

### Responsive Designs

- [ ] Mobile bottom sheet navigation
- [ ] Tablet condensed layouts
- [ ] Desktop full interface
- [ ] Touch interaction patterns

### Accessibility Specifications

- [ ] Color contrast documentation
- [ ] Keyboard navigation flows
- [ ] Screen reader annotations
- [ ] Focus management patterns

---

**Design Philosophy Summary**: Create invisible, accessible interfaces that enhance developer productivity without breaking flow state. Every design decision should reduce cognitive load while maintaining full functionality.
