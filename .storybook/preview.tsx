import type { Preview } from '@storybook/nextjs';
import '../src/app/globals.css';
import '../stories/styles.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'dark',
          value: '#0a0a0a',
        },
      ],
    },
  },
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'contrast',
        items: [
          { value: 'light', icon: 'sun', title: 'Light' },
          { value: 'dark', icon: 'moon', title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme || 'light';

      return (
        <div
          className={theme === 'dark' ? 'dark' : ''}
          style={{
            minHeight: '100vh',
            backgroundColor: theme === 'dark' ? '#0a0a0a' : '#ffffff',
            color: theme === 'dark' ? '#ffffff' : '#000000',
          }}
        >
          <div className="bg-background text-foreground">
            <Story />
          </div>
        </div>
      );
    },
  ],
};

export default preview;
