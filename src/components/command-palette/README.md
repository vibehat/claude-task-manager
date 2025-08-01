# Context-Aware Command Palette

A powerful, flexible command palette system built with React, TypeScript, and cmdk. Features full context awareness, command chaining, and a modular architecture.

## ✨ Features

- **Context-Aware**: Commands have access to full execution history and shared state
- **Multi-Step Flows**: Support for complex, multi-step command workflows
- **Command Chaining**: Commands can return other commands for seamless workflows
- **Modular Architecture**: Plugin-like module system with dependencies
- **Dynamic Resolution**: Commands adapt based on current context
- **Type-Safe**: Full TypeScript support with comprehensive type definitions
- **Performance Optimized**: Lazy loading, virtualization, and efficient rendering

## 🚀 Quick Start

### Basic Setup

```tsx
import {
   CommandPalette,
   CommandPaletteProvider,
   exampleModule,
} from '@/components/command-palette';

function App() {
   const [open, setOpen] = useState(false);

   return (
      <CommandPaletteProvider modules={[exampleModule]}>
         <button onClick={() => setOpen(true)}>Open Command Palette</button>
         <CommandPalette open={open} onOpenChange={setOpen} />
      </CommandPaletteProvider>
   );
}
```

### Creating Commands

```tsx
import {
   createActionCommand,
   createSelectCommand,
   createInputCommand,
   createContextualInputCommand,
} from '@/components/command-palette';

// Simple action command
const helloCommand = createActionCommand({
   id: 'hello',
   title: 'Hello World',
   execute: async () => {
      console.log('Hello!');
      return { success: true };
   },
});

// Select command with options
const selectCommand = createSelectCommand({
   id: 'select-item',
   title: 'Select Item',
   options: [
      { id: '1', title: 'Option 1', value: 'one' },
      { id: '2', title: 'Option 2', value: 'two' },
   ],
   execute: async (value) => {
      console.log('Selected:', value);
      return { success: true };
   },
});

// Input command with validation
const inputCommand = createInputCommand({
   id: 'create-item',
   title: 'Create Item',
   inputConfig: {
      placeholder: 'Enter name...',
      validation: (value) => (value.length < 3 ? 'Too short' : undefined),
   },
   execute: async (name) => {
      console.log('Created:', name);
      return { success: true };
   },
});

// Contextual input command - shows "Create Item: 'user input...'" in title
const contextualInputCommand = createContextualInputCommand({
   id: 'create-item-contextual',
   title: 'Create Item',
   inputConfig: {
      placeholder: 'Enter name...',
      submitHint: 'Press Enter to create',
      validation: (value) => (value.length < 3 ? 'Too short' : undefined),
   },
   execute: async (name) => {
      console.log('Created:', name);
      return { success: true };
   },
});

// Contextual input with custom format
const customContextualCommand = createContextualInputCommand({
   id: 'create-item-custom',
   title: 'Create New Item',
   contextFormat: (title, value) => `${title}: "${value}"...`,
   inputConfig: {
      placeholder: 'Enter name...',
      validation: (value) => (value.length < 3 ? 'Too short' : undefined),
   },
   execute: async (name) => {
      console.log('Created:', name);
      return { success: true };
   },
});
```

### Creating Modules

```tsx
import { CommandModule } from '@/components/command-palette';

const myModule: CommandModule = {
   id: 'my-module',
   name: 'My Module',
   version: '1.0.0',

   commands: (context) => [
      // Context-aware command
      {
         id: 'context-aware',
         title: (ctx) => (ctx.data.userName ? `Hello, ${ctx.data.userName}!` : 'Set Name'),
         visible: (ctx) => !ctx.data.hidden,
         type: 'action',
         execute: async (_, ctx) => {
            // Access context data
            console.log('Context:', ctx.data);
            return { success: true };
         },
      },
   ],

   // Extend context with data and methods
   contextExtensions: {
      data: {
         myModuleData: 'some data',
      },
      methods: {
         refresh: () => console.log('Refreshing...'),
      },
   },

   // React to command executions
   onCommandExecute: (command, result, context) => {
      console.log(`Command ${command.id} executed:`, result);
   },
};
```

## 🏗️ Architecture

### Core Components

- **CommandContext**: Central state management with command chain tracking
- **CommandChain**: Stack-based navigation through command history
- **CommandResolver**: Dynamic command resolution and filtering
- **CommandExecution**: Command execution with result tracking
- **ModuleRegistry**: Plugin system for registering command modules

### Command Types

| Type        | Description           | Use Case                  |
| ----------- | --------------------- | ------------------------- |
| `action`    | Execute immediately   | Simple operations         |
| `select`    | Choose from options   | Selections, menus         |
| `input`     | Text/number input     | Data entry, configuration |
| `branch`    | Conditional execution | Context-dependent logic   |
| `composite` | Returns more commands | Multi-step workflows      |

### Context Flow

```
User Input → Command Resolver → Command Executor → Context Update → Next Command
     ↑                                                      ↓
     └─────────────── UI Update ←─────────── Chain Management
```

## 🎯 Advanced Usage

### Multi-Step Workflows

```tsx
const multiStepCommand = createCompositeCommand({
   id: 'multi-step',
   title: 'Multi-Step Process',
   execute: async () => {
      return {
         success: true,
         nextCommand: createSelectCommand({
            id: 'step-2',
            title: 'Choose Type',
            options: [
               /* ... */
            ],
            execute: async (type) => {
               return {
                  success: true,
                  nextCommand: createInputCommand({
                     id: 'step-3',
                     title: 'Enter Name',
                     execute: async (name) => {
                        // Final step
                        return { success: true };
                     },
                  }),
               };
            },
         }),
      };
   },
});
```

### Context-Aware Commands

```tsx
const smartCommand: Command = {
   id: 'smart',
   title: (ctx) => (ctx.data.selectedItem ? 'Edit Item' : 'Select Item First'),
   visible: (ctx) => ctx.data.showAdvanced,
   enabled: (ctx) => !!ctx.data.selectedItem,
   type: 'action',
   execute: async (_, ctx) => {
      // Access full context
      const item = ctx.data.selectedItem;
      const history = ctx.chain.map((c) => c.command.id);

      return { success: true };
   },
};
```

### Module Dependencies

```tsx
const advancedModule: CommandModule = {
   id: 'advanced',
   name: 'Advanced Features',
   dependencies: ['basic-module'], // Must be loaded first

   initialize: async (context) => {
      // Access dependent module data
      const basicData = context.data['basic-module.data'];
   },

   commands: (context) => {
      // Generate commands based on other modules
      const basicCommands = context.modules.get('basic-module')?.commands;
      return enhancedCommands(basicCommands);
   },
};
```

## 🔧 Customization

### Custom Step Components

```tsx
const customStepCommand: Command = {
   id: 'custom',
   title: 'Custom Step',
   type: 'select',
   options: async () => loadCustomOptions(),
   // Custom rendering handled by CommandPalette
};
```

### Event Handling

```tsx
const moduleWithEvents: CommandModule = {
   // ...
   onCommandExecute: (command, result, context) => {
      if (result.success && command.id.startsWith('data-')) {
         // Refresh data after data commands
         context.methods.refreshData();
      }
   },

   onContextChange: (context) => {
      // React to context changes
      console.log('Context updated:', context.data);
   },
};
```

## 🧪 Testing

```tsx
import { renderWithCommandPalette } from '@/components/command-palette/test-utils';

test('command execution', async () => {
   const mockModule = {
      id: 'test',
      commands: [mockCommand],
   };

   const { executeCommand } = renderWithCommandPalette({ modules: [mockModule] });

   const result = await executeCommand(mockCommand);
   expect(result.success).toBe(true);
});
```
