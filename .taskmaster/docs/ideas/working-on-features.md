# Working On Page - AI-Agent Collaboration Orchestration

## Executive Summary

The "Working On" page evolves from a working memory interface into an **AI-Agent Collaboration Orchestration Layer**. It solves the fundamental problem of context fragmentation in AI-assisted development by becoming the central hub that bridges Task Master CLI (planning) with AI agents (execution), enabling developers to maintain flow state across multiple concurrent AI-assisted tasks.

**Core Innovation**: Transform context reconstruction from a human memory problem into a systematic orchestration challenge, where the Working On page maintains, enriches, and transfers context between planning tools and AI execution agents.

## Core Problem Statement

### Original Problem

**Context loss across sessions** - developers waste time reconstructing "where was I and why was I doing it this way" when returning to work after hours/days.

### Expanded Problem with AI Collaboration

**Context fragmentation across AI tools** - developers now face:

- Loss of context between AI sessions (Claude, Cursor, Copilot)
- No structured way to track AI-assisted task progress
- Manual context reconstruction for each AI interaction
- Inability to manage multiple AI-assisted workflows simultaneously
- No persistence of AI conversation history linked to tasks

### The Opportunity

By integrating Task Master CLI with a purpose-built orchestration interface, we can create a system where:

- Context flows seamlessly from planning → execution → review
- Multiple AI agents can collaborate on different aspects of a project
- Developers guide rather than directly execute
- Progress is automatically tracked and persisted

## AI-Agent Collaboration Workflow

### Workflow Stages

#### 1. Ideation → Task Generation

```
User writes PRD in Working On page → Parse with Task Master → Auto-generate task hierarchy
```

#### 2. Task Planning → AI Preparation

```
Select task → Expand into subtasks → Enrich with context → Prepare for AI handoff
```

#### 3. AI Execution → Progress Tracking

```
Launch AI session with context → AI executes → Capture output → Update task status
```

#### 4. Multi-Task Orchestration

```
Switch between tasks → Maintain separate contexts → Resume with full history
```

### Concrete Workflow Example: Building Authentication Feature

#### Step 1: PRD to Tasks

**User Action**: Writes PRD in Working On editor

```markdown
# JWT Authentication System

- Implement JWT-based auth with refresh tokens
- Support role-based access control
- Add session management
- Include rate limiting
```

**System Action**: One-click "Parse PRD" generates:

```
Task 28: Implement JWT authentication system
├── 28.1: Set up auth middleware infrastructure
├── 28.2: Implement JWT token generation/validation
├── 28.3: Create authentication endpoints
├── 28.4: Add refresh token mechanism
├── 28.5: Implement RBAC system
└── 28.6: Add rate limiting
```

#### Step 2: Task Enrichment & Context Building

**User Action**: Selects task 28.2, clicks "Prepare for AI"

**System Action**: Generates rich context:

```typescript
// Context for Task 28.2
{
  task: {
    id: "28.2",
    title: "Implement JWT token generation/validation",
    description: "Create secure JWT implementation...",
    dependencies: ["28.1"],
    acceptanceCriteria: [...],
  },
  projectContext: {
    framework: "Next.js",
    authLibrary: "jsonwebtoken",
    existingPatterns: ["middleware/auth.ts", "lib/jwt.ts"],
  },
  aiInstructions: {
    approach: "Use existing patterns from middleware/auth.ts",
    constraints: ["Must support refresh tokens", "RS256 algorithm"],
    testRequirements: ["Unit tests for all functions"],
  },
  previousAttempts: [], // Historical AI conversations
}
```

#### Step 3: AI Handoff & Execution

**User Action**: Clicks "Start Claude Session"

**System Action**:

- Generates optimized Claude prompt with full context
- Opens Claude Code with pre-filled prompt
- OR sends to Claude API directly
- Maintains session link to task 28.2

**AI Execution**: Claude implements the feature

**User Action**: Reviews implementation, adds notes

```
✅ Implemented JWT generation
✅ Added validation middleware
⚠️ Need to add key rotation logic
```

#### Step 4: Context Persistence & Task Switching

**System Action**:

- Saves AI conversation transcript
- Updates task status
- Preserves implementation notes
- Ready for context switch

**User Action**: Switches to task 28.5 (RBAC)

- Full context for new task loaded
- Previous task state preserved
- Can resume 28.2 anytime with complete history

### Multi-Agent Collaboration Patterns

#### Pattern 1: Sequential Handoff

```
Planning Agent (Task Master) → Implementation Agent (Claude) → Review Agent (Cursor) → Testing Agent (Copilot)
```

#### Pattern 2: Parallel Execution

```
Frontend Tasks → Claude Code
Backend Tasks → Cursor
Documentation → GitHub Copilot
All orchestrated through Working On page
```

#### Pattern 3: Specialized Agents

```
Architecture decisions → Claude with research mode
Implementation → Cursor with codebase context
Bug fixes → GitHub Copilot with error context
Refactoring → Claude Code with full file context
```

## Task Master CLI Integration Points

### Direct Integration Features

#### 1. Command Palette Integration

```typescript
// Natural language to Task Master commands
"Show me what to work on next" → task-master next
"Break this down further" → task-master expand --id=<current>
"Mark this complete" → task-master set-status --id=<current> --status=done
```

#### 2. Visual Task Hierarchy

- Render `task-master list` output as interactive tree
- Drag-and-drop for `task-master move` operations
- Visual dependency graph from `task-master validate-dependencies`

#### 3. Research Integration

```typescript
// In-page research panel
interface ResearchPanel {
  query: (prompt: string) => Promise<TaskMasterResearch>;
  saveToTask: (taskId: string, research: Research) => void;
  displayMode: 'inline' | 'sidebar' | 'modal';
}
```

#### 4. Real-time Status Sync

- WebSocket connection to Task Master daemon
- Auto-refresh on file changes to tasks.json
- Optimistic UI updates with rollback

### Context Enrichment Pipeline

```typescript
interface ContextEnrichment {
  // Base task from Task Master
  baseTask: TaskMasterTask;

  // Enrichments
  codebaseContext: {
    relatedFiles: string[];
    recentChanges: GitCommit[];
    testFiles: string[];
  };

  aiContext: {
    previousConversations: AIConversation[];
    successfulPatterns: CodePattern[];
    projectConventions: Convention[];
  };

  executionContext: {
    currentBranch: string;
    environment: Environment;
    dependencies: PackageInfo[];
  };
}
```

## UI/UX Design Evolution

### Layout Concept: AI Orchestration Dashboard

```
┌─────────────────────────────────────────────────────────┐
│ Working On: Authentication System          [Team] [Sync] │
├─────────────────────────────────────────────────────────┤
│ ┌─────────────────┐ ┌─────────────────────────────────┐ │
│ │ Active Tasks    │ │ Current Focus: Task 28.2       │ │
│ │                 │ │ JWT Token Implementation       │ │
│ │ 28.2 [→Claude]  │ │                                │ │
│ │ ▓▓▓▓▓░░░ 60%   │ │ Status: AI Implementing        │ │
│ │                 │ │ Next: Review generateToken()   │ │
│ │ 28.5 [Waiting]  │ │                                │ │
│ │ ░░░░░░░░ 0%    │ │ [Continue with Claude]         │ │
│ │                 │ │ [View AI Conversation]         │ │
│ │ 29.1 [Ready]    │ │ [Update Task Status]           │ │
│ │ ░░░░░░░░ 0%    │ │                                │ │
│ └─────────────────┘ │ Context Requirements:          │ │
│                     │ - Use RS256 algorithm          │ │
│ ┌─────────────────┐ │ - Support refresh tokens       │ │
│ │ Quick Actions   │ │ - Follow auth patterns         │ │
│ │                 │ └─────────────────────────────────┘ │
│ │ [+ New Task]    │                                     │
│ │ [⟳ Sync TM]     │ ┌─────────────────────────────────┐ │
│ │ [🔍 Research]   │ │ AI Activity Feed               │ │
│ │ [📋 Copy Ctx]   │ │                                │ │
│ └─────────────────┘ │ 3:42pm - Claude started 28.2   │ │
│                     │ 3:45pm - Generated JWT utils   │ │
│ ┌─────────────────┐ │ 3:47pm - Added validation     │ │
│ │ Blocked Tasks   │ │ 3:48pm - Awaiting review      │ │
│ │                 │ └─────────────────────────────────┘ │
│ │ 28.3 → 28.2     │                                     │
│ │ 28.4 → 28.2     │                                     │
│ └─────────────────┘                                     │
└─────────────────────────────────────────────────────────┘
```

### Key UI Components

#### 1. Task Card with AI Status

```typescript
interface AITaskCard {
  task: TaskMasterTask;
  aiStatus: 'idle' | 'preparing' | 'executing' | 'reviewing' | 'blocked';
  activeAgent?: 'claude' | 'cursor' | 'copilot' | 'custom';
  progress: {
    subtasksComplete: number;
    subtasksTotal: number;
    lastActivity: Date;
  };
  quickActions: ['continue', 'switch-agent', 'view-history', 'update-context'];
}
```

#### 2. Context Builder Interface

```typescript
interface ContextBuilder {
  // Automatic context gathering
  gatherProjectContext(): ProjectContext;
  gatherTaskContext(taskId: string): TaskContext;
  gatherCodeContext(patterns: string[]): CodeContext;

  // Manual context enrichment
  addCustomInstructions(text: string): void;
  includeFiles(paths: string[]): void;
  setConstraints(constraints: Constraint[]): void;

  // Context templates
  templates: {
    'feature-implementation': ContextTemplate;
    'bug-fix': ContextTemplate;
    'refactoring': ContextTemplate;
    'architecture': ContextTemplate;
  };
}
```

#### 3. AI Conversation Manager

```typescript
interface ConversationManager {
  conversations: Map<TaskId, AIConversation[]>;

  startConversation(taskId: string, agent: AIAgent): ConversationId;
  appendToConversation(convId: string, exchange: Exchange): void;
  extractDecisions(convId: string): Decision[];
  extractCodeChanges(convId: string): CodeChange[];

  // Conversation analysis
  findSimilarConversations(task: Task): Conversation[];
  extractPatterns(conversations: Conversation[]): Pattern[];
}
```

#### 4. Progress Visualization

- Subtask completion bars (not percentages)
- AI activity indicators (thinking, blocked, needs-input)
- Dependency flow visualization
- Time-in-state metrics

### Natural Language Command Interface

```typescript
interface NaturalCommandProcessor {
  // Parse natural language to Task Master commands
  parse(input: string): TaskMasterCommand;

  // Suggestions based on context
  suggest(context: WorkingContext): Suggestion[];

  // Command history and learning
  history: CommandHistory;
  learnFromUsage(command: string, actual: TaskMasterCommand): void;
}

// Example mappings
"What should I do next?" → task-master next
"Break this down more" → task-master expand --id=<current>
"I'm stuck on this" → task-master research --prompt="<current-task> <user-input>"
"This is done" → task-master set-status --id=<current> --status=done
```

## Technical Architecture

### State Management

```typescript
interface WorkingOnState {
  // Active task management
  activeTasks: TaskId[];
  currentFocus: TaskId | null;
  taskStates: Map<TaskId, TaskState>;

  // AI conversation state
  conversations: Map<TaskId, ConversationState>;
  activeAgents: Map<TaskId, AIAgent>;

  // Context persistence
  savedContexts: Map<TaskId, SavedContext>;
  contextHistory: ContextHistoryEntry[];

  // Task Master sync
  taskMasterConnection: TMConnection;
  lastSync: Date;
  syncStatus: 'synced' | 'syncing' | 'error';
}
```

### MCP (Model Context Protocol) Integration

```typescript
interface TaskMasterMCP {
  // Direct command execution
  execute(command: string, args: Record<string, any>): Promise<Result>;

  // Streaming responses for long operations
  stream(command: string, args: Record<string, any>): AsyncGenerator<Update>;

  // File watching
  watchTasks(callback: (changes: TaskChange[]) => void): Unsubscribe;

  // Batch operations
  batch(operations: Operation[]): Promise<Result[]>;
}
```

### Context Transfer Protocol

```typescript
interface ContextTransfer {
  // Serialize context for AI handoff
  serialize(task: Task, enrichments: Enrichment[]): string;

  // Format for specific AI tools
  formatForClaude(context: Context): ClaudePrompt;
  formatForCursor(context: Context): CursorContext;
  formatForCopilot(context: Context): CopilotPrompt;

  // Capture AI outputs
  captureResponse(agent: AIAgent, response: Response): CapturedContext;
  extractArtifacts(response: Response): Artifact[];
}
```

## Implementation Roadmap

### Phase 1: Foundation (Weeks 1-2)

- [ ] Basic Working On page with task display
- [ ] Task Master CLI integration via exec
- [ ] Simple context copy functionality
- [ ] Task status updates

### Phase 2: Context Management (Weeks 3-4)

- [ ] Context builder UI
- [ ] AI conversation storage
- [ ] Task-conversation linking
- [ ] Context templates

### Phase 3: AI Integration (Weeks 5-6)

- [ ] Claude Code integration
- [ ] Prompt generation
- [ ] Response capture
- [ ] Progress tracking

### Phase 4: Advanced Features (Weeks 7-8)

- [ ] Multi-agent support
- [ ] Natural language commands
- [ ] Research integration
- [ ] Team collaboration

## Challenges & Questions

### Technical Challenges

1. **State Synchronization**: How to keep UI in sync with Task Master CLI file changes?
2. **AI Response Parsing**: How to reliably extract code and decisions from AI outputs?
3. **Context Size Management**: How to handle large codebases without exceeding token limits?
4. **Multi-Agent Coordination**: How to prevent context conflicts between different AI tools?

### UX Challenges

1. **Information Density**: How to show enough context without overwhelming?
2. **Modal vs Non-Modal**: Should AI conversations be inline or in separate windows?
3. **Progress Indicators**: How to show AI "thinking" in a meaningful way?
4. **Error Recovery**: How to handle when AI goes off track?

### Integration Questions

1. **Depth of Integration**: Should we wrap Task Master CLI or integrate at API level?
2. **AI Tool Support**: Which AI tools to prioritize beyond Claude?
3. **Extensibility**: How to allow custom AI agent integration?
4. **Security**: How to handle sensitive code context?

## Advanced Integration Possibilities

### 1. Intelligent Context Gathering

```typescript
// Automatically analyze codebase to gather relevant context
interface SmartContext {
  analyzeImports(file: string): RelatedFile[];
  findSimilarPatterns(task: Task): CodeExample[];
  suggestTestFiles(implementation: string): TestFile[];
  detectConventions(codebase: string): Convention[];
}
```

### 2. AI Response Analysis

```typescript
// Parse and validate AI outputs
interface ResponseAnalyzer {
  extractCode(response: string): CodeBlock[];
  validateSyntax(code: CodeBlock): ValidationResult;
  detectAntiPatterns(code: CodeBlock): Issue[];
  suggestImprovements(code: CodeBlock): Improvement[];
}
```

### 3. Workflow Automation

```typescript
// Automatic workflow progression
interface WorkflowEngine {
  rules: WorkflowRule[];

  onTaskComplete(task: Task): NextAction[];
  onAIResponse(response: Response): AutomatedAction[];
  onError(error: Error): RecoveryAction[];
}
```

### 4. Team Collaboration Features

```typescript
interface TeamFeatures {
  // Task assignment based on expertise
  suggestAssignee(task: Task): Developer;

  // Context sharing
  shareContext(task: Task, team: Team): void;
  mergeContexts(contexts: Context[]): MergedContext;

  // AI conversation sharing
  shareConversation(conv: Conversation, team: Team): void;
  annotateConversation(conv: Conversation, notes: Note[]): void;
}
```

## Success Metrics

### Developer Productivity

- Time from idea to implementation
- Context switch time reduction
- AI interaction efficiency
- Task completion velocity

### Code Quality

- AI-generated code acceptance rate
- Bug density in AI-assisted code
- Test coverage maintenance
- Convention adherence

### Developer Experience

- Flow state maintenance
- Cognitive load reduction
- Tool satisfaction scores
- Adoption rates

## Next Steps

1. **Validate Core Workflow** - Test with real development tasks
2. **Build MVP** - Focus on Task Master integration and context persistence
3. **Integrate Claude Code** - Create seamless handoff mechanism
4. **Measure Impact** - Track productivity and satisfaction metrics
5. **Iterate Based on Usage** - Refine based on real developer feedback

---

_Session Date: January 2025_  
_Status: Comprehensive Vision Defined_  
_Next Phase: MVP Implementation_

## Appendix: Example Task Master Integration Code

```typescript
// Example of Working On page integrating with Task Master
class WorkingOnTaskMaster {
  private mcp: TaskMasterMCP;
  private state: WorkingOnState;

  async loadActiveTasks(): Promise<Task[]> {
    const tasks = await this.mcp.execute('get_tasks', {
      status: 'in-progress,pending',
      withSubtasks: true,
    });

    return this.enrichTasksWithContext(tasks);
  }

  async prepareAIContext(taskId: string): Promise<AIContext> {
    const task = await this.mcp.execute('get_task', { id: taskId });
    const research = await this.mcp.execute('research', {
      query: `Implementation approach for: ${task.title}`,
      taskIds: taskId,
      includeProjectTree: true,
    });

    return {
      task,
      research,
      codebaseContext: await this.gatherCodeContext(task),
      previousAttempts: this.state.conversations.get(taskId) || [],
      projectConventions: await this.detectConventions(),
    };
  }

  async handoffToAI(taskId: string, agent: AIAgent): Promise<void> {
    const context = await this.prepareAIContext(taskId);
    const prompt = this.formatPromptForAgent(context, agent);

    // Store handoff state
    this.state.activeAgents.set(taskId, agent);
    this.state.taskStates.get(taskId).status = 'ai-executing';

    // Execute handoff based on agent type
    switch (agent) {
      case 'claude':
        await this.handoffToClaude(prompt, context);
        break;
      case 'cursor':
        await this.handoffToCursor(prompt, context);
        break;
      // ... other agents
    }
  }

  private async handoffToClaude(prompt: string, context: AIContext): Promise<void> {
    // Option 1: Copy to clipboard with instructions
    await navigator.clipboard.writeText(prompt);
    this.showNotification('Context copied! Open Claude Code and paste to begin.');

    // Option 2: Direct API integration (if available)
    // const response = await claudeAPI.complete(prompt);
    // this.captureResponse(context.task.id, response);

    // Option 3: File-based handoff
    // await fs.writeFile('.claude-context.md', prompt);
    // await exec('claude --file .claude-context.md');
  }
}
```
