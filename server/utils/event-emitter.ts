import { EventEmitter } from 'events';
import type { ServerEvents } from '../types/websocket.types';

export class TypedEventEmitter extends EventEmitter {
   constructor() {
      super();
      // Set max listeners to prevent memory leak warnings
      this.setMaxListeners(50);
   }

   // Type-safe event emission
   emit<K extends keyof ServerEvents>(event: K, ...args: Parameters<ServerEvents[K]>): boolean {
      return super.emit(event as string, ...args);
   }

   // Type-safe event listening
   on<K extends keyof ServerEvents>(event: K, listener: ServerEvents[K]): this {
      return super.on(event as string, listener);
   }

   // Type-safe one-time event listening
   once<K extends keyof ServerEvents>(event: K, listener: ServerEvents[K]): this {
      return super.once(event as string, listener);
   }

   // Type-safe event removal
   off<K extends keyof ServerEvents>(event: K, listener: ServerEvents[K]): this {
      return super.off(event as string, listener);
   }

   // Remove all listeners for an event
   removeAllListeners<K extends keyof ServerEvents>(event?: K): this {
      return super.removeAllListeners(event as string);
   }
}
