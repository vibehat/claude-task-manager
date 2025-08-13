import type { ActionExecutionContext } from '../types/actions';
import { TerminalExecutor } from '../services/executors/TerminalExecutor';
import { WebExecutor } from '../services/executors/WebExecutor';
import { FileExecutor } from '../services/executors/FileExecutor';

/**
 * Test utility for validating action execution functionality
 */
export async function testActionExecution() {
  console.log('🧪 Testing Action Execution System...');

  // Create test context
  const context: ActionExecutionContext = {
    sessionId: `test-session-${Date.now()}`,
    timestamp: new Date().toISOString(),
    environment: process.env as Record<string, string>,
    workingDirectory: process.cwd?.() || '.',
  };

  try {
    // Test 1: Terminal Action Creation
    console.log('✅ Test 1: Creating terminal actions');
    const terminalAction = TerminalExecutor.createAction('echo "Hello from terminal action!"', {
      title: 'Test Terminal Action',
      description: 'Testing terminal command execution',
      autoExecute: true,
    });

    console.log('Terminal action created:', {
      id: terminalAction.id,
      type: terminalAction.type,
      command: terminalAction.parameters.command,
    });

    // Test 2: Web Action Creation
    console.log('✅ Test 2: Creating web actions');
    const webAction = WebExecutor.createAction('https://github.com', {
      title: 'Open GitHub',
      description: 'Open GitHub in browser',
      openInBrowser: true,
    });

    console.log('Web action created:', {
      id: webAction.id,
      type: webAction.type,
      url: webAction.parameters.url,
    });

    // Test 3: File Action Creation
    console.log('✅ Test 3: Creating file actions');
    const fileAction = FileExecutor.createAction('open', 'package.json', {
      title: 'Open Package.json',
      description: 'Open project package.json file',
      openInEditor: true,
    });

    console.log('File action created:', {
      id: fileAction.id,
      type: fileAction.type,
      operation: fileAction.parameters.operation,
      filePath: fileAction.parameters.filePath,
    });

    // Test 4: Action Validation
    console.log('✅ Test 4: Validating actions');
    const terminalExecutor = new TerminalExecutor();
    const webExecutor = new WebExecutor();
    const fileExecutor = new FileExecutor();

    const terminalValid = terminalExecutor.validate(terminalAction.parameters);
    const webValid = webExecutor.validate(webAction.parameters);
    const fileValid = fileExecutor.validate(fileAction.parameters);

    console.log('Validation results:', {
      terminal: terminalValid,
      web: webValid,
      file: fileValid,
    });

    // Test 5: Action Execution (simulation)
    console.log('✅ Test 5: Simulating action execution');

    // Terminal action execution test
    if (terminalExecutor.canExecute(terminalAction)) {
      const terminalResult = await terminalExecutor.execute(terminalAction, context);
      console.log('Terminal execution result:', {
        status: terminalResult.status,
        duration: terminalResult.duration,
        logs: terminalResult.logs?.slice(0, 2), // First 2 log entries
      });
    }

    // Web action execution test
    if (webExecutor.canExecute(webAction)) {
      const webResult = await webExecutor.execute(webAction, context);
      console.log('Web execution result:', {
        status: webResult.status,
        duration: webResult.duration,
        logs: webResult.logs?.slice(0, 2),
      });
    }

    // File action execution test
    if (fileExecutor.canExecute(fileAction)) {
      const fileResult = await fileExecutor.execute(fileAction, context);
      console.log('File execution result:', {
        status: fileResult.status,
        duration: fileResult.duration,
        logs: fileResult.logs?.slice(0, 2),
      });
    }

    console.log('🎉 All action execution tests completed successfully!');
    return true;
  } catch (error) {
    console.error('❌ Action execution test failed:', error);
    return false;
  }
}

/**
 * Test common terminal actions
 */
export function testCommonActions() {
  console.log('🧪 Testing Common Actions...');

  try {
    const commonActions = TerminalExecutor.createCommonActions();

    console.log('Common actions available:');
    Object.entries(commonActions).forEach(([key, actionFactory]) => {
      const action = actionFactory();
      console.log(`- ${key}: ${action.title} (${action.parameters.command})`);
    });

    const fileActions = FileExecutor.createCommonActions();

    console.log('Common file actions available:');
    Object.entries(fileActions).forEach(([key, actionFactory]) => {
      const action = actionFactory();
      console.log(
        `- ${key}: ${action.title} (${action.parameters.operation} ${action.parameters.filePath})`
      );
    });

    console.log('✅ Common actions test completed!');
    return true;
  } catch (error) {
    console.error('❌ Common actions test failed:', error);
    return false;
  }
}

/**
 * Run all tests
 */
export async function runAllActionTests() {
  console.log('🚀 Starting Action System Tests...\n');

  const results = {
    execution: await testActionExecution(),
    commonActions: testCommonActions(),
  };

  console.log('\n📊 Test Results Summary:');
  console.log(`- Action Execution: ${results.execution ? '✅ PASS' : '❌ FAIL'}`);
  console.log(`- Common Actions: ${results.commonActions ? '✅ PASS' : '❌ FAIL'}`);

  const allPassed = Object.values(results).every(Boolean);
  console.log(`\n${allPassed ? '🎉 All tests passed!' : '⚠️  Some tests failed!'}`);

  return allPassed;
}
