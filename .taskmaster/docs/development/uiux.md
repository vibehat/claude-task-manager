# UI/UX Documentation Index - Claude Task Manager

> **Navigation**: This document serves as the entry point to our UI/UX documentation system.

## Documentation Structure

The UI/UX documentation is split into two specialized guides for different phases of development:

### 🎨 [UI/UX Design Guide](./uiux-design.md)

**Purpose**: Design decisions, visual system, and user experience patterns  
**Target Audience**: Designers, product managers, and development teams in planning phase  
**Contents**:

- Target user profile and design philosophy
- Visual design system (colors, typography, spacing)
- Component design specifications
- Interaction design patterns
- Accessibility design requirements
- Mobile & responsive design strategy

### 💻 [UI/UX Development Guide](./uiux-development.md)

**Purpose**: Implementation patterns, code examples, and technical specifications  
**Target Audience**: Frontend developers and AI agents building components  
**Contents**:

- Complete component implementations
- State management patterns
- Performance optimization techniques
- Accessibility implementation
- AI integration patterns
- Mobile responsive code examples

---

## Quick Reference

### For Design Phase

Use **uiux-design.md** when you need to:

- Define visual design system
- Create component mockups
- Plan user experience flows
- Establish accessibility requirements
- Design mobile-responsive layouts

### For Development Phase

Use **uiux-development.md** when you need to:

- Implement React components
- Set up state management
- Add keyboard shortcuts
- Build accessible interfaces
- Integrate AI features
- Optimize performance

---

## Core Philosophy (Both Guides)

**Target Users**: Developers using AI assistants (Claude Code, Cursor, VS Code)  
**Primary Goals**:

- Flow state preservation (no interruptions)
- Context retention across AI conversations
- Terminal-native workflows
- Minimal cognitive overhead

**Tech Stack**: Next.js 15.2.4 + Tailwind CSS v4 + Radix UI + shadcn/ui + Zustand

---

## Implementation Workflow

1. **Planning Phase** → Read `uiux-design.md` for design decisions
2. **Development Phase** → Use `uiux-development.md` for implementation
3. **Review Phase** → Check both guides for consistency

---

_This documentation structure ensures clear separation between design decisions and implementation details, making it easier for different roles and AI agents to find relevant information quickly._
