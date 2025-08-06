import type { Meta, StoryObj } from '@storybook/react';
import MultiTaskSwitchingMockup from './multi-task-switching';

const meta = {
  title: 'Mockups/Working On/Multi-Task Switching',
  component: MultiTaskSwitchingMockup,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Multi-Task Switching mockup demonstrating the ability to manage multiple AI-assisted tasks simultaneously while preserving context. Features task tabs, active sessions, and seamless context switching.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MultiTaskSwitchingMockup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Multi-Task Switching',
  parameters: {
    docs: {
      description: {
        story:
          'The multi-task management interface showing active task tabs, current task details, AI conversation status, and quick switching between tasks with preserved context.',
      },
    },
  },
};
