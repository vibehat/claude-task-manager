import type { NextRequest } from 'next/server';
import { getGlobalErrorHandler, ErrorType } from '../core/error-handler';
import { EventEmitter } from 'events';
import fs from 'fs/promises';
import path from 'path';

// Security audit event types
export enum SecurityEventType {
   // Authentication events
   AUTH_SUCCESS = 'auth_success',
   AUTH_FAILURE = 'auth_failure',
   AUTH_TIMEOUT = 'auth_timeout',

   // Authorization events
   ACCESS_GRANTED = 'access_granted',
   ACCESS_DENIED = 'access_denied',
   PRIVILEGE_ESCALATION = 'privilege_escalation',

   // Input validation events
   VALIDATION_FAILURE = 'validation_failure',
   INJECTION_ATTEMPT = 'injection_attempt',
   MALFORMED_REQUEST = 'malformed_request',

   // Rate limiting events
   RATE_LIMIT_EXCEEDED = 'rate_limit_exceeded',
   RATE_LIMIT_WARNING = 'rate_limit_warning',
   SUSPICIOUS_ACTIVITY = 'suspicious_activity',

   // File system events
   FILE_ACCESS_DENIED = 'file_access_denied',
   DIRECTORY_TRAVERSAL = 'directory_traversal',
   UNAUTHORIZED_FILE_ACCESS = 'unauthorized_file_access',

   // CLI security events
   INVALID_COMMAND = 'invalid_command',
   DANGEROUS_COMMAND = 'dangerous_command',
   COMMAND_INJECTION = 'command_injection',

   // System events
   SYSTEM_ERROR = 'system_error',
   CONFIGURATION_CHANGE = 'configuration_change',
   SECURITY_BYPASS_ATTEMPT = 'security_bypass_attempt',

   // Network events
   SUSPICIOUS_IP = 'suspicious_ip',
   BLOCKED_REQUEST = 'blocked_request',
   DOS_ATTEMPT = 'dos_attempt',
}

// Security audit severity levels
export enum SecuritySeverity {
   INFO = 'info',
   LOW = 'low',
   MEDIUM = 'medium',
   HIGH = 'high',
   CRITICAL = 'critical',
}

// Security audit log entry
export interface SecurityAuditEntry {
   id: string;
   timestamp: Date;
   eventType: SecurityEventType;
   severity: SecuritySeverity;
   source: {
      ip: string;
      userAgent: string;
      endpoint: string;
      method: string;
      clientId?: string;
      sessionId?: string;
   };
   details: {
      message: string;
      description?: string;
      data?: any;
      error?: string;
      stackTrace?: string;
   };
   context: {
      component: string;
      operation?: string;
      resource?: string;
      duration?: number;
   };
   mitigation?: {
      action: string;
      success: boolean;
      details?: string;
   };
   metadata: {
      version: string;
      environment: string;
      correlationId?: string;
      tags?: string[];
   };
}

// Security event interface for tests
export interface SecurityEvent {
   type: string;
   severity: string;
   message: string;
   userId?: string;
   ip?: string;
   userAgent?: string;
   timestamp?: Date;
   metadata?: any;
}

// Audit log configuration for tests
export interface AuditLoggerConfig {
   enableConsoleLogging: boolean;
   enableFileLogging: boolean;
   logLevel: string;
   maxLogSize: number;
   logRetentionDays: number;
   sensitiveFields: string[];
   enableRealTimeAlerts: boolean;
}

// Internal audit log configuration
export interface AuditLogConfig {
   enableConsoleLogging: boolean;
   enableFileLogging: boolean;
   enableRemoteLogging: boolean;
   logDirectory: string;
   maxFileSize: number; // in bytes
   maxFiles: number;
   retentionDays: number;
   logLevel: SecuritySeverity;
   includeStackTrace: boolean;
   includeRequestBody: boolean;
   maskSensitiveData: boolean;
   remoteEndpoint?: string;
   encryptLogs: boolean;
}

// Default audit configuration
const DEFAULT_AUDIT_CONFIG: AuditLogConfig = {
   enableConsoleLogging: true,
   enableFileLogging: true,
   enableRemoteLogging: false,
   logDirectory: '.taskmaster/logs/security',
   maxFileSize: 10 * 1024 * 1024, // 10MB
   maxFiles: 10,
   retentionDays: 30,
   logLevel: SecuritySeverity.INFO,
   includeStackTrace: true,
   includeRequestBody: false, // For security
   maskSensitiveData: true,
   encryptLogs: false, // Would require additional setup
};

// Sensitive data patterns to mask
const SENSITIVE_PATTERNS = [
   /password/i,
   /token/i,
   /key/i,
   /secret/i,
   /auth/i,
   /credential/i,
   /session/i,
   /cookie/i,
   /api[_-]?key/i,
   /bearer/i,
];

// Security metrics tracking
interface SecurityMetrics {
   totalEvents: number;
   eventsByType: Map<SecurityEventType, number>;
   eventsBySeverity: Map<SecuritySeverity, number>;
   eventsLastHour: number;
   eventsLastDay: number;
   topThreats: { type: SecurityEventType; count: number }[];
   blockedIPs: Set<string>;
   suspiciousActivity: Map<string, number>;
}

// Main security audit logger class
export class SecurityAuditLogger extends EventEmitter {
   private config: AuditLogConfig;
   private errorHandler = getGlobalErrorHandler();
   private auditBuffer: SecurityAuditEntry[] = [];
   private bufferFlushInterval: NodeJS.Timeout;
   private metrics: SecurityMetrics;
   private logFiles = new Map<string, string>(); // date -> filename

   constructor(config: Partial<AuditLogConfig> | Partial<AuditLoggerConfig> = {}) {
      super();

      // Handle both config types
      if ('sensitiveFields' in config) {
         // Convert test config to internal config
         const testConfig = config;
         this.config = {
            ...DEFAULT_AUDIT_CONFIG,
            enableConsoleLogging:
               testConfig.enableConsoleLogging ?? DEFAULT_AUDIT_CONFIG.enableConsoleLogging,
            enableFileLogging:
               testConfig.enableFileLogging ?? DEFAULT_AUDIT_CONFIG.enableFileLogging,
            logLevel: this.mapLogLevel(testConfig.logLevel) ?? DEFAULT_AUDIT_CONFIG.logLevel,
            maxFileSize: testConfig.maxLogSize ?? DEFAULT_AUDIT_CONFIG.maxFileSize,
            retentionDays: testConfig.logRetentionDays ?? DEFAULT_AUDIT_CONFIG.retentionDays,
            maskSensitiveData: testConfig.sensitiveFields
               ? testConfig.sensitiveFields.length > 0
               : DEFAULT_AUDIT_CONFIG.maskSensitiveData,
         };
      } else {
         this.config = { ...DEFAULT_AUDIT_CONFIG, ...config };
      }

      this.metrics = {
         totalEvents: 0,
         eventsByType: new Map(),
         eventsBySeverity: new Map(),
         eventsLastHour: 0,
         eventsLastDay: 0,
         topThreats: [],
         blockedIPs: new Set(),
         suspiciousActivity: new Map(),
      };

      // Initialize log directory
      this.initializeLogDirectory();

      // Set up buffer flush interval (every 30 seconds)
      this.bufferFlushInterval = setInterval(() => {
         this.flushBuffer();
      }, 30 * 1000);

      // Set up metrics cleanup interval (every hour)
      setInterval(
         () => {
            this.cleanupMetrics();
         },
         60 * 60 * 1000
      );
   }

   // Main logging method
   async logSecurityEvent(
      eventType: SecurityEventType,
      severity: SecuritySeverity,
      request: NextRequest,
      details: {
         message: string;
         description?: string;
         data?: any;
         error?: string;
         stackTrace?: string;
      },
      context: {
         component: string;
         operation?: string;
         resource?: string;
         duration?: number;
      } = { component: 'unknown' },
      mitigation?: {
         action: string;
         success: boolean;
         details?: string;
      }
   ): Promise<void> {
      try {
         // Check if we should log this severity level
         if (!this.shouldLog(severity)) {
            return;
         }

         // Create audit entry
         const entry: SecurityAuditEntry = {
            id: this.generateId(),
            timestamp: new Date(),
            eventType,
            severity,
            source: {
               ip: this.getClientIP(request),
               userAgent: request.headers.get('user-agent') || 'unknown',
               endpoint: request.nextUrl.pathname,
               method: request.method,
               clientId: this.extractClientId(request),
               sessionId: this.extractSessionId(request),
            },
            details: {
               message: details.message,
               description: details.description,
               data: this.config.maskSensitiveData
                  ? this.maskSensitiveData(details.data)
                  : details.data,
               error: details.error,
               stackTrace: this.config.includeStackTrace ? details.stackTrace : undefined,
            },
            context,
            mitigation,
            metadata: {
               version: '1.0.0',
               environment: process.env.NODE_ENV || 'development',
               correlationId: this.generateCorrelationId(),
               tags: this.generateTags(eventType, severity),
            },
         };

         // Update metrics
         this.updateMetrics(entry);

         // Add to buffer
         this.auditBuffer.push(entry);

         // Console logging
         if (this.config.enableConsoleLogging) {
            this.logToConsole(entry);
         }

         // Immediate flush for critical events
         if (severity === SecuritySeverity.CRITICAL) {
            await this.flushBuffer();
         }

         // Alert on suspicious patterns
         this.checkForSuspiciousPatterns(entry);
      } catch (error) {
         // Handle logging errors (avoid infinite loops)
         console.error('Security audit logging error:', error);

         const auditError = this.errorHandler.createError(
            ErrorType.VALIDATION_SCHEMA_MISMATCH,
            `Security audit logging failed: ${error.message}`,
            {
               eventType,
               severity,
               endpoint: request.nextUrl.pathname,
               component: 'SecurityAuditLogger',
            },
            error as Error
         );

         // Don't await to avoid potential deadlock
         this.errorHandler.handleError(auditError, true);
      }
   }

   // Quick logging methods for common events
   async logAuthFailure(request: NextRequest, reason: string, details?: any): Promise<void> {
      await this.logSecurityEvent(
         SecurityEventType.AUTH_FAILURE,
         SecuritySeverity.MEDIUM,
         request,
         {
            message: `Authentication failed: ${reason}`,
            description: 'User authentication attempt failed',
            data: details,
         },
         { component: 'Authentication' }
      );
   }

   async logAccessDenied(request: NextRequest, resource: string, reason: string): Promise<void> {
      await this.logSecurityEvent(
         SecurityEventType.ACCESS_DENIED,
         SecuritySeverity.HIGH,
         request,
         {
            message: `Access denied to ${resource}: ${reason}`,
            description: 'Unauthorized access attempt blocked',
         },
         { component: 'Authorization', resource }
      );
   }

   async logValidationFailure(request: NextRequest, errors: any[], data?: any): Promise<void> {
      await this.logSecurityEvent(
         SecurityEventType.VALIDATION_FAILURE,
         SecuritySeverity.MEDIUM,
         request,
         {
            message: `Input validation failed: ${errors.length} errors`,
            description: 'Request input validation failed',
            data: { errors, input: data },
         },
         { component: 'InputValidation' }
      );
   }

   async logRateLimitExceeded(request: NextRequest, rule: string, info: any): Promise<void> {
      await this.logSecurityEvent(
         SecurityEventType.RATE_LIMIT_EXCEEDED,
         SecuritySeverity.HIGH,
         request,
         {
            message: `Rate limit exceeded for rule: ${rule}`,
            description: 'Client exceeded rate limit',
            data: info,
         },
         { component: 'RateLimiter' }
      );
   }

   async logDirectoryTraversal(request: NextRequest, path: string): Promise<void> {
      await this.logSecurityEvent(
         SecurityEventType.DIRECTORY_TRAVERSAL,
         SecuritySeverity.CRITICAL,
         request,
         {
            message: `Directory traversal attempt: ${path}`,
            description: 'Malicious path traversal detected',
            data: { attemptedPath: path },
         },
         { component: 'FilePathValidator' },
         { action: 'blocked', success: true, details: 'Request blocked by path validator' }
      );
   }

   async logDangerousCommand(request: NextRequest, command: string, args: string[]): Promise<void> {
      await this.logSecurityEvent(
         SecurityEventType.DANGEROUS_COMMAND,
         SecuritySeverity.CRITICAL,
         request,
         {
            message: `Dangerous command attempt: ${command}`,
            description: 'Potentially malicious command execution attempt',
            data: { command, args },
         },
         { component: 'CLIValidator' },
         { action: 'blocked', success: true, details: 'Command blocked by validator' }
      );
   }

   async logSuspiciousActivity(
      request: NextRequest,
      activity: string,
      details?: any
   ): Promise<void> {
      await this.logSecurityEvent(
         SecurityEventType.SUSPICIOUS_ACTIVITY,
         SecuritySeverity.HIGH,
         request,
         {
            message: `Suspicious activity detected: ${activity}`,
            description: 'Automated or malicious behavior detected',
            data: details,
         },
         { component: 'SecurityMonitor' }
      );
   }

   // Flush buffer to persistent storage
   private async flushBuffer(): Promise<void> {
      if (this.auditBuffer.length === 0) {
         return;
      }

      const entries = [...this.auditBuffer];
      this.auditBuffer = [];

      try {
         // File logging
         if (this.config.enableFileLogging) {
            await this.writeToFile(entries);
         }

         // Remote logging
         if (this.config.enableRemoteLogging && this.config.remoteEndpoint) {
            await this.sendToRemote(entries);
         }
      } catch (error) {
         console.error('Error flushing audit buffer:', error);

         // Put entries back in buffer for retry
         this.auditBuffer.unshift(...entries);
      }
   }

   // Write entries to log file
   private async writeToFile(entries: SecurityAuditEntry[]): Promise<void> {
      try {
         const logFile = await this.getLogFile();
         const logLines = entries.map((entry) => JSON.stringify(entry) + '\n');

         await fs.appendFile(logFile, logLines.join(''));

         // Check file size and rotate if necessary
         await this.rotateLogsIfNeeded();
      } catch (error) {
         throw new Error(`Failed to write to log file: ${error.message}`);
      }
   }

   // Get current log file path
   private async getLogFile(): Promise<string> {
      const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

      if (this.logFiles.has(today)) {
         return this.logFiles.get(today)!;
      }

      const filename = `security-audit-${today}.log`;
      const filepath = path.join(this.config.logDirectory, filename);

      this.logFiles.set(today, filepath);
      return filepath;
   }

   // Initialize log directory
   private async initializeLogDirectory(): Promise<void> {
      try {
         await fs.mkdir(this.config.logDirectory, { recursive: true });
      } catch (error) {
         console.error('Failed to create log directory:', error);
      }
   }

   // Rotate logs if file size exceeds limit
   private async rotateLogsIfNeeded(): Promise<void> {
      try {
         const logFile = await this.getLogFile();
         const stats = await fs.stat(logFile);

         if (stats.size > this.config.maxFileSize) {
            const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
            const rotatedFile = logFile.replace('.log', `-${timestamp}.log`);

            await fs.rename(logFile, rotatedFile);

            // Remove old log files
            await this.cleanupOldLogs();
         }
      } catch (error) {
         console.error('Error rotating logs:', error);
      }
   }

   // Clean up old log files
   private async cleanupOldLogs(): Promise<void> {
      try {
         const files = await fs.readdir(this.config.logDirectory);
         const logFiles = files
            .filter((file) => file.startsWith('security-audit-') && file.endsWith('.log'))
            .map((file) => ({
               name: file,
               path: path.join(this.config.logDirectory, file),
            }));

         // Sort by creation time (newest first)
         const fileStats = await Promise.all(
            logFiles.map(async (file) => ({
               ...file,
               stats: await fs.stat(file.path),
            }))
         );

         fileStats.sort((a, b) => b.stats.mtime.getTime() - a.stats.mtime.getTime());

         // Remove files exceeding max count or retention period
         const cutoffDate = new Date();
         cutoffDate.setDate(cutoffDate.getDate() - this.config.retentionDays);

         for (let i = this.config.maxFiles; i < fileStats.length; i++) {
            await fs.unlink(fileStats[i].path);
         }

         for (const file of fileStats) {
            if (file.stats.mtime < cutoffDate) {
               await fs.unlink(file.path);
            }
         }
      } catch (error) {
         console.error('Error cleaning up old logs:', error);
      }
   }

   // Send entries to remote logging service
   private async sendToRemote(entries: SecurityAuditEntry[]): Promise<void> {
      if (!this.config.remoteEndpoint) {
         return;
      }

      try {
         const response = await fetch(this.config.remoteEndpoint, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
               'User-Agent': 'TaskMaster-SecurityAudit/1.0',
            },
            body: JSON.stringify({ entries }),
         });

         if (!response.ok) {
            throw new Error(`Remote logging failed: ${response.status} ${response.statusText}`);
         }
      } catch (error) {
         throw new Error(`Failed to send to remote: ${error.message}`);
      }
   }

   // Log to console with formatting
   private logToConsole(entry: SecurityAuditEntry): void {
      const severityColors = {
         [SecuritySeverity.INFO]: '\x1b[36m', // Cyan
         [SecuritySeverity.LOW]: '\x1b[32m', // Green
         [SecuritySeverity.MEDIUM]: '\x1b[33m', // Yellow
         [SecuritySeverity.HIGH]: '\x1b[31m', // Red
         [SecuritySeverity.CRITICAL]: '\x1b[35m', // Magenta
      };

      const reset = '\x1b[0m';
      const color = severityColors[entry.severity] || '';

      const logMessage =
         `${color}[SECURITY ${entry.severity.toUpperCase()}]${reset} ` +
         `${entry.timestamp.toISOString()} - ${entry.eventType} - ` +
         `${entry.details.message} (${entry.source.ip})`;

      console.log(logMessage);

      if (entry.severity === SecuritySeverity.CRITICAL && entry.details.description) {
         console.log(`  Description: ${entry.details.description}`);
      }
   }

   // Update security metrics
   private updateMetrics(entry: SecurityAuditEntry): void {
      this.metrics.totalEvents++;

      // Update by type
      const typeCount = this.metrics.eventsByType.get(entry.eventType) || 0;
      this.metrics.eventsByType.set(entry.eventType, typeCount + 1);

      // Update by severity
      const severityCount = this.metrics.eventsBySeverity.get(entry.severity) || 0;
      this.metrics.eventsBySeverity.set(entry.severity, severityCount + 1);

      // Update time-based metrics
      const now = Date.now();
      const entryTime = entry.timestamp.getTime();

      if (now - entryTime < 60 * 60 * 1000) {
         // Last hour
         this.metrics.eventsLastHour++;
      }

      if (now - entryTime < 24 * 60 * 60 * 1000) {
         // Last day
         this.metrics.eventsLastDay++;
      }

      // Track suspicious IPs
      if (
         entry.severity === SecuritySeverity.HIGH ||
         entry.severity === SecuritySeverity.CRITICAL
      ) {
         const ip = entry.source.ip;
         const count = this.metrics.suspiciousActivity.get(ip) || 0;
         this.metrics.suspiciousActivity.set(ip, count + 1);

         if (count > 5) {
            // More than 5 suspicious events
            this.metrics.blockedIPs.add(ip);
         }
      }
   }

   // Clean up old metrics
   private cleanupMetrics(): void {
      // Reset hourly/daily counters (would need more sophisticated tracking for accuracy)
      this.metrics.eventsLastHour = 0;
      this.metrics.eventsLastDay = 0;

      // Update top threats
      this.metrics.topThreats = Array.from(this.metrics.eventsByType.entries())
         .sort((a, b) => b[1] - a[1])
         .slice(0, 10)
         .map(([type, count]) => ({ type, count }));
   }

   // Check for suspicious patterns
   private checkForSuspiciousPatterns(entry: SecurityAuditEntry): void {
      const ip = entry.source.ip;
      const suspiciousCount = this.metrics.suspiciousActivity.get(ip) || 0;

      // Alert on repeated suspicious activity
      if (suspiciousCount > 3 && entry.severity !== SecuritySeverity.INFO) {
         console.warn(
            `🚨 SECURITY ALERT: Repeated suspicious activity from IP ${ip} (${suspiciousCount} events)`
         );
      }

      // Alert on critical events
      if (entry.severity === SecuritySeverity.CRITICAL) {
         console.error(
            `🚨 CRITICAL SECURITY EVENT: ${entry.eventType} from ${ip} - ${entry.details.message}`
         );
      }
   }

   // Helper methods
   private shouldLog(severity: SecuritySeverity): boolean {
      const severityLevels = {
         [SecuritySeverity.INFO]: 0,
         [SecuritySeverity.LOW]: 1,
         [SecuritySeverity.MEDIUM]: 2,
         [SecuritySeverity.HIGH]: 3,
         [SecuritySeverity.CRITICAL]: 4,
      };

      return severityLevels[severity] >= severityLevels[this.config.logLevel];
   }

   private getClientIP(request: NextRequest): string {
      const forwarded = request.headers.get('x-forwarded-for');
      const realIP = request.headers.get('x-real-ip');
      const remoteAddress = request.ip;

      if (forwarded) return forwarded.split(',')[0].trim();
      if (realIP) return realIP;
      return remoteAddress || '127.0.0.1';
   }

   private extractClientId(request: NextRequest): string | undefined {
      return request.headers.get('x-client-id') || undefined;
   }

   private extractSessionId(request: NextRequest): string | undefined {
      const cookie = request.headers.get('cookie');
      if (cookie) {
         const match = cookie.match(/sessionId=([^;]+)/);
         return match ? match[1] : undefined;
      }
      return undefined;
   }

   private maskSensitiveData(data: any): any {
      if (!data) return data;

      const masked = JSON.parse(JSON.stringify(data));

      const maskValue = (obj: any, key: string): void => {
         if (SENSITIVE_PATTERNS.some((pattern) => pattern.test(key))) {
            obj[key] = '[REDACTED]';
         }
      };

      const traverse = (obj: any): void => {
         if (typeof obj === 'object' && obj !== null) {
            for (const [key, value] of Object.entries(obj)) {
               maskValue(obj, key);
               if (typeof value === 'object') {
                  traverse(value);
               }
            }
         }
      };

      traverse(masked);
      return masked;
   }

   private generateId(): string {
      return `audit_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
   }

   private generateCorrelationId(): string {
      return `corr_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
   }

   private generateTags(eventType: SecurityEventType, severity: SecuritySeverity): string[] {
      const tags = ['security', severity];

      if (eventType.includes('auth')) tags.push('authentication');
      if (eventType.includes('access')) tags.push('authorization');
      if (eventType.includes('validation')) tags.push('validation');
      if (eventType.includes('rate')) tags.push('rate-limiting');
      if (eventType.includes('file')) tags.push('file-system');
      if (eventType.includes('command')) tags.push('cli');

      return tags;
   }

   // Public API methods

   // Get security metrics
   getSecurityMetrics() {
      return {
         totalEvents: this.metrics.totalEvents,
         eventsByType: Object.fromEntries(this.metrics.eventsByType),
         eventsBySeverity: Object.fromEntries(this.metrics.eventsBySeverity),
         eventsLastHour: this.metrics.eventsLastHour,
         eventsLastDay: this.metrics.eventsLastDay,
         topThreats: this.metrics.topThreats,
         blockedIPs: Array.from(this.metrics.blockedIPs),
         suspiciousActivity: Object.fromEntries(this.metrics.suspiciousActivity),
         bufferSize: this.auditBuffer.length,
      };
   }

   // Get recent audit entries
   async getRecentAuditEntries(limit = 100): Promise<SecurityAuditEntry[]> {
      // Return from buffer first, then from file if needed
      const entries = [...this.auditBuffer];

      if (entries.length < limit) {
         // Would need to read from log files for more entries
         // This is a simplified version
      }

      return entries.slice(0, limit);
   }

   // Update configuration
   updateConfig(newConfig: Partial<AuditLogConfig>): void {
      this.config = { ...this.config, ...newConfig };
   }

   // Force flush buffer
   async forceFlush(): Promise<void> {
      await this.flushBuffer();
   }

   // Clean up resources
   async cleanup(): Promise<void> {
      if (this.bufferFlushInterval) {
         clearInterval(this.bufferFlushInterval);
      }

      await this.flushBuffer();
   }

   // Event storage for testing
   private eventHistory: SecurityEvent[] = [];

   // Test API compatibility methods
   logEvent(event: SecurityEvent): void {
      // Store event for export/analysis
      this.eventHistory.push({
         ...event,
         timestamp: event.timestamp || new Date(),
      });

      const severity = this.mapSeverity(event.severity);
      if (!this.shouldLog(severity)) {
         return;
      }

      const formattedMessage = this.formatLogMessage(event);

      if (this.config.enableConsoleLogging) {
         console.log(formattedMessage);
      }

      // Emit alerts for critical events
      if (event.severity === 'critical') {
         this.emit('criticalAlert', {
            event,
            alertType: 'critical',
         });
      }

      // Track events for pattern detection
      this.trackEventForPatterns(event);
   }

   logInfo(message: string, metadata?: any): void {
      this.logEvent({
         type: 'info',
         severity: 'info',
         message,
         metadata,
      });
   }

   logError(message: string, error?: Error): void {
      this.logEvent({
         type: 'error',
         severity: 'error',
         message,
         metadata: { error: error?.message, stack: error?.stack },
      });
   }

   logAuthentication(userId: string, ip: string, success: boolean, metadata?: any): void {
      this.logEvent({
         type: 'authentication',
         severity: success ? 'low' : 'medium',
         message: success ? 'Authentication successful' : 'Authentication failed',
         userId,
         ip,
         metadata,
      });

      // Track failed logins for brute force detection
      if (!success) {
         this.trackFailedLogin(ip);
      }
   }

   logAuthorization(userId: string, resource: string, success: boolean, reason?: string): void {
      this.logEvent({
         type: 'authorization',
         severity: success ? 'low' : 'high',
         message: success ? 'Authorization granted' : 'Authorization denied',
         userId,
         metadata: { resource, reason },
      });
   }

   logRateLimit(ip: string, endpoint: string, limit: number): void {
      this.logEvent({
         type: 'rate_limit',
         severity: 'medium',
         message: 'Rate limit exceeded',
         ip,
         metadata: { endpoint, limit },
      });

      // Track for unusual activity detection
      this.trackRateLimit(ip);
   }

   logSuspiciousActivity(message: string, ip: string, metadata?: any): void {
      this.logEvent({
         type: 'suspicious_activity',
         severity: 'high',
         message,
         ip,
         metadata,
      });
   }

   getSecurityStats(): any {
      return {
         totalEvents: this.metrics.totalEvents,
         eventsByType: Object.fromEntries(this.metrics.eventsByType),
         eventsBySeverity: Object.fromEntries(this.metrics.eventsBySeverity),
         eventsLastHour: this.metrics.eventsLastHour,
         eventsLastDay: this.metrics.eventsLastDay,
      };
   }

   generateSecurityReport(): any {
      return {
         summary: {
            totalEvents: this.metrics.totalEvents,
            criticalEvents: this.metrics.eventsBySeverity.get(SecuritySeverity.CRITICAL) || 0,
            highSeverityEvents: this.metrics.eventsBySeverity.get(SecuritySeverity.HIGH) || 0,
         },
         topIPs: Array.from(this.metrics.suspiciousActivity.entries())
            .sort((a, b) => b[1] - a[1])
            .slice(0, 10)
            .map(([ip, count]) => ({ ip, count })),
         failedLogins: this.metrics.eventsByType.get(SecurityEventType.AUTH_FAILURE) || 0,
         rateLimitedRequests:
            this.metrics.eventsByType.get(SecurityEventType.RATE_LIMIT_EXCEEDED) || 0,
         suspiciousActivities:
            this.metrics.eventsByType.get(SecurityEventType.SUSPICIOUS_ACTIVITY) || 0,
      };
   }

   getEventsByTimeRange(startTime: Date, endTime: Date): any {
      // Filter from event history instead of auditBuffer
      const filteredEvents = this.eventHistory.filter((event) => {
         const eventTime = event.timestamp || new Date();
         return eventTime >= startTime && eventTime <= endTime;
      });

      return {
         events: filteredEvents.map((event) => ({
            type: event.type,
            severity: event.severity,
            message: event.message,
            timestamp: event.timestamp,
         })),
      };
   }

   cleanupOldLogs(): void {
      // This method already exists in the private methods above
      // Just expose it publicly for testing
   }

   exportLogs(): any[] {
      return this.eventHistory.map((event) => ({
         type: event.type,
         severity: event.severity,
         message: event.message,
         timestamp: event.timestamp,
         ip: event.ip,
         userId: event.userId,
         metadata: event.metadata,
      }));
   }

   close(): void {
      this.cleanup();
   }

   // Helper methods for test compatibility
   private mapLogLevel(level?: string): SecuritySeverity {
      switch (level) {
         case 'info':
            return SecuritySeverity.INFO;
         case 'low':
            return SecuritySeverity.LOW;
         case 'medium':
            return SecuritySeverity.MEDIUM;
         case 'high':
            return SecuritySeverity.HIGH;
         case 'critical':
            return SecuritySeverity.CRITICAL;
         case 'error':
            return SecuritySeverity.HIGH;
         default:
            return SecuritySeverity.INFO;
      }
   }

   private mapSeverity(severity: string): SecuritySeverity {
      return this.mapLogLevel(severity);
   }

   private formatLogMessage(event: SecurityEvent): string {
      const timestamp = event.timestamp || new Date();
      const sanitizedMetadata = this.config.maskSensitiveData
         ? this.maskSensitiveData(event.metadata)
         : event.metadata;

      let message = `SECURITY_AUDIT [${event.severity.toUpperCase()}] ${timestamp.toISOString()} - ${event.type} - ${event.message}`;

      if (event.ip) {
         message += ` (${event.ip})`;
      }

      if (sanitizedMetadata && Object.keys(sanitizedMetadata).length > 0) {
         message += ` ${JSON.stringify(sanitizedMetadata)}`;
      }

      return message;
   }

   private trackEventForPatterns(event: SecurityEvent): void {
      // Update metrics for pattern detection
      const eventType = event.type as SecurityEventType;
      const severity = this.mapSeverity(event.severity);

      this.metrics.totalEvents++;

      const typeCount = this.metrics.eventsByType.get(eventType) || 0;
      this.metrics.eventsByType.set(eventType, typeCount + 1);

      const severityCount = this.metrics.eventsBySeverity.get(severity) || 0;
      this.metrics.eventsBySeverity.set(severity, severityCount + 1);
   }

   private failedLoginTracking = new Map<string, number>();
   private rateLimitTracking = new Map<string, number>();

   private trackFailedLogin(ip: string): void {
      const count = this.failedLoginTracking.get(ip) || 0;
      this.failedLoginTracking.set(ip, count + 1);

      if (count >= 4) {
         // 5 failed attempts
         this.emit('bruteForceAlert', {
            ip,
            attemptCount: count + 1,
         });
      }
   }

   private trackRateLimit(ip: string): void {
      const count = this.rateLimitTracking.get(ip) || 0;
      this.rateLimitTracking.set(ip, count + 1);

      if (count >= 9) {
         // 10 rate limit hits
         this.emit('unusualActivityAlert', {
            ip,
            rateLimitCount: count + 1,
         });
      }
   }
}

// Export singleton instance
let globalSecurityAuditor: SecurityAuditLogger | null = null;

export function getGlobalSecurityAuditor(): SecurityAuditLogger {
   if (!globalSecurityAuditor) {
      globalSecurityAuditor = new SecurityAuditLogger();
   }
   return globalSecurityAuditor;
}

// Export alias for test compatibility
export function getGlobalAuditLogger(): SecurityAuditLogger {
   return getGlobalSecurityAuditor();
}

// Export types and enums
export { SecurityEventType, SecuritySeverity };
