import type { Meta, StoryObj } from '@storybook/react';
import AppLayout from './AppLayout';

const meta: Meta<typeof AppLayout> = {
  title: 'Mockups/02-App-Layouts/App Layout',
  component: AppLayout,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
## Human-AI Orchestration Layout

This layout implements the **context-intelligent viewport architecture** designed for optimal information flow between human strategic direction and AI autonomous execution. It creates a sophisticated orchestration interface where solo developers maintain strategic control while AI agents receive complete project context.

### Design Principles Applied:
- **Context Intelligence First**: Real-time assessment of AI handoff readiness
- **Human Orchestration Control**: Strategic overview with multi-agent status monitoring  
- **AI Execution Intelligence**: Multi-agent coordination with unified project understanding
- **Progressive Disclosure**: Context-intelligent information hierarchy

### Layout Architecture:
- **Fixed Height Container (100vh)**: Desktop application feel with no page scrolling
- **ContextIntelligenceHeader (48px, Fixed)**: AI agent status, context quality, search
- **ContextSidebar (280px, Adaptive)**: Human-AI collaboration control center
- **MainOrchestrationArea (Flexible)**: Context-intelligent workspace

### Key Features:
- Context quality scoring (1-100 scale)
- Multi-agent status dashboard
- Context package preparation interface
- Real-time human guidance during AI implementation
- Mobile-first progressive disclosure
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'bootstrap',
        'task-planning',
        'ai-handoff',
        'parallel-productivity',
        'ai-supervision',
      ],
      description: 'Different layout states representing various workflow scenarios',
    },
  },
};

export default meta;
type Story = StoryObj<typeof AppLayout>;

export const Default: Story = {
  args: {
    variant: 'task-planning',
  },
  parameters: {
    docs: {
      description: {
        story:
          'The default task planning view showing the complete human-AI orchestration interface with context intelligence panels and multi-agent status dashboard.',
      },
    },
  },
};

export const ProjectBootstrap: Story = {
  args: {
    variant: 'bootstrap',
  },
  parameters: {
    docs: {
      description: {
        story: `
**Scenario**: Solo developer starting a personal finance SaaS project from nothing

**Context**: Research & Discovery Mode
- AI Research Agent actively gathering competitive analysis
- Technology recommendations being generated
- Next steps automatically suggested based on research findings
- Sidebar shows research status and quick access to generated insights
        `,
      },
    },
  },
};

export const TaskPlanning: Story = {
  args: {
    variant: 'task-planning',
  },
  parameters: {
    docs: {
      description: {
        story: `
**Scenario**: PRD complete, 45 tasks generated, need to prioritize and organize

**Context**: High-Density Task Management Mode
- Virtual scrolling for smooth performance with large task lists
- Bulk operations available without losing scroll position
- Task counts visible at-a-glance in sidebar
- Sprint organization with ready-to-start indicators
- Keyboard navigation optimized for power users
        `,
      },
    },
  },
};

export const AIHandoff: Story = {
  args: {
    variant: 'ai-handoff',
  },
  parameters: {
    docs: {
      description: {
        story: `
**Scenario**: Ready to hand off authentication task to AI with complete context

**Context**: Context Packaging Mode
- Complete context package with 100% AI readiness
- All requirements, research, and architectural decisions included
- Cross-references to related tasks and dependencies
- Implementation patterns and security considerations documented
- One-click handoff to AI agents with perfect context transfer
        `,
      },
    },
  },
};

export const ParallelProductivity: Story = {
  args: {
    variant: 'parallel-productivity',
  },
  parameters: {
    docs: {
      description: {
        story: `
**Scenario**: AI building payment integration while human plans Q2 roadmap

**Context**: Multi-Agent Coordination Mode
- Real-time progress monitoring of multiple AI agents
- Strategic planning continues while AI executes implementation
- Research findings flow in automatically from Research Agent
- Human focus preserved on strategic decisions
- Parallel productivity enabled by independent AI execution
        `,
      },
    },
  },
};

export const AISupervision: Story = {
  args: {
    variant: 'ai-supervision',
  },
  parameters: {
    docs: {
      description: {
        story: `
**Scenario**: Monitoring Claude's search functionality implementation with real-time guidance

**Context**: AI Supervision & Real-Time Guidance Mode  
- Live progress tracking with implementation status (85% complete)
- Human course corrections provided mid-development
- AI responds to guidance while maintaining autonomous implementation
- Performance validation and quality oversight by human
- Context evolution captured for future project intelligence
        `,
      },
    },
  },
};

// Responsive and interaction variants
export const MobileView: Story = {
  args: {
    variant: 'task-planning',
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
    docs: {
      description: {
        story: `
Mobile adaptation of the human-AI orchestration interface:
- Progressive disclosure maintains essential context intelligence
- Touch-optimized AI direction controls
- Context quality indicators always visible
- Responsive sidebar navigation
        `,
      },
    },
  },
};

export const TabletView: Story = {
  args: {
    variant: 'ai-handoff',
  },
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
    docs: {
      description: {
        story: `
Tablet view optimized for context package preparation:
- Balanced layout for both strategic overview and detailed context
- Touch-friendly context handoff controls
- Multi-agent status preserved in condensed format
        `,
      },
    },
  },
};

export const LargeDesktop: Story = {
  args: {
    variant: 'parallel-productivity',
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
    docs: {
      description: {
        story: `
Large desktop view maximizing multi-agent coordination:
- Full context web visualization capabilities  
- Multiple context panels can be displayed simultaneously
- Enhanced multi-agent status dashboard with detailed progress
- Optimal for complex project orchestration workflows
        `,
      },
    },
  },
};

// Context intelligence focused variants
export const HighContextQuality: Story = {
  render: () => (
    <div className="h-screen bg-gray-50 flex flex-col">
      <div className="h-12 bg-white border-b border-gray-200 flex items-center justify-between px-6">
        <h1 className="text-lg font-semibold text-gray-900">Task Master AI</h1>
        <div className="flex items-center gap-6">
          <span className="text-blue-600 font-medium">🤖 3 Agents Active</span>
          <span className="text-green-600 font-medium">⚡ Context 98%</span>
          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
            👤
          </div>
        </div>
      </div>
      <div className="flex flex-1">
        <div className="w-70 bg-white border-r border-gray-200 p-4">
          <div className="text-center text-green-600 font-bold">Context Quality: 98%</div>
          <div className="text-center text-sm text-gray-600 mt-2">
            All systems ready for AI handoff
          </div>
        </div>
        <div className="flex-1 bg-gray-50 p-6">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h3 className="font-semibold text-green-900 mb-2">Perfect Context Package Ready</h3>
            <p className="text-green-700">
              All strategic context, architectural decisions, and implementation patterns are
              complete. AI agents can proceed with full autonomous execution.
            </p>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Optimal state: 98% context quality with all strategic and technical context ready for perfect AI handoff.',
      },
    },
  },
};

export const LowContextQuality: Story = {
  render: () => (
    <div className="h-screen bg-gray-50 flex flex-col">
      <div className="h-12 bg-white border-b border-gray-200 flex items-center justify-between px-6">
        <h1 className="text-lg font-semibold text-gray-900">Task Master AI</h1>
        <div className="flex items-center gap-6">
          <span className="text-gray-500">🤖 0 Agents Active</span>
          <span className="text-orange-600 font-medium">⚠️ Context 34%</span>
          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
            👤
          </div>
        </div>
      </div>
      <div className="flex flex-1">
        <div className="w-70 bg-white border-r border-gray-200 p-4">
          <div className="text-center text-orange-600 font-bold">Context Quality: 34%</div>
          <div className="text-center text-sm text-gray-600 mt-2">Needs more strategic context</div>
        </div>
        <div className="flex-1 bg-gray-50 p-6">
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
            <h3 className="font-semibold text-orange-900 mb-2">Context Package Incomplete</h3>
            <div className="space-y-2 text-orange-700 text-sm">
              <div>⚠️ Missing: Architecture decisions</div>
              <div>⚠️ Missing: Implementation patterns</div>
              <div>⚠️ Missing: Edge case considerations</div>
              <div>✅ Available: Basic requirements</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Suboptimal state: 34% context quality requiring more strategic context before AI handoff is recommended.',
      },
    },
  },
};
