import type { Meta, StoryObj } from '@storybook/react';
import SidebarNavigationMockup from './sidebar-navigation';

const meta = {
  title: 'Mockups/Working On/Sidebar Navigation',
  component: SidebarNavigationMockup,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Sidebar Navigation mockup implementing the SIDEBAR.md structure with "Working On" page integration. Features human-centered language, AI status indicators, and clear visual hierarchy with dark mode support.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SidebarNavigationMockup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Sidebar Navigation',
  parameters: {
    docs: {
      description: {
        story:
          'Complete sidebar navigation showing the "Right Now" focus area, work progress sections, AI integration status, and user preferences with collapsible design.',
      },
    },
  },
};
