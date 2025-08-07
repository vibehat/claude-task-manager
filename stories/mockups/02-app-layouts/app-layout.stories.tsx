import type { Meta, StoryObj } from '@storybook/react';
import AppLayout from './app-layout';

const meta: Meta<typeof AppLayout> = {
  title: 'Mockups/02-App-Layouts/App Layout',
  component: AppLayout,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# Application Layout & Shell

This mockup demonstrates the complete application layout structure based on the wireframe specifications. It includes:

## Features Demonstrated

- **Responsive Design**: Desktop, tablet, and mobile layouts
- **Collapsible Sidebar**: Expandable navigation with sections and sub-navigation
- **Multi-Panel Content**: Single, two-panel, and three-panel configurations
- **Mobile Overlay Menu**: Touch-optimized navigation for mobile devices
- **Visual Hierarchy**: Proper spacing, typography, and visual indicators

## Layout Variations

- **Desktop Layout**: Full sidebar with expandable sections, multi-panel content area
- **Tablet Layout**: Icon-only sidebar with responsive content panels  
- **Mobile Layout**: Hamburger menu with overlay sidebar, single-column content

## Panel Configurations

- **Single Panel**: Full-width content area for focused tasks
- **Two Panel**: Main content (70%) + context panel (30%) split
- **Three Panel**: Main content (50%) + two context panels (25% each)

The layout follows the design principles of progressive disclosure and maintains consistency across all breakpoints.
        `,
      },
    },
  },
  argTypes: {
    sidebarCollapsed: {
      control: 'boolean',
      description: 'Whether the sidebar is collapsed or expanded',
    },
    panelConfiguration: {
      control: { type: 'select' },
      options: ['single', 'two-panel', 'three-panel'],
      description: 'Content panel layout configuration',
    },
    activeSection: {
      control: { type: 'select' },
      options: ['right-now', 'my-work', 'notes', 'overview', 'ai-helper', 'preferences'],
      description: 'Active navigation section',
    },
    showMobileOverlay: {
      control: 'boolean',
      description: 'Show mobile navigation overlay (for mobile viewport testing)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DesktopExpanded: Story = {
  args: {
    sidebarCollapsed: false,
    panelConfiguration: 'two-panel',
    activeSection: 'my-work',
    showMobileOverlay: false,
  },
  parameters: {
    viewport: { defaultViewport: 'desktop' },
    docs: {
      description: {
        story:
          'Desktop layout with expanded sidebar showing full navigation labels and sub-sections.',
      },
    },
  },
};

export const DesktopCollapsed: Story = {
  args: {
    sidebarCollapsed: true,
    panelConfiguration: 'two-panel',
    activeSection: 'right-now',
    showMobileOverlay: false,
  },
  parameters: {
    viewport: { defaultViewport: 'desktop' },
    docs: {
      description: {
        story:
          'Desktop layout with collapsed sidebar showing only icons to maximize content space.',
      },
    },
  },
};

export const SinglePanel: Story = {
  args: {
    sidebarCollapsed: false,
    panelConfiguration: 'single',
    activeSection: 'notes',
    showMobileOverlay: false,
  },
  parameters: {
    viewport: { defaultViewport: 'desktop' },
    docs: {
      description: {
        story:
          'Single panel configuration providing maximum focus area for detailed work like note editing or task details.',
      },
    },
  },
};

export const ThreePanel: Story = {
  args: {
    sidebarCollapsed: false,
    panelConfiguration: 'three-panel',
    activeSection: 'overview',
    showMobileOverlay: false,
  },
  parameters: {
    viewport: { defaultViewport: 'desktop' },
    docs: {
      description: {
        story:
          'Three panel layout for dashboard views with main content area and two context panels for notes, actions, and metadata.',
      },
    },
  },
};

export const TabletView: Story = {
  args: {
    sidebarCollapsed: false,
    panelConfiguration: 'two-panel',
    activeSection: 'my-work',
    showMobileOverlay: false,
  },
  parameters: {
    viewport: { defaultViewport: 'tablet' },
    docs: {
      description: {
        story:
          'Tablet layout adaptation with responsive content panels and touch-friendly interface elements.',
      },
    },
  },
};

export const MobilePortrait: Story = {
  args: {
    sidebarCollapsed: false,
    panelConfiguration: 'single',
    activeSection: 'right-now',
    showMobileOverlay: false,
  },
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
    docs: {
      description: {
        story:
          'Mobile portrait layout with hamburger menu navigation and single-column content stacking.',
      },
    },
  },
};

export const MobileWithOverlay: Story = {
  args: {
    sidebarCollapsed: false,
    panelConfiguration: 'single',
    activeSection: 'my-work',
    showMobileOverlay: true,
  },
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
    docs: {
      description: {
        story:
          'Mobile layout showing the overlay navigation menu with full navigation options and backdrop blur.',
      },
    },
  },
};

// Different active sections showcase
export const AIHelperSection: Story = {
  args: {
    sidebarCollapsed: false,
    panelConfiguration: 'two-panel',
    activeSection: 'ai-helper',
    showMobileOverlay: false,
  },
  parameters: {
    viewport: { defaultViewport: 'desktop' },
    docs: {
      description: {
        story: 'Layout showing AI Helper section active with expanded sub-navigation items.',
      },
    },
  },
};

export const PreferencesSection: Story = {
  args: {
    sidebarCollapsed: false,
    panelConfiguration: 'single',
    activeSection: 'preferences',
    showMobileOverlay: false,
  },
  parameters: {
    viewport: { defaultViewport: 'desktop' },
    docs: {
      description: {
        story:
          'Preferences section with single panel layout optimal for settings and configuration pages.',
      },
    },
  },
};
