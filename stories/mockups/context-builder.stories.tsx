import type { Meta, StoryObj } from '@storybook/react';
import ContextBuilderMockup from './context-builder';

const meta = {
  title: 'Mockups/Working On/Context Builder',
  component: ContextBuilderMockup,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Context Builder mockup for preparing AI context before task handoff. Includes automatic context gathering, manual enrichment options, templates, and context summary.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ContextBuilderMockup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Context Builder',
  parameters: {
    docs: {
      description: {
        story:
          'The context builder interface showing automatic context detection, manual enrichment options, and AI agent recommendations for optimal task execution.',
      },
    },
  },
};
