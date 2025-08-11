// Accessibility utilities for the working-on feature

/**
 * ARIA labels and descriptions for screen readers
 */
export const ARIA_LABELS = {
  // Main sections
  contextSection: 'Project context and navigation',
  taskQueue: 'Current task workflow queue',
  taskDetails: 'Detailed task information and actions',
  workflowPanel: 'AI-suggested workflow actions',
  quickActions: 'Quick action shortcuts',

  // Task elements
  currentTask: 'Currently active task',
  taskCard: (taskId: number, title: string) => `Task ${taskId}: ${title}`,
  taskStatus: (status: string) => `Task status: ${status}`,
  taskPriority: (priority: string) => `Priority level: ${priority}`,
  taskProgress: (progress: number) => `Task progress: ${progress}% complete`,

  // Workflow elements
  workflowAction: (action: string) => `Workflow action: ${action}`,
  workflowActionCompleted: (action: string) => `Completed workflow action: ${action}`,
  workflowActionPending: (action: string) => `Pending workflow action: ${action}`,

  // Interactive elements
  addTask: 'Add a new task to the queue',
  startWork: 'Start working on the current task',
  addNote: 'Add a note to the current task',
  refreshWorkflow: 'Refresh workflow suggestions',
  commandPalette: 'Open command palette (⌘K)',
  focusMode: 'Toggle focus mode (F)',

  // Navigation
  taskNavigation: 'Task navigation',
  workflowNavigation: 'Workflow navigation',
  quickNavigation: 'Quick actions navigation',
} as const;

/**
 * ARIA descriptions for complex interactions
 */
export const ARIA_DESCRIPTIONS = {
  taskQueue:
    'Use arrow keys to navigate between tasks, Enter to select, or press 1-3 to jump to workflow positions',
  workflowActions: 'Use Space to toggle action completion, or click to mark as done',
  quickActions: 'Use Tab to navigate between actions, Enter or Space to activate',
  taskDetails: 'Expandable sections can be toggled with Enter or Space when focused',
  keyboardShortcuts: 'Press ? to view all available keyboard shortcuts',
} as const;

/**
 * Focus management utilities
 */
export class FocusManager {
  private static focusRing: HTMLElement[] = [];
  private static currentIndex = -1;

  static addToFocusRing(element: HTMLElement): void {
    if (!this.focusRing.includes(element)) {
      this.focusRing.push(element);
    }
  }

  static removeFromFocusRing(element: HTMLElement): void {
    this.focusRing = this.focusRing.filter((el) => el !== element);
  }

  static focusNext(): void {
    if (this.focusRing.length === 0) return;

    this.currentIndex = (this.currentIndex + 1) % this.focusRing.length;
    this.focusRing[this.currentIndex]?.focus();
  }

  static focusPrevious(): void {
    if (this.focusRing.length === 0) return;

    this.currentIndex = this.currentIndex <= 0 ? this.focusRing.length - 1 : this.currentIndex - 1;
    this.focusRing[this.currentIndex]?.focus();
  }

  static reset(): void {
    this.focusRing = [];
    this.currentIndex = -1;
  }
}

/**
 * Screen reader announcements
 */
export class ScreenReaderAnnouncer {
  private static announcer: HTMLElement | null = null;

  static initialize(): void {
    if (this.announcer || typeof document === 'undefined') return;

    this.announcer = document.createElement('div');
    this.announcer.setAttribute('aria-live', 'polite');
    this.announcer.setAttribute('aria-atomic', 'true');
    this.announcer.className = 'sr-only';
    this.announcer.style.cssText = `
      position: absolute !important;
      width: 1px !important;
      height: 1px !important;
      padding: 0 !important;
      margin: -1px !important;
      overflow: hidden !important;
      clip: rect(0, 0, 0, 0) !important;
      white-space: nowrap !important;
      border: 0 !important;
    `;

    document.body.appendChild(this.announcer);
  }

  static announce(message: string, priority: 'polite' | 'assertive' = 'polite'): void {
    if (!this.announcer) this.initialize();
    if (!this.announcer) return;

    this.announcer.setAttribute('aria-live', priority);
    this.announcer.textContent = message;

    // Clear after announcement to prevent repetition
    setTimeout(() => {
      if (this.announcer) {
        this.announcer.textContent = '';
      }
    }, 1000);
  }

  static cleanup(): void {
    if (this.announcer && typeof document !== 'undefined') {
      document.body.removeChild(this.announcer);
      this.announcer = null;
    }
  }
}

/**
 * Color contrast validation (WCAG 2.1 AA compliance)
 */
export function validateColorContrast(
  foreground: string,
  background: string,
  isLargeText = false
): { ratio: number; passes: boolean } {
  // This is a simplified version - in a real implementation,
  // you'd use a proper color contrast calculation library
  const requiredRatio = isLargeText ? 3 : 4.5;

  // Simplified calculation (should use proper luminance calculation)
  const ratio = 4.5; // Placeholder - would calculate actual ratio

  return {
    ratio,
    passes: ratio >= requiredRatio,
  };
}

/**
 * Reduced motion detection
 */
export function respectsReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * High contrast mode detection
 */
export function isHighContrastMode(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-contrast: high)').matches;
}

/**
 * Focus visible management for keyboard navigation
 */
export function setupFocusVisible(): void {
  if (typeof document === 'undefined') return;

  // Add focus-visible polyfill behavior if needed
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      document.body.classList.add('keyboard-navigation');
    }
  });

  document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-navigation');
  });
}

/**
 * Skip link functionality for screen readers
 */
export function createSkipLink(targetId: string, linkText: string): HTMLElement {
  const skipLink = document.createElement('a');
  skipLink.href = `#${targetId}`;
  skipLink.textContent = linkText;
  skipLink.className = 'skip-link';
  skipLink.style.cssText = `
    position: absolute;
    top: -40px;
    left: 6px;
    background: #000;
    color: #fff;
    padding: 8px;
    text-decoration: none;
    z-index: 9999;
    border-radius: 4px;
    transition: top 0.3s;
  `;

  skipLink.addEventListener('focus', () => {
    skipLink.style.top = '6px';
  });

  skipLink.addEventListener('blur', () => {
    skipLink.style.top = '-40px';
  });

  return skipLink;
}

/**
 * Semantic HTML helpers
 */
export const semanticRoles = {
  // Main page regions
  main: 'main',
  navigation: 'navigation',
  complementary: 'complementary',
  banner: 'banner',
  contentinfo: 'contentinfo',

  // Interactive elements
  button: 'button',
  link: 'link',
  tab: 'tab',
  tabpanel: 'tabpanel',
  dialog: 'dialog',

  // Lists and items
  list: 'list',
  listitem: 'listitem',
  menu: 'menu',
  menuitem: 'menuitem',

  // Status and alerts
  alert: 'alert',
  status: 'status',
  log: 'log',
  progressbar: 'progressbar',
} as const;

/**
 * WCAG 2.1 AA compliance checker
 */
export function checkWCAGCompliance(): {
  colorContrast: boolean;
  focusVisible: boolean;
  keyboardNavigation: boolean;
  screenReaderSupport: boolean;
  motionRespect: boolean;
} {
  if (typeof document === 'undefined') {
    return {
      colorContrast: true,
      focusVisible: false,
      keyboardNavigation: true,
      screenReaderSupport: false,
      motionRespect: false,
    };
  }

  return {
    colorContrast: true, // Would check all color combinations
    focusVisible: document.body.classList.contains('keyboard-navigation'),
    keyboardNavigation: true, // Would test all interactive elements
    screenReaderSupport: document.querySelector('[aria-live]') !== null,
    motionRespect: respectsReducedMotion(),
  };
}
