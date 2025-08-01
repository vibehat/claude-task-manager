export interface TerminalMessage {
   type: 'data' | 'input' | 'resize' | 'connected' | 'session-restored' | 'exit' | 'error';
   data?: any;
   sessionId?: string;
   shell?: string;
   platform?: string;
   cwd?: string;
   exitCode?: number;
   message?: string;
   usingPty?: boolean;
   ptySupport?: boolean;
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
   connect: () => Promise<void>;
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

// Multi-terminal specific interfaces
export interface MultiTerminalInstance {
   id: string;
   terminal: any | null; // XTerm Terminal instance
   terminalHook: UseTerminalReturn;
   title: string;
   isMinimized: boolean;
   isMaximized: boolean;
   position: { x: number; y: number };
   size: { width: number; height: number };
   zIndex: number;
   createdAt: Date;
   lastActiveAt: Date;
}

export interface MultiTerminalContextValue {
   terminals: Map<string, MultiTerminalInstance>;
   activeTerminalId: string | null;

   // Terminal management
   createTerminal: (title?: string) => string;
   closeTerminal: (id: string) => void;
   setActiveTerminal: (id: string) => void;
   getTerminal: (id: string) => MultiTerminalInstance | undefined;

   // Terminal state management
   minimizeTerminal: (id: string) => void;
   maximizeTerminal: (id: string) => void;
   restoreTerminal: (id: string) => void;
   toggleMinimize: (id: string) => void;
   toggleMaximize: (id: string) => void;

   // Terminal positioning
   updateTerminalPosition: (id: string, x: number, y: number) => void;
   updateTerminalSize: (id: string, width: number, height: number) => void;
   bringTerminalToFront: (id: string) => void;

   // Terminal properties
   updateTerminalTitle: (id: string, title: string) => void;

   // Legacy single terminal support (for backward compatibility)
   terminal: any | null;
   isVisible: boolean;
   showTerminal: () => void;
   hideTerminal: () => void;
   toggleTerminal: () => void;
   terminalRef: React.RefObject<HTMLDivElement | null>;
}

export interface PersistentTerminalProps {
   className?: string;
   terminalId?: string; // For multi-terminal support
   onClose?: (id: string) => void;
   onMinimize?: (id: string) => void;
   onMaximize?: (id: string) => void;
   onFocus?: (id: string) => void;
}
