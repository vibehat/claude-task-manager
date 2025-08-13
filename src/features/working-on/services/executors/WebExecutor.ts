import type {
  WebAction,
  ActionExecutor,
  ActionExecutionContext,
  ActionExecutionResult,
  WorkflowAction,
} from '../../types/actions';
import { z } from 'zod';

// Zod schema for web action parameters validation
const WebParametersSchema = z.object({
  url: z.string().url('Invalid URL format'),
  method: z.enum(['GET', 'POST', 'PUT', 'DELETE', 'PATCH']).default('GET'),
  headers: z.record(z.string()).optional(),
  body: z.any().optional(),
  openInBrowser: z.boolean().default(true),
  timeout: z.number().min(1000).max(60000).default(10000),
});

export class WebExecutor implements ActionExecutor<WebAction> {
  canExecute(action: WorkflowAction): action is WebAction {
    return action.type === 'web';
  }

  validate(parameters: any): boolean {
    try {
      WebParametersSchema.parse(parameters);
      return true;
    } catch (error) {
      console.error('Web action validation failed:', error);
      return false;
    }
  }

  getSchema() {
    return WebParametersSchema;
  }

  async execute(
    action: WebAction,
    context: ActionExecutionContext
  ): Promise<ActionExecutionResult> {
    const startTime = new Date().toISOString();

    try {
      const validatedParams = WebParametersSchema.parse(action.parameters);

      if (validatedParams.openInBrowser) {
        // Open URL in browser
        window.open(validatedParams.url, '_blank');

        const endTime = new Date().toISOString();
        const duration = new Date(endTime).getTime() - new Date(startTime).getTime();

        return {
          actionId: action.id,
          status: 'completed',
          startTime,
          endTime,
          duration,
          result: {
            browserTab: 'opened',
          },
          logs: [`Opened URL in browser: ${validatedParams.url}`],
        };
      } else {
        // Make HTTP request
        const response = await this.makeHttpRequest(validatedParams);

        const endTime = new Date().toISOString();
        const duration = new Date(endTime).getTime() - new Date(startTime).getTime();

        return {
          actionId: action.id,
          status: 'completed',
          startTime,
          endTime,
          duration,
          result: {
            statusCode: response.statusCode,
            response: response.data,
          },
          logs: [
            `Made ${validatedParams.method} request to: ${validatedParams.url}`,
            `Response status: ${response.statusCode}`,
          ],
        };
      }
    } catch (error) {
      const endTime = new Date().toISOString();
      const duration = new Date(endTime).getTime() - new Date(startTime).getTime();

      return {
        actionId: action.id,
        status: 'failed',
        startTime,
        endTime,
        duration,
        error: {
          code: 'WEB_EXECUTION_FAILED',
          message: error instanceof Error ? error.message : 'Unknown web execution error',
          details: error,
        },
        logs: [`Failed to execute web action: ${action.title}`],
      };
    }
  }

  private async makeHttpRequest(params: z.infer<typeof WebParametersSchema>) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), params.timeout);

    try {
      const response = await fetch(params.url, {
        method: params.method,
        headers: {
          'Content-Type': 'application/json',
          ...params.headers,
        },
        body: params.body ? JSON.stringify(params.body) : undefined,
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      const data = await response.text();

      return {
        statusCode: response.status,
        data: data,
        headers: Object.fromEntries(response.headers.entries()),
      };
    } catch (error) {
      clearTimeout(timeoutId);
      throw error;
    }
  }

  static createAction(
    url: string,
    options: {
      title?: string;
      description?: string;
      method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
      openInBrowser?: boolean;
      headers?: Record<string, string>;
      body?: any;
      priority?: 'high' | 'medium' | 'low';
    } = {}
  ): WebAction {
    return {
      id: `web-${Date.now()}`,
      title: options.title || `Open: ${url}`,
      description: options.description || `Open URL: ${url}`,
      type: 'web',
      priority: options.priority || 'medium',
      category: 'manual',
      completed: false,
      createdAt: new Date().toISOString(),
      status: 'pending',
      parameters: {
        url,
        method: options.method || 'GET',
        openInBrowser: options.openInBrowser ?? true,
        headers: options.headers,
        body: options.body,
      },
    };
  }
}
