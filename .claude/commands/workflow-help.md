# Workflow Help - Structured Development Commands

Quick reference for the structured development workflow commands.

Usage: `/workflow-help`

## Available Commands

### 🔍 **Analysis Phase**

- `/analyze-first [feature]` - Analyze existing codebase before any planning
- `/reuse-check [component]` - Validate reuse opportunities before creating new files

### 📋 **Planning Phase**

- `/structured-plan [request]` - Full 5-step structured planning workflow
- `/plan-with-context [request]` - Context-aware implementation planning after analysis

### ❓ **Help**

- `/workflow-help` - Show this reference guide

## Workflow Process

**MANDATORY SEQUENCE:**

1. **First**: `/analyze-first` to understand existing code
2. **Second**: `/reuse-check` before creating anything new
3. **Third**: `/structured-plan` or `/plan-with-context` for implementation
4. **Always**: Validate compliance and justify any new file creation

## Key Rules

- ❌ No new files without exhaustive reuse analysis
- ❌ No rewrites when refactoring is possible
- ❌ No generic advice - provide specific implementations
- ❌ No ignoring existing codebase architecture
- ✅ Extend existing services and components
- ✅ Consolidate duplicate code
- ✅ Reference specific file paths
- ✅ Provide migration strategies

**Remember**: Start with "COMPLIANCE CONFIRMED: I will prioritize reuse over creation" when using these commands.
