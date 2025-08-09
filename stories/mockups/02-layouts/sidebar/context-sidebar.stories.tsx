import type { Meta, StoryObj } from '@storybook/nextjs';
import { ContextSidebar } from './ContextSidebar';

const meta = {
  title: 'Mockups/02-Layouts/Sidebar/ContextSidebar',
  component: ContextSidebar,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div className="h-screen flex">
        <Story />
        <div className="flex-1 bg-gray-50 p-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Main Content Area</h2>
            <p className="text-gray-600">
              This sidebar component adapts its content based on the current workflow context. Try
              different variants to see how it changes.
            </p>
          </div>
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof ContextSidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Bootstrap: Story = {
  args: {
    variant: 'bootstrap',
  },
};

export const TaskPlanning: Story = {
  args: {
    variant: 'task-planning',
  },
};

export const AIHandoff: Story = {
  args: {
    variant: 'ai-handoff',
  },
};

export const ParallelProductivity: Story = {
  args: {
    variant: 'parallel-productivity',
  },
};

export const AISupervision: Story = {
  args: {
    variant: 'ai-supervision',
  },
};
