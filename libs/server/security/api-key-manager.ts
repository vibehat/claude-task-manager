/**
 * Secure API Key Storage Manager
 *
 * Implements client-side encryption for API keys using Web Crypto API.
 * Features:
 * - AES-GCM encryption with secure key derivation
 * - Salt-based PBKDF2 key derivation
 * - Secure key rotation and deletion
 * - Never stores keys in plain text
 */

// Simple logger interface for testing compatibility
interface SimpleLogger {
   log: (message: string, data?: any) => void;
}

// Create a simple logger that works in both browser and Node.js environments
const createSimpleLogger = (): SimpleLogger => ({
   log: (message: string, data?: any) => {
      // Only log in development or if console is available
      if (
         typeof console !== 'undefined' &&
         (process?.env?.NODE_ENV === 'development' || typeof window !== 'undefined')
      ) {
         console.log(`[API Key Manager] ${message}`, data ? JSON.stringify(data, null, 2) : '');
      }
   },
});

const logger = createSimpleLogger();

export interface APIProvider {
   id: string;
   name: string;
   displayName: string;
   website?: string;
   documentation?: string;
}

export interface EncryptedAPIKey {
   id: string;
   providerId: string;
   encryptedKey: string;
   salt: string;
   iv: string;
   createdAt: Date;
   lastUsed?: Date;
   metadata?: Record<string, unknown>;
}

export interface APIKeyMetadata {
   providerId: string;
   nickname?: string;
   environment?: 'development' | 'staging' | 'production';
   permissions?: string[];
   expiresAt?: Date;
}

export class APIKeyManager {
   private static readonly STORAGE_KEY = 'taskmaster_encrypted_api_keys';
   private static readonly SALT_LENGTH = 16;
   private static readonly IV_LENGTH = 12;
   private static readonly KEY_ITERATIONS = 100000;
   private static readonly ALGORITHM = 'AES-GCM';

   // Supported AI providers
   public static readonly PROVIDERS: APIProvider[] = [
      {
         id: 'anthropic',
         name: 'anthropic',
         displayName: 'Anthropic (Claude)',
         website: 'https://anthropic.com',
         documentation: 'https://docs.anthropic.com',
      },
      {
         id: 'openai',
         name: 'openai',
         displayName: 'OpenAI (GPT)',
         website: 'https://openai.com',
         documentation: 'https://platform.openai.com/docs',
      },
      {
         id: 'google',
         name: 'google',
         displayName: 'Google (Gemini)',
         website: 'https://ai.google.dev',
         documentation: 'https://ai.google.dev/docs',
      },
      {
         id: 'perplexity',
         name: 'perplexity',
         displayName: 'Perplexity',
         website: 'https://perplexity.ai',
         documentation: 'https://docs.perplexity.ai',
      },
      {
         id: 'mistral',
         name: 'mistral',
         displayName: 'Mistral AI',
         website: 'https://mistral.ai',
         documentation: 'https://docs.mistral.ai',
      },
      {
         id: 'openrouter',
         name: 'openrouter',
         displayName: 'OpenRouter',
         website: 'https://openrouter.ai',
         documentation: 'https://openrouter.ai/docs',
      },
      {
         id: 'xai',
         name: 'xai',
         displayName: 'xAI (Grok)',
         website: 'https://x.ai',
         documentation: 'https://docs.x.ai',
      },
      {
         id: 'azure',
         name: 'azure',
         displayName: 'Azure OpenAI',
         website: 'https://azure.microsoft.com/en-us/products/ai-services/openai-service',
         documentation: 'https://docs.microsoft.com/en-us/azure/cognitive-services/openai/',
      },
      {
         id: 'ollama',
         name: 'ollama',
         displayName: 'Ollama (Local)',
         website: 'https://ollama.ai',
         documentation: 'https://github.com/ollama/ollama/blob/main/docs/api.md',
      },
   ];

   private masterPassword: string | null = null;
   private derivedKey: CryptoKey | null = null;

   constructor() {
      // Initialize logging
      logger.log('APIKeyManager initialized', {
         context: 'api_key_manager',
         action: 'initialize',
         timestamp: new Date().toISOString(),
      });
   }

   /**
    * Set the master password for encryption/decryption
    */
   async setMasterPassword(password: string): Promise<void> {
      if (!password || password.length < 8) {
         throw new Error('Master password must be at least 8 characters long');
      }

      this.masterPassword = password;

      // Clear any existing derived key to force re-derivation
      this.derivedKey = null;

      logger.log('Master password set', {
         context: 'api_key_manager',
         action: 'set_master_password',
         timestamp: new Date().toISOString(),
      });
   }

   /**
    * Generate a secure salt for key derivation
    */
   private generateSalt(): Uint8Array {
      return crypto.getRandomValues(new Uint8Array(APIKeyManager.SALT_LENGTH));
   }

   /**
    * Generate a secure initialization vector for encryption
    */
   private generateIV(): Uint8Array {
      return crypto.getRandomValues(new Uint8Array(APIKeyManager.IV_LENGTH));
   }

   /**
    * Derive encryption key from master password and salt using PBKDF2
    */
   private async deriveKey(password: string, salt: Uint8Array): Promise<CryptoKey> {
      const encoder = new TextEncoder();
      const passwordBuffer = encoder.encode(password);

      // Import the password as a key for PBKDF2
      const keyMaterial = await crypto.subtle.importKey('raw', passwordBuffer, 'PBKDF2', false, [
         'deriveKey',
      ]);

      // Derive the actual encryption key
      return crypto.subtle.deriveKey(
         {
            name: 'PBKDF2',
            salt: salt,
            iterations: APIKeyManager.KEY_ITERATIONS,
            hash: 'SHA-256',
         },
         keyMaterial,
         {
            name: APIKeyManager.ALGORITHM,
            length: 256,
         },
         false,
         ['encrypt', 'decrypt']
      );
   }

   /**
    * Encrypt an API key using AES-GCM
    */
   private async encryptAPIKey(
      apiKey: string,
      salt: Uint8Array
   ): Promise<{ encryptedKey: string; iv: string }> {
      if (!this.masterPassword) {
         throw new Error('Master password not set');
      }

      const derivedKey = await this.deriveKey(this.masterPassword, salt);
      const iv = this.generateIV();
      const encoder = new TextEncoder();
      const data = encoder.encode(apiKey);

      const encrypted = await crypto.subtle.encrypt(
         {
            name: APIKeyManager.ALGORITHM,
            iv: iv,
         },
         derivedKey,
         data
      );

      return {
         encryptedKey: this.arrayBufferToBase64(encrypted),
         iv: this.arrayBufferToBase64(iv),
      };
   }

   /**
    * Decrypt an API key using AES-GCM
    */
   private async decryptAPIKey(encryptedKey: string, salt: string, iv: string): Promise<string> {
      if (!this.masterPassword) {
         throw new Error('Master password not set');
      }

      const derivedKey = await this.deriveKey(this.masterPassword, this.base64ToArrayBuffer(salt));
      const encryptedBuffer = this.base64ToArrayBuffer(encryptedKey);
      const ivBuffer = this.base64ToArrayBuffer(iv);

      const decrypted = await crypto.subtle.decrypt(
         {
            name: APIKeyManager.ALGORITHM,
            iv: ivBuffer,
         },
         derivedKey,
         encryptedBuffer
      );

      const decoder = new TextDecoder();
      return decoder.decode(decrypted);
   }

   /**
    * Convert ArrayBuffer to Base64 string
    */
   private arrayBufferToBase64(buffer: ArrayBuffer): string {
      const bytes = new Uint8Array(buffer);
      let binary = '';
      for (let i = 0; i < bytes.byteLength; i++) {
         binary += String.fromCharCode(bytes[i]);
      }
      return btoa(binary);
   }

   /**
    * Convert Base64 string to ArrayBuffer
    */
   private base64ToArrayBuffer(base64: string): Uint8Array {
      const binary = atob(base64);
      const bytes = new Uint8Array(binary.length);
      for (let i = 0; i < binary.length; i++) {
         bytes[i] = binary.charCodeAt(i);
      }
      return bytes;
   }

   /**
    * Store an encrypted API key
    */
   async storeAPIKey(
      providerId: string,
      apiKey: string,
      metadata?: APIKeyMetadata
   ): Promise<string> {
      if (!this.isValidProvider(providerId)) {
         throw new Error(`Invalid provider: ${providerId}`);
      }

      if (!apiKey || apiKey.trim().length === 0) {
         throw new Error('API key cannot be empty');
      }

      const salt = this.generateSalt();
      const { encryptedKey, iv } = await this.encryptAPIKey(apiKey.trim(), salt);

      const keyId = crypto.randomUUID();
      const encryptedAPIKey: EncryptedAPIKey = {
         id: keyId,
         providerId,
         encryptedKey,
         salt: this.arrayBufferToBase64(salt),
         iv,
         createdAt: new Date(),
         metadata: metadata as Record<string, unknown>,
      };

      // Get existing keys
      const existingKeys = this.getStoredKeys();

      // Remove any existing key for this provider (only one key per provider)
      const filteredKeys = existingKeys.filter((key) => key.providerId !== providerId);

      // Add the new key
      filteredKeys.push(encryptedAPIKey);

      // Store in localStorage
      localStorage.setItem(APIKeyManager.STORAGE_KEY, JSON.stringify(filteredKeys));

      logger.log('API key stored', {
         context: 'api_key_manager',
         action: 'store_api_key',
         providerId,
         keyId,
         timestamp: new Date().toISOString(),
      });

      return keyId;
   }

   /**
    * Retrieve and decrypt an API key
    */
   async getAPIKey(providerId: string): Promise<string | null> {
      if (!this.isValidProvider(providerId)) {
         throw new Error(`Invalid provider: ${providerId}`);
      }

      const existingKeys = this.getStoredKeys();
      const keyData = existingKeys.find((key) => key.providerId === providerId);

      if (!keyData) {
         return null;
      }

      try {
         const decryptedKey = await this.decryptAPIKey(
            keyData.encryptedKey,
            keyData.salt,
            keyData.iv
         );

         // Update last used timestamp
         keyData.lastUsed = new Date();
         const updatedKeys = existingKeys.map((key) => (key.id === keyData.id ? keyData : key));
         localStorage.setItem(APIKeyManager.STORAGE_KEY, JSON.stringify(updatedKeys));

         logger.log('API key accessed', {
            context: 'api_key_manager',
            action: 'get_api_key',
            providerId,
            keyId: keyData.id,
            timestamp: new Date().toISOString(),
         });

         return decryptedKey;
      } catch (error) {
         logger.log('API key decryption failed', {
            context: 'api_key_manager',
            action: 'get_api_key_error',
            providerId,
            keyId: keyData.id,
            error: error instanceof Error ? error.message : 'Unknown error',
            timestamp: new Date().toISOString(),
         });
         throw new Error('Failed to decrypt API key. Check your master password.');
      }
   }

   /**
    * Remove an API key
    */
   async removeAPIKey(providerId: string): Promise<boolean> {
      if (!this.isValidProvider(providerId)) {
         throw new Error(`Invalid provider: ${providerId}`);
      }

      const existingKeys = this.getStoredKeys();
      const keyData = existingKeys.find((key) => key.providerId === providerId);

      if (!keyData) {
         return false;
      }

      const filteredKeys = existingKeys.filter((key) => key.providerId !== providerId);
      localStorage.setItem(APIKeyManager.STORAGE_KEY, JSON.stringify(filteredKeys));

      logger.log('API key removed', {
         context: 'api_key_manager',
         action: 'remove_api_key',
         providerId,
         keyId: keyData.id,
         timestamp: new Date().toISOString(),
      });

      return true;
   }

   /**
    * List all stored API key metadata (without decrypting the keys)
    */
   listStoredKeys(): Array<{
      providerId: string;
      keyId: string;
      createdAt: Date;
      lastUsed?: Date;
      metadata?: Record<string, unknown>;
   }> {
      const keys = this.getStoredKeys();
      return keys.map((key) => ({
         providerId: key.providerId,
         keyId: key.id,
         createdAt: key.createdAt,
         lastUsed: key.lastUsed,
         metadata: key.metadata,
      }));
   }

   /**
    * Clear all stored API keys
    */
   clearAllKeys(): void {
      localStorage.removeItem(APIKeyManager.STORAGE_KEY);

      logger.log('All API keys cleared', {
         context: 'api_key_manager',
         action: 'clear_all_keys',
         timestamp: new Date().toISOString(),
      });
   }

   /**
    * Check if a provider ID is valid
    */
   private isValidProvider(providerId: string): boolean {
      return APIKeyManager.PROVIDERS.some((provider) => provider.id === providerId);
   }

   /**
    * Get stored keys from localStorage
    */
   private getStoredKeys(): EncryptedAPIKey[] {
      const stored = localStorage.getItem(APIKeyManager.STORAGE_KEY);
      if (!stored) {
         return [];
      }

      try {
         const parsed = JSON.parse(stored);
         // Convert date strings back to Date objects
         return parsed.map((key: any) => ({
            ...key,
            createdAt: new Date(key.createdAt),
            lastUsed: key.lastUsed ? new Date(key.lastUsed) : undefined,
         }));
      } catch {
         return [];
      }
   }

   /**
    * Test if master password can decrypt existing keys
    */
   async validateMasterPassword(): Promise<boolean> {
      const keys = this.getStoredKeys();
      if (keys.length === 0) {
         return true; // No keys to validate against
      }

      try {
         // Try to decrypt the first key
         const firstKey = keys[0];
         await this.decryptAPIKey(firstKey.encryptedKey, firstKey.salt, firstKey.iv);
         return true;
      } catch {
         return false;
      }
   }

   /**
    * Rotate encryption for all stored keys with a new master password
    */
   async rotateKeys(newMasterPassword: string): Promise<void> {
      if (!newMasterPassword || newMasterPassword.length < 8) {
         throw new Error('New master password must be at least 8 characters long');
      }

      const existingKeys = this.getStoredKeys();
      const decryptedKeys: Array<{
         providerId: string;
         apiKey: string;
         metadata?: Record<string, unknown>;
      }> = [];

      // Decrypt all keys with current password
      for (const keyData of existingKeys) {
         try {
            const decryptedKey = await this.decryptAPIKey(
               keyData.encryptedKey,
               keyData.salt,
               keyData.iv
            );
            decryptedKeys.push({
               providerId: keyData.providerId,
               apiKey: decryptedKey,
               metadata: keyData.metadata,
            });
         } catch (error) {
            throw new Error(`Failed to decrypt key for provider ${keyData.providerId}`);
         }
      }

      // Update master password
      this.masterPassword = newMasterPassword;
      this.derivedKey = null;

      // Re-encrypt all keys with new password
      for (const { providerId, apiKey, metadata } of decryptedKeys) {
         await this.storeAPIKey(providerId, apiKey, metadata as APIKeyMetadata);
      }

      logger.log('Keys rotated', {
         context: 'api_key_manager',
         action: 'rotate_keys',
         keyCount: decryptedKeys.length,
         timestamp: new Date().toISOString(),
      });
   }

   /**
    * Securely dispose of sensitive data in memory
    */
   dispose(): void {
      // Clear sensitive data
      this.masterPassword = null;
      this.derivedKey = null;

      logger.log('APIKeyManager disposed', {
         context: 'api_key_manager',
         action: 'dispose',
         timestamp: new Date().toISOString(),
      });
   }
}

// Export singleton instance
export const apiKeyManager = new APIKeyManager();
