# Claude Task Manager - Quick Style Guide for Mockups

**Philosophy**: "Simple by Default, Smart by Design"  
**Purpose**: Quick reference for designers creating mockups with Tailwind CSS

---

## 🎯 Core Design Principles

### Context-First Design

Every interface element serves human-AI collaboration:

- Surface relevant context automatically
- Show context quality indicators (1-5 stars)
- Enable one-click context transfer to AI
- Package rich context for AI handoffs

### Simple by Default

- Use human-centered language: "Working On" not "Current Tasks"
- Limit choices to 2-3 options per section
- Progressive disclosure - reveal complexity only when needed
- Default to the most common user path

### Emotional Comfort

- Warm, approachable color palettes
- Clear progress indicators
- Encouraging, supportive language
- Celebrate collaboration successes

---

## 🎨 Visual Language Quick Reference

### Color System

```tailwind
<!-- Human Strategic Elements (warm blues/teals) -->
bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300

<!-- AI Execution Status (cool grays) -->
bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-300

<!-- Successful Collaboration (satisfying greens) -->
bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300

<!-- Context Quality Issues (warm yellows) -->
bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300

<!-- Errors/Blocks (soft reds) -->
bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300
```

### Typography Hierarchy

```tailwind
<!-- Strategic Headlines (Bold & Human) -->
text-2xl font-bold tracking-tight     <!-- Page titles -->
text-xl font-semibold                 <!-- Section headers -->
text-lg font-medium                   <!-- Card titles -->

<!-- Body Content (Balanced) -->
text-base                             <!-- Primary body text -->
text-sm font-medium                   <!-- Navigation, labels -->
text-sm                               <!-- Secondary body text -->

<!-- Supporting Details (Subtle) -->
text-xs font-medium                   <!-- Badges, small labels -->
text-xs text-muted-foreground        <!-- Timestamps, metadata -->
```

---

## 📦 Essential Component Patterns

### Task Cards

#### Base Structure

```tailwind
<div class="p-4 space-y-3 rounded-lg border bg-card hover:shadow-md transition-all duration-200">
  <!-- Card content -->
</div>
```

#### Task States

```tailwind
<!-- Active (AI working) -->
class="ring-2 ring-blue-200 dark:ring-blue-800 bg-blue-50/50 dark:bg-blue-900/10"

<!-- Ready for AI -->
class="hover:shadow-md transition-all duration-200 bg-card"

<!-- Blocked -->
class="ring-2 ring-red-200 dark:ring-red-800 opacity-75 bg-red-50/30 dark:bg-red-900/10"

<!-- Completed -->
class="bg-green-50 dark:bg-green-900/10 border-green-200 dark:border-green-800"
```

#### Context Quality Indicator

```tailwind
<div class="flex items-center gap-1">
  <span class="text-xs text-muted-foreground">Context:</span>
  <!-- 5 star rating system -->
  <span class="text-yellow-400">★★★★</span><span class="text-gray-300">★</span>
  <span class="text-xs text-muted-foreground">(4/5)</span>
</div>
```

### Navigation Components

#### Sidebar Items

```tailwind
<nav class="space-y-1">
  <a class="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors">
    <!-- Icon + Label + Badge -->
  </a>
</nav>
```

#### Header Navigation

```tailwind
<header class="border-b bg-background/95 backdrop-blur">
  <div class="flex h-14 items-center px-6">
    <h1 class="text-lg font-semibold">Working On</h1>
    <div class="ml-auto flex items-center gap-2">
      <!-- Context quality + AI status -->
    </div>
  </div>
</header>
```

### Buttons & Actions

```tailwind
<!-- Primary Action (Human → AI handoff) -->
<button class="bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2 rounded-md text-sm font-medium transition-colors">
  Hand off to AI
</button>

<!-- Secondary Action -->
<button class="border border-input hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 rounded-md text-sm font-medium transition-colors">
  Add Context
</button>

<!-- AI-Specific Action -->
<button class="bg-blue-100 text-blue-800 dark:bg-blue-900/20 h-9 px-4 py-2 rounded-md text-sm font-medium">
  <svg class="w-4 h-4 mr-2"><!-- Bot icon --></svg>
  Continue AI
</button>
```

### Forms & Inputs

```tailwind
<!-- Standard Input -->
<input class="h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" />

<!-- Context-Rich Textarea -->
<textarea class="min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm resize-none" placeholder="Describe context for AI handoff..."></textarea>

<!-- Form Layout -->
<div class="space-y-4">
  <div class="space-y-2">
    <label class="text-sm font-medium">Label</label>
    <input class="..." />
    <p class="text-xs text-muted-foreground">Helper text</p>
  </div>
</div>
```

---

## 🤖 AI-Specific UI Patterns

### Agent Status Indicators

```tailwind
<!-- Single Agent Active -->
<div class="flex items-center gap-2 text-sm">
  <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
  <svg class="w-4 h-4 text-blue-600"><!-- Bot icon --></svg>
  <span class="font-medium">Claude</span>
  <span class="text-muted-foreground">implementing auth</span>
  <span class="text-xs text-muted-foreground">2m ago</span>
</div>

<!-- Agent Status Badge -->
<span class="bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300 px-2 py-1 rounded-md text-xs font-medium">
  <svg class="w-3 h-3 mr-1"><!-- Bot icon --></svg>
  Claude Active
</span>
```

### Context Handoff Visualization

```tailwind
<div class="border rounded-lg p-4 space-y-3">
  <div class="flex items-center gap-2">
    <svg class="w-4 h-4 text-blue-600"><!-- Arrow right --></svg>
    <span class="text-sm font-medium">Handing off to Claude</span>
  </div>
  <!-- Progress bar -->
  <div class="w-full bg-muted rounded-full h-2">
    <div class="bg-primary h-2 rounded-full" style="width: 60%"></div>
  </div>
  <!-- Checklist -->
  <ul class="space-y-1 text-xs text-muted-foreground">
    <li class="flex items-center gap-2">
      <svg class="w-3 h-3 text-green-600"><!-- Check --></svg>
      Project context packaged
    </li>
  </ul>
</div>
```

### Progress Tracking

```tailwind
<!-- Collaborative Progress -->
<div class="space-y-3">
  <div class="flex items-center justify-between">
    <span class="text-sm font-medium">Implementation Progress</span>
    <span class="text-sm text-muted-foreground">65%</span>
  </div>
  <div class="w-full bg-muted rounded-full h-3">
    <div class="bg-primary h-3 rounded-full" style="width: 65%"></div>
  </div>
  <div class="flex items-center justify-between text-xs text-muted-foreground">
    <div class="flex items-center gap-1">
      <svg class="w-3 h-3"><!-- User icon --></svg>
      <span>Planning: Complete</span>
    </div>
    <div class="flex items-center gap-1">
      <svg class="w-3 h-3"><!-- Bot icon --></svg>
      <span>AI: 65%</span>
    </div>
  </div>
</div>
```

---

## 📱 Responsive Patterns

### Layout Structure

```tailwind
<!-- Main Layout -->
<div class="min-h-screen bg-background text-foreground">
  <!-- Sidebar (desktop) -->
  <aside class="hidden lg:block w-64 border-r bg-sidebar">
    <nav class="p-4 space-y-1"><!-- Navigation --></nav>
  </aside>

  <!-- Main Content -->
  <main class="flex-1 overflow-hidden lg:ml-64 pb-16 lg:pb-0">
    <div class="h-full p-4 lg:p-6"><!-- Content --></div>
  </main>

  <!-- Mobile Navigation -->
  <nav class="fixed bottom-0 left-0 right-0 bg-background border-t lg:hidden">
    <div class="grid grid-cols-4 h-16"><!-- Nav items --></div>
  </nav>
</div>
```

### Responsive Grid

```tailwind
<!-- Task Grid -->
<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
  <!-- Task cards -->
</div>

<!-- Content Layout -->
<div class="flex flex-col lg:flex-row gap-6">
  <div class="flex-1"><!-- Main content --></div>
  <div class="w-full lg:w-80"><!-- Sidebar content --></div>
</div>
```

---

## 🎭 States & Feedback

### Loading States

```tailwind
<!-- Button Loading -->
<button disabled class="bg-primary/50 text-primary-foreground">
  <svg class="w-4 h-4 mr-2 animate-spin"><!-- Loader --></svg>
  Handing off to AI...
</button>

<!-- Skeleton Loading -->
<div class="animate-pulse space-y-2">
  <div class="h-4 bg-muted rounded w-3/4"></div>
  <div class="h-4 bg-muted rounded w-1/2"></div>
</div>
```

### Empty States

```tailwind
<div class="text-center py-12">
  <div class="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
    <svg class="w-8 h-8 text-muted-foreground"><!-- Plus icon --></svg>
  </div>
  <h3 class="text-lg font-semibold mb-2">Ready to start collaborating?</h3>
  <p class="text-muted-foreground mb-6 max-w-sm mx-auto">
    Create your first task and hand it off to AI
  </p>
  <button class="bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2 rounded-md text-sm font-medium">
    Create First Task
  </button>
</div>
```

### Error Messages

```tailwind
<div class="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md">
  <div class="flex items-start gap-2">
    <svg class="w-4 h-4 text-red-600 dark:text-red-400 mt-0.5"><!-- Alert --></svg>
    <div>
      <p class="text-sm text-red-800 dark:text-red-200 font-medium">
        Context quality too low for AI handoff
      </p>
      <p class="text-xs text-red-700 dark:text-red-300 mt-1">
        Add requirements or examples to improve to 3+ stars
      </p>
    </div>
  </div>
</div>
```

---

## 🌙 Dark Mode

### Background Hierarchy

```tailwind
<!-- Main backgrounds -->
bg-background       <!-- Main app background -->
bg-card            <!-- Card backgrounds -->
bg-muted           <!-- Elevated surfaces -->
bg-sidebar         <!-- Sidebar background -->

<!-- Interactive states -->
hover:bg-accent hover:text-accent-foreground
focus-visible:ring-1 focus-visible:ring-ring
```

---

## ⚡ Quick Copy-Paste Components

### Complete Task Card

```html
<div class="p-4 space-y-3 rounded-lg border bg-card hover:shadow-md transition-all duration-200">
  <div class="flex items-start justify-between">
    <h3 class="text-lg font-medium">User Authentication System</h3>
    <span class="bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-xs font-medium">Ready</span>
  </div>

  <p class="text-sm text-muted-foreground">
    Implement JWT-based authentication with secure password hashing
  </p>

  <div class="flex items-center gap-1">
    <span class="text-xs text-muted-foreground">Context:</span>
    <span class="text-yellow-400">★★★★</span><span class="text-gray-300">★</span>
    <span class="text-xs text-muted-foreground">(4/5)</span>
  </div>

  <div class="flex gap-2">
    <button
      class="bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2 rounded-md text-sm font-medium"
    >
      Hand off to AI
    </button>
    <button
      class="border border-input hover:bg-accent h-9 px-4 py-2 rounded-md text-sm font-medium"
    >
      Add Context
    </button>
  </div>
</div>
```

### AI Activity Indicator

```html
<div class="bg-muted/50 rounded-lg p-3">
  <div class="flex items-center gap-2 text-sm mb-2">
    <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
    <span class="font-medium">Claude Active</span>
  </div>
  <p class="text-xs text-muted-foreground">Implementing authentication middleware...</p>
  <div class="w-full bg-muted rounded-full h-1 mt-2">
    <div class="bg-green-500 h-1 rounded-full" style="width: 70%"></div>
  </div>
</div>
```

### Navigation Item

```html
<a
  class="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
>
  <svg class="w-4 h-4"><!-- Icon --></svg>
  <span>Working On</span>
  <span class="ml-auto bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">3</span>
</a>
```

---

## 🎯 Design Checklist

### Every Mockup Should Have:

- [ ] Clear context quality indicator (1-5 stars)
- [ ] Human vs AI role distinction (colors/icons)
- [ ] Progressive disclosure (simple → detailed)
- [ ] Warm, approachable language
- [ ] Accessible color contrast (4.5:1+)
- [ ] Touch-friendly sizing (44px min)
- [ ] Loading and error states
- [ ] Mobile-responsive layout

### Color Usage Guidelines:

- [ ] Blue tones: Human strategic elements
- [ ] Gray tones: AI execution status
- [ ] Green tones: Successful collaboration
- [ ] Yellow tones: Context warnings
- [ ] Red tones: Errors and blocks

---

This quick reference provides everything you need to create consistent, beautiful mockups that embody the "Simple by Default, Smart by Design" philosophy of Claude Task Manager.
