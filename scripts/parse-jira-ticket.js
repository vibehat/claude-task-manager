#!/usr/bin/env node

const https = require('https');
const http = require('http');
const url = require('url');

class JiraTicketParser {
  constructor() {
    this.apiToken = process.env.JIRA_API_TOKEN;
    this.email = process.env.JIRA_EMAIL;
    this.pat = process.env.JIRA_PAT;
    this.bearerToken = process.env.JIRA_BEARER_TOKEN;
  }

  parseJiraUrl(jiraUrl) {
    if (!jiraUrl || typeof jiraUrl !== 'string') {
      throw new Error('Invalid URL provided');
    }
    
    const parsedUrl = url.parse(jiraUrl);
    
    if (!parsedUrl.hostname || !parsedUrl.pathname) {
      throw new Error('Invalid URL format');
    }
    
    const pathParts = parsedUrl.pathname.split('/').filter(part => part);
    
    const browseIndex = pathParts.indexOf('browse');
    const issuesIndex = pathParts.indexOf('issues');
    
    let ticketKey;
    
    if (browseIndex !== -1 && browseIndex < pathParts.length - 1) {
      ticketKey = pathParts[browseIndex + 1];
    } else if (issuesIndex !== -1 && issuesIndex < pathParts.length - 1) {
      ticketKey = pathParts[issuesIndex + 1];
    } else {
      const ticketPattern = /[A-Z]+-\d+/;
      const match = jiraUrl.match(ticketPattern);
      if (match) {
        ticketKey = match[0];
      } else {
        throw new Error('Invalid Jira URL format. Expected format: https://domain.atlassian.net/browse/TICKET-123 or https://domain.atlassian.net/issues/TICKET-123');
      }
    }
    
    if (!ticketKey || !/^[A-Z]+-\d+$/.test(ticketKey)) {
      throw new Error('Invalid ticket key format. Expected format: PROJECT-123');
    }
    
    const domain = parsedUrl.hostname;
    const protocol = parsedUrl.protocol || 'https:';
    
    return { domain, ticketKey, protocol };
  }

  makeRequest(options) {
    return new Promise((resolve, reject) => {
      const protocolModule = options.protocol === 'https:' ? https : http;
      
      const req = protocolModule.request(options, (res) => {
        let data = '';
        
        res.on('data', (chunk) => {
          data += chunk;
        });
        
        res.on('end', () => {
          if (res.statusCode === 200) {
            try {
              resolve(JSON.parse(data));
            } catch (error) {
              reject(new Error('Failed to parse JSON response'));
            }
          } else {
            reject(new Error(`HTTP ${res.statusCode}: ${data}`));
          }
        });
      });
      
      req.on('error', (error) => {
        reject(error);
      });
      
      req.end();
    });
  }

  async fetchTicketData(jiraUrl) {
    const { domain, ticketKey, protocol } = this.parseJiraUrl(jiraUrl);
    
    const apiPath = `/rest/api/2/issue/${ticketKey}`;
    
    const options = {
      hostname: domain,
      path: apiPath,
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    };
    
    if (this.bearerToken) {
      options.headers['Authorization'] = `Bearer ${this.bearerToken}`;
    } else if (this.pat) {
      options.headers['Authorization'] = `Bearer ${this.pat}`;
    } else if (this.apiToken && this.email) {
      const auth = Buffer.from(`${this.email}:${this.apiToken}`).toString('base64');
      options.headers['Authorization'] = `Basic ${auth}`;
    }
    
    try {
      const data = await this.makeRequest({ ...options, protocol });
      return this.parseTicketData(data);
    } catch (error) {
      if (error.message.includes('401')) {
        throw new Error('Authentication failed. Please set one of the following environment variables:\n  - JIRA_EMAIL and JIRA_API_TOKEN (for API token auth)\n  - JIRA_PAT (for Personal Access Token)\n  - JIRA_BEARER_TOKEN (for OAuth 2.0)');
      }
      if (error.message.includes('404')) {
        throw new Error(`Ticket not found: ${ticketKey}. Please check the ticket key and ensure you have access to it.`);
      }
      if (error.message.includes('403')) {
        throw new Error('Access forbidden. Please check your permissions for this ticket.');
      }
      throw error;
    }
  }

  parseTicketData(data) {
    const fields = data.fields || {};
    
    const parsed = {
      key: data.key,
      url: data.self,
      summary: fields.summary,
      description: fields.description,
      status: fields.status?.name,
      priority: fields.priority?.name,
      type: fields.issuetype?.name,
      assignee: fields.assignee ? {
        name: fields.assignee.displayName,
        email: fields.assignee.emailAddress
      } : null,
      reporter: fields.reporter ? {
        name: fields.reporter.displayName,
        email: fields.reporter.emailAddress
      } : null,
      created: fields.created,
      updated: fields.updated,
      labels: fields.labels || [],
      components: (fields.components || []).map(c => c.name),
      fixVersions: (fields.fixVersions || []).map(v => v.name),
      project: {
        key: fields.project?.key,
        name: fields.project?.name
      }
    };

    // Parse panels from description
    if (fields.description) {
      parsed.panels = this.extractPanels(fields.description);
    }
    
    if (fields.customfield_10001) {
      parsed.epicLink = fields.customfield_10001;
    }
    
    if (fields.customfield_10002) {
      parsed.storyPoints = fields.customfield_10002;
    }
    
    if (fields.comment && fields.comment.comments) {
      parsed.comments = fields.comment.comments.map(c => ({
        author: c.author.displayName,
        body: c.body,
        created: c.created
      }));
    }
    
    return parsed;
  }

  extractPanels(description) {
    const panels = {};
    
    // Regex to match Jira panels: {panel:title=Title}content{panel}
    const panelRegex = /\{panel(?::([^}]*))?\}([\s\S]*?)\{panel\}/g;
    let match;
    
    while ((match = panelRegex.exec(description)) !== null) {
      const attributes = match[1] || '';
      const content = match[2].trim();
      
      // Parse panel attributes (title, bgColor, etc.)
      const titleMatch = attributes.match(/title=([^,}]+)/);
      const bgColorMatch = attributes.match(/bgColor=([^,}]+)/);
      
      let title = titleMatch ? titleMatch[1].trim() : null;
      
      // If no title specified, use first line of content as title
      if (!title) {
        const firstLine = content.split('\n')[0].trim();
        title = firstLine || 'Untitled Panel';
      }
      
      const bgColor = bgColorMatch ? bgColorMatch[1] : null;
      
      panels[title] = {
        content: content,
        bgColor: bgColor,
        rawAttributes: attributes
      };
    }
    
    return panels;
  }

  getPanelByTitle(description, panelTitle) {
    const panels = this.extractPanels(description);
    return panels[panelTitle] || null;
  }

  formatOutput(ticketData) {
    const divider = '='.repeat(60);
    
    console.log(divider);
    console.log(`TICKET: ${ticketData.key}`);
    console.log(divider);
    console.log(`Summary: ${ticketData.summary}`);
    console.log(`Type: ${ticketData.type}`);
    console.log(`Status: ${ticketData.status}`);
    console.log(`Priority: ${ticketData.priority}`);
    console.log(`Project: ${ticketData.project.name} (${ticketData.project.key})`);
    
    if (ticketData.assignee) {
      console.log(`Assignee: ${ticketData.assignee.name}`);
    }
    
    console.log(`Reporter: ${ticketData.reporter.name}`);
    console.log(`Created: ${new Date(ticketData.created).toLocaleString()}`);
    console.log(`Updated: ${new Date(ticketData.updated).toLocaleString()}`);
    
    if (ticketData.labels.length > 0) {
      console.log(`Labels: ${ticketData.labels.join(', ')}`);
    }
    
    if (ticketData.components.length > 0) {
      console.log(`Components: ${ticketData.components.join(', ')}`);
    }
    
    if (ticketData.epicLink) {
      console.log(`Epic Link: ${ticketData.epicLink}`);
    }
    
    if (ticketData.storyPoints) {
      console.log(`Story Points: ${ticketData.storyPoints}`);
    }
    
    if (ticketData.description) {
      console.log('\nDescription:');
      console.log('-'.repeat(60));
      console.log(ticketData.description);
    }

    if (ticketData.panels && Object.keys(ticketData.panels).length > 0) {
      console.log('\nPanels:');
      console.log('-'.repeat(60));
      Object.entries(ticketData.panels).forEach(([title, panel]) => {
        console.log(`\n[${title}]${panel.bgColor ? ` (${panel.bgColor})` : ''}`);
        console.log('~'.repeat(40));
        console.log(panel.content);
      });
    }
    
    if (ticketData.comments && ticketData.comments.length > 0) {
      console.log('\nComments:');
      console.log('-'.repeat(60));
      ticketData.comments.forEach((comment, index) => {
        console.log(`[${index + 1}] ${comment.author} - ${new Date(comment.created).toLocaleString()}`);
        console.log(comment.body);
        console.log('');
      });
    }
    
    console.log(divider);
  }

  async exportToJson(ticketData, filename) {
    const fs = require('fs').promises;
    const outputFile = filename || `${ticketData.key}_${Date.now()}.json`;
    
    try {
      await fs.writeFile(outputFile, JSON.stringify(ticketData, null, 2));
      console.log(`Ticket data exported to: ${outputFile}`);
    } catch (error) {
      console.error('Failed to export to JSON:', error.message);
    }
  }
}

async function main() {
  const args = process.argv.slice(2);
  
  if (args.length === 0 || args.includes('--help') || args.includes('-h')) {
    console.log('Usage: node parse-jira-ticket.js <jira-url> [options]');
    console.log('\nOptions:');
    console.log('  --json, -j           Output as JSON');
    console.log('  --export, -e <file>  Export to JSON file');
    console.log('  --panel <title>      Extract specific panel by title');
    console.log('  --help, -h           Show this help message');
    console.log('\nEnvironment Variables (set one of these auth methods):');
    console.log('  JIRA_EMAIL + JIRA_API_TOKEN  Basic auth with API token');
    console.log('  JIRA_PAT                     Personal Access Token');
    console.log('  JIRA_BEARER_TOKEN            OAuth 2.0 Bearer token');
    console.log('\nExample:');
    console.log('  node parse-jira-ticket.js https://mycompany.atlassian.net/browse/PROJ-123');
    console.log('  node parse-jira-ticket.js https://mycompany.atlassian.net/browse/PROJ-123 --json');
    console.log('  node parse-jira-ticket.js https://mycompany.atlassian.net/browse/PROJ-123 --export ticket.json');
    return;
  }
  
  const jiraUrl = args[0];
  const parser = new JiraTicketParser();
  
  try {
    console.log('Fetching ticket data...');
    const ticketData = await parser.fetchTicketData(jiraUrl);
    
    const panelIndex = args.findIndex(arg => arg === '--panel');
    if (panelIndex !== -1 && args[panelIndex + 1]) {
      const panelTitle = args[panelIndex + 1];
      const panel = ticketData.panels?.[panelTitle];
      if (panel) {
        console.log(`Panel: ${panelTitle}`);
        console.log('='.repeat(60));
        console.log(panel.content);
      } else {
        console.log(`Panel "${panelTitle}" not found.`);
        console.log('Available panels:', Object.keys(ticketData.panels || {}));
      }
    } else if (args.includes('--json') || args.includes('-j')) {
      console.log(JSON.stringify(ticketData, null, 2));
    } else {
      parser.formatOutput(ticketData);
    }
    
    const exportIndex = args.findIndex(arg => arg === '--export' || arg === '-e');
    if (exportIndex !== -1 && args[exportIndex + 1]) {
      await parser.exportToJson(ticketData, args[exportIndex + 1]);
    }
    
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = JiraTicketParser;