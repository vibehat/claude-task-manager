import { useCallback, useEffect } from 'react';
import { useWorkingOnStore } from '../store/workingOnStore';
import type { UseFocusModeReturn } from '../types/workingOnTypes';

/**
 * Hook for managing focus mode state and keyboard shortcuts
 * Provides focus mode toggle functionality with keyboard support
 */
export const useFocusMode = (): UseFocusModeReturn => {
  const focusMode = useWorkingOnStore((state) => state.focusMode);
  const toggleFocusMode = useWorkingOnStore((state) => state.toggleFocusMode);

  // Enable focus mode
  const enable = useCallback(() => {
    if (!focusMode) {
      toggleFocusMode();
    }
  }, [focusMode, toggleFocusMode]);

  // Disable focus mode
  const disable = useCallback(() => {
    if (focusMode) {
      toggleFocusMode();
    }
  }, [focusMode, toggleFocusMode]);

  // Toggle focus mode
  const toggle = useCallback(() => {
    toggleFocusMode();
  }, [toggleFocusMode]);

  // Keyboard shortcuts for focus mode
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Cmd/Ctrl + F to toggle focus mode
      if ((event.metaKey || event.ctrlKey) && event.key === 'f') {
        event.preventDefault();
        toggle();
        return;
      }

      // Escape to exit focus mode
      if (event.key === 'Escape' && focusMode) {
        event.preventDefault();
        disable();
        return;
      }
    };

    // Add event listener
    document.addEventListener('keydown', handleKeyDown);

    // Cleanup
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [focusMode, toggle, disable]);

  // Prevent scroll when in focus mode (optional UX enhancement)
  useEffect(() => {
    if (focusMode) {
      // Store original overflow
      const originalOverflow = document.body.style.overflow;

      // Prevent scrolling
      document.body.style.overflow = 'hidden';

      // Cleanup
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [focusMode]);

  return {
    isActive: focusMode,
    toggle,
    enable,
    disable,
  };
};
