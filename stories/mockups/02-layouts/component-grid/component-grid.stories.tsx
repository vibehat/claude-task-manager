import type { Meta, StoryObj } from '@storybook/react';
import ComponentGrid from './component-grid';

const meta = {
  title: 'Mockups/02-App-Layouts/Component Grid',
  component: ComponentGrid,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# Component Grid & Design System

This comprehensive mockup demonstrates the complete UI component library and design system for the Task Master application. It serves as both a visual reference and implementation guide for developers.

## Featured Component Categories

### Basic Elements
- **Typography Scale**: Complete type hierarchy from H1 page titles to small metadata text
- **Button Variants**: Primary, secondary, ghost, success, warning, danger, and icon-only buttons
- **Form Controls**: Text inputs, select dropdowns, checkboxes, radio buttons, and toggle switches

### Composite Components
- **Card System**: Basic cards, task cards with progress indicators, and dashboard widget cards
- **Navigation Components**: Sidebar navigation with active states, breadcrumb navigation, and tab navigation
- **Data Tables**: Complete table implementation with selection, sorting, and action menus

### Data Display
- **Progress Indicators**: Linear progress bars, circular progress indicators, and step-based progress
- **Status Systems**: Color-coded status dots, priority indicators, and state visualization
- **Loading States**: Skeleton loaders, spinners, and progress-based loading

### Interactive Elements
- **Dropdown Menus**: Status selectors and option menus with proper hover states
- **Modal Dialogs**: Confirmation dialogs with proper spacing and action hierarchy
- **Tooltip System**: Contextual help tooltips with proper positioning

### Form Components
- **Input Groups**: Structured form layouts with proper labeling and spacing
- **Search Components**: Global search bars and faceted search with filter management
- **Tag Systems**: Tag input, display, and management interfaces

### Feedback Systems
- **Alert Messages**: Success, info, warning, and error alerts with proper iconography
- **Loading States**: Comprehensive loading state variations for different contexts
- **Empty States**: Proper handling of no-data scenarios

### Color Psychology & Accessibility
- **Brand Colors**: Primary blue, success green, warning orange, and danger red
- **Neutral Palette**: Complete gray scale from light to dark
- **Theme Support**: Light and dark theme color demonstrations
- **Accessibility**: WCAG compliant contrast ratios and color-blind friendly indicators

### Layout System
- **Responsive Grid**: 12-column grid system with mobile-first responsive breakpoints
- **Widget Layouts**: Dashboard-style flexible widget arrangements
- **Spacing System**: Consistent spacing scale from tight (4px) to container (48px)

## Design Principles Demonstrated

1. **Progressive Disclosure**: Information hierarchy through visual weight and spacing
2. **Emotional Design**: Encouraging colors, clear success states, and safe exploration
3. **Consistency**: Unified spacing, typography, and interaction patterns
4. **Accessibility**: High contrast, never color alone, keyboard navigation support
5. **Responsive Design**: Mobile-first approach with flexible layouts

## Implementation Notes

- Uses semantic HTML elements for accessibility
- Implements proper focus management and keyboard navigation
- Follows Tailwind CSS design system with CSS custom properties
- Supports both light and dark themes
- Optimized for screen readers and assistive technologies

The component grid serves as the foundation for all UI development in the Task Master application, ensuring consistency and quality across all features.
        `,
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ComponentGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Complete Component Grid',
  parameters: {
    docs: {
      description: {
        story:
          'The complete component grid showcasing all UI elements, interactions, and design system tokens in a single comprehensive view.',
      },
    },
  },
};

export const BasicElements: Story = {
  name: 'Basic Elements Focus',
  parameters: {
    docs: {
      description: {
        story:
          'Focus on fundamental UI elements including typography scale, button variants, and form controls that form the foundation of the design system.',
      },
    },
  },
};

export const CompositeComponents: Story = {
  name: 'Composite Components Focus',
  parameters: {
    docs: {
      description: {
        story:
          'Highlights complex composite components including cards, navigation elements, and data tables that combine multiple basic elements.',
      },
    },
  },
};

export const DataDisplay: Story = {
  name: 'Data Display Focus',
  parameters: {
    docs: {
      description: {
        story:
          'Demonstrates various data visualization components including progress indicators, status systems, and loading states.',
      },
    },
  },
};

export const InteractiveElements: Story = {
  name: 'Interactive Elements Focus',
  parameters: {
    docs: {
      description: {
        story:
          'Showcases interactive components like dropdowns, modals, tooltips, and their various states and behaviors.',
      },
    },
  },
};

export const FormComponents: Story = {
  name: 'Form Components Focus',
  parameters: {
    docs: {
      description: {
        story:
          'Features comprehensive form elements including input groups, search interfaces, and tag management systems.',
      },
    },
  },
};

export const FeedbackSystems: Story = {
  name: 'Feedback Systems Focus',
  parameters: {
    docs: {
      description: {
        story:
          'Highlights user feedback components including alerts, loading states, and empty state handling.',
      },
    },
  },
};

export const ColorSystem: Story = {
  name: 'Color System Focus',
  parameters: {
    docs: {
      description: {
        story:
          'Demonstrates the complete color palette including brand colors, neutral grays, and theme-specific variations with accessibility considerations.',
      },
    },
  },
};

export const LayoutSystem: Story = {
  name: 'Layout System Focus',
  parameters: {
    docs: {
      description: {
        story:
          'Shows the responsive grid system, spacing scale, and layout patterns that provide structure to the application.',
      },
    },
  },
};
