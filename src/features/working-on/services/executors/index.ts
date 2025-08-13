import { actionExecutionEngine } from '../ActionExecutionEngine';
import { TerminalExecutor } from './TerminalExecutor';
import { WebExecutor } from './WebExecutor';
import { FileExecutor } from './FileExecutor';

// Export all executors
export { TerminalExecutor, WebExecutor, FileExecutor };

// Register all executors with the execution engine
export function registerAllExecutors() {
  actionExecutionEngine.registerExecutor('terminal', new TerminalExecutor());
  actionExecutionEngine.registerExecutor('web', new WebExecutor());
  actionExecutionEngine.registerExecutor('file', new FileExecutor());

  console.log('All action executors registered');
}

// Initialize executors
registerAllExecutors();
