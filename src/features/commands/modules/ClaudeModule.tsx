'use client';

import { createActionCommand, createInputCommand, type CommandModule } from '../types';
import { toast } from 'sonner';
import { MessageCircleIcon } from 'lucide-react';

export const claudeModule: CommandModule = {
  id: 'claude',
  name: 'Claude AI Assistant',
  version: '1.0.0',
  description: 'AI-powered assistance and query handling for unmatched commands',

  commands: (_context) => [
    // Main "Ask Claude" command
    createActionCommand({
      id: 'claude:ask',
      title: 'Ask Claude',
      description: 'Get AI assistance with your question or request',
      icon: <MessageCircleIcon className="w-4 h-4" />,
      group: 'AI Assistant',
      execute: async (_, ctx) => {
        // Get the current search query from context if available
        const searchQuery = ctx.data.currentSearchQuery || '';

        return {
          success: true,
          nextCommand: createInputCommand({
            id: 'claude:ask-input',
            title: 'Ask Claude',
            description: 'Enter your question or request for Claude',
            type: 'input',
            inputConfig: {
              placeholder: searchQuery || 'What would you like to ask Claude?',
              submitHint: 'Press Enter to ask Claude',
              validation: (value) => {
                if (!value.trim()) return 'Please enter a question';
                if (value.length < 3) return 'Question must be at least 3 characters';
                return undefined;
              },
            },
            execute: async (query) => {
              // Simulate AI response (in real app, this would call Claude API)
              toast.info(`Asking Claude: "${query}"`);

              // Simulate thinking time
              await new Promise((resolve) => setTimeout(resolve, 1500));

              // Show mock response
              const responses = [
                "I'd be happy to help! However, I'm currently running in demo mode. In a real implementation, I would process your request and provide detailed assistance.",
                "That's an interesting question! In a production environment, I would analyze your query and provide comprehensive guidance.",
                "I understand what you're looking for. This demo shows how I would integrate with your command palette to provide AI assistance.",
              ];

              const response = responses[Math.floor(Math.random() * responses.length)];
              toast.success(`Claude: ${response}`);

              return {
                success: true,
                data: { lastClaudeQuery: query, lastClaudeResponse: response },
              };
            },
          }),
        };
      },
    }),
  ],

  // Context extensions for Claude functionality
  contextExtensions: {
    data: {
      claudeEnabled: true,
      lastClaudeQuery: null,
      lastClaudeResponse: null,
      currentSearchQuery: '', // Will be set by the command palette
    },
    methods: {
      setSearchQuery: (_query: string) => {
        // This method can be called to update the current search query
        // so Claude can use it as context for suggestions
      },
      askClaudeDirectly: async (query: string) => {
        // Direct method to ask Claude without going through command flow
        console.log(`Direct Claude query: ${query}`);
        return 'This would be a direct response from Claude API';
      },
    },
  },

  // Event handlers
  onCommandExecute: (command, result) => {
    if (command.id.startsWith('claude:')) {
      console.log(`Claude command executed: ${command.id}`, result);
    }
  },
};

// Add the onNoMatch handler as a separate property
(claudeModule as any).onNoMatch = (searchQuery: string, context: any) => {
  // This special handler gets called when no commands match the search
  // It returns the "Ask Claude" command as a fallback option

  // Update context with current search query
  context.data.currentSearchQuery = searchQuery;

  return createActionCommand({
    id: 'claude:ask-fallback',
    title: `Ask Claude: "${searchQuery}"`,
    description: 'No matching commands found. Ask Claude for help instead.',
    icon: <MessageCircleIcon className="w-4 h-4" />,
    group: 'AI Fallback',
    execute: async () => {
      // Pre-populate with the search query
      return {
        success: true,
        nextCommand: createInputCommand({
          id: 'claude:ask-fallback-input',
          title: `Ask Claude about: "${searchQuery}"`,
          description: 'Claude will help with your request',
          type: 'input',
          inputConfig: {
            placeholder: searchQuery,
            submitHint: 'Press Enter to ask Claude',
          },
          execute: async (query) => {
            toast.info(`Asking Claude about: "${query}"`);

            // Simulate AI processing
            await new Promise((resolve) => setTimeout(resolve, 1500));

            const fallbackResponse = `I notice you were looking for "${searchQuery}". While I don't have a specific command for that, I can help you find alternatives or explain how to accomplish your goal. In a real implementation, I would provide detailed assistance based on your specific needs.`;

            toast.success(`Claude: ${fallbackResponse}`);

            return {
              success: true,
              data: { lastClaudeQuery: query, lastClaudeResponse: fallbackResponse },
            };
          },
        }),
      };
    },
  });
};
