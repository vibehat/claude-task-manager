'use client';

import React, { useState } from 'react';
import { WorkspaceLayout } from '@/components/layout/WorkspaceLayout';
import { WorkingOnPageClient } from '@/features/working-on/views/WorkingOnPageClient';
import WorkspaceHeader from '@/components/layout/headers/workspace/WorkspaceHeader';
import { WorkingOnHeaderActions } from '@/features/working-on/components/WorkingOnHeaderActions';
import { useWorkingOnStore } from '@/features/working-on/stores/workingOnStore';
import { CommandPalette } from '@/components/command-palette/CommandPalette';

export default function WorkingOnPageRoute(): React.JSX.Element {
  const { refresh } = useWorkingOnStore();
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  const handleCommandPalette = () => {
    setCommandPaletteOpen(true);
  };

  return (
    <>
      <WorkspaceLayout
        header={
          <WorkspaceHeader
            actions={
              <WorkingOnHeaderActions
                focusMode={false}
                onToggleFocusMode={() => {}}
                onRefresh={refresh}
                showFocusToggle={false}
                onCommandPalette={handleCommandPalette}
              />
            }
          />
        }
      >
        <WorkingOnPageClient />
      </WorkspaceLayout>

      <CommandPalette open={commandPaletteOpen} onOpenChange={setCommandPaletteOpen} />
    </>
  );
}
