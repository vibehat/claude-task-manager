import { jest } from '@jest/globals';
import { SecurityAuditLogger, getGlobalAuditLogger } from './security-audit-logger';
import type { SecurityEvent, AuditLoggerConfig } from './security-audit-logger';

describe('SecurityAuditLogger', () => {
   let logger: SecurityAuditLogger;
   let mockConfig: AuditLoggerConfig;

   beforeEach(() => {
      mockConfig = {
         enableConsoleLogging: true,
         enableFileLogging: false,
         logLevel: 'info',
         maxLogSize: 1024 * 1024,
         logRetentionDays: 7,
         sensitiveFields: ['password', 'token'],
         enableRealTimeAlerts: true,
      };

      logger = new SecurityAuditLogger(mockConfig);
   });

   afterEach(() => {
      logger.close();
   });

   describe('Event Logging', () => {
      test('should log security events with proper format', () => {
         const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

         const event: SecurityEvent = {
            type: 'authentication',
            severity: 'medium',
            message: 'User login attempt',
            userId: 'user123',
            ip: '192.168.1.1',
            userAgent: 'Mozilla/5.0...',
            timestamp: new Date(),
            metadata: { loginMethod: 'password' },
         };

         logger.logEvent(event);

         expect(consoleSpy).toHaveBeenCalled();
         const logCall = consoleSpy.mock.calls[0][0];
         expect(logCall).toContain('SECURITY_AUDIT');
         expect(logCall).toContain('authentication');
         expect(logCall).toContain('User login attempt');

         consoleSpy.mockRestore();
      });

      test('should sanitize sensitive data', () => {
         const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

         const event: SecurityEvent = {
            type: 'authentication',
            severity: 'high',
            message: 'Failed login',
            metadata: {
               password: 'secret123',
               token: 'jwt-token-here',
               username: 'user@example.com',
            },
         };

         logger.logEvent(event);

         const logCall = consoleSpy.mock.calls[0][0];
         expect(logCall).not.toContain('secret123');
         expect(logCall).not.toContain('jwt-token-here');
         expect(logCall).toContain('[REDACTED]');
         expect(logCall).toContain('user@example.com'); // Non-sensitive field

         consoleSpy.mockRestore();
      });

      test('should respect log level filtering', () => {
         const debugLogger = new SecurityAuditLogger({
            ...mockConfig,
            logLevel: 'error',
         });

         const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

         // Info level event should be filtered out
         debugLogger.logInfo('This is an info message', { test: true });
         expect(consoleSpy).not.toHaveBeenCalled();

         // Error level event should be logged
         debugLogger.logError('This is an error message', new Error('Test error'));
         expect(consoleSpy).toHaveBeenCalled();

         consoleSpy.mockRestore();
         debugLogger.close();
      });
   });

   describe('Convenience Methods', () => {
      test('should log authentication events', () => {
         const eventSpy = jest.spyOn(logger, 'logEvent');

         logger.logAuthentication('user123', '192.168.1.1', true, { method: 'oauth' });

         expect(eventSpy).toHaveBeenCalledWith(
            expect.objectContaining({
               type: 'authentication',
               userId: 'user123',
               ip: '192.168.1.1',
            })
         );
      });

      test('should log authorization events', () => {
         const eventSpy = jest.spyOn(logger, 'logEvent');

         logger.logAuthorization('user123', 'admin_panel', false, 'Insufficient privileges');

         expect(eventSpy).toHaveBeenCalledWith(
            expect.objectContaining({
               type: 'authorization',
               userId: 'user123',
               severity: 'high', // Failed authorization should be high severity
            })
         );
      });

      test('should log rate limit events', () => {
         const eventSpy = jest.spyOn(logger, 'logEvent');

         logger.logRateLimit('192.168.1.1', '/api/test', 100);

         expect(eventSpy).toHaveBeenCalledWith(
            expect.objectContaining({
               type: 'rate_limit',
               ip: '192.168.1.1',
               severity: 'medium',
            })
         );
      });

      test('should log suspicious activity', () => {
         const eventSpy = jest.spyOn(logger, 'logEvent');

         logger.logSuspiciousActivity('SQL injection attempt', '192.168.1.1', {
            payload: 'DROP TABLE',
         });

         expect(eventSpy).toHaveBeenCalledWith(
            expect.objectContaining({
               type: 'suspicious_activity',
               severity: 'high',
               ip: '192.168.1.1',
            })
         );
      });
   });

   describe('Alert System', () => {
      test('should trigger alerts for critical events', () => {
         const alertSpy = jest.fn();
         logger.on('criticalAlert', alertSpy);

         const criticalEvent: SecurityEvent = {
            type: 'suspicious_activity',
            severity: 'critical',
            message: 'Multiple failed login attempts from same IP',
            ip: '192.168.1.1',
         };

         logger.logEvent(criticalEvent);

         expect(alertSpy).toHaveBeenCalledWith(
            expect.objectContaining({
               event: criticalEvent,
               alertType: 'critical',
            })
         );
      });

      test('should detect brute force patterns', () => {
         const alertSpy = jest.fn();
         logger.on('bruteForceAlert', alertSpy);

         // Simulate multiple failed logins from same IP
         for (let i = 0; i < 5; i++) {
            logger.logAuthentication('user123', '192.168.1.1', false);
         }

         expect(alertSpy).toHaveBeenCalled();
      });

      test('should detect unusual access patterns', () => {
         const alertSpy = jest.fn();
         logger.on('unusualActivityAlert', alertSpy);

         // Simulate rapid requests from same IP
         for (let i = 0; i < 10; i++) {
            logger.logRateLimit('192.168.1.1', '/api/test', 100);
         }

         expect(alertSpy).toHaveBeenCalled();
      });
   });

   describe('Statistics and Reporting', () => {
      test('should provide security statistics', () => {
         // Generate some events
         logger.logAuthentication('user1', '192.168.1.1', true);
         logger.logAuthentication('user2', '192.168.1.2', false);
         logger.logRateLimit('192.168.1.3', '/api/test', 100);

         const stats = logger.getSecurityStats();

         expect(stats.totalEvents).toBe(3);
         expect(stats.eventsByType).toHaveProperty('authentication');
         expect(stats.eventsByType).toHaveProperty('rate_limit');
         expect(stats.eventsBySeverity).toHaveProperty('low');
         expect(stats.eventsBySeverity).toHaveProperty('medium');
      });

      test('should generate security reports', () => {
         // Generate events over time
         logger.logAuthentication('user1', '192.168.1.1', true);
         logger.logAuthentication('user1', '192.168.1.1', false);

         const report = logger.generateSecurityReport();

         expect(report).toHaveProperty('summary');
         expect(report).toHaveProperty('topIPs');
         expect(report).toHaveProperty('failedLogins');
         expect(report).toHaveProperty('rateLimitedRequests');
         expect(report).toHaveProperty('suspiciousActivities');
         expect(report.summary.totalEvents).toBeGreaterThan(0);
      });

      test('should track events by time period', () => {
         const now = new Date();
         const oneHourAgo = new Date(now.getTime() - 60 * 60 * 1000);

         logger.logAuthentication('user1', '192.168.1.1', true);

         const stats = logger.getEventsByTimeRange(oneHourAgo, now);
         expect(stats.events.length).toBe(1);
      });
   });

   describe('Data Management', () => {
      test('should manage log retention', () => {
         // This would typically test log file cleanup
         // For this test, we'll verify the method exists and doesn't throw
         expect(() => {
            logger.cleanupOldLogs();
         }).not.toThrow();
      });

      test('should export logs for analysis', () => {
         logger.logAuthentication('user1', '192.168.1.1', true);
         logger.logAuthentication('user2', '192.168.1.2', false);

         const exportedLogs = logger.exportLogs();

         expect(Array.isArray(exportedLogs)).toBe(true);
         expect(exportedLogs.length).toBe(2);
         expect(exportedLogs[0]).toHaveProperty('type');
         expect(exportedLogs[0]).toHaveProperty('timestamp');
      });
   });

   describe('Global Logger', () => {
      test('should provide singleton instance', () => {
         const logger1 = getGlobalAuditLogger();
         const logger2 = getGlobalAuditLogger();
         expect(logger1).toBe(logger2);
      });

      test('should be instance of SecurityAuditLogger', () => {
         const globalLogger = getGlobalAuditLogger();
         expect(globalLogger).toBeInstanceOf(SecurityAuditLogger);
         globalLogger.close();
      });
   });

   describe('Configuration', () => {
      test('should use default config when none provided', () => {
         const defaultLogger = new SecurityAuditLogger();
         expect(defaultLogger).toBeDefined();
         defaultLogger.close();
      });

      test('should respect disabled logging', () => {
         const disabledLogger = new SecurityAuditLogger({
            ...mockConfig,
            enableConsoleLogging: false,
            enableFileLogging: false,
         });

         const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

         disabledLogger.logInfo('This should not be logged');
         expect(consoleSpy).not.toHaveBeenCalled();

         consoleSpy.mockRestore();
         disabledLogger.close();
      });
   });
});
