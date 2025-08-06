/**
 * Claude Export Service - Exports sessions in various formats
 * Supports Markdown, JSON, HTML, and PDF export formats
 */

import type { ClaudeSession, SessionMessage, SessionExportOptions } from '../types/claude-history';

interface ExportResult {
  content: string;
  filename: string;
  mimeType: string;
  size: number;
}

export class ClaudeExportService {
  /**
   * Export a session in the specified format
   */
  async exportSession(
    session: ClaudeSession,
    messages: SessionMessage[],
    options: SessionExportOptions
  ): Promise<ExportResult> {
    let content: string;
    let mimeType: string;
    let extension: string;

    switch (options.format) {
      case 'markdown':
        content = this.exportToMarkdown(session, messages, options);
        mimeType = 'text/markdown';
        extension = 'md';
        break;

      case 'json':
        content = this.exportToJson(session, messages, options);
        mimeType = 'application/json';
        extension = 'json';
        break;

      case 'html':
        content = this.exportToHtml(session, messages, options);
        mimeType = 'text/html';
        extension = 'html';
        break;

      case 'pdf':
        // For now, generate HTML and let the client handle PDF conversion
        content = this.exportToHtml(session, messages, { ...options, format: 'html' });
        mimeType = 'text/html';
        extension = 'html'; // TODO: Implement server-side PDF generation
        break;

      default:
        throw new Error(`Unsupported export format: ${options.format}`);
    }

    const filename = this.generateFilename(session, extension);

    return {
      content,
      filename,
      mimeType,
      size: Buffer.byteLength(content, 'utf8'),
    };
  }

  /**
   * Export session to Markdown format
   */
  private exportToMarkdown(
    session: ClaudeSession,
    messages: SessionMessage[],
    options: SessionExportOptions
  ): string {
    const lines: string[] = [];

    // Header
    lines.push(`# Claude Code Session: ${session.projectName}`);
    lines.push('');

    // Metadata
    if (options.includeMetadata) {
      lines.push('## Session Information');
      lines.push('');
      lines.push(`- **Project**: ${session.projectName}`);
      lines.push(`- **Session ID**: ${session.id}`);
      lines.push(`- **Started**: ${this.formatDate(session.startTime, options.dateFormat)}`);
      if (session.endTime) {
        lines.push(`- **Ended**: ${this.formatDate(session.endTime, options.dateFormat)}`);
      }
      if (session.duration) {
        lines.push(`- **Duration**: ${this.formatDuration(session.duration)}`);
      }
      lines.push(`- **Messages**: ${session.messageCount}`);
      lines.push(`- **Code Blocks**: ${session.codeBlockCount}`);
      lines.push(`- **Tool Calls**: ${session.toolCallCount}`);

      if (session.fileChanges.length > 0) {
        lines.push('- **Files Modified**:');
        session.fileChanges.forEach((file) => {
          lines.push(`  - ${file}`);
        });
      }

      if (session.tags.length > 0) {
        lines.push(`- **Tags**: ${session.tags.join(', ')}`);
      }

      lines.push('');
    }

    // Messages
    lines.push('## Conversation');
    lines.push('');

    const filteredMessages = options.includeCodeOnly
      ? messages.filter((msg) => msg.codeBlocks && msg.codeBlocks.length > 0)
      : messages;

    filteredMessages.forEach((message, index) => {
      // Message header
      const role = message.role.charAt(0).toUpperCase() + message.role.slice(1);
      const timestamp = this.formatDate(message.timestamp, options.dateFormat);
      lines.push(`### ${role} (${timestamp})`);
      lines.push('');

      // Message content
      if (!options.includeCodeOnly && message.content.trim()) {
        lines.push(message.content);
        lines.push('');
      }

      // Code blocks
      if (message.codeBlocks && message.codeBlocks.length > 0) {
        message.codeBlocks.forEach((codeBlock) => {
          lines.push(`\`\`\`${codeBlock.language}`);
          lines.push(codeBlock.code);
          lines.push('```');
          lines.push('');
        });
      }

      // Tool calls
      if (options.includeToolCalls && message.toolCalls && message.toolCalls.length > 0) {
        lines.push('**Tool Calls:**');
        lines.push('');
        message.toolCalls.forEach((toolCall) => {
          lines.push(`- **${toolCall.name}**`);
          if (Object.keys(toolCall.parameters).length > 0) {
            lines.push('  ```json');
            lines.push('  ' + JSON.stringify(toolCall.parameters, null, 2));
            lines.push('  ```');
          }
        });
        lines.push('');
      }

      // Separator between messages (except last)
      if (index < filteredMessages.length - 1) {
        lines.push('---');
        lines.push('');
      }
    });

    // Footer
    if (options.includeMetadata) {
      lines.push('---');
      lines.push('');
      lines.push(`*Exported from Claude Code on ${new Date().toISOString()}*`);
    }

    return lines.join('\n');
  }

  /**
   * Export session to JSON format
   */
  private exportToJson(
    session: ClaudeSession,
    messages: SessionMessage[],
    options: SessionExportOptions
  ): string {
    const exportData: any = {
      session: {
        id: session.id,
        projectName: session.projectName,
        projectPath: session.projectPath,
        startTime: session.startTime,
        endTime: session.endTime,
        duration: session.duration,
        messageCount: session.messageCount,
        codeBlockCount: session.codeBlockCount,
        toolCallCount: session.toolCallCount,
      },
    };

    // Add metadata if requested
    if (options.includeMetadata) {
      exportData.session.fileChanges = session.fileChanges;
      exportData.session.tags = session.tags;
      exportData.session.isBookmarked = session.isBookmarked;
      exportData.session.metadata = session.metadata;
    }

    // Add messages
    const filteredMessages = options.includeCodeOnly
      ? messages.filter((msg) => msg.codeBlocks && msg.codeBlocks.length > 0)
      : messages;

    exportData.messages = filteredMessages.map((message) => {
      const exportMessage: any = {
        id: message.id,
        role: message.role,
        timestamp: message.timestamp,
      };

      // Include content unless code-only mode
      if (!options.includeCodeOnly) {
        exportMessage.content = message.content;
      }

      // Always include code blocks if they exist
      if (message.codeBlocks && message.codeBlocks.length > 0) {
        exportMessage.codeBlocks = message.codeBlocks;
      }

      // Include tool calls if requested
      if (options.includeToolCalls && message.toolCalls && message.toolCalls.length > 0) {
        exportMessage.toolCalls = message.toolCalls;
      }

      // Include additional metadata if requested
      if (options.includeMetadata) {
        if (message.tokenCount) exportMessage.tokenCount = message.tokenCount;
        if (message.model) exportMessage.model = message.model;
      }

      return exportMessage;
    });

    // Export metadata
    exportData.exportInfo = {
      exportedAt: new Date().toISOString(),
      format: 'json',
      options: options,
      version: '1.0.0',
    };

    return JSON.stringify(exportData, null, 2);
  }

  /**
   * Export session to HTML format
   */
  private exportToHtml(
    session: ClaudeSession,
    messages: SessionMessage[],
    options: SessionExportOptions
  ): string {
    const html: string[] = [];

    // HTML header
    html.push('<!DOCTYPE html>');
    html.push('<html lang="en">');
    html.push('<head>');
    html.push('<meta charset="UTF-8">');
    html.push('<meta name="viewport" content="width=device-width, initial-scale=1.0">');
    html.push(`<title>Claude Session: ${this.escapeHtml(session.projectName)}</title>`);
    html.push('<style>');
    html.push(this.getHtmlStyles());
    html.push('</style>');
    html.push('</head>');
    html.push('<body>');

    // Header
    html.push('<div class="container">');
    html.push(`<h1>Claude Code Session: ${this.escapeHtml(session.projectName)}</h1>`);

    // Metadata
    if (options.includeMetadata) {
      html.push('<div class="metadata">');
      html.push('<h2>Session Information</h2>');
      html.push('<table>');
      html.push(
        `<tr><td><strong>Project</strong></td><td>${this.escapeHtml(session.projectName)}</td></tr>`
      );
      html.push(`<tr><td><strong>Session ID</strong></td><td><code>${session.id}</code></td></tr>`);
      html.push(
        `<tr><td><strong>Started</strong></td><td>${this.formatDate(session.startTime, options.dateFormat)}</td></tr>`
      );
      if (session.endTime) {
        html.push(
          `<tr><td><strong>Ended</strong></td><td>${this.formatDate(session.endTime, options.dateFormat)}</td></tr>`
        );
      }
      if (session.duration) {
        html.push(
          `<tr><td><strong>Duration</strong></td><td>${this.formatDuration(session.duration)}</td></tr>`
        );
      }
      html.push(`<tr><td><strong>Messages</strong></td><td>${session.messageCount}</td></tr>`);
      html.push(`<tr><td><strong>Code Blocks</strong></td><td>${session.codeBlockCount}</td></tr>`);
      html.push(`<tr><td><strong>Tool Calls</strong></td><td>${session.toolCallCount}</td></tr>`);

      if (session.fileChanges.length > 0) {
        html.push(`<tr><td><strong>Files Modified</strong></td><td><ul class="file-list">`);
        session.fileChanges.forEach((file) => {
          html.push(`<li><code>${this.escapeHtml(file)}</code></li>`);
        });
        html.push('</ul></td></tr>');
      }

      if (session.tags.length > 0) {
        html.push(`<tr><td><strong>Tags</strong></td><td>`);
        session.tags.forEach((tag) => {
          html.push(`<span class="tag">${this.escapeHtml(tag)}</span>`);
        });
        html.push('</td></tr>');
      }

      html.push('</table>');
      html.push('</div>');
    }

    // Messages
    html.push('<div class="conversation">');
    html.push('<h2>Conversation</h2>');

    const filteredMessages = options.includeCodeOnly
      ? messages.filter((msg) => msg.codeBlocks && msg.codeBlocks.length > 0)
      : messages;

    filteredMessages.forEach((message, index) => {
      html.push(`<div class="message ${message.role}">`);

      // Message header
      const role = message.role.charAt(0).toUpperCase() + message.role.slice(1);
      const timestamp = this.formatDate(message.timestamp, options.dateFormat);
      html.push(`<div class="message-header">`);
      html.push(`<span class="role">${role}</span>`);
      html.push(`<span class="timestamp">${timestamp}</span>`);
      html.push('</div>');

      // Message content
      if (!options.includeCodeOnly && message.content.trim()) {
        html.push(`<div class="content">`);
        html.push(this.escapeHtml(message.content).replace(/\n/g, '<br>'));
        html.push('</div>');
      }

      // Code blocks
      if (message.codeBlocks && message.codeBlocks.length > 0) {
        html.push('<div class="code-blocks">');
        message.codeBlocks.forEach((codeBlock) => {
          html.push(
            `<pre class="code-block"><code class="language-${codeBlock.language}">${this.escapeHtml(codeBlock.code)}</code></pre>`
          );
        });
        html.push('</div>');
      }

      // Tool calls
      if (options.includeToolCalls && message.toolCalls && message.toolCalls.length > 0) {
        html.push('<div class="tool-calls">');
        html.push('<h4>Tool Calls:</h4>');
        message.toolCalls.forEach((toolCall) => {
          html.push(`<div class="tool-call">`);
          html.push(`<strong>${this.escapeHtml(toolCall.name)}</strong>`);
          if (Object.keys(toolCall.parameters).length > 0) {
            html.push(
              `<pre class="tool-params"><code>${this.escapeHtml(JSON.stringify(toolCall.parameters, null, 2))}</code></pre>`
            );
          }
          html.push('</div>');
        });
        html.push('</div>');
      }

      html.push('</div>'); // Close message
    });

    html.push('</div>'); // Close conversation

    // Footer
    if (options.includeMetadata) {
      html.push('<div class="footer">');
      html.push(`<p><em>Exported from Claude Code on ${new Date().toLocaleString()}</em></p>`);
      html.push('</div>');
    }

    html.push('</div>'); // Close container
    html.push('</body>');
    html.push('</html>');

    return html.join('\n');
  }

  /**
   * Generate appropriate filename for export
   */
  private generateFilename(session: ClaudeSession, extension: string): string {
    const projectName = session.projectName
      .replace(/[^a-zA-Z0-9-_]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');

    const date = new Date(session.startTime).toISOString().split('T')[0];
    const sessionShortId = session.id.split('-')[0] || session.id.slice(0, 8);

    return `claude-session-${projectName}-${date}-${sessionShortId}.${extension}`;
  }

  /**
   * Format date according to specified format
   */
  private formatDate(
    dateString: string,
    format: SessionExportOptions['dateFormat'] = 'local'
  ): string {
    const date = new Date(dateString);

    switch (format) {
      case 'iso':
        return date.toISOString();
      case 'relative':
        return this.getRelativeTimeString(date);
      case 'local':
      default:
        return date.toLocaleString();
    }
  }

  /**
   * Format duration in seconds to human readable
   */
  private formatDuration(seconds: number): string {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    const parts = [];
    if (hours > 0) parts.push(`${hours}h`);
    if (minutes > 0) parts.push(`${minutes}m`);
    if (remainingSeconds > 0) parts.push(`${remainingSeconds}s`);

    return parts.length > 0 ? parts.join(' ') : '0s';
  }

  /**
   * Get relative time string
   */
  private getRelativeTimeString(date: Date): string {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMinutes = Math.floor(diffMs / (1000 * 60));

    if (diffMinutes < 1) return 'just now';
    if (diffMinutes < 60) return `${diffMinutes} minute${diffMinutes === 1 ? '' : 's'} ago`;

    const diffHours = Math.floor(diffMinutes / 60);
    if (diffHours < 24) return `${diffHours} hour${diffHours === 1 ? '' : 's'} ago`;

    const diffDays = Math.floor(diffHours / 24);
    if (diffDays < 7) return `${diffDays} day${diffDays === 1 ? '' : 's'} ago`;

    return date.toLocaleDateString();
  }

  /**
   * Escape HTML entities
   */
  private escapeHtml(text: string): string {
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  /**
   * Get CSS styles for HTML export
   */
  private getHtmlStyles(): string {
    return `
      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        line-height: 1.6;
        color: #333;
        max-width: none;
        margin: 0;
        padding: 0;
        background: #f9f9f9;
      }
      
      .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
        background: white;
        box-shadow: 0 0 10px rgba(0,0,0,0.1);
      }
      
      h1 { color: #2c3e50; border-bottom: 2px solid #3498db; padding-bottom: 10px; }
      h2 { color: #34495e; border-bottom: 1px solid #bdc3c7; padding-bottom: 5px; }
      
      .metadata { background: #ecf0f1; padding: 15px; border-radius: 5px; margin: 20px 0; }
      .metadata table { width: 100%; border-collapse: collapse; }
      .metadata td { padding: 5px; border-bottom: 1px solid #bdc3c7; }
      .metadata td:first-child { font-weight: bold; width: 150px; }
      
      .file-list { margin: 0; padding-left: 20px; }
      .tag { background: #3498db; color: white; padding: 2px 8px; border-radius: 12px; font-size: 0.8em; margin-right: 5px; }
      
      .conversation { margin: 20px 0; }
      .message { margin: 20px 0; padding: 15px; border-radius: 8px; }
      .message.user { background: #e8f4f8; border-left: 4px solid #3498db; }
      .message.assistant { background: #f0f8e8; border-left: 4px solid #27ae60; }
      .message.system { background: #f8f0e8; border-left: 4px solid #f39c12; }
      
      .message-header { display: flex; justify-content: space-between; margin-bottom: 10px; font-weight: bold; }
      .role { color: #2c3e50; }
      .timestamp { color: #7f8c8d; font-weight: normal; font-size: 0.9em; }
      
      .content { margin: 10px 0; }
      .code-blocks { margin: 10px 0; }
      .code-block { background: #2c3e50; color: #ecf0f1; padding: 15px; border-radius: 5px; overflow-x: auto; }
      
      .tool-calls { background: #f8f9fa; padding: 10px; border-radius: 5px; margin: 10px 0; border: 1px solid #dee2e6; }
      .tool-calls h4 { margin: 0 0 10px 0; color: #495057; }
      .tool-call { margin: 5px 0; }
      .tool-params { background: #e9ecef; padding: 8px; border-radius: 3px; font-size: 0.8em; }
      
      .footer { border-top: 1px solid #bdc3c7; padding-top: 20px; margin-top: 40px; text-align: center; color: #7f8c8d; }
      
      code { background: #f1f2f6; padding: 2px 4px; border-radius: 3px; font-family: 'Monaco', 'Consolas', monospace; }
      pre code { background: none; padding: 0; }
    `;
  }
}
