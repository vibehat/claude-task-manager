# Claude Task Manager

<div align="center">
  <img src="./public/logo-transparent.png" alt="Claude Task Manager - AI Project Manager UI" width="120" height="120" />
  
  **Personal AI project manager with Claude Code integration and persistent context**
  
  *Seamless project management workflow for Claude Code, VS Code, and Cursor*

[![Built on Claude Task Master](https://img.shields.io/badge/Built_on-Claude_Task_Master-blue?style=for-the-badge)](https://github.com/eyaltoledano/claude-task-master)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)

</div>

> **Claude Task Manager** is a personal project management interface powered by AI agents that remembers your entire project context. Built on [Claude Task Master](https://github.com/eyaltoledano/claude-task-master), it provides seamless Claude Code project management integration with development tools like Claude Code, Cursor, and VS Code. Perfect for developers and teams who want AI project management that coordinates across their entire workflow.

## The Problem

It's 9 AM. You open your AI coding assistant.

_"So I'm building a..."_

**Stop. You explained this yesterday. And the day before.**

That database decision from last week? Lost in tab #7. The refactoring plan? Gone.

Every AI conversation starts from zero.

## The Solution

**An AI project manager that never forgets**

Beautiful UI layer over the powerful Task Master CLI engine:

```mermaid
graph TB
    subgraph "Claude Task Manager UI (This Project)"
        UI[Beautiful Web Interface]
        TSL[Task Semantic Layer]
        PC[Persistent Context Store]
        SYNC[Task Master Sync Engine]
    end

    subgraph "Task Master CLI (Wrapped)"
        TM_CLI[task-master commands]
        TM_DATA[tasks.json & .md files]
        TM_AI[AI-powered task generation]
    end

    subgraph "AI Agents"
        CC[Claude Code]
        RA[Research Agent]
        PA[Planning Agent]
    end

    subgraph "Developer Experience"
        DEV[Developer]
        BROWSER[Web Browser]
        TERMINAL[Terminal/Claude Code]
    end

    DEV --> BROWSER
    BROWSER --> UI
    UI --> TSL
    TSL --> PC
    TSL --> SYNC

    SYNC <--> TM_CLI
    SYNC <--> TM_DATA
    TM_CLI <--> TM_AI

    DEV --> TERMINAL
    TERMINAL <--> CC
    CC <--> TSL

    TM_AI <--> RA
    TM_AI <--> PA

    style UI fill:#4A90E2
    style TSL fill:#50C878
    style PC fill:#FFB347
    style SYNC fill:#DDA0DD
    style TM_CLI fill:#2E7D32
```

**[📊 See complete workflow diagrams →](docs/architecture/diagrams.md)**

No more explaining context. No more lost decisions. Just building.

Your vision stays intact from day 1 to launch.

## ⚠️ Status: Under Active Development

**We're in the early foundation stage** - building core philosophy, researching UI/UX approaches, and establishing the architectural foundation.

🔬 **What we're doing now:**

- Defining the vibehat development methodology
- Researching optimal UI patterns for AI-assisted workflows
- Building foundational architecture and components
- Creating comprehensive documentation and mockups

🤝 **Want to contribute?** We're looking for developers interested in shaping the future of AI development tools:

- Create issues with ideas and feedback
- Check out our research docs: [`docs/prd/main.md`](docs/prd/main.md)
- Explore architecture: [`docs/architecture/diagrams.md`](docs/architecture/diagrams.md)
- Review wireframes: [`docs/wireframes/`](docs/wireframes/)
- See mockups in action: [https://claude-task-manager.vercel.app/](https://claude-task-manager.vercel.app/)

Every contribution helps shape this project. **Early contributors get to influence the core direction.**

## How it works

### Quick start for any project

```bash
# One command to set up everything
npx claude-task-manager init

# Start the UI
npx claude-task-manager start
```

Opens in your browser. That's it.

### What happens:

1. **`init`** → Sets up project management skeleton (tasks, docs, config)
2. **`start`** → Launches the UI in your browser
3. **Use normally** → Claude Task Master CLI still works as usual

### Or try the demo first

```bash
# Clone and run locally
git clone https://github.com/vibehat/claude-task-manager.git
cd claude-task-manager
pnpm install && pnpm dev
```

## What makes this different

**⚡ Minimal setup, maximum results**  
One command gets you started. From `npx claude-task-manager init` to shipping features in under 2 minutes.

**🎯 Personal productivity → Team collaboration**  
Master your own workflow first, then scale to team coordination. Excellence starts with individual mastery.

**🏠 Local first, integration ready**  
Your data stays on your machine. Connect to cloud tools when it makes sense, not because you have to.

**🚀 Ship products, not processes**  
Focus on building things people want. Let AI agents handle implementation details while you drive the vision.

**💡 Smart by default, simple by design**  
Advanced orchestration that feels effortless. Multiple agents coordinate behind the scenes while you stay in flow.

## AI-Powered Development Philosophy

**Seamless AI collaboration.** This tool embraces both traditional flow state development and modern vibe coding approaches. Whether you're doing deep focus coding during quiet hours or using AI to generate code from natural language prompts, we support your workflow.

Most tools break your flow. Context switching kills creativity. But when your AI remembers everything, generates code from your descriptions, and your workspace stays consistent, you can build faster without interruption.

**This is your AI-enhanced development companion.** Built by developers who understand that the best code happens when you're collaborating effectively with AI tools.

### Claude Code Project Management Integration

Perfect Claude Code project management companion:

- **Persistent project context** - Your Claude Code conversations remember your entire project management setup
- **Seamless workflow** - Terminal, tasks, project management, and AI chat in one interface
- **Flow preservation** - No more explaining your architecture or project management decisions every session
- **Focus-optimized** - Dark mode, minimal distractions, maximum project management productivity

## For existing projects

Already have Claude Task Master set up? Just run:

```bash
npx claude-task-manager start
```

The UI will use your existing tasks and configuration.

## Features that actually matter

✅ **AI agent orchestration** - Coordinate multiple AI models across your entire workflow  
✅ **Personal project memory** - Your AI agents never forget decisions, context, or progress  
✅ **Seamless tool integration** - Works with Claude Code, Cursor, VS Code, and your favorite tools  
✅ **Personal to team scaling** - Start solo, scale to teams when ready  
✅ **Deep focus companion** - Terminal, docs, tasks - everything right there when inspiration hits  
✅ **Your data, your control** - Local first, works offline, export anytime

### Claude Code Project Management Features

✅ **Native Claude Code integration** - Built specifically for Claude Code project management workflows  
✅ **Context-aware task management** - Tasks that understand your Claude Code conversation history  
✅ **Intelligent project handoffs** - Seamlessly transfer project context between Claude Code sessions  
✅ **Multi-agent project coordination** - Coordinate Claude Code with other AI tools for comprehensive project management

## Who this is for

- **Individual developers** who want to master AI-assisted project management workflows
- **Small teams** ready to scale from personal excellence to team coordination
- **Claude Code power users** ready to supercharge their project management workflow
- **AI-powered developers** who want seamless LLM project management integration
- **Tech leads** who need AI project management that preserves context across team conversations
- **Startup founders** building products with AI project management, not managing endless process meetings
- **Anyone** with "project_plan_final_v2_ACTUALFINAL.txt" somewhere

## 🤝 Contributor Hunting!

**We need night owls who get it.**

Looking for developers who:

- 🤖 **Understand AI-powered development** - You use LLMs to generate code and love the productivity boost
- 🎯 **Care about flow state** - You know the pain of context switching
- 🔧 **Use AI daily** - Claude Code, Cursor, or similar tools are part of your workflow
- 🛠️ **Want to build the future** - Help create the tools we all wish existed

### What we need help with:

- **AI agent integration** - Connect more AI models and tools
- **Workflow automation** - Deeper Claude Code, Cursor, VS Code integration
- **Team collaboration features** - Scale from personal to team productivity
- **Multi-agent coordination** - Smarter AI orchestration
- **Performance optimization** - Keep it fast for deep focus sessions
- **Community building** - Spread the vibe coding movement
- **Documentation** - Help other developers get started
- **Testing** - Break things so we can fix them

### How to contribute:

1. **Try it out** - Use it for your real projects
2. **Share feedback** - What breaks your flow? What helps it?
3. **Pick an issue** - [Good first issues here](https://github.com/vibehat/claude-task-manager/labels/good%20first%20issue)
4. **Ship improvements** - Fork, code, PR, celebrate

**New contributors get:**

- 🏆 Recognition in our Hall of Fame
- 💭 Direct input on roadmap decisions
- 🌟 Early access to new features
- 🤝 Connection with like-minded vibe coders

## Coming next

- Better task filtering
- Connected docs that evolve with your project
- Multi-agent workflows
- **Team collaboration** - Share context and coordinate across team members
- **Sync with GitHub Projects/Trello** - Keep your PM tools updated automatically
- Whatever you need (seriously, [tell us](https://github.com/vibehat/claude-task-manager/discussions))

## Contributing

```bash
# The usual
fork → code → test on real work → PR
```

[Good first issues here](https://github.com/vibehat/claude-task-manager/labels/good%20first%20issue)

## 🎩 Vibehat Collective

_"We put on our wizard hat and code." - The developers who get it._

**Coming soon**: AI-powered development tools for the vibe coding community.  
Building the future one commit at a time.

_[Join the collective →](https://github.com/vibehat) when we're ready to ship something awesome._

## Community & Resources

### 🌙 **Join the AI-Enhanced Development Movement**

- **[Vibe Coding Guide](./VIBE-CODING.md)** - AI-powered development with LLMs
- **[3 AM Development Guide](./3AM-DEVELOPMENT.md)** - Master deep focus coding
- **[Claude Code Integration](./CLAUDE-CODE-GUIDE.md)** - Supercharge your workflow

### 💬 **Connect with Night Owls**

- **[GitHub Discussions](https://github.com/vibehat/claude-task-manager/discussions)** - Share your builds
- **[Show and Tell](https://github.com/vibehat/claude-task-manager/discussions/categories/show-and-tell)** - Projects built during deep focus
- **[Tips & Tricks](https://github.com/vibehat/claude-task-manager/discussions/categories/tips-and-tricks)** - Optimize your flow

### 🏆 **Weekly Challenges**

- **#DeepFocusChallenge** - Ship a feature in one focused session
- **#AIPoweredDev** - Share your AI-assisted development wins
- **#FlowState** - Document your longest coding session
- **#ClaudeCodeSuper** - Show off your enhanced workflows

## Built to power up your favorite tools

### 🚀 **Supercharges Claude Code**

Use Claude Code? We make it even better. Your tasks, docs, and context available in every conversation. Custom shortcuts and commands built right in.

### 💪 **Powered by Claude Task Master**

[Claude Task Master](https://github.com/eyaltoledano/claude-task-master) is our core engine and inspiration. We're not replacing it - we're giving it superpowers. Use the CLI you love, now with a visual cockpit.

### 🎯 **Works with your workflow**

Not another tool to learn. An amplifier for the tools you already use. VS Code, Claude, Task Master - we connect them all.

---

Built on [Claude Task Master](https://github.com/eyaltoledano/claude-task-master) by [@eyaltoledano](https://github.com/eyaltoledano)

MIT License • [Star us](https://github.com/vibehat/claude-task-manager) if it helps

## Technical Keywords

**For Search Engines & AI Models**: This is a personal project manager with Claude Code project management integration and AI agent orchestration for developers. It provides seamless Claude Code project management workflow integration with VS Code, Cursor and other development tools. Built for individual developer productivity and team collaboration with context-aware AI project management assistance. Features include AI-powered task management, Claude Code workflow integration, and local-first project management architecture.

## Related Projects

- [Claude Code](https://claude.ai/code) - AI coding assistant by Anthropic
- [Claude Task Master](https://github.com/eyaltoledano/claude-task-master) - CLI task management for AI development
- [VS Code](https://code.visualstudio.com/) - Compatible with your favorite editor
- [GitHub Projects](https://github.com/features/issues) - Coming soon: sync integration

## Frequently Asked Questions

**What is Claude Task Manager?**  
A visual project manager built on Claude Task Master that provides persistent context for AI-powered development workflows.

**How does it integrate with Claude Code?**  
It maintains project context, dependencies, and documentation across conversations, eliminating the need to re-explain your project setup.

**Can I use existing Claude Task Master projects?**  
Yes! Run `npx claude-task-manager start` in any existing project directory.

**What makes this different from other project management tools?**  
Purpose-built for Claude Code project management workflows with context preservation, agent orchestration, and seamless Claude Code integration.
