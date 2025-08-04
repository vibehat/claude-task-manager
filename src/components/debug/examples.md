# Debug Terminal Examples

## Basic Usage

```tsx
import { DebugTerminal } from '@/components/debug/DebugTerminal';

// Basic terminal
<DebugTerminal />

// Terminal with custom class
<DebugTerminal className="border-2 border-blue-500" />
```

## Launch with Commands

```tsx
// Development commands
<DebugTerminal initialCommand="git status" />
<DebugTerminal initialCommand="npm run dev" />
<DebugTerminal initialCommand="pnpm typecheck" />

// System commands
<DebugTerminal initialCommand="ls -la" />
<DebugTerminal initialCommand="pwd" />
<DebugTerminal initialCommand="ps aux" />

// Chained commands
<DebugTerminal initialCommand="cd /tmp && ls -la" />
<DebugTerminal initialCommand="git log --oneline -10" />
```

## Interactive Examples

```tsx
function TerminalLauncher() {
  const [command, setCommand] = useState('');
  const [key, setKey] = useState(0);

  const launchCommand = (cmd: string) => {
    setCommand(cmd);
    setKey((k) => k + 1); // Force remount
  };

  return (
    <div>
      <button onClick={() => launchCommand('git status')}>Git Status</button>
      <button onClick={() => launchCommand('ls -la')}>List Files</button>

      <DebugTerminal key={key} initialCommand={command || undefined} />
    </div>
  );
}
```

## Use Cases

### 1. Development Debugging

```tsx
// Quick project status check
<DebugTerminal initialCommand="git status && npm list --depth=0" />
```

### 2. System Monitoring

```tsx
// System resources
<DebugTerminal initialCommand="df -h && free -h" />
```

### 3. Log Inspection

```tsx
// View recent logs
<DebugTerminal initialCommand="tail -f /var/log/system.log" />
```

### 4. Process Management

```tsx
// Check running processes
<DebugTerminal initialCommand="ps aux | grep node" />
```

## Notes

- Commands execute automatically after 1 second delay when terminal connects
- Use `\r` (carriage return) to simulate pressing Enter
- Terminal state is reset when `key` prop changes
- Commands run in the same directory as the PTY server
