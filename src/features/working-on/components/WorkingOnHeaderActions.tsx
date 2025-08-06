'use client';

import { useCommandPaletteStore } from '@/store/commandPaletteStore';

export function WorkingOnHeaderActions(): React.JSX.Element {
  const { openCommandPalette } = useCommandPaletteStore();

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={() => openCommandPalette()}
        className="flex items-center gap-2 px-3 py-1 hover:bg-muted rounded-md transition-colors text-sm"
        title="Command Palette (⌘K)"
      >
        <span>Command Palette</span>
        <kbd className="px-1.5 py-0.5 text-xs bg-muted rounded">⌘K</kbd>
      </button>
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
        <span className="text-xs text-muted-foreground">Sync</span>
      </div>
      <button className="p-1.5 hover:bg-muted rounded-md text-sm" title="Settings">
        ⚙️
      </button>
    </div>
  );
}
