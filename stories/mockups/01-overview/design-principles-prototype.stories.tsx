import type { Meta, StoryObj } from '@storybook/react';
import DesignPrinciplesPrototype from './design-principles-prototype';

const meta = {
  title: 'Mockups/01-Overview/Design Principles Prototype',
  component: DesignPrinciplesPrototype,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# Design Principles Prototype

This prototype demonstrates core UX design principles including:

## Progressive Disclosure
- **Level 1**: Essential information only (task title, priority indicator)
- **Level 2**: Expandable details (description, tags, basic metadata)
- **Level 3**: Full context (assignee, estimates, progress, detailed breakdown)

## Emotional Design
- **Celebration micro-interactions**: Success states with encouraging messages and visual feedback
- **Safe exploration**: Clear undo/redo options to reduce user anxiety
- **Encouraging next steps**: Positive guidance for continued engagement

## Color Psychology
- **Progress states**: Green for complete, blue for in-progress, gray for pending
- **Priority levels**: Red for high, orange for medium, blue for low priority
- **Emotional tones**: Gradients for encouraging, creative, and professional contexts
- **Accessibility**: High contrast ratios, never color alone for information

## Visual Task Flow
- **Hierarchical visualization**: Parent-child task relationships with visual connections
- **Progress indicators**: Clear status representation with progress bars
- **Drag and drop affordances**: Visual cues for reorganization capabilities

The prototype uses the project's Tailwind design system with semantic color tokens and ensures WCAG accessibility compliance.
        `,
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DesignPrinciplesPrototype>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Design Principles Demo',
};

export const ProgressiveDisclosure: Story = {
  name: 'Progressive Disclosure Focus',
  parameters: {
    docs: {
      description: {
        story:
          'Focus on the progressive disclosure section showing how information complexity is managed through layered revelation.',
      },
    },
  },
};

export const EmotionalDesign: Story = {
  name: 'Emotional Design Focus',
  parameters: {
    docs: {
      description: {
        story:
          'Highlights the emotional design elements including celebration states, encouraging messages, and safe exploration areas.',
      },
    },
  },
};

export const ColorPsychology: Story = {
  name: 'Color Psychology Demo',
  parameters: {
    docs: {
      description: {
        story:
          'Demonstrates the systematic use of color psychology for progress states, priority levels, emotional tones, and accessibility considerations.',
      },
    },
  },
};
