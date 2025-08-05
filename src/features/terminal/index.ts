// Re-export components
export {
  Terminal,
  TerminalStatus,
  PersistentTerminal,
  TerminalToggle,
  MultiTerminalManager,
  MultiTerminalWrapper,
  XTermStyles,
} from './components';

// Re-export contexts
export { default as TerminalProvider, useTerminalContext } from './contexts/TerminalContext';

// Re-export hooks
export { useTerminal } from './hooks/useTerminal';
export { useIndividualTerminal } from './hooks/useIndividualTerminal';

// Re-export types
export type {
  TerminalComponentProps,
  TerminalStatusProps,
  PersistentTerminalProps,
  MultiTerminalInstance,
  TerminalConfig,
  TerminalMessage,
  TerminalDimensions,
  TerminalSession,
} from './types/terminal';

// Re-export utils
export {
  defaultTerminalConfig,
  getXTermConfig,
  getThemeForMode,
  lightTheme,
  darkTheme,
} from './utils/terminalConfig';
export {
  TerminalStartupManager,
  terminalStartupManager,
  useTerminalStartup,
} from './utils/terminalStartup';
