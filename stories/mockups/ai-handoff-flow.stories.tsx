import type { Meta, StoryObj } from '@storybook/react';
import AIHandoffFlowMockup from './ai-handoff-flow';

const meta = {
  title: 'Mockups/Working On/AI Handoff Flow',
  component: AIHandoffFlowMockup,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'AI Handoff Flow mockup showing the process of selecting an AI agent and configuring the handoff for task execution. Features agent recommendation, context building, and handoff configuration.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AIHandoffFlowMockup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'AI Handoff Flow',
  parameters: {
    docs: {
      description: {
        story:
          'The complete AI handoff flow interface showing task selection, context building, agent selection, and handoff configuration.',
      },
    },
  },
};
