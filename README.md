# claude-task-manager

<div align="center">
  <img src="./public/logo.png" alt="claude-task-manager" width="120" height="120" />
  
  **A web interface for Claude Task Master**
  
  *Finally, a way to manage AI development that doesn't make you feel like you're juggling 20 browser tabs*

[![Development Status](https://img.shields.io/badge/Status-Active_Development-green?style=for-the-badge)](https://github.com/minhlucvan/claude-task-manager)
[![Contributions Welcome](https://img.shields.io/badge/Contributions-Welcome-brightgreen?style=for-the-badge)](https://github.com/minhlucvan/claude-task-manager/blob/master/CONTRIBUTING.md)
[![Built on Claude Task Master](https://img.shields.io/badge/Built_on-Claude_Task_Master-blue?style=for-the-badge)](https://github.com/eyaltoledano/claude-task-master)

</div>

## 🤔 You know the drill...

You're deep in a coding session with Claude. Things are going great. Then you close the chat, grab some coffee, and when you come back... what were you working on again?

Or maybe you're switching between VS Code, three different Claude chats, your notes app, and trying to remember which AI conversation had that architecture decision you made two days ago.

Yeah, we've all been there.

## 💡 What if there was a better way?

This is a web interface built on top of [Claude Task Master](https://github.com/eyaltoledano/claude-task-master) - that brilliant CLI tool that already solved the "what should I work on next?" problem for thousands of developers.

Claude Task Master figured out how to turn your messy ideas into structured, actionable development plans. This interface just makes it easier to use without living in the terminal.

## 🛠️ How it actually works

**Claude Task Master** (the CLI tool) already does the heavy lifting:

- Takes your requirements and breaks them into tasks
- Manages dependencies between tasks
- Keeps track of what you're working on
- Integrates with multiple AI models
- Maintains project context across sessions

**This interface** just gives you a visual way to:

- See your tasks and progress at a glance
- Upload and parse your PRDs without command line hassles
- Switch between different AI models for different types of work
- Keep your development context organized
- Work with tasks without memorizing CLI commands

Think of it as putting a nice UI on top of a tool that already works really well.

## 📝 The typical workflow

### 1. **Write down what you're building**

Instead of jumping straight into code, start with a Product Requirements Document. Just a text file explaining what you want to build and why. Nothing fancy.

### 2. **Let Claude Task Master break it down**

Upload your PRD and the system generates actual tasks with dependencies. Not vague "build user auth" tasks, but specific, implementable steps that make sense.

### 3. **Pick a task and get to work**

The system tells you what to work on next based on dependencies and priorities. No more staring at your code wondering where to start.

### 4. **Keep context as you go**

Your progress, architectural decisions, and AI conversations all stay connected to your tasks. When you come back tomorrow, you'll remember what you were doing.

## 🎯 What you get

### **Project Planning That Actually Works**

- Upload a PRD, get back a structured roadmap with real tasks
- See which tasks depend on others so you don't build things in the wrong order
- Track progress without losing sight of why you're building something

### **AI Integration That Makes Sense**

- Use different AI models for different types of work (Claude for architecture, GPT for quick fixes, etc.)
- All your AI conversations stay connected to the tasks they relate to
- Built-in research tools when you need to figure out how to implement something

### **Development That Stays Organized**

- Visual dashboard showing what's done, what's next, what's blocked
- Terminal access when you need to run Claude Task Master commands directly
- Everything syncs in real-time, so you're never looking at stale information

### **No Lock-in, No Surprises**

- Works with whatever editor you already use
- Your data stays in standard formats you can export anytime
- Built on Claude Task Master, so you get all the CLI functionality too

## 🚀 Want to try it?

### If you're building solo

You're probably juggling too many tabs and losing track of what you were working on. This might help.

```bash
git clone https://github.com/minhlucvan/claude-task-manager.git
cd claude-task-manager
pnpm install && pnpm dev
```

### If you're managing a technical team

Maybe you're tired of "what should we build next?" meetings and want better visibility into what everyone's actually working on.

### If you're already using Claude Task Master

You know it works great, but maybe you'd prefer clicking around a UI instead of remembering CLI commands.

### Quick setup

```bash
# First, get Claude Task Master set up
npm install -g claude-task-master
task-master init

# Then run this interface
git clone https://github.com/minhlucvan/claude-task-manager.git
cd claude-task-manager
cp .env.example .env.local # Add your AI API keys here
pnpm install && pnpm dev
```

Open `localhost:3000` and see if it makes sense for your workflow.

## 💭 Why this matters

Look, we've all been there. You're using AI for development and it's great until you realize:

- You're constantly asking "what should I work on next?" instead of having a plan
- You lose context every time you close a chat window
- You're switching between 5 different AI conversations trying to remember what you decided
- Your project feels scattered because there's no connecting thread between tasks

**Claude Task Master already solved this problem.** It's a proven system that thousands of developers use to:

- Turn messy requirements into structured development plans
- Keep track of what depends on what
- Maintain context across long-term projects
- Work systematically instead of randomly

This interface just makes it easier to use if you prefer clicking buttons to typing commands.

The core insight is simple: **start with requirements, not code.** Write down what you're building and why, then let AI help you figure out the how. It's the difference between strategic development and just... fixing whatever seems broken today.

## 🛠️ Who's using this?

### Solo developers building their own products

_"I was spending half my morning just figuring out what to work on. Now I actually have a roadmap instead of just a pile of random tasks."_

### Small technical teams

_"We stopped having 'what should we build next?' meetings. Everyone can see what's next and how it connects to everything else."_

### People already using Claude Task Master

_"I love the CLI but sometimes I just want to see everything laid out visually. This scratches that itch perfectly."_

The common thread? People who want to work systematically with AI instead of just bouncing around between random conversations.

## 🔧 Development status

This is pretty early stage stuff. The core functionality works (it's built on Claude Task Master, which definitely works), but we're still figuring out the best ways to present everything visually.

**What that means:**

- Things will change frequently as we learn what actually helps people
- Some features might break or get redesigned based on feedback
- Good time to influence how this develops if you have opinions about it

If you're okay with that, come help us figure out what this should become.

### 🤝 Ways to help

**Use it and tell us what's confusing.** The biggest help right now is just trying it out and letting us know what doesn't make sense or could work better.

**If you code:** Look at the GitHub issues. There are usually some good starter tasks marked.

**If you don't code:** Your perspective on what's intuitive vs confusing is really valuable. Most of us building this are pretty deep in the CLI world.

**If you're already using Claude Task Master:** You probably have opinions about what a UI for it should look like. Those opinions are exactly what we need to hear.

## 🗺️ What's coming

### ✅ **What works now**

- Basic task management with visual interface for Claude Task Master
- PRD upload and task generation
- Multiple AI model support
- Progress tracking and dependency visualization

### 🚧 **Currently working on**

- Better ways to organize and filter tasks
- Documentation that stays connected to your tasks
- Managing multiple AI agents for different types of work
- Team collaboration features for when you're not working alone

### 🔮 **Ideas for later**

- Smarter suggestions based on your coding patterns
- Natural language interface for creating tasks
- Integration with more development tools
- Analytics to help you understand your development patterns

**Got different ideas?** [Let us know what you think](https://github.com/minhlucvan/claude-task-manager/discussions) - the roadmap changes based on what people actually want to use.

### 🤝 Contributing

Want to help? Cool.

**Quick start:**

1. Fork the repo
2. Make your changes
3. Test them with actual development work (not just toy examples)
4. Open a PR and explain what problem you solved

**Good first contributions:**

- Try the tool and report what's confusing
- Fix UI bugs or make things more intuitive
- Add support for more AI models
- Improve the documentation

Look for [`good first issue`](https://github.com/minhlucvan/claude-task-manager/labels/good%20first%20issue) tags if you want something specific to work on.

## 💬 Community

**Places to hang out:**

- **[GitHub Issues](https://github.com/minhlucvan/claude-task-manager/issues)** - Bug reports, feature requests, general discussion
- **[GitHub Discussions](https://github.com/minhlucvan/claude-task-manager/discussions)** - Broader conversations about AI development workflows
- **[Discord](https://discord.gg/your-server)** - Real-time chat if that's your thing

**What people talk about:**

- How they're using Claude Task Master + this interface
- What's confusing or could work better
- Ideas for new features
- General AI development workflow stuff

Come by if you want to chat about any of that.

## 📄 License

MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 🙏 Credits

- **[Claude Task Master](https://github.com/eyaltoledano/claude-task-master)** - The brilliant CLI tool that this interface is built on
- **[shadcn/ui](https://ui.shadcn.com/)** - UI components
- **[Radix UI](https://www.radix-ui.com/)** - Primitive components

---

<div align="center">
  <p>Built by developers who got tired of losing track of their AI conversations.</p>
  
  <p>
    <a href="https://github.com/minhlucvan/claude-task-manager">⭐ Star</a> • 
    <a href="https://github.com/minhlucvan/claude-task-manager/fork">🍴 Fork</a> • 
    <a href="https://github.com/minhlucvan/claude-task-manager/discussions">💬 Discuss</a>
  </p>
</div>
