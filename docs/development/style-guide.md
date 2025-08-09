# Claude Task Manager Design Style Guide

**Version**: 1.0  
**Last Updated**: 2025-08-08  
**Philosophy**: "Simple by Default, Smart by Design"

---

## Table of Contents

1. [Design Philosophy & Principles](#design-philosophy--principles)
2. [Visual Language](#visual-language)
3. [Component Patterns](#component-patterns)
4. [Interaction Design](#interaction-design)
5. [Content Guidelines](#content-guidelines)
6. [Responsive Design](#responsive-design)
7. [Accessibility](#accessibility)
8. [Dark Mode Considerations](#dark-mode-considerations)
9. [AI-Specific UI Patterns](#ai-specific-ui-patterns)
10. [Implementation with Tailwind CSS](#implementation-with-tailwind-css)

---

## Design Philosophy & Principles

### Core Philosophy: Context-Aware Human-AI Collaboration

Claude Task Manager transforms development from context-poor human-AI handoffs to seamless collaboration where humans provide strategic direction and AI handles execution with complete project understanding.

**Success Measure**: _"AI agents understand my project vision better than I can explain it"_

### Design Principles

#### 1. Context-First Design

Every interface element serves rich context flow between human strategy and AI execution.

**✅ Do:**

- Surface relevant context automatically
- Package rich context for AI handoffs
- Show context quality indicators
- Enable one-click context transfer

**❌ Don't:**

- Hide critical project context
- Force manual context re-explanation
- Create context silos between features
- Ignore context continuity across sessions

#### 2. Simple by Default

Start with essential human needs. Progressive disclosure reveals complexity only when needed.

**✅ Do:**

- Show immediate next actions clearly
- Use familiar, human-centered language ("Working On" vs "Current Tasks")
- Limit choices to 2-3 options per section
- Default to the most common user path

**❌ Don't:**

- Overwhelm with options upfront
- Use technical jargon in primary interfaces
- Show all possible actions simultaneously
- Force users to learn new paradigms unnecessarily

#### 3. Smart by Design

AI intelligence anticipates needs, suggests next steps, and learns from patterns.

**✅ Do:**

- Suggest likely next actions based on context
- Learn from user patterns and preferences
- Provide intelligent defaults from project history
- Anticipate context needs for AI handoffs

**❌ Don't:**

- Require manual setup for obvious patterns
- Ignore user behavior history
- Make users explain the same context repeatedly
- Present uninformed suggestions

#### 4. Emotional Comfort

Create warmth, clear progress indicators, and psychological safety in human-AI collaboration.

**✅ Do:**

- Use warm, approachable color palettes
- Celebrate progress and completed collaborations
- Show clear progress indicators
- Use encouraging, supportive language

**❌ Don't:**

- Create cold, technical-feeling interfaces
- Hide progress or leave users wondering about status
- Use intimidating or clinical language
- Make AI feel threatening or impersonal

---

## Visual Language

### Color System

Our color system supports the warm, human-centered approach while maintaining excellent readability and accessibility.

#### Primary Palette

```css
/* Strategic Human Focus - Warm Blues/Teals */
--color-primary: oklch(0.21 0.006 285.885); /* Deep blue-gray */
--color-primary-foreground: oklch(0.985 0 0); /* White */

/* AI Execution - Cool Grays */
--color-secondary: oklch(0.967 0.001 286.375); /* Light gray */
--color-secondary-foreground: oklch(0.21 0.006 285.885); /* Deep blue-gray */

/* Success/Collaboration - Satisfying Greens */
--color-chart-2: oklch(0.6 0.118 184.704); /* Success teal */
--color-chart-4: oklch(0.828 0.189 84.429); /* Bright green */
```

#### Semantic Colors

```css
/* Background & Surface */
--color-background: oklch(1 0 0); /* Pure white (light) */
--color-card: oklch(1 0 0); /* Card backgrounds */
--color-muted: oklch(0.967 0.001 286.375); /* Subtle backgrounds */

/* Text Hierarchy */
--color-foreground: oklch(0.141 0.005 285.823); /* Primary text */
--color-muted-foreground: oklch(0.552 0.016 285.938); /* Secondary text */

/* Interactive Elements */
--color-accent: oklch(0.967 0.001 286.375); /* Hover states */
--color-border: oklch(0.92 0.004 286.32); /* Subtle borders */
--color-ring: oklch(0.871 0.006 286.286); /* Focus rings */
```

#### Context-Aware Color Usage

**Human Strategic Elements**: Use warm blues and teals

```tailwind
bg-primary text-primary-foreground
bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300
```

**AI Execution Status**: Use cool grays

```tailwind
bg-muted text-muted-foreground
bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-300
```

**Successful Collaboration**: Use satisfying greens

```tailwind
bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300
```

### Typography

Our typography system creates clear hierarchy while maintaining warmth and readability.

#### Font Stack

```css
--font-sans: var(--font-geist-sans); /* Primary UI font */
--font-mono: var(--font-geist-mono); /* Code and technical content */
```

#### Hierarchy

```tailwind
/* Strategic Headlines - Bold and Human */
text-xl font-bold tracking-tight         /* Section headers */
text-lg font-semibold                    /* Card titles */
text-base font-medium                    /* Important labels */

/* Contextual Information - Balanced */
text-sm font-medium                      /* Navigation items */
text-sm                                  /* Body text */
text-xs font-medium                      /* Badges, small labels */

/* Technical Details - Subtle */
text-xs text-muted-foreground           /* Timestamps, metadata */
text-xs font-mono                        /* IDs, technical refs */
```

#### Typography Guidelines

**✅ Do:**

- Use font-bold for strategic decisions and human actions
- Use font-medium for important labels and navigation
- Use font-normal for general content
- Use font-mono sparingly for technical references

**❌ Don't:**

- Mix more than 3 font weights per screen
- Use font-light or font-thin (poor accessibility)
- Apply font-mono to conversational text
- Create excessive hierarchy (max 4 levels per view)

### Iconography

Icons should feel warm, approachable, and clearly communicative.

#### Icon Style Guidelines

**✅ Do:**

- Use rounded corners (prefer Lucide React or Heroicons)
- Maintain 1.5px stroke width for consistency
- Size icons appropriately (16px-24px for UI, 12px for inline)
- Prefer outlined style for most uses, filled for active states

**❌ Don't:**

- Mix icon styles (outlined + filled randomly)
- Use overly complex or detailed icons
- Rely solely on icons without text labels
- Use angular or harsh geometric styles

#### Common Icon Patterns

```tsx
import { Play, Pause, CheckCircle, Clock, Bot, User } from 'lucide-react';

// Status Icons
<Play className="w-4 h-4 text-green-600" />          // Active AI work
<Pause className="w-4 h-4 text-yellow-600" />        // Paused/waiting
<CheckCircle className="w-4 h-4 text-green-600" />   // Completed
<Clock className="w-4 h-4 text-gray-500" />          // Pending

// Agent Indicators
<Bot className="w-4 h-4 text-blue-600" />            // AI agent
<User className="w-4 h-4 text-purple-600" />         // Human input needed
```

### Spacing & Layout

We use a consistent 4px base grid for all spacing, with semantic spacing scales.

#### Spacing Scale

```tailwind
gap-1     /* 4px  - Tight groupings */
gap-2     /* 8px  - Related elements */
gap-3     /* 12px - Loose groupings */
gap-4     /* 16px - Section spacing */
gap-6     /* 24px - Component spacing */
gap-8     /* 32px - Major section breaks */

p-2       /* 8px  - Tight padding */
p-3       /* 12px - Comfortable padding */
p-4       /* 16px - Card content padding */
p-6       /* 24px - Major container padding */
```

#### Layout Patterns

**Card Layouts**:

```tailwind
<Card className="p-4 space-y-3">      <!-- Main content card -->
<Card className="p-3 space-y-2">      <!-- Compact info card -->
<Card className="p-6 space-y-4">      <!-- Detailed view card -->
```

**Grid Systems**:

```tailwind
grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4    <!-- Responsive task grid -->
flex flex-col lg:flex-row gap-6                         <!-- Main layout -->
```

---

## Component Patterns

### Task Cards

Task cards are the primary building blocks for displaying work items with context and AI status.

#### Base Task Card Structure

```tsx
interface TaskCardProps {
  task: Task;
  variant: 'active' | 'idle' | 'blocked' | 'completed';
  onAction: (action: string, taskId: string) => void;
  contextQuality?: number; // 1-5 stars
}
```

#### Visual States

**Active Task** (AI currently working):

```tailwind
className="ring-2 ring-blue-200 dark:ring-blue-800 bg-blue-50/50 dark:bg-blue-900/10"
```

**Idle Task** (Ready for AI):

```tailwind
className="hover:shadow-md transition-all duration-200 bg-card"
```

**Blocked Task** (Waiting on dependencies):

```tailwind
className="ring-2 ring-red-200 dark:ring-red-800 opacity-75 bg-red-50/30 dark:bg-red-900/10"
```

**Completed Task**:

```tailwind
className="bg-green-50 dark:bg-green-900/10 border-green-200 dark:border-green-800"
```

#### Context Quality Indicators

Always show context quality to help users understand AI readiness:

```tsx
const renderContextStars = (quality: number) => (
  <div className="flex items-center gap-1">
    <span className="text-xs text-muted-foreground">Context:</span>
    {Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < quality ? 'text-yellow-400' : 'text-gray-300'}>
        ★
      </span>
    ))}
    <span className="text-xs text-muted-foreground">({quality}/5)</span>
  </div>
);
```

### Navigation Components

Navigation should feel warm and clearly communicate current context.

#### Sidebar Navigation Pattern

```tsx
<nav className="space-y-1">
  <SidebarItem
    icon={<Circle className="w-4 h-4" />}
    label="Right Now"
    badge={activeCount}
    isActive={currentPath === '/workspace/working-on'}
    warmth="high" // Uses warm blue colors
  />
  <SidebarItem
    icon={<List className="w-4 h-4" />}
    label="My Work"
    description="To Do, In Progress, Done"
    warmth="medium"
  />
</nav>
```

#### Header Navigation

```tsx
<header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
  <div className="flex h-14 items-center px-6">
    <h1 className="text-lg font-semibold">Working On</h1>
    <div className="ml-auto flex items-center gap-2">
      <ContextQualityBadge quality={currentContextQuality} />
      <AIStatusIndicator agents={activeAgents} />
    </div>
  </div>
</header>
```

### Forms & Inputs

Forms should feel approachable and guide users toward successful AI handoffs.

#### Input Styling

```tailwind
<!-- Standard text input -->
<input className="
  h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm
  transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium
  placeholder:text-muted-foreground
  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring
  disabled:cursor-not-allowed disabled:opacity-50
" />

<!-- Context-rich textarea -->
<textarea className="
  min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm
  transition-colors placeholder:text-muted-foreground
  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring
  disabled:cursor-not-allowed disabled:opacity-50
  resize-none
" placeholder="Describe the context for AI handoff..." />
```

#### Form Layout Pattern

```tsx
<form className="space-y-4">
  <div className="space-y-2">
    <label className="text-sm font-medium">Task Title</label>
    <input type="text" className={inputStyles} />
    <p className="text-xs text-muted-foreground">
      Clear, specific titles help AI understand the goal
    </p>
  </div>

  <div className="space-y-2">
    <label className="text-sm font-medium">Context for AI</label>
    <textarea className={textareaStyles} />
    <ContextQualityPreview content={contextContent} />
  </div>
</form>
```

### Buttons & Actions

Buttons should guide users toward successful human-AI collaboration.

#### Button Hierarchy

**Primary Actions** (Main flow):

```tailwind
<Button className="bg-primary text-primary-foreground hover:bg-primary/90">
  Hand off to AI
</Button>
```

**Secondary Actions** (Supporting):

```tailwind
<Button variant="outline" className="border-input hover:bg-accent">
  Add Context
</Button>
```

**AI-Specific Actions**:

```tailwind
<Button variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900/20">
  <Bot className="w-4 h-4 mr-2" />
  Continue AI
</Button>
```

#### Action Groups

```tsx
<div className="flex flex-wrap gap-2">
  <Button size="sm" variant="default">
    Primary Action
  </Button>
  <Button size="sm" variant="outline">
    Secondary
  </Button>
  <Button size="sm" variant="ghost">
    Tertiary
  </Button>
</div>
```

### Progress Indicators

Progress should feel satisfying and clearly show human-AI collaboration status.

#### Task Progress Bar

```tsx
<div className="space-y-2">
  <div className="flex items-center justify-between text-sm">
    <span>Progress</span>
    <span className="text-muted-foreground">{progress}%</span>
  </div>
  <Progress
    value={progress}
    className="h-2"
    // Color indicates collaboration success
  />
</div>
```

#### AI Activity Indicators

```tsx
<div className="flex items-center gap-2 text-sm text-muted-foreground">
  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
  <span>Claude is implementing authentication...</span>
  <span className="text-xs">2m ago</span>
</div>
```

### AI Agent Status Displays

Clear, unobtrusive indicators of AI agent activity and status.

#### Agent Status Badge

```tsx
<Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300">
  <Bot className="w-3 h-3 mr-1" />
  Claude Active
</Badge>
```

#### Multi-Agent Status

```tsx
<div className="flex items-center gap-1">
  <span className="text-xs text-muted-foreground">Active:</span>
  {agents.map((agent) => (
    <AgentBadge key={agent.id} agent={agent} size="sm" />
  ))}
</div>
```

---

## Interaction Design

### Micro-interactions

Subtle animations that provide feedback and enhance the feeling of intelligent collaboration.

#### Hover States

```tailwind
<!-- Cards -->
hover:shadow-md transition-all duration-200

<!-- Buttons -->
hover:bg-primary/90 transition-colors

<!-- Interactive elements -->
hover:bg-accent hover:text-accent-foreground transition-colors
```

#### Focus States

```tailwind
focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring
```

#### Loading States

```tsx
<Button disabled={isLoading}>
  {isLoading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
  {isLoading ? 'Handing off to AI...' : 'Start AI'}
</Button>
```

### Animation Principles

1. **Purposeful**: Every animation serves communication or feedback
2. **Subtle**: Animations enhance, never distract
3. **Fast**: Interactions feel responsive (< 200ms for feedback)
4. **Natural**: Easing curves feel organic (ease-in-out)

#### Common Animation Patterns

**State Transitions**:

```css
.task-card {
  transition: all 200ms ease-in-out;
}

.task-card:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
```

**Content Loading**:

```tailwind
<!-- Skeleton loading -->
<div className="animate-pulse space-y-2">
  <div className="h-4 bg-muted rounded w-3/4"></div>
  <div className="h-4 bg-muted rounded w-1/2"></div>
</div>
```

**AI Status Changes**:

```tsx
<div className="transition-all duration-300 ease-in-out">
  {aiStatus === 'active' && (
    <div className="animate-pulse flex items-center gap-2">
      <div className="w-2 h-2 bg-green-500 rounded-full" />
      <span>AI working...</span>
    </div>
  )}
</div>
```

---

## Content Guidelines

### Voice & Tone

Our language should feel warm, supportive, and focused on human-AI collaboration success.

#### Tone Characteristics

**Warm & Approachable**:

- "Working On" instead of "Current Tasks"
- "My Work" instead of "Task List"
- "AI Helper" instead of "AI Assistant"

**Encouraging & Supportive**:

- "Ready to hand off to AI" vs "Task pending"
- "Great context quality!" vs "Context score: 5/5"
- "AI completed successfully" vs "Task status: done"

**Clear & Actionable**:

- "Add context for better AI results" vs "Context insufficient"
- "Continue AI work" vs "Resume"
- "Review and approve" vs "Check"

#### Writing Principles

1. **Human-First Language**: Write for humans directing AI, not technical users
2. **Outcome-Focused**: Emphasize results and collaboration success
3. **Context-Aware**: Explain why actions matter for AI handoffs
4. **Encouraging**: Celebrate progress and collaboration wins

### Error Messages

Error messages should guide users toward successful resolution while maintaining warmth.

#### Error Message Structure

```tsx
<div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md">
  <div className="flex items-start gap-2">
    <AlertCircle className="w-4 h-4 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
    <div>
      <p className="text-sm text-red-800 dark:text-red-200 font-medium">
        Context quality too low for AI handoff
      </p>
      <p className="text-xs text-red-700 dark:text-red-300 mt-1">
        Add project background, requirements, or examples to improve context quality to 3+ stars
      </p>
      <Button size="sm" variant="outline" className="mt-2 text-xs">
        Improve Context
      </Button>
    </div>
  </div>
</div>
```

#### Error Categories

**Context Issues**:

- Missing context for AI handoff
- Low context quality warnings
- Context sync failures

**AI Collaboration Issues**:

- Agent unavailable/offline
- Handoff failures
- Multi-agent conflicts

**System Issues**:

- Network connectivity
- File sync problems
- Permission errors

### Empty States

Empty states should guide users toward productive actions while maintaining the collaborative spirit.

#### Empty Task Lists

```tsx
<div className="text-center py-12">
  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
    <Plus className="w-8 h-8 text-muted-foreground" />
  </div>
  <h3 className="text-lg font-semibold mb-2">Ready to start collaborating?</h3>
  <p className="text-muted-foreground mb-6 max-w-sm mx-auto">
    Create your first task and hand it off to AI for intelligent implementation
  </p>
  <div className="flex flex-col sm:flex-row gap-2 justify-center">
    <Button>
      <Plus className="w-4 h-4 mr-2" />
      Create First Task
    </Button>
    <Button variant="outline">Import from PRD</Button>
  </div>
</div>
```

#### No AI Activity

```tsx
<div className="text-center py-8">
  <Bot className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
  <h4 className="font-medium mb-1">No AI activity yet</h4>
  <p className="text-sm text-muted-foreground mb-4">
    Tasks with good context are ready for AI collaboration
  </p>
  <Button size="sm">Find Ready Tasks</Button>
</div>
```

---

## Responsive Design

### Breakpoint System

We use a mobile-first approach with clear breakpoints optimized for development workflows.

```css
/* Tailwind breakpoints */
sm: 640px   /* Large phones, small tablets */
md: 768px   /* Tablets */
lg: 1024px  /* Small laptops */
xl: 1280px  /* Large screens */
2xl: 1536px /* Very large screens */
```

### Mobile-First Patterns

#### Navigation

**Mobile**: Bottom navigation or collapsible sidebar

```tailwind
<nav className="fixed bottom-0 left-0 right-0 bg-background border-t lg:hidden">
  <div className="grid grid-cols-4 h-16">
    {navItems.map(item => <NavItem key={item.id} {...item} />)}
  </div>
</nav>
```

**Desktop**: Persistent sidebar

```tailwind
<aside className="hidden lg:block w-64 border-r bg-sidebar">
  <nav className="p-4 space-y-1">
    {navItems.map(item => <SidebarItem key={item.id} {...item} />)}
  </nav>
</aside>
```

#### Task Cards

**Mobile**: Single column, compressed information

```tailwind
<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
```

**Tablet**: Two columns with more detail
**Desktop**: Three columns with full information

#### Content Layout

```tailwind
<!-- Main content area -->
<main className="
  flex-1 overflow-hidden
  lg:ml-64
  pb-16 lg:pb-0
">
  <div className="h-full p-4 lg:p-6">
    <!-- Content -->
  </div>
</main>
```

### Touch Targets

All interactive elements must meet minimum touch target sizes.

```tailwind
<!-- Minimum 44x44px touch targets -->
<button className="min-h-[44px] min-w-[44px] flex items-center justify-center">

<!-- Comfortable spacing between touch targets -->
<div className="space-y-2 md:space-y-1"> <!-- More space on mobile -->
```

### Adaptive Layouts

#### Information Density

**Mobile**: Essential information only

```tsx
<TaskCard variant="mobile">
  <TaskTitle />
  <TaskStatus />
  <PrimaryAction />
</TaskCard>
```

**Desktop**: Rich context and multiple actions

```tsx
<TaskCard variant="desktop">
  <TaskHeader />
  <TaskDescription />
  <ContextQuality />
  <AIStatus />
  <ActionButtons />
</TaskCard>
```

#### Typography Scaling

```tailwind
<!-- Responsive text sizes -->
text-sm sm:text-base        <!-- Body text -->
text-lg sm:text-xl         <!-- Headings -->
text-xs sm:text-sm         <!-- Labels -->
```

---

## Accessibility

### Color Contrast

All color combinations meet WCAG AA standards (4.5:1 for normal text, 3:1 for large text).

#### High Contrast Combinations

```css
/* Light mode - High contrast */
--foreground: oklch(0.141 0.005 285.823); /* Dark text */
--background: oklch(1 0 0); /* White background */
/* Contrast ratio: 13.2:1 */

/* Dark mode - High contrast */
--foreground: oklch(0.985 0 0); /* Light text */
--background: oklch(0.141 0.005 285.823); /* Dark background */
/* Contrast ratio: 13.2:1 */
```

#### Accessible Color Usage

```tailwind
<!-- Ensure sufficient contrast for all text -->
<p className="text-foreground">Primary content</p>
<span className="text-muted-foreground">Secondary content (still 4.5:1+)</span>

<!-- Use multiple indicators, not just color -->
<Badge className="bg-green-100 text-green-800">
  <CheckCircle className="w-3 h-3 mr-1" />
  Completed
</Badge>
```

### Focus Management

Clear focus indicators and logical tab order for keyboard navigation.

#### Focus Ring System

```tailwind
<!-- Consistent focus styling -->
focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring

<!-- High contrast focus for interactive elements -->
focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary
```

#### Tab Order

Ensure logical tab order through semantic HTML and careful element ordering:

```tsx
<div className="space-y-4">
  <h2>Working On</h2> {/* 1 */}
  <Button>Continue AI</Button> {/* 2 */}
  <Button variant="outline">Add Context</Button> {/* 3 */}
  <TaskCard tabIndex={0}>
    {' '}
    {/* 4 */}
    <button>View Details</button> {/* 5 */}
  </TaskCard>
</div>
```

### Screen Reader Support

#### Semantic HTML

```tsx
<main role="main" aria-label="Task Management">
  <section aria-labelledby="working-on-heading">
    <h2 id="working-on-heading">Working On</h2>
    <div role="list" aria-label="Active tasks">
      <article role="listitem" aria-label="Task 1: User Authentication">
        <h3>User Authentication</h3>
        <p>
          Status: <span aria-label="In progress">🤖 AI working</span>
        </p>
        <button aria-label="Continue AI work on User Authentication">Continue AI</button>
      </article>
    </div>
  </section>
</main>
```

#### ARIA Labels and Descriptions

```tsx
<Button
  aria-label="Hand off task to AI assistant"
  aria-describedby="context-quality-warning"
>
  Start AI
</Button>
<p id="context-quality-warning" className="sr-only">
  Context quality is 2/5 stars. Consider adding more context for better AI results.
</p>
```

#### Screen Reader Only Content

```tailwind
<span className="sr-only">Current status:</span>
<span aria-hidden="true">🤖</span> AI working
```

### Keyboard Navigation

#### Keyboard Shortcuts

```tsx
useHotkeys([
  ['cmd+k', () => openCommandPalette()],
  ['cmd+n', () => createNewTask()],
  ['/', () => focusSearch()],
  ['esc', () => clearModals()],
]);
```

#### Interactive Element States

```tailwind
<!-- Clear hover and active states -->
hover:bg-accent hover:text-accent-foreground
active:bg-accent/80
focus-visible:ring-2 focus-visible:ring-primary
```

---

## Dark Mode Considerations

Dark mode is optimized for developer focus sessions with reduced eye strain and better contrast.

### Dark Mode Color Adaptations

#### Background Hierarchy

```css
/* Dark mode backgrounds */
--background: oklch(0.141 0.005 285.823); /* Main background */
--card: oklch(0.141 0.005 285.823); /* Card backgrounds */
--muted: oklch(0.274 0.006 286.033); /* Elevated surfaces */
--sidebar: oklch(0.21 0.006 285.885); /* Sidebar background */
```

#### Text Contrast

```css
/* Dark mode text */
--foreground: oklch(0.985 0 0); /* Primary text - bright white */
--muted-foreground: oklch(0.705 0.015 286.067); /* Secondary text - high contrast */
```

### Focus Session Optimizations

#### Reduced Blue Light

```css
/* Warmer tones for extended use */
--primary: oklch(0.488 0.243 264.376); /* Warmer blue */
--accent: oklch(0.274 0.006 286.033); /* Neutral accent */
```

#### High Contrast Elements

```tailwind
<!-- AI status indicators with high contrast -->
<div className="bg-blue-900/40 text-blue-100 border border-blue-700">
  <Bot className="w-4 h-4" />
  Claude Active
</div>
```

#### Code Syntax Highlighting

```css
/* Terminal and code areas */
.terminal-container {
  background: #000000; /* Pure black for terminals */
  color: #ffffff; /* Pure white text */
}

.dark .xterm {
  background: #000000 !important;
}
```

---

## AI-Specific UI Patterns

### Agent Status Indicators

Clear, unobtrusive ways to show AI agent activity without disrupting human focus.

#### Single Agent Status

```tsx
<div className="flex items-center gap-2 text-sm">
  <div className="flex items-center gap-1.5">
    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
    <Bot className="w-4 h-4 text-blue-600" />
    <span className="font-medium">Claude</span>
  </div>
  <span className="text-muted-foreground">implementing auth system</span>
  <span className="text-xs text-muted-foreground">2m ago</span>
</div>
```

#### Multi-Agent Coordination

```tsx
<div className="bg-muted/50 rounded-lg p-3 space-y-2">
  <div className="flex items-center justify-between">
    <span className="text-sm font-medium">AI Agents Active</span>
    <Badge variant="secondary">{activeAgents.length}</Badge>
  </div>
  <div className="space-y-1">
    {activeAgents.map((agent) => (
      <AgentActivityItem key={agent.id} agent={agent} />
    ))}
  </div>
</div>
```

### Context Handoff Visualizations

Visual representations of context transfer from human to AI.

#### Context Quality Meter

```tsx
<div className="space-y-2">
  <div className="flex items-center justify-between">
    <label className="text-sm font-medium">Context Quality</label>
    <span className="text-sm text-muted-foreground">{quality}/5 stars</span>
  </div>
  <div className="flex items-center gap-1">
    {Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={cn('w-4 h-4', i < quality ? 'text-yellow-400 fill-current' : 'text-gray-300')}
      />
    ))}
  </div>
  <ContextQualityTips quality={quality} />
</div>
```

#### Handoff Progress

```tsx
<div className="border rounded-lg p-4 space-y-3">
  <div className="flex items-center gap-2">
    <ArrowRight className="w-4 h-4 text-blue-600" />
    <span className="text-sm font-medium">Handing off to Claude</span>
  </div>
  <Progress value={handoffProgress} className="h-2" />
  <ul className="space-y-1 text-xs text-muted-foreground">
    <li className="flex items-center gap-2">
      <CheckCircle className="w-3 h-3 text-green-600" />
      Project context packaged
    </li>
    <li className="flex items-center gap-2">
      <CheckCircle className="w-3 h-3 text-green-600" />
      Dependencies identified
    </li>
    <li className="flex items-center gap-2">
      <Loader2 className="w-3 h-3 animate-spin text-blue-600" />
      Transferring to AI agent
    </li>
  </ul>
</div>
```

### Progress Tracking

#### Collaborative Progress Display

```tsx
<div className="space-y-3">
  <div className="flex items-center justify-between">
    <span className="text-sm font-medium">Implementation Progress</span>
    <span className="text-sm text-muted-foreground">{progress}%</span>
  </div>

  <Progress value={progress} className="h-3" />

  <div className="flex items-center justify-between text-xs text-muted-foreground">
    <div className="flex items-center gap-1">
      <User className="w-3 h-3" />
      <span>Planning: Complete</span>
    </div>
    <div className="flex items-center gap-1">
      <Bot className="w-3 h-3" />
      <span>AI Implementation: {aiProgress}%</span>
    </div>
  </div>
</div>
```

#### Activity Timeline

```tsx
<div className="space-y-2">
  <h4 className="text-sm font-medium">Recent Activity</h4>
  <div className="space-y-1">
    {activities.map((activity) => (
      <div key={activity.id} className="flex items-start gap-2 text-xs">
        <div className="w-4 h-4 flex-shrink-0 mt-0.5">
          {activity.type === 'human' ? (
            <User className="w-3 h-3 text-purple-600" />
          ) : (
            <Bot className="w-3 h-3 text-blue-600" />
          )}
        </div>
        <div className="min-w-0">
          <p className="text-foreground">{activity.message}</p>
          <span className="text-muted-foreground">{formatTimeAgo(activity.timestamp)}</span>
        </div>
      </div>
    ))}
  </div>
</div>
```

### Multi-Agent Orchestration Displays

#### Agent Coordination Dashboard

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {agents.map((agent) => (
    <Card key={agent.id} className="p-4">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div
            className={cn(
              'w-2 h-2 rounded-full',
              agent.status === 'active' ? 'bg-green-500 animate-pulse' : 'bg-gray-400'
            )}
          />
          <span className="font-medium">{agent.name}</span>
        </div>
        <Badge variant={agent.status === 'active' ? 'default' : 'secondary'}>{agent.status}</Badge>
      </div>

      <div className="space-y-2 text-sm">
        <p className="text-muted-foreground">Working on:</p>
        <p className="font-medium line-clamp-2">{agent.currentTask}</p>

        {agent.status === 'active' && (
          <div className="flex items-center gap-1 text-xs text-green-600">
            <Clock className="w-3 h-3" />
            <span>Active for {agent.activeTime}</span>
          </div>
        )}
      </div>
    </Card>
  ))}
</div>
```

---

## Implementation with Tailwind CSS

### Custom Theme Configuration

Our Tailwind theme extends the base configuration to support our design system.

#### Color System Implementation

```typescript
// tailwind.config.ts - Theme extension
export default {
  theme: {
    extend: {
      colors: {
        // Semantic color system
        'background': 'hsl(var(--background))',
        'foreground': 'hsl(var(--foreground))',

        // Context-aware colors
        'human-focus': 'oklch(0.488 0.243 264.376)',
        'ai-execution': 'oklch(0.705 0.015 286.067)',
        'collaboration-success': 'oklch(0.6 0.118 184.704)',

        // Status colors
        'context-low': 'oklch(0.577 0.245 27.325)',
        'context-medium': 'oklch(0.828 0.189 84.429)',
        'context-high': 'oklch(0.6 0.118 184.704)',
      },

      // Custom spacing for our 4px grid
      spacing: {
        '18': '4.5rem', // 72px
        '22': '5.5rem', // 88px
      },

      // Animation timing
      transitionDuration: {
        '250': '250ms',
      },

      // Custom shadows
      boxShadow: {
        context: '0 4px 6px -1px rgba(59, 130, 246, 0.1), 0 2px 4px -1px rgba(59, 130, 246, 0.06)',
      },
    },
  },
};
```

#### Component Class Patterns

**Reusable component classes for common patterns:**

```css
@layer components {
  /* Card variants */
  .card-human-focus {
    @apply border-blue-200 bg-blue-50/30 dark:border-blue-800 dark:bg-blue-900/10;
  }

  .card-ai-execution {
    @apply border-gray-200 bg-gray-50/30 dark:border-gray-800 dark:bg-gray-900/10;
  }

  .card-collaboration-success {
    @apply border-green-200 bg-green-50/30 dark:border-green-800 dark:bg-green-900/10;
  }

  /* Interactive states */
  .interactive-element {
    @apply transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring;
  }

  /* Context quality indicators */
  .context-quality-high {
    @apply text-green-700 bg-green-100 dark:text-green-300 dark:bg-green-900/20;
  }

  .context-quality-medium {
    @apply text-yellow-700 bg-yellow-100 dark:text-yellow-300 dark:bg-yellow-900/20;
  }

  .context-quality-low {
    @apply text-red-700 bg-red-100 dark:text-red-300 dark:bg-red-900/20;
  }
}
```

### Utility Class Patterns

#### Common Layout Patterns

```tailwind
<!-- Page layout -->
.page-container {
  @apply min-h-screen bg-background text-foreground;
}

.content-area {
  @apply flex-1 overflow-hidden p-4 lg:p-6;
}

<!-- Card layouts -->
.card-compact {
  @apply p-3 space-y-2;
}

.card-comfortable {
  @apply p-4 space-y-3;
}

.card-spacious {
  @apply p-6 space-y-4;
}

<!-- Interactive elements -->
.button-primary {
  @apply bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-ring;
}

.input-standard {
  @apply h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-ring;
}
```

#### Responsive Utilities

```tailwind
<!-- Mobile-first responsive patterns -->
.responsive-grid {
  @apply grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3;
}

.responsive-text {
  @apply text-sm sm:text-base;
}

.responsive-spacing {
  @apply space-y-3 sm:space-y-2;
}

<!-- Touch-friendly sizing -->
.touch-target {
  @apply min-h-[44px] min-w-[44px];
}
```

### Performance Considerations

#### Optimization Strategies

1. **Purge unused styles** - Tailwind automatically removes unused classes
2. **Component variants** - Use class-variance-authority for dynamic styling
3. **CSS custom properties** - Theme switching without runtime overhead
4. **Critical CSS** - Inline essential styles for fast initial render

#### Bundle Size Management

```typescript
// Use dynamic imports for heavy components
const AIActivityDashboard = lazy(() => import('./AIActivityDashboard'));

// Optimize icon imports
import { Bot, User, CheckCircle } from 'lucide-react';
// Instead of: import * as Icons from 'lucide-react';
```

---

## Quick Reference

### Color Usage

| Context        | Light Mode                      | Dark Mode                          | Usage                            |
| -------------- | ------------------------------- | ---------------------------------- | -------------------------------- |
| Human Strategy | `bg-blue-50 text-blue-700`      | `bg-blue-900/20 text-blue-300`     | Strategic decisions, human input |
| AI Execution   | `bg-gray-100 text-gray-800`     | `bg-gray-900/20 text-gray-300`     | AI status, execution info        |
| Success        | `bg-green-100 text-green-800`   | `bg-green-900/20 text-green-300`   | Completed collaboration          |
| Warning        | `bg-yellow-100 text-yellow-800` | `bg-yellow-900/20 text-yellow-300` | Context quality issues           |
| Error          | `bg-red-100 text-red-800`       | `bg-red-900/20 text-red-300`       | Failures, blocks                 |

### Typography Scale

| Element       | Classes                         | Usage                |
| ------------- | ------------------------------- | -------------------- |
| Page Title    | `text-2xl font-bold`            | Main page headings   |
| Section Title | `text-xl font-semibold`         | Major sections       |
| Card Title    | `text-lg font-medium`           | Card headings        |
| Body Text     | `text-sm`                       | General content      |
| Label         | `text-sm font-medium`           | Form labels          |
| Caption       | `text-xs text-muted-foreground` | Metadata, timestamps |

### Spacing Guide

| Gap  | Tailwind | Usage                  |
| ---- | -------- | ---------------------- |
| 4px  | `gap-1`  | Tight element grouping |
| 8px  | `gap-2`  | Related elements       |
| 12px | `gap-3`  | Section content        |
| 16px | `gap-4`  | Card padding           |
| 24px | `gap-6`  | Component spacing      |
| 32px | `gap-8`  | Major layout breaks    |

---

This style guide provides the foundation for creating consistent, accessible, and delightful interfaces that support seamless human-AI collaboration in Claude Task Manager. Follow these patterns to ensure all new features feel cohesive with the existing design system while maintaining the warm, intelligent character that makes complex workflows feel approachable.
