import React from 'react';
import { cn } from '@/libs/client/utils';

interface NoteTabsProps {
  active: 'Notes' | 'Browse' | 'Create' | 'Templates' | 'Settings';
  onChange?: (tab: NoteTabsProps['active']) => void;
}

const tabConfig: { value: NoteTabsProps['active']; label: string; icon: string }[] = [
  { value: 'Notes', label: 'Notes', icon: '📝' },
  { value: 'Browse', label: 'Browse', icon: '📋' },
  { value: 'Create', label: 'Create', icon: '➕' },
  { value: 'Templates', label: 'Templates', icon: '🏷️' },
  { value: 'Settings', label: 'Settings', icon: '⚙️' },
];

export function NoteTabs({ active, onChange }: NoteTabsProps): React.JSX.Element {
  return (
    <div className="flex gap-3 border-b mb-3">
      {tabConfig.map((tab) => (
        <button
          key={tab.value}
          type="button"
          onClick={() => onChange?.(tab.value)}
          className={cn(
            'px-3 py-2 text-sm border-b-2 -mb-[1px] flex items-center gap-1.5',
            active === tab.value
              ? 'border-primary text-foreground font-medium'
              : 'border-transparent text-muted-foreground'
          )}
        >
          <span>{tab.icon}</span>
          <span>{tab.label}</span>
        </button>
      ))}
    </div>
  );
}
