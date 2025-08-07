import type { Meta, StoryObj } from '@storybook/react';
import MainDashboardMockup from './main-dashboard';

const meta = {
  title: 'Mockups/Working On/Main Dashboard',
  component: MainDashboardMockup,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Main Dashboard mockup showing the AI Orchestration Dashboard for the "Working On" feature. Displays active tasks, current focus, AI activity feed, and quick actions.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MainDashboardMockup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Main Dashboard',
  parameters: {
    docs: {
      description: {
        story:
          'The complete AI orchestration dashboard showing active tasks, current focus with AI implementation progress, and real-time AI activity feed.',
      },
    },
  },
};
