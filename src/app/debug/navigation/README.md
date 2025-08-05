# Navigation Debug Page

## Overview

The `/debug/navigation` page is a comprehensive testing environment for the sidebar navigation system. It allows developers to test navigation patterns, keyboard shortcuts, and user experience flows.

## Features

### 1. Sidebar Comparison

- **Productivity Sidebar**: Convention-focused design following VS Code/Linear patterns
- **Simple Sidebar**: Basic collapsible sidebar with essential features
- Toggle between both to compare functionality

### 2. Demo Data Generator

- Generate realistic sample tasks for testing
- Creates tasks with various statuses (pending, in-progress, done, blocked)
- Different priorities (low, medium, high) to test badge displays
- Clear demo data when testing is complete

### 3. Navigation Test Suite

- Automated keyboard shortcut testing
- Real-time test execution with visual feedback
- Test categories: Navigation, Actions, Filters, Views
- Pass/fail tracking with detailed results

### 4. Keyboard Shortcuts Testing

- Complete shortcuts reference
- Live testing of all shortcuts
- Category-based organization
- Interactive shortcut modal

### 5. Responsive Design Testing

- Desktop, tablet, and mobile behavior documentation
- Visual guides for different screen sizes
- Touch vs. keyboard interaction patterns

## Usage

### Testing Navigation

1. Visit `/debug/navigation`
2. Generate demo data using the "Generate Demo Data" button
3. Test different sidebar configurations
4. Use keyboard shortcuts to verify functionality
5. Run the automated test suite to verify all shortcuts work

### Keyboard Shortcuts to Test

```
Navigation:
G H    - Go to Dashboard
G T    - Go to Tasks
G A    - Go to Analytics
G S    - Go to Settings

Actions:
⌘K     - Command palette
⌘N     - New task
⌘⇧N    - Next task
⌘`     - Terminal

Filters:
F P    - Filter pending
F I    - Filter in-progress
F H    - Filter high priority
```

### Test Scenarios

#### 1. Basic Navigation

- Click sidebar items
- Use keyboard shortcuts
- Verify active states
- Check URL changes

#### 2. Task Count Badges

- Generate demo data
- Verify correct counts in sidebar
- Test different filter states
- Check real-time updates

#### 3. Keyboard Workflow

- Press `⌘K` for command palette
- Use `G` shortcuts for navigation
- Test filter shortcuts
- Verify all shortcuts work globally

#### 4. Responsive Behavior

- Resize browser window
- Test mobile drawer behavior
- Verify touch interactions
- Check collapsed states

## Expected Behavior

### Productivity Sidebar

- Search bar at top with `⌘K` shortcut
- Quick actions: New Task, Next Task
- Collapsible sections with proper icons
- Smart views with real-time badges
- Recent items for quick access

### Simple Sidebar

- Clean, minimal design
- Collapsible with icon-only mode
- Essential navigation items
- Clear visual hierarchy

### Keyboard Navigation

- All major actions have shortcuts
- Vim-style navigation (`G` prefix)
- Global shortcuts work from anywhere
- Visual feedback for active states

## Development Notes

### Components Used

- `ProductivitySidebar`: Main productivity-focused sidebar
- `SimpleSidebar`: Basic collapsible sidebar
- `NavigationTestPanel`: Automated testing component
- `DemoDataGenerator`: Sample data creation
- `KeyboardShortcuts`: Shortcuts reference modal

### State Management

- Uses `useIssueStore` for task data
- Local state for sidebar configuration
- Real-time updates for counters and badges

### Dependencies

- `react-hotkeys-hook` for keyboard shortcuts
- Existing UI components from the design system
- Navigation data from `productivitySidebarNav.ts`

## Troubleshooting

### Common Issues

1. **Shortcuts not working**: Check if `react-hotkeys-hook` is properly installed
2. **Badges not updating**: Verify demo data is generated and store is connected
3. **Navigation not changing**: Check routing configuration and pathname detection
4. **Mobile issues**: Test with browser dev tools device simulation

### Debug Tips

- Use browser dev tools to inspect component state
- Check console for keyboard event registration
- Verify task store data in React DevTools
- Test in different browsers for compatibility

This debug page serves as both a testing environment and a demonstration of the navigation system's capabilities.
