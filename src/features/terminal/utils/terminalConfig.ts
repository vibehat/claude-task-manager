import type { TerminalConfig, TerminalTheme } from '../types/terminal';

// Default terminal themes
export const lightTheme: TerminalTheme = {
  background: '#ffffff',
  foreground: '#000000',
  cursor: '#000000',
  cursorAccent: '#ffffff',
  selection: 'rgba(0, 0, 0, 0.3)',
  black: '#000000',
  red: '#cd0000',
  green: '#00cd00',
  yellow: '#cdcd00',
  blue: '#0000ee',
  magenta: '#cd00cd',
  cyan: '#00cdcd',
  white: '#e5e5e5',
  brightBlack: '#7f7f7f',
  brightRed: '#ff0000',
  brightGreen: '#00ff00',
  brightYellow: '#ffff00',
  brightBlue: '#5c5cff',
  brightMagenta: '#ff00ff',
  brightCyan: '#00ffff',
  brightWhite: '#ffffff',
};

export const darkTheme: TerminalTheme = {
  background: '#000000',
  foreground: '#ffffff',
  cursor: '#ffffff',
  cursorAccent: '#000000',
  selection: 'rgba(255, 255, 255, 0.3)',
  black: '#000000',
  red: '#cd0000',
  green: '#00cd00',
  yellow: '#cdcd00',
  blue: '#0000ee',
  magenta: '#cd00cd',
  cyan: '#00cdcd',
  white: '#e5e5e5',
  brightBlack: '#7f7f7f',
  brightRed: '#ff0000',
  brightGreen: '#00ff00',
  brightYellow: '#ffff00',
  brightBlue: '#5c5cff',
  brightMagenta: '#ff00ff',
  brightCyan: '#00ffff',
  brightWhite: '#ffffff',
};

// Terminal configuration defaults
export const defaultTerminalConfig: TerminalConfig = {
  websocketUrl: 'ws://localhost:9001',
  reconnectAttempts: 5,
  reconnectDelay: 1000,
  fontSize: 14,
  fontFamily: 'Monaco, Menlo, "Ubuntu Mono", monospace',
  cursorBlink: true,
  theme: darkTheme,
};

// XTerm.js configuration
export const getXTermConfig = (theme: TerminalTheme, fontSize: number, fontFamily: string) => ({
  cursorBlink: true,
  cursorStyle: 'block' as const,
  fontSize,
  fontFamily,
  fontWeight: 'normal' as const,
  fontWeightBold: 'bold' as const,
  lineHeight: 1.2,
  letterSpacing: 0,
  scrollback: 1000,
  tabStopWidth: 4,
  convertEol: true,
  allowTransparency: false,
  minimumContrastRatio: 1,
  // Use DOM renderer - simpler and standard approach
  rendererType: 'dom' as const,
  logLevel: 'info' as const, // More verbose logging for debugging
  screenReaderMode: false,
  rightClickSelectsWord: true,
  disableStdin: false, // Ensure input is enabled
  macOptionIsMeta: true, // Enable proper key handling on Mac
  windowsMode: false,
  theme: {
    background: theme.background,
    foreground: theme.foreground,
    cursor: theme.cursor,
    cursorAccent: theme.cursorAccent,
    selection: theme.selection,
    black: theme.black,
    red: theme.red,
    green: theme.green,
    yellow: theme.yellow,
    blue: theme.blue,
    magenta: theme.magenta,
    cyan: theme.cyan,
    white: theme.white,
    brightBlack: theme.brightBlack,
    brightRed: theme.brightRed,
    brightGreen: theme.brightGreen,
    brightYellow: theme.brightYellow,
    brightBlue: theme.brightBlue,
    brightMagenta: theme.brightMagenta,
    brightCyan: theme.brightCyan,
    brightWhite: theme.brightWhite,
  },
});

// Helper function to get theme based on system/user preference
export const getThemeForMode = (mode: 'light' | 'dark' | 'auto'): TerminalTheme => {
  if (mode === 'auto') {
    // Check system preference
    const prefersDark =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? darkTheme : lightTheme;
  }
  return mode === 'dark' ? darkTheme : lightTheme;
};

// WebSocket connection helper
export const getWebSocketUrl = async (): Promise<string> => {
  try {
    const response = await fetch('/api/terminal');
    const data = await response.json();
    return data.websocketUrl || defaultTerminalConfig.websocketUrl;
  } catch (error) {
    console.warn('Failed to get WebSocket URL from API, using default:', error);
    return defaultTerminalConfig.websocketUrl;
  }
};
