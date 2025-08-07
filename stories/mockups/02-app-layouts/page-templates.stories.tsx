import type { Meta, StoryObj } from '@storybook/react';
import PageTemplates from './page-templates';

const meta = {
  title: 'Mockups/02-App-Layouts/Page Templates',
  component: PageTemplates,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# Page Templates Mockup

This mockup visualizes the four main page template types for the Task Master UI application:

## Template Types

### 1. List/Table View Template
- Used for browsing multiple items (tasks, projects, team members)
- Features filtering, sorting, search, and pagination
- Supports both list and table display modes

### 2. Detail View Template
- Displays comprehensive information about a single item
- Includes tabbed content organization
- Features context panels and related information

### 3. Dashboard Template
- Widget-based layout for overview pages
- Flexible grid system for different widget sizes
- Activity feeds and quick actions

### 4. Creation/Form Template
- Used for creating new items or editing existing ones
- AI-assisted form filling
- Validation and preview capabilities

## Features

- **Responsive Design**: Toggle between desktop and mobile views
- **Template Inheritance**: All templates extend the base layout structure
- **Consistent Patterns**: Shared navigation, headers, and interaction patterns
- **Interactive Demo**: Switch between templates to see different layouts

## Design Principles

- Clean, minimal interface using Tailwind CSS
- Clear visual hierarchy and information architecture
- Mobile-first responsive design
- Accessibility and keyboard navigation support
        `,
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PageTemplates>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Interactive page templates mockup with all four template types and responsive toggle.',
      },
    },
  },
};

export const ListViewTemplate: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'List/Table view template for browsing multiple items with filters and pagination.',
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = canvasElement as HTMLElement;
    const listButton = canvas.querySelector('button[data-template="list"]') as HTMLButtonElement;
    if (listButton) {
      listButton.click();
    }
  },
};

export const DetailViewTemplate: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Detail view template for displaying comprehensive information about a single item.',
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = canvasElement as HTMLElement;
    const detailButton = canvas.querySelector(
      'button[data-template="detail"]'
    ) as HTMLButtonElement;
    if (detailButton) {
      detailButton.click();
    }
  },
};

export const DashboardTemplate: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Dashboard template with widget-based layout for overview pages.',
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = canvasElement as HTMLElement;
    const dashboardButton = canvas.querySelector(
      'button[data-template="dashboard"]'
    ) as HTMLButtonElement;
    if (dashboardButton) {
      dashboardButton.click();
    }
  },
};

export const FormTemplate: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Creation/Form template for creating new items with AI assistance.',
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = canvasElement as HTMLElement;
    const formButton = canvas.querySelector('button[data-template="form"]') as HTMLButtonElement;
    if (formButton) {
      formButton.click();
    }
  },
};

export const MobileView: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Mobile responsive view showing how templates adapt to smaller screens.',
      },
    },
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = canvasElement as HTMLElement;
    const mobileToggle = canvas.querySelector('input[type="checkbox"]') as HTMLInputElement;
    if (mobileToggle) {
      mobileToggle.checked = true;
      mobileToggle.dispatchEvent(new Event('change', { bubbles: true }));
    }
  },
};

export const TabletView: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Tablet responsive view showing medium screen adaptations.',
      },
    },
    viewport: {
      defaultViewport: 'tablet',
    },
  },
};
