# Simple Terminal Button System Design

## Overview

A minimalist terminal system where terminals are managed via horizontal buttons in the bottom-right corner. Only one terminal displays at a time, with seamless switching between terminal sessions.

## 1. Closed State - Minimal Floating Button

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│                         Main Application                           │
│                                                                     │
│                                                                     │
│                                                                     │
│                                                                     │
│                                                                     │
│                                                                     │
│                                                                     │
│                                                                     │
│                                                                     │
│                                                                     │
│                                                                     │
│                                                                     │
│                                                               ┌───┐ │
│                                                               │ T │ │
│                                                               └───┘ │
└─────────────────────────────────────────────────────────────────────┘
                                                                ↑
                                                    Floating Terminal Button
                                                    (Bottom Right Corner)
```

## 2. Open State - Single Active Terminal + Button Bar

```
┌─────────────────────────────────────────────────────────────────────┐
│                         │ Terminal 1 (Active)                    X │
│                         ├─────────────────────────────────────────┤
│   Main Application      │                                         │
│                         │  $ npm run dev                          │
│                         │  > Starting server...                   │
│                         │  > Ready on http://localhost:3000       │
│                         │  $ git status                           │
│                         │  On branch main                         │
│                         │  Your branch is up to date with         │
│                         │  'origin/main'.                         │
│                         │                                         │
│                         │  Changes not staged for commit:         │
│                         │    modified:   src/app.tsx              │
│                         │    modified:   package.json             │
│                         │                                         │
│                         │  $ █                                    │
│                         │                                         │
│                         │                                         │
│                         │                                         │
│                            ┌─────────┐ ┌─────────┐ ┌──────┐ ┌───┐ │
│                            │Terminal1*│ │Terminal2│ │Term3 │ │ + │ │
│                            └─────────┘ └─────────┘ └──────┘ └───┘ │
└─────────────────────────────────────────────────────────────────────┘
                              ↑           ↑         ↑       ↑
                            Active     Inactive   Inactive   New
                            Terminal    Terminal   Terminal
```

## 3. Button-Only State - No Active Terminal

```
┌─────────────────────────────────────────────────────────────────────┐
│                         Main Application                           │
│                                                                     │
│                                                                     │
│                                                                     │
│                                                                     │
│                                                                     │
│                                                                     │
│                                                                     │
│                                                                     │
│                                                                     │
│                                                                     │
│                                                                     │
│                                                                     │
│                                                                     │
│                                                                     │
│                            ┌─────────┐ ┌─────────┐ ┌──────┐ ┌───┐ │
│                            │Terminal1│ │Terminal2│ │Term3 │ │ + │ │
│                            └─────────┘ └─────────┘ └──────┘ └───┘ │
└─────────────────────────────────────────────────────────────────────┘
                              ↑           ↑         ↑       ↑
                            Terminal 1  Terminal 2  Terminal 3   New
```

## 4. Component Architecture

### 4.1 Terminal Window Component

```
┌─────────────────────────────────────┐
│ ┌─────────────────────────────────┐ │ ← Window Container
│ │ Terminal 1                    X │ │ ← Title & Close Button
│ ├─────────────────────────────────┤ │
│ │                                 │ │
│ │   <iframe                      │ │
│ │      src="/simple-terminal"    │ │ ← Terminal iframe
│ │      width="100%"              │ │
│ │      height="100%">            │ │
│ │   </iframe>                     │ │
│ │                                 │ │
│ └─────────────────────────────────┘ │
└─────────────────────────────────────┘
```

### 4.2 Terminal Button Bar Component

```
┌──────────────────────────────────────────────────────────┐
│  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌───┐  │
│  │Terminal1│ │Terminal2│ │Terminal3│ │Terminal4│ │ + │  │
│  └─────────┘ └─────────┘ └─────────┘ └─────────┘ └───┘  │
│      ↑           ↑           ↑           ↑         ↑     │
│  Terminal 1  Terminal 2  Terminal 3  Terminal 4  New    │
│        (*=active, bold highlight)                       │
└──────────────────────────────────────────────────────────┘
```

## 5. State Management

### 5.1 Terminal State

```javascript
interface Terminal {
  id: string;              // Unique identifier
  title: string;           // "Terminal 1", "Terminal 2", etc.
  isActive: boolean;       // Currently displayed
}
```

### 5.2 Manager State

```javascript
interface TerminalManager {
  terminals: Terminal[];           // All terminal instances
  activeTerminalId: string | null; // Currently displayed terminal
  isButtonBarVisible: boolean;     // Show/hide button bar
}
```

## 6. Interaction Patterns

### 6.1 Terminal Controls

```
┌────────────────────┐
│ Terminal 1       X │
└────────────────────┘
                   ↑
                   └── Close terminal
```

### 6.2 Button Bar Interactions

```
User Actions:
- Click [Terminal1] → Switch to Terminal 1
- Click [Terminal2] → Switch to Terminal 2
- Click [+]         → Create new terminal (opens immediately)
- Right-click       → Context menu (close, rename)
- Hover button      → Show tooltip with full title/status
```

### 6.3 Keyboard Shortcuts

```
Ctrl/Cmd + T    → New terminal
Ctrl/Cmd + W    → Close current terminal
Ctrl/Cmd + Tab  → Cycle through terminals
Ctrl/Cmd + 1-9  → Jump to terminal N
Escape          → Hide terminal (buttons remain)
```

## 7. Responsive Behavior

### 7.1 Desktop (>1024px)

```
- Full button bar with all terminal buttons
- Single active terminal window
- Bottom-right button bar always visible
```

### 7.2 Tablet (768px - 1024px)

```
- Horizontal scrollable button bar
- Single active terminal
- Touch-friendly button switching
```

### 7.3 Mobile (<768px)

```
- Single terminal at a time
- Floating button when closed
- Swipe button bar for navigation
- Full-screen terminals
```

## 8. Implementation Notes

### 8.1 Core Features

- **Simple state management** - Just React useState
- **iframe isolation** - Each terminal is independent
- **Single active terminal** - Only one window at a time
- **Persistent button bar** - Always accessible terminal switcher

### 8.2 Performance Optimizations

- Lazy load terminal iframes
- Hide inactive terminals (not destroy)
- Minimal re-renders with proper keys
- Cache terminal session state

### 8.3 Accessibility

- Keyboard navigation support
- ARIA labels for terminal buttons
- Focus management between terminals
- Screen reader announcements for terminal switching

## 9. Visual States

### 9.1 Terminal Button States

```
Active:     [Terminal1*] ← Highlighted, bold background
Inactive:   [Terminal2]  ← Normal appearance
Loading:    [Terminal3⟳] ← Spinner icon in button
Error:      [Terminal4!] ← Red border/text
```

### 9.2 Button Bar States

```
Hidden:     Floating [T] button only
Visible:    [Terminal1*] [Terminal2] [Terminal3] [+]
Empty:      [+] only (no terminals created)
```

## 10. Future Enhancements

1. **Session Persistence** - Restore terminals on reload
2. **Themes** - Custom color schemes for button bar
3. **Terminal Groups** - Organize by project/context
4. **Command History** - Shared across terminals
5. **Smart Naming** - Auto-name terminals based on current command
6. **Cloud Sync** - Cross-device terminal state
