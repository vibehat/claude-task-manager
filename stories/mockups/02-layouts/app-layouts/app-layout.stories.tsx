import React from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs';
import AppLayout from './AppLayout';

const meta: Meta<typeof AppLayout> = {
  title: 'Mockups/02-App-Layouts/App Layout',
  component: AppLayout,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
## Human-AI Orchestration Layout — Context Intelligence & Multi-Agent Coordination

### Critical Assessment
~~~
PROBLEM SOLVED: Fast, confident human orchestration of multiple AI agents with perfect context retention.
PRIMARY ACTION: Hand off to AI.
SUCCESS METRIC: >30% faster task throughput; <2% handoff errors; context quality ≥90%.
REMOVED: Redundant nav, page-level scroll, decorative chrome; kept only orchestration-critical UI.
~~~

### Visual Hierarchy Law
~~~
PRIMARY (60%) → Human Strategy + AI Handoff zone (Main orchestration area)
SECONDARY (30%) → Context Intelligence panels (status, quality, links)
TERTIARY (10%) → Utilities, legal/edge controls (collapsed)
NEGATIVE SPACE → 40% minimum. Space IS design.
~~~

### ASCII Wireframe (Fixed-height, Desktop-first, 8px grid)
~~~
┌───────────────────────────────────────────────────────────────────────────────┐ 100vh
│ Task Master AI     🔍 Context Search     🤖 3 Agents   ⚡ Context 94%    👤 │ 48px
├───────────────────────────────────────────────────────────────────────────────┤ HEADER (Fixed)
│┌───────────────┐┌─────────────────────────────────────────────────────────────┐
││               ││ ╭─ Human Strategy Center (PRIMARY 60%) ─────────────────── │
││🎯 Right Now   ││ │  [🤖 Hand off to AI]   [📦 Prepare Context]               │
││├ My Work      ││ │  Headline: 32/40 bold, Actions: 24/32 bold               │
││├ Context  📊  ││ │                                                             │
││├ Overview     ││ │  ▓▓▓ Context Intelligence (SECONDARY 30%)                │
││├ AI Helper    ││ │  - Context Quality: 94%                                   │
││└──────────────┘│ │  - Agents: Claude, Cursor, Research                       │
││  280px (Sidebar│ │  - Links: PRD, Research, Decisions, Patterns              │
││  with internal ││ │                                                             │
││  scroll)       ││ │  ░░░ Multi-Agent Status Dashboard                         │
││               ││ │  - Claude: ████████▓ 80%                                   │
││               ││ │  - Cursor: Ready                                          │
││               ││ │  - Research: ██▓▓ 20%                                     │
││               ││ │                                                             │
││               ││ │  [✅ Approve] [💬 Guide] [📜 View History] (TERTIARY 10%)  │
│└───────────────┘└─────────────────────────────────────────────────────────────┘
│  SIDEBAR (Fixed height, 8px grid)       MAIN CONTENT (calc(100vh - 48px))       │
│                                          Primary scrolling zone only             │
└───────────────────────────────────────────────────────────────────────────────┘

VISUAL WEIGHT: 60/30/10 (no exceptions)
SCAN PATTERN: Z-pattern (primary action top-right within main)
CONTRAST: 7:1 primary, 4.5:1 secondary
~~~

### State Matrix
~~~
Component        Default                 Hover                    Active                   Error
────────────────────────────────────────────────────────────────────────────────────────────────
Primary CTA      bg:#000 text:#FFF       bg:#333 cursor:pointer   scale:0.98 shadow:0,2   border:2px #F00
("Hand off")     radius:8 shadow:0,4     duration:150ms ease-out  duration:50ms           shake:200ms text:#F00

Secondary CTA    text:#111 underline:0   text:#000 underline:1    underline:2             disabled opacity:0.4
("Prepare")      icon:#666               icon:#000                icon:#000                aria-disabled

Sidebar Item     text:#444 bg:transparent bg:#F5F5F5              bg:#EAEAEA               —
                 dot:●(status)           dot:● bold               dot:● bold               

Table Row        bg:#FFF                  bg:#FAFAFA               bg:#F0F7FF border-left:4 #2B6CB0   row-error bg:#FFF5F5
(virtual list)   dividers:#EEE           dividers:#E5E5E5         focus:ring: #99C2FF      text:#C53030
~~~

### Interaction Timing
~~~
User Intent → System Response
─────────────────────────────
Hover       → 150ms ease-out (no debate)
Click       → 50ms feedback (instant feel)
Load        → 300ms skeleton (perceived speed)
Error       → 200ms shake + persist (acknowledgment)
Success     → 500ms celebrate + continue (momentum)
~~~

### Handoff Specifications
~~~
GRID:        8px only. Period.
BREAKPOINTS: 1280px desktop, 768px tablet, 375px mobile
TYPOGRAPHY:  16/24 body, 24/32 subhead, 32/40 headline
SPACING:     8, 16, 24, 40, 64 (nothing else)
RADIUS:      0 (sharp), 4 (subtle), 8 (friendly)
SHADOW:      0,2 (hint), 0,4 (float), 0,8 (emphasis)
~~~

### Measurements (Exact)
- Header: 48px fixed; z-index above all scroll regions
- Sidebar: 280px fixed width; own scroll when overflow; no page-level scroll
- Main content height: calc(100vh - 48px); primary scroll zone
- Minimum content width: 900px desktop; below that, collapse secondary regions
- Primary CTA hit area: ≥44x44px; placement top-right of primary panel

### Rationale → Hierarchy → States → Measurements → Business Impact
- **Rationale**: Solo developer directs multiple AI agents without losing context
- **Hierarchy**: Primary orchestration (60%); Context intelligence (30%); Utilities (10%)
- **States**: Defined above for CTAs, sidebar, rows; accessible focus rings across controls
- **Measurements**: Pixel-exact header/sidebar, hit areas, scroll containment to preserve context
- **Business Impact**: Faster throughput, fewer handoff errors, preserved context; targets set in Success Metric
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

export const WireframeSpec: Story = {
  args: {
    variant: 'ai-handoff',
  },
  parameters: {
    docs: {
      description: {
        story: `
This story demonstrates conformity to the wireframe guide:

- **Grid**: 8px-only spacing scale; fixed header (48px), fixed sidebar (280px), main scroll zone
- **Hierarchy**: 60/30/10 split with Z-pattern scan; primary action top-right in main
- **States**: Primary/secondary CTA, sidebar items, table rows follow the state matrix
- **Timing**: Hover 150ms ease-out, click 50ms feedback, load 300ms skeleton, error 200ms shake
- **Accessibility**: ≥44px targets; 7:1 primary, 4.5:1 secondary contrast; focus-visible rings
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
