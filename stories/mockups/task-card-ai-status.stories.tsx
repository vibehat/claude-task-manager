import type { Meta, StoryObj } from '@storybook/react';
import TaskCardAIStatusMockup from './task-card-ai-status';

const meta = {
  title: 'Mockups/Working On/Task Card AI Status',
  component: TaskCardAIStatusMockup,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Task Card AI Status mockup showing different task states with AI integration. Features active AI sessions, context preparation, blocked dependencies, and ready-to-start tasks with recommended agents.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TaskCardAIStatusMockup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Task Card AI Status',
  parameters: {
    docs: {
      description: {
        story:
          'Task cards displaying various AI integration states: active with Claude, preparing context, blocked by dependencies, and ready to start with agent recommendations.',
      },
    },
  },
};
