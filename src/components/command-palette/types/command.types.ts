import type { Command, CommandContext, CommandOption, CommandResult } from './context.types';

// Command creation helpers
export function createCommand(
   config: Partial<Command> & Pick<Command, 'id' | 'title' | 'type' | 'execute'>
): Command {
   return {
      ...config,
      id: config.id,
      title: config.title,
      type: config.type,
      execute: config.execute,
   };
}

export function createActionCommand(config: Omit<Command, 'type'> & { type?: 'action' }): Command {
   return createCommand({ ...config, type: 'action' });
}

export function createSelectCommand(
   config: Omit<Command, 'type' | 'options'> & {
      type?: 'select';
      options: Command['options'];
   }
): Command {
   return createCommand({ ...config, type: 'select' });
}

export function createInputCommand(
   config: Omit<Command, 'type'> & {
      type?: 'input';
      inputConfig?: Command['inputConfig'];
   }
): Command {
   return createCommand({ ...config, type: 'input' });
}

// Helper function to create contextual input commands
export function createContextualInputCommand(
   config: Omit<Command, 'type'> & {
      type?: 'input';
      inputConfig?: Omit<Command['inputConfig'], 'showContextualTitle'>;
      contextFormat?: (title: string, value: string) => string;
   }
): Command {
   const { contextFormat, inputConfig, ...rest } = config;

   return createCommand({
      ...rest,
      type: 'input',
      inputConfig: {
         ...inputConfig,
         showContextualTitle: true,
         contextFormat,
      },
   });
}

// Helper function to create input-with-actions commands
export function createInputWithActionsCommand(
   config: Omit<Command, 'type' | 'execute'> & {
      type?: 'input-with-actions';
      inputConfig?: Command['inputConfig'];
      submitActions: Command['submitActions'];
      // Execute function receives both input value and selected action
      execute: (
         inputValue: string,
         selectedAction: CommandOption,
         context: CommandContext
      ) => Promise<CommandResult>;
   }
): Command {
   const { submitActions, execute: originalExecute, ...rest } = config;

   return createCommand({
      ...rest,
      type: 'input-with-actions',
      submitActions,
      // Wrapper execute function that handles the action selection
      execute: async (
         params: { inputValue: string; action: CommandOption },
         context: CommandContext
      ) => {
         return originalExecute(params.inputValue, params.action, context);
      },
   } as any);
}

export function createBranchCommand(
   config: Omit<Command, 'type' | 'branches'> & {
      type?: 'branch';
      branches: Command['branches'];
   }
): Command {
   return createCommand({ ...config, type: 'branch' });
}

export function createCompositeCommand(
   config: Omit<Command, 'type'> & { type?: 'composite' }
): Command {
   return createCommand({ ...config, type: 'composite' });
}

export function createSearchCommand(
   config: Omit<Command, 'type' | 'execute'> & {
      type?: 'search';
      searchConfig?: Command['searchConfig'];
      searchResultConfig?: Command['searchResultConfig'];
      searchHandler: Command['searchHandler'];
   }
): Command {
   const { searchHandler, searchResultConfig, ...rest } = config;

   return createCommand({
      ...rest,
      type: 'search',
      searchHandler,
      searchResultConfig,
      // For search commands, execute handles the search query
      execute: async (query: string, context: CommandContext) => {
         // This execute function won't be called directly for search commands
         // Instead, the searchHandler is used by the UI to get search results
         return { success: true };
      },
   } as any);
}

// Command option helpers
export function createOption(
   id: string,
   title: string,
   value: any,
   extra?: Partial<CommandOption>
): CommandOption {
   return {
      id,
      title,
      value,
      ...extra,
   };
}

// Dynamic value helpers
export function isDynamicValue<T>(
   value: T | ((context: CommandContext) => T)
): value is (context: CommandContext) => T {
   return typeof value === 'function';
}

export function resolveDynamicValue<T>(
   value: T | ((context: CommandContext) => T),
   context: CommandContext
): T {
   return isDynamicValue(value) ? value(context) : value;
}
