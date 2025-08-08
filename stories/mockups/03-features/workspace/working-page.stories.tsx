import type { Meta, StoryObj } from '@storybook/react';
import WorkingPage from './WorkingPage';

const meta: Meta<typeof WorkingPage> = {
  title: 'Mockups/03-Features/Workspace/Working Page',
  component: WorkingPage,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# Working On Page - Human Orchestration Center

The Working On Page serves as the strategic command center where human insight meets AI capability through seamless context flow and intelligent task orchestration.

## Features Demonstrated

### State Management
- **No Active Task**: Smart workflow suggestions and project bootstrap options
- **Planning/Research**: Strategic planning tools, research capabilities, and requirement gathering
- **AI Direction**: Monitoring AI agents, providing oversight, and course corrections
- **Complete Handoff**: High-level progress tracking while AI works autonomously
- **Multi-Task Orchestration**: Coordinating multiple concurrent tasks with different AI agents
- **Bootstrap from Nothing**: Guided workflows for project initialization

### Component Architecture
- **TaskFocusCard**: Current task context with progress tracking and strategic actions
- **WorkflowSuggestionsPanel**: Intelligent recommendations based on project state
- **AIAgentCoordination**: Interface for directing and monitoring AI agents
- **BootstrapWizard**: Guided project setup with research, PRD, and rapid bootstrap options
- **MultiTaskOrchestration**: Concurrent task management with workload balancing
- **TaskMasterCommands**: Integration with Task Master CLI and MCP tools

### Responsive Design
- **Mobile Layout**: Task-focused experience with streamlined actions
- **Desktop Layout**: Multi-panel dashboard with comprehensive orchestration tools

### Key UX Patterns
- **Progressive Disclosure**: Information revealed based on context and user needs
- **Contextual Actions**: Available actions adapt to task state and orchestration phase
- **Natural Language Interface**: Chat-like AI direction rather than complex forms
- **Visual Status Tracking**: Real-time AI agent progress without constant interruption

The mockup demonstrates the complete workflow from idea conception through AI-powered implementation, emphasizing human strategic oversight and AI execution coordination.
        `,
      },
    },
  },
  argTypes: {
    state: {
      control: { type: 'select' },
      options: [
        'no-active-task',
        'planning-research',
        'ai-direction',
        'complete-handoff',
        'multi-task-orchestration',
        'bootstrap-from-nothing',
      ],
      description: 'Current working state of the orchestration interface',
    },
    viewMode: {
      control: { type: 'select' },
      options: ['mobile', 'desktop'],
      description: 'Display mode for responsive design',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Sample data for stories
const sampleTask = {
  id: '28.2',
  title: 'JWT Token Implementation',
  description: 'Implement secure JWT token generation and validation system',
  status: 'in-progress' as const,
  priority: 'high' as const,
  phase: 'AI Implementation',
  complexity: 8,
  subtasks: [
    {
      id: '28.2.1',
      title: 'Research security patterns',
      status: 'completed' as const,
      assignedTo: 'human' as const,
    },
    {
      id: '28.2.2',
      title: 'Token generation logic',
      status: 'in-progress' as const,
      assignedTo: 'ai' as const,
      aiAgent: 'Claude',
    },
    {
      id: '28.2.3',
      title: 'Validation middleware',
      status: 'in-progress' as const,
      assignedTo: 'ai' as const,
      aiAgent: 'Claude',
    },
    { id: '28.2.4', title: 'Unit tests', status: 'pending' as const, assignedTo: 'ai' as const },
    { id: '28.2.5', title: 'Documentation', status: 'pending' as const },
  ],
};

const sampleActiveTasks = [
  {
    ...sampleTask,
    status: 'in-progress' as const,
  },
  {
    id: '30.1',
    title: 'API Documentation',
    status: 'pending' as const,
    priority: 'medium' as const,
    phase: 'Strategic Planning',
  },
  {
    id: '31.4',
    title: 'Rate Limiting Implementation',
    status: 'blocked' as const,
    priority: 'high' as const,
    dependencies: ['28.2'],
  },
];

const sampleAIAgents = [
  {
    id: 'claude-1',
    name: 'Claude',
    status: 'working' as const,
    currentTask: 'JWT Implementation',
    duration: '45 minutes',
    progress: 'Writing validation middleware',
    files: ['jwt-service.ts', 'auth-middleware.ts'],
    lastUpdate: 'Added refresh token rotation',
  },
  {
    id: 'claude-2',
    name: 'Claude Assistant',
    status: 'idle' as const,
  },
];

// Story definitions
export const DesktopNoActiveTask: Story = {
  args: {
    state: 'no-active-task',
    viewMode: 'desktop',
    currentTask: null,
    activeTasks: [],
    aiAgents: [],
  },
  parameters: {
    viewport: { defaultViewport: 'desktop' },
    docs: {
      description: {
        story:
          'Desktop layout when no task is active, showing smart workflow suggestions and project context.',
      },
    },
  },
};

export const DesktopWithActiveTask: Story = {
  args: {
    state: 'ai-direction',
    viewMode: 'desktop',
    currentTask: sampleTask,
    activeTasks: [sampleTask],
    aiAgents: sampleAIAgents,
  },
  parameters: {
    viewport: { defaultViewport: 'desktop' },
    docs: {
      description: {
        story:
          'Desktop layout with active task showing AI agent coordination and strategic oversight interface.',
      },
    },
  },
};

export const DesktopMultiTaskMode: Story = {
  args: {
    state: 'multi-task-orchestration',
    viewMode: 'desktop',
    activeTasks: sampleActiveTasks,
    aiAgents: sampleAIAgents,
  },
  parameters: {
    viewport: { defaultViewport: 'desktop' },
    docs: {
      description: {
        story:
          'Multi-task orchestration mode with concurrent task coordination and AI agent management.',
      },
    },
  },
};

export const DesktopBootstrapMode: Story = {
  args: {
    state: 'bootstrap-from-nothing',
    viewMode: 'desktop',
  },
  parameters: {
    viewport: { defaultViewport: 'desktop' },
    docs: {
      description: {
        story:
          'Bootstrap interface for starting new projects from scratch with guided workflow options.',
      },
    },
  },
};

export const MobileTaskFocus: Story = {
  args: {
    state: 'ai-direction',
    viewMode: 'mobile',
    currentTask: sampleTask,
    aiAgents: sampleAIAgents,
  },
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
    docs: {
      description: {
        story: 'Mobile-optimized task focus interface with streamlined AI coordination controls.',
      },
    },
  },
};

export const MobileNoActiveTask: Story = {
  args: {
    state: 'no-active-task',
    viewMode: 'mobile',
    currentTask: null,
    aiAgents: [],
  },
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
    docs: {
      description: {
        story:
          'Mobile layout for workflow suggestions when no task is active, with touch-optimized interface.',
      },
    },
  },
};

export const MobileBootstrap: Story = {
  args: {
    state: 'bootstrap-from-nothing',
    viewMode: 'mobile',
  },
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
    docs: {
      description: {
        story: 'Mobile bootstrap experience with guided project setup workflows.',
      },
    },
  },
};

export const PlanningPhase: Story = {
  args: {
    state: 'planning-research',
    viewMode: 'desktop',
    currentTask: {
      ...sampleTask,
      status: 'pending',
      phase: 'Strategic Planning',
      subtasks: [
        {
          id: '28.2.1',
          title: 'Research security patterns',
          status: 'in-progress' as const,
          assignedTo: 'human' as const,
        },
        {
          id: '28.2.2',
          title: 'Define requirements',
          status: 'pending' as const,
          assignedTo: 'human' as const,
        },
        {
          id: '28.2.3',
          title: 'Create context package',
          status: 'pending' as const,
          assignedTo: 'human' as const,
        },
      ],
    },
    aiAgents: [],
  },
  parameters: {
    viewport: { defaultViewport: 'desktop' },
    docs: {
      description: {
        story:
          'Planning and research phase where user defines requirements and creates context for AI handoff.',
      },
    },
  },
};

export const CompleteHandoffMode: Story = {
  args: {
    state: 'complete-handoff',
    viewMode: 'desktop',
    currentTask: {
      ...sampleTask,
      subtasks: sampleTask.subtasks?.map((subtask) => ({
        ...subtask,
        assignedTo: 'ai' as const,
        status: subtask.status === 'completed' ? ('completed' as const) : ('in-progress' as const),
      })),
    },
    aiAgents: [
      {
        ...sampleAIAgents[0],
        status: 'working' as const,
        progress: 'Working autonomously on all remaining subtasks',
      },
    ],
  },
  parameters: {
    viewport: { defaultViewport: 'desktop' },
    docs: {
      description: {
        story:
          'Complete handoff mode where AI has full context and is working autonomously while user monitors progress.',
      },
    },
  },
};

export const EmptyState: Story = {
  args: {
    state: 'no-active-task',
    viewMode: 'desktop',
    currentTask: null,
    activeTasks: [],
    aiAgents: [],
    projectContext: {
      tag: undefined,
      gitBranch: undefined,
      tasksTotal: 0,
      tasksPending: 0,
      filesModifiedToday: 0,
    },
  },
  parameters: {
    viewport: { defaultViewport: 'desktop' },
    docs: {
      description: {
        story:
          'Empty state for brand new projects with bootstrap options and getting started guidance.',
      },
    },
  },
};

// Component-specific stories for testing individual components
export const TaskFocusCardDemo: Story = {
  args: {
    state: 'ai-direction',
    viewMode: 'desktop',
    currentTask: {
      ...sampleTask,
      subtasks: [
        ...(sampleTask.subtasks || []),
        {
          id: '28.2.6',
          title: 'Security audit',
          status: 'blocked' as const,
          assignedTo: 'human' as const,
        },
        {
          id: '28.2.7',
          title: 'Performance testing',
          status: 'pending' as const,
          assignedTo: 'ai' as const,
        },
      ],
    },
    aiAgents: sampleAIAgents,
  },
  parameters: {
    viewport: { defaultViewport: 'desktop' },
    docs: {
      description: {
        story:
          'Focus on TaskFocusCard component with comprehensive task context and multiple subtask states.',
      },
    },
  },
};

export const AIAgentCoordinationDemo: Story = {
  args: {
    state: 'ai-direction',
    viewMode: 'desktop',
    currentTask: sampleTask,
    aiAgents: [
      ...sampleAIAgents,
      {
        id: 'claude-3',
        name: 'Claude Research',
        status: 'review' as const,
        currentTask: 'Security Analysis',
        progress: 'Completed security pattern research, awaiting review',
        lastUpdate: 'Found 3 critical security considerations',
      },
      {
        id: 'claude-4',
        name: 'Claude Testing',
        status: 'blocked' as const,
        currentTask: 'Test Suite Setup',
        progress: 'Blocked waiting for JWT implementation completion',
      },
    ],
  },
  parameters: {
    viewport: { defaultViewport: 'desktop' },
    docs: {
      description: {
        story:
          'Focus on AI agent coordination with multiple agents in different states and interactive controls.',
      },
    },
  },
};
