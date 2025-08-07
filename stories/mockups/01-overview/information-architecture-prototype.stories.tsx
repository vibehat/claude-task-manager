import type { Meta, StoryObj } from '@storybook/react';
import InformationArchitecturePrototype from './information-architecture-prototype';

const meta = {
  title: 'Mockups/01-Overview/Information Architecture Prototype',
  component: InformationArchitecturePrototype,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# Information Architecture Prototype

This prototype demonstrates comprehensive information organization and navigation patterns for the Task Master application.

## Global Navigation Structure
- **Primary navigation**: Dashboard, Tasks, Working, My Works, Notes with visual indicators
- **Global search**: Available from every page with keyboard shortcut indicator
- **Breadcrumb navigation**: Clear hierarchical context for user orientation

## Content Hierarchy
- **Dashboard as entry point**: Central hub with today's focus, recent activity, and quick actions
- **Task management**: Full context model with metadata, subtasks, and dependencies
- **Cross-cutting concerns**: Tags, time-based views, and horizontal organization

## Contextual Navigation
- **Related items sidebar**: Dynamic content based on current context
- **Recent items**: Time-based access to recently viewed content
- **Quick actions**: Context-aware operations available from sidebar
- **Filter & browse**: Faceted search with status and type filters

## Task Context Model
Demonstrates comprehensive task representation including:
- **Core metadata**: ID, creation date, due date, assignee information
- **Context tabs**: Description, Notes, Files, History for organized information
- **Subtasks & dependencies**: Visual hierarchy with status indicators
- **Progress tracking**: Visual representation of completion states

## Search & Discovery
- **Multi-faceted filtering**: By status (In Progress, To Do, Done) and type (Tasks, Notes, Files)
- **Cross-reference linking**: Related items automatically surfaced
- **Time-based organization**: This Week, This Month, This Quarter views

The architecture follows established patterns while maintaining semantic clarity and ensuring scalable information organization.
        `,
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof InformationArchitecturePrototype>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Complete Information Architecture',
};

export const NavigationPatterns: Story = {
  name: 'Navigation Patterns Focus',
  parameters: {
    docs: {
      description: {
        story:
          'Focuses on the global navigation structure, breadcrumbs, and primary navigation patterns.',
      },
    },
  },
};

export const TaskContextModel: Story = {
  name: 'Task Context Model',
  parameters: {
    docs: {
      description: {
        story:
          'Demonstrates the comprehensive task representation with metadata, context tabs, and hierarchical relationships.',
      },
    },
  },
};

export const CrossCuttingConcerns: Story = {
  name: 'Cross-Cutting Organization',
  parameters: {
    docs: {
      description: {
        story:
          'Shows horizontal organization patterns including tags, time-based views, and filtering mechanisms.',
      },
    },
  },
};

export const SidebarNavigation: Story = {
  name: 'Contextual Sidebar',
  parameters: {
    docs: {
      description: {
        story:
          'Highlights the contextual sidebar with related items, recent items, quick actions, and filtering options.',
      },
    },
  },
};
