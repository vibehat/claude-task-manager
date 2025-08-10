# Agent Help - Delegation System Reference

Quick reference for the specialized agent delegation system.

Usage: `/agent-help`

## Available Agents

### 🔍 **Reader Agent** (Information Gathering)

- **Purpose**: Analysis, research, pattern recognition
- **Command**: `/spawn-reader [analysis task]`
- **Specialization**: Cost-efficient analysis and documentation
- **Output**: Structured findings with file references

### 🛠️ **Maker Agent** (Code Implementation)

- **Purpose**: Feature implementation, code creation
- **Command**: `/spawn-maker [implementation task]`
- **Specialization**: High-quality code generation and integration
- **Output**: Complete implementations with documentation

## Quick Commands

### Agent Spawning

- `/spawn-reader [task]` - Launch analysis agent
- `/spawn-maker [task]` - Launch implementation agent
- `/agent-help` - Show this reference guide

### Workflow Integration

- `/analyze-first [feature]` - Analysis before planning
- `/structured-plan [request]` - Full structured planning
- `/reuse-check [component]` - Validation before creation

## Common Workflows

### 📋 **Standard Feature Development**

```
1. /spawn-reader analyze existing [feature area] patterns
2. Review Reader findings
3. /spawn-maker implement [specific feature] using patterns
4. Integration and testing
```

### 🔄 **Complex Multi-Step Implementation**

```
1. /spawn-reader map current architecture for [area]
2. /spawn-maker create core [component] infrastructure
3. /spawn-reader analyze integration points
4. /spawn-maker build [feature] integration layer
```

### 🎯 **Quick Implementation** (when context is clear)

```
1. /spawn-maker implement [well-defined feature]
2. Follow existing patterns automatically
```

## Agent Capabilities

### Reader Agent Strengths

- ✅ Architectural analysis and mapping
- ✅ Pattern recognition and documentation
- ✅ Dependency and integration point identification
- ✅ Cost-efficient information gathering
- ❌ Does not implement or modify code

### Maker Agent Strengths

- ✅ High-quality TypeScript/React implementation
- ✅ Pattern-following and architectural integration
- ✅ Complete feature development with testing
- ✅ Error handling and edge case management
- ❌ May need Reader analysis for complex contexts

## Best Practices

### When to Use Reader First

- Unfamiliar codebase areas
- Complex integration requirements
- Need to understand existing patterns
- Planning major architectural changes

### When to Use Maker Directly

- Well-understood implementation tasks
- Following established patterns clearly
- Small, isolated feature additions
- Bug fixes with clear context

### Agent Coordination

- **Sequential**: Reader → analysis review → Maker implementation
- **Iterative**: Reader → Maker → Reader → Maker (for complex features)
- **Parallel**: Multiple Readers for different areas, then coordinated Maker work

## Integration with Existing Workflow

The agent system follows your established rules:

- ✅ Prioritizes code reuse over creation
- ✅ Analyzes existing patterns before suggesting new approaches
- ✅ Provides specific file references and implementation guidance
- ✅ Validates compliance with architectural standards

## Example Tasks

### Reader Agent Examples

- `analyze authentication and authorization patterns`
- `map existing state management architecture`
- `research form validation approaches in the codebase`
- `document API integration patterns and utilities`

### Maker Agent Examples

- `implement user profile editing component`
- `create task filtering and search functionality`
- `build API integration for real-time updates`
- `add dark mode theme switching capability`

Remember: The delegation system optimizes for specialization - let each agent focus on what they do best!
