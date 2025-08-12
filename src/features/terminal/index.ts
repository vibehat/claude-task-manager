// Re-export components (legacy)
export { MultiTerminalTray, XTermStyles } from './components';

// Re-export new wireframe-based components
export {
  TerminalButtonSystem,
  TerminalWindow,
  TerminalButtonBar,
  SafeTerminalButtonSystem,
} from './components';

// Re-export stores
export {
  useTerminalManagerStore,
  useTerminals,
  useActiveTerminalId,
  useActiveTerminal,
  useTerminalVisibility,
  useTerminalLoading,
  useTerminalError,
  type Terminal,
} from './stores/terminalManagerStore';

// Re-export hooks (only the one we use)
export { useIndividualTerminal } from './hooks/useIndividualTerminal';

// Re-export types
export type {
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
