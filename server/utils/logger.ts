import type { Logger } from '../types/websocket.types';
import { WebSocketConfig } from '../config/websocket.config';

export class ConsoleLogger implements Logger {
   private logLevel: 'debug' | 'info' | 'warn' | 'error';
   private context: string;

   constructor(context: string = 'WebSocketServer') {
      this.context = context;
      this.logLevel = WebSocketConfig.getInstance().getLogLevel();
   }

   private shouldLog(level: 'debug' | 'info' | 'warn' | 'error'): boolean {
      const levels = ['debug', 'info', 'warn', 'error'];
      return levels.indexOf(level) >= levels.indexOf(this.logLevel);
   }

   private formatMessage(level: string, message: string, meta?: any): string {
      const timestamp = new Date().toISOString();
      const metaStr = meta ? ` ${JSON.stringify(meta)}` : '';
      return `[${timestamp}] [${level.toUpperCase()}] [${this.context}] ${message}${metaStr}`;
   }

   debug(message: string, meta?: any): void {
      if (this.shouldLog('debug')) {
         console.debug(this.formatMessage('debug', message, meta));
      }
   }

   info(message: string, meta?: any): void {
      if (this.shouldLog('info')) {
         console.info(this.formatMessage('info', message, meta));
      }
   }

   warn(message: string, meta?: any): void {
      if (this.shouldLog('warn')) {
         console.warn(this.formatMessage('warn', message, meta));
      }
   }

   error(message: string, error?: Error, meta?: any): void {
      if (this.shouldLog('error')) {
         const errorInfo = error
            ? {
                 message: error.message,
                 stack: error.stack,
                 ...meta,
              }
            : meta;
         console.error(this.formatMessage('error', message, errorInfo));
      }
   }

   createChild(context: string): Logger {
      return new ConsoleLogger(`${this.context}:${context}`);
   }
}
