export interface TerminalMessage {
   type: 'data' | 'input' | 'resize' | 'connected' | 'exit' | 'error';
   data?: any;
   sessionId?: string;
   shell?: string;
   platform?: string;
   cwd?: string;
   exitCode?: number;
   message?: string;
}

export interface TerminalResizeData {
   cols: number;
   rows: number;
}

export interface TerminalDimensions {
   cols: number;
   rows: number;
}

export interface TerminalSession {
   sessionId: string;
   shell: string;
   platform: string;
   cwd: string;
   connected: boolean;
}

export enum TerminalConnectionStatus {
   DISCONNECTED = 'disconnected',
   CONNECTING = 'connecting',
   CONNECTED = 'connected',
   ERROR = 'error',
   RECONNECTING = 'reconnecting',
}

export interface TerminalConfig {
   websocketUrl: string;
   reconnectAttempts: number;
   reconnectDelay: number;
   fontSize: number;
   fontFamily: string;
   cursorBlink: boolean;
   theme: TerminalTheme;
}

export interface TerminalTheme {
   background: string;
   foreground: string;
   cursor: string;
   cursorAccent: string;
   selection: string;
   black: string;
   red: string;
   green: string;
   yellow: string;
   blue: string;
   magenta: string;
   cyan: string;
   white: string;
   brightBlack: string;
   brightRed: string;
   brightGreen: string;
   brightYellow: string;
   brightBlue: string;
   brightMagenta: string;
   brightCyan: string;
   brightWhite: string;
}

export interface TerminalServerStatus {
   active: boolean;
   port: number;
   activeSessions: number;
   sessions: Array<{
      sessionId: string;
      createdAt: string;
   }>;
   platform: string;
   cwd: string;
}

export interface UseTerminalReturn {
   terminal: any | null; // XTerm Terminal instance
   initializeTerminal: () => Promise<any | null>;
   connectionStatus: TerminalConnectionStatus;
   session: TerminalSession | null;
   connect: () => void;
   disconnect: () => void;
   sendInput: (data: string) => void;
   resize: (cols: number, rows: number) => void;
   clear: () => void;
   fit: () => void;
   isConnected: boolean;
   error: string | null;
}

export interface TerminalComponentProps {
   className?: string;
   onConnect?: () => void;
   onDisconnect?: () => void;
   onError?: (error: string) => void;
   theme?: 'light' | 'dark' | 'auto';
   fontSize?: number;
   fontFamily?: string;
}

export interface TerminalStatusProps {
   status: TerminalConnectionStatus;
   session: TerminalSession | null;
   error: string | null;
   onReconnect?: () => void;
}
