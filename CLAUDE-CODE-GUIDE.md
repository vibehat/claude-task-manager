# Claude Code Integration Guide

> _Supercharge your Claude Code workflow with persistent context and project memory_

## Why Claude Code + Claude Task Manager?

**The Problem**: Every new Claude Code conversation starts from zero. You spend 20% of your time explaining your project structure, architecture decisions, and current context.

**The Solution**: Claude Task Manager provides persistent project memory that makes every Claude Code session instantly productive.

## Quick Setup

```bash
# In your existing project
npx claude-task-manager init

# Start the UI alongside Claude Code
npx claude-task-manager start
```

Now your Claude Code conversations have full project context from day one.

## Workflow Integration

### Before: Traditional Claude Code

```
1. Open new Claude Code conversation
2. "I'm building a Next.js app with..."
3. Explain current architecture
4. Describe what you're working on
5. Finally start coding
```

### After: With Claude Task Manager

```
1. Open Claude Code (context already loaded)
2. "Continue working on user authentication"
3. Start coding immediately
```

## Key Features for Claude Code Users

### 🧠 **Persistent Context**

- Your project structure lives in Claude Task Manager
- Every Claude Code conversation knows your architecture
- No more "Here's my current setup..." messages

### 📋 **Intelligent Task Management**

- Break down features into actionable tasks
- Track what Claude Code implemented vs what's left
- Visual roadmap of your progress

### 📚 **Decision History**

- Architecture decisions saved and linked to tasks
- Implementation notes preserved across sessions
- Easy reference for future Claude Code conversations

### 🔄 **Seamless Integration**

- Works alongside Claude Code (doesn't replace it)
- Export task lists to share with Claude Code
- Import implementation notes back into tasks

## Advanced Workflows

### Feature Development Workflow

1. **Plan in Task Manager**

   ```bash
   task-master add-task --prompt="Build user authentication system"
   task-master expand --id=1 --research
   ```

2. **Implement with Claude Code**

   - Open Claude Code with task context
   - Reference task details and architecture notes
   - Implement following the planned structure

3. **Track Progress**
   ```bash
   task-master update-subtask --id=1.2 --prompt="Implemented JWT token generation"
   task-master set-status --id=1.2 --status=done
   ```

### Architecture Discussion Workflow

1. **Document Current State** in Task Manager
2. **Discuss Changes** with Claude Code
3. **Update Architecture Notes** in Task Manager
4. **Generate Implementation Tasks** from decisions

### Code Review Workflow

1. **Claude Code implements** feature
2. **Task Manager tracks** what was built
3. **Review notes** linked to specific tasks
4. **Next steps** automatically generated

## Best Practices

### ✅ Do's

- **Keep task descriptions detailed** - Claude Code can reference them
- **Update progress regularly** - Maintains accurate project state
- **Use architecture notes** - Save Claude Code's explanations
- **Link related tasks** - Show Claude Code the big picture

### ❌ Don'ts

- **Don't duplicate context** - Let Task Manager handle project memory
- **Don't skip task updates** - Stale context confuses Claude Code
- **Don't ignore dependencies** - Task relationships help Claude Code prioritize

## Power User Tips

### Context Export for Claude Code

```bash
# Export current project context
task-master show --all > project-context.md

# Share with Claude Code for complex discussions
```

### Custom Claude Code Prompts

```
"Based on my Claude Task Manager project context:
- Current task: [task-id]
- Architecture: [link to architecture notes]
- Dependencies: [related tasks]

Help me implement..."
```

### Integration Scripts

```bash
# Update task after Claude Code session
alias claude-done="task-master update-subtask --id=$1 --prompt='Implemented with Claude Code'"

# Start new feature
alias claude-feature="task-master next && task-master show $TASK_ID"
```

## Troubleshooting

### Claude Code doesn't see my project context

- Check that `.taskmaster/` directory exists
- Run `task-master generate` to update markdown files
- Verify tasks.json has current project state

### Context seems outdated

- Update task progress regularly
- Use `task-master update-task` to add new information
- Regenerate task files with `task-master generate`

### Too much context for Claude Code

- Focus on specific task IDs with `task-master show --id=X`
- Use task filtering to show only relevant items
- Break large features into smaller, focused tasks

## Community Examples

### Real User Workflows

**@devnightowl**: _"I use Task Manager to plan features, then Claude Code to implement. Game changer - no more explaining my project structure every session."_

**@vibebuilder**: _"The combination is perfect. Task Manager keeps me organized, Claude Code keeps me coding. Both remember where I left off."_

**@3amcoder**: _"Finally, AI that doesn't forget my architecture decisions. My Claude Code sessions are 3x more productive."_

## What's Next

- **Direct Claude Code integration** - Import/export conversations
- **Smart context selection** - Auto-select relevant tasks for Claude Code
- **Collaborative features** - Share project context with team Claude Code sessions

---

**Ready to supercharge your Claude Code workflow?**

[Get Started →](./README.md#how-it-works) | [Join the Community →](https://github.com/minhlucvan/claude-task-manager/discussions)

## Tags

`#ClaudeCode #AIAssistedDevelopment #ProductivityHack #VibeCoding #ContextualAI`
