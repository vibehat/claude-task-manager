# Claude Code Documentation Navigation Guide

This file provides essential context for Claude Code to effectively understand and navigate the project documentation structure.

## Documentation Overview

This `/docs` directory contains comprehensive project documentation organized by purpose and development phase. The documentation serves as the single source of truth for project requirements, architecture decisions, design specifications, and development processes.

## Quick Navigation Map

### 🎯 **Start Here for New Projects**

- [`prd/main.md`](prd/main.md) - Main product requirements document
- [`prd/usecases.md`](prd/usecases.md) - Detailed use cases and user stories
- [`architecture/diagrams.md`](architecture/diagrams.md) - System architecture overview

### 🏗️ **Architecture & Technical Design**

- [`architecture/`](architecture/) - System design, technical decisions, database schemas
- [`api/`](api/) - API documentation, WebSocket specs, integration guides
- [`development/`](development/) - Development guidelines, coding standards, UI/UX principles

### 🎨 **UI/UX Design Specifications**

- [`mockups/`](mockups/) - Complete design system with organized subsections:
  - [`01-overview/`](mockups/01-overview/) - Design principles and user flows
  - [`02-layouts/`](mockups/02-layouts/) - App layouts and component grids
  - [`03-features/`](mockups/03-features/) - Feature-specific mockups and designs
  - [`04-interactions/`](mockups/04-interactions/) - Interaction patterns and behaviors
  - [`05-responsive/`](mockups/05-responsive/) - Mobile and responsive adaptations
  - [`06-implementation/`](mockups/06-implementation/) - Component specifications

### 💡 **Feature Planning & Ideas**

- [`ideas/`](ideas/) - Feature specifications and brainstorming:
  - [`feature-notes-system.md`](ideas/feature-notes-system.md) - Comprehensive notes system specification
  - [`feature-project-big-picture.md`](ideas/feature-project-big-picture.md) - Project overview dashboard
  - [`feature-working-on.md`](ideas/feature-working-on.md) - Current work tracking features

### 🔧 **Development Process**

- [`development/`](development/) - Development guidelines and best practices
- [`git-workflow/`](git-workflow/) - Git conventions, commit standards, PR guidelines
- [`process/`](process/) - Team workflows and development methodologies
- [`release/`](release/) - Release management, versioning, deployment guides

### 📋 **Templates & Standards**

- [`templates/`](templates/) - Documentation templates for consistent formatting

## Understanding the Documentation Structure

### 📊 **Maturity Levels**

The documentation exists at different levels of completeness and authority:

1. **📋 Requirements (Authoritative)**: `prd/` - Defines what we're building
2. **🏗️ Architecture (Foundational)**: `architecture/`, `api/` - Defines how we're building it
3. **🎨 Design (Detailed)**: `mockups/` - Defines the user experience
4. **💡 Ideas (Exploratory)**: `ideas/` - Explores future possibilities
5. **🔧 Process (Operational)**: `development/`, `git-workflow/`, `process/` - Defines how we work

### 🔄 **Document Relationships**

**Flow from Requirements to Implementation:**

```
PRD → Architecture → Design Mockups → Development Guidelines → Implementation
```

**Cross-References to Look For:**

- PRD use cases referenced in mockup designs
- Architecture decisions reflected in API documentation
- Design patterns documented in development guidelines
- Feature ideas that elaborate on PRD requirements

## Claude Code Usage Patterns

### 🔍 **When to Reference Documentation**

**Before Starting New Features:**

1. Check `prd/` for requirements and acceptance criteria
2. Review `architecture/` for technical constraints and patterns
3. Examine `mockups/` for UI/UX specifications
4. Consult `development/` for coding standards and conventions

**During Implementation:**

- Reference `api/` for endpoint specifications and integration patterns
- Use `mockups/06-implementation/` for component specifications
- Follow `development/` guidelines for code structure and testing approaches
- Check `git-workflow/` for commit message and PR standards

**For New Feature Planning:**

- Start with `ideas/` to understand feature vision and scope
- Cross-reference with `prd/` to ensure alignment with product goals
- Review `mockups/03-features/` for related UI patterns and designs

### 📖 **Reading Strategy for Claude Code**

**Hierarchical Reading Approach:**

1. **Scan**: Read file headers and section overviews first
2. **Focus**: Dive deep into sections relevant to current task
3. **Cross-Reference**: Follow links to related documents for complete context
4. **Synthesize**: Combine information from multiple sources for comprehensive understanding

**Key Information to Extract:**

- **Requirements**: What needs to be built and why
- **Constraints**: Technical limitations and architectural decisions
- **Patterns**: Established conventions and reusable approaches
- **Context**: Background decisions and rationale for current state

### 🧠 **Context Building for Claude Code**

**Essential Context Files (Read These First):**

1. `prd/main.md` - Overall project vision and goals
2. `architecture/diagrams.md` - System overview and technical approach
3. `development/fe-development.md` - Frontend development standards
4. `mockups/01-overview/design-principles.md` - Design philosophy and principles

**Task-Specific Context Files:**

- **New Feature Development**: `ideas/` → `mockups/03-features/` → `development/`
- **Bug Fixes**: `architecture/` → `api/` → `development/tdd.md`
- **UI/UX Work**: `mockups/` → `development/uiux-*.md`
- **API Development**: `api/` → `architecture/` → `development/`

## File Naming and Organization Conventions

### 📝 **Naming Patterns**

**Feature Documentation:**

- `feature-[name].md` - Feature specifications in `ideas/`
- `[feature-name]-page.md` - Page-specific mockups in `mockups/03-features/`

**Process Documentation:**

- `[topic].md` - General topic documentation
- `[topic]-guide.md` - Step-by-step guides
- `[topic]-reference.md` - Reference materials

**Template Files:**

- `[purpose].md` - Template files in `templates/`

### 🔗 **Cross-Referencing**

**Internal Links:** Use relative paths from document location

```markdown
[Related Architecture](../architecture/diagrams.md)
[API Reference](../api/api-documentation.md)
```

**Section References:** Link to specific sections within documents

```markdown
[Design Principles](../mockups/01-overview/design-principles.md#core-principles)
```

## Working with Documentation as Claude Code

### ✅ **Best Practices**

1. **Always Read Context First**: Before implementing, understand the "why" from requirements and architecture docs
2. **Follow Established Patterns**: Look for similar implementations in mockups and existing code patterns
3. **Cross-Reference Decisions**: Verify that implementation aligns with documented architecture and design decisions
4. **Update Documentation**: When making significant changes, update related documentation to maintain consistency
5. **Use Templates**: Leverage existing templates for consistent documentation format

### ⚠️ **Common Pitfalls to Avoid**

1. **Don't Skip Requirements**: Always check `prd/` before assuming feature scope or behavior
2. **Don't Ignore Design Specs**: UI implementations should match `mockups/` specifications
3. **Don't Break Conventions**: Follow established patterns in `development/` guidelines
4. **Don't Create Orphaned Features**: Ensure new features align with overall architecture and design system

### 🎯 **Quick Decision Framework**

**When Uncertain About Implementation:**

1. **Check PRD**: Does this align with product requirements?
2. **Check Architecture**: Does this fit the technical design?
3. **Check Mockups**: Does this match the intended user experience?
4. **Check Development Guidelines**: Does this follow established conventions?

**When Documentation Conflicts:**

1. **PRD Requirements** > **Architecture Constraints** > **Design Preferences** > **Implementation Convenience**
2. **Document the Decision**: Update relevant docs to resolve the conflict for future reference

## Integration with Task Master

This documentation structure integrates seamlessly with the Task Master AI system:

- **PRD Parsing**: `prd/main.md` can be parsed by Task Master to generate implementation tasks
- **Feature Planning**: `ideas/` documents serve as input for new feature task generation
- **Architecture Alignment**: Task implementations should reference `architecture/` decisions
- **Design Compliance**: Task completion should verify against `mockups/` specifications

## Getting Help

**When Documentation is Unclear or Missing:**

1. Check related documents for additional context
2. Look for similar patterns in existing implementations
3. Refer to established conventions in `development/` guidelines
4. Consider updating documentation to clarify for future reference

This documentation system is designed to provide comprehensive context while remaining navigable and actionable. Use it as your primary source of truth for understanding project requirements, constraints, and established patterns.
