import type { Meta, StoryObj } from '@storybook/react';
import TaskSidePanelMockup from './task-side-panel';

const meta = {
  title: 'Mockups/Tasks/Task Side Panel',
  component: TaskSidePanelMockup,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'TaskSidePanel component mockup showing both normal slide-in panel and fullscreen layouts. Features inline editing, markdown content, expandable subtasks with full details (description, implementation details, test strategy), and responsive design patterns.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['normal', 'fullscreen', 'edit', 'loading'],
      description: 'Display variant of the task side panel',
    },
  },
} satisfies Meta<typeof TaskSidePanelMockup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NormalSidePanel: Story = {
  args: {
    variant: 'normal',
  },
  name: 'Normal Side Panel',
  parameters: {
    docs: {
      description: {
        story:
          'Right-sliding panel layout showing task details in an improved 600px wide panel with better information density. Features task header with ID badge, status/priority selectors, fullscreen toggle, and close button. Uses a responsive grid layout with dedicated sections for description, implementation details, test strategy, subtasks with expandable details, and metadata. Each subtask can be expanded to show its own description, implementation details, and test strategy. Improved spacing and readability.',
      },
    },
  },
};

export const FullscreenMode: Story = {
  args: {
    variant: 'fullscreen',
  },
  name: 'Fullscreen Mode',
  parameters: {
    docs: {
      description: {
        story:
          'Full viewport layout with 2-column grid (2/3 for main content, 1/3 for details). Left column contains title, description, implementation details, test strategy, and subtasks. Right column shows additional task metadata and details.',
      },
    },
  },
};

export const EditMode: Story = {
  args: {
    variant: 'edit',
  },
  name: 'Edit Mode',
  parameters: {
    docs: {
      description: {
        story:
          'Shows the combined markdown editor in active state with rich editing capabilities. Features save/cancel buttons, textarea inputs for each section, and real-time content updates. Demonstrates the editing workflow for task content.',
      },
    },
  },
};

export const LoadingState: Story = {
  args: {
    variant: 'loading',
  },
  name: 'Loading State',
  parameters: {
    docs: {
      description: {
        story:
          'Loading skeleton state showing placeholder content while task data is being fetched. Features animated skeleton lines of varying widths to represent text content, subtasks, and metadata sections.',
      },
    },
  },
};
