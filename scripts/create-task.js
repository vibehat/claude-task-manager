#!/usr/bin/env node

const fs = require('fs').promises;
const path = require('path');
const JiraTicketParser = require('./parse-jira-ticket.js');

class TaskCreator {
   constructor() {
      this.templatesDir = path.join(__dirname, '..', 'docs', 'templates', 'tasks');
      this.templateDescriptions = {
         default: 'Standard development task template',
         feature: 'Template for new feature development',
         bugfix: 'Template for bug fix tasks',
         refactor: 'Template for refactoring tasks',
      };
   }

   async loadTemplate(templateName) {
      const templatePath = path.join(this.templatesDir, `${templateName}.md`);

      try {
         const content = await fs.readFile(templatePath, 'utf8');
         return content;
      } catch (error) {
         if (error.code === 'ENOENT') {
            // If template file doesn't exist, try default template
            if (templateName !== 'default') {
               console.warn(
                  `Template "${templateName}" not found, falling back to default template`
               );
               return this.loadTemplate('default');
            }
            throw new Error(`Default template not found at ${templatePath}`);
         }
         throw error;
      }
   }

   async getAvailableTemplates() {
      try {
         const files = await fs.readdir(this.templatesDir);
         return files.filter((file) => file.endsWith('.md')).map((file) => file.replace('.md', ''));
      } catch (error) {
         console.warn('Templates directory not found, using built-in templates');
         return Object.keys(this.templateDescriptions);
      }
   }

   async parseArguments(args) {
      const config = {
         title: null,
         description: null,
         jiraUrl: null,
         panelTitle: null,
         template: 'default',
         outputFile: 'task.md',
         help: false,
      };

      for (let i = 0; i < args.length; i++) {
         const arg = args[i];
         const nextArg = args[i + 1];

         switch (arg) {
            case '--title':
            case '-t':
               config.title = nextArg;
               i++;
               break;
            case '--description':
            case '-d':
               config.description = nextArg;
               i++;
               break;
            case '--jira':
            case '-j':
               config.jiraUrl = nextArg;
               i++;
               break;
            case '--panel':
            case '-p':
               config.panelTitle = nextArg;
               i++;
               break;
            case '--template':
               config.template = nextArg;
               i++;
               break;
            case '--output':
            case '-o':
               config.outputFile = nextArg;
               i++;
               break;
            case '--help':
            case '-h':
               config.help = true;
               break;
            default:
               if (arg.startsWith('-')) {
                  throw new Error(`Unknown option: ${arg}`);
               }
         }
      }

      return config;
   }

   async showHelp() {
      const availableTemplates = await this.getAvailableTemplates();
      const templateList = availableTemplates
         .map((name) => {
            const desc = this.templateDescriptions[name] || 'Custom template';
            return `  ${name.padEnd(12)} - ${desc}`;
         })
         .join('\n');

      console.log(`
Claude Task Creator

USAGE:
  node create-task.js [OPTIONS]

OPTIONS:
  -t, --title <title>           Task title
  -d, --description <desc>      Task description
  -j, --jira <url>             Jira ticket URL (alternative to manual title/description)
  -p, --panel <title>          Extract specific panel from Jira ticket
  --template <type>            Template type (see available templates below)
  -o, --output <file>          Output file path (default: task.md)
  -h, --help                   Show this help message

AVAILABLE TEMPLATES:
${templateList}

TEMPLATE LOCATION:
  Templates are stored in: docs/templates/tasks/
  You can add custom templates by creating .md files in this directory

EXAMPLES:
  # Manual task creation
  node create-task.js -t "Add user authentication" -d "Implement login/logout functionality"
  
  # From Jira ticket
  node create-task.js -j "https://company.atlassian.net/browse/PROJ-123"
  
  # From Jira panel
  node create-task.js -j "https://company.atlassian.net/browse/PROJ-123" -p "Development Tasks"
  
  # With custom template
  node create-task.js -t "Fix login bug" -d "Users can't login" --template bugfix

ENVIRONMENT VARIABLES:
  JIRA_EMAIL + JIRA_API_TOKEN  - Basic auth with API token
  JIRA_PAT                     - Personal Access Token
  JIRA_BEARER_TOKEN            - OAuth 2.0 Bearer token
`);
   }

   async fetchJiraData(jiraUrl, panelTitle = null) {
      const parser = new JiraTicketParser();
      const ticketData = await parser.fetchTicketData(jiraUrl);

      if (panelTitle) {
         const panel = parser.getPanelByTitle(ticketData.description, panelTitle);
         if (!panel) {
            throw new Error(
               `Panel "${panelTitle}" not found. Available panels: ${Object.keys(ticketData.panels || {})}`
            );
         }
         return {
            title: `${panelTitle} - ${ticketData.key}`,
            description: panel.content,
            jiraKey: ticketData.key,
            jiraUrl: jiraUrl,
            panelTitle: panelTitle,
         };
      }

      return {
         title: `${ticketData.key}: ${ticketData.summary}`,
         description: ticketData.description || '',
         jiraKey: ticketData.key,
         jiraUrl: jiraUrl,
      };
   }

   async generateTaskFile(config, taskData) {
      // Load template content from file
      let templateContent;
      try {
         templateContent = await this.loadTemplate(config.template);
      } catch (error) {
         throw new Error(`Failed to load template "${config.template}": ${error.message}`);
      }

      const timestamp = new Date().toISOString();

      // Prepare template variables
      const variables = {
         title: taskData.title,
         description: taskData.description,
         timestamp: timestamp,
         branch: 'current',
         jiraUrl: taskData.jiraUrl || '',
         jiraKey: taskData.jiraKey || '',
         panelTitle: taskData.panelTitle || '',
      };

      // Replace variables in template
      let content = templateContent.replace(/\{(\w+)\}/g, (match, key) => {
         return variables[key] || match;
      });

      // Add source information if from Jira
      if (taskData.jiraUrl) {
         const sourceSection = `\n## Source\nJira Ticket: ${taskData.jiraUrl}${taskData.panelTitle ? `\nPanel: ${taskData.panelTitle}` : ''}\n`;
         content = content.replace(
            '## Instructions for Claude',
            `${sourceSection}## Instructions for Claude`
         );
      }

      return content;
   }

   async run(args) {
      try {
         const config = await this.parseArguments(args);

         if (config.help) {
            await this.showHelp();
            return;
         }

         // Validate input
         if (!config.jiraUrl && (!config.title || !config.description)) {
            throw new Error('Either --jira URL or both --title and --description are required');
         }

         let taskData;

         if (config.jiraUrl) {
            console.log('📥 Fetching Jira ticket data...');
            taskData = await this.fetchJiraData(config.jiraUrl, config.panelTitle);
            console.log(`✅ Fetched: ${taskData.title}`);
         } else {
            taskData = {
               title: config.title,
               description: config.description,
            };
         }

         // Generate task file content
         console.log('📝 Generating task file...');
         const taskContent = await this.generateTaskFile(config, taskData);

         // Write task file
         await fs.writeFile(config.outputFile, taskContent);
         console.log(`✅ Created task file: ${config.outputFile}`);

         console.log('\n🎉 Task creation completed successfully!');
         console.log(`📋 Next steps:`);
         console.log(`   1. Review the generated ${config.outputFile}`);
         console.log(`   2. Use Claude to read the task and create a plan`);
      } catch (error) {
         console.error('❌ Error:', error.message);
         process.exit(1);
      }
   }
}

// Run if called directly
if (require.main === module) {
   const args = process.argv.slice(2);
   const creator = new TaskCreator();
   creator.run(args);
}

module.exports = TaskCreator;
