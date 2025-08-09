'use client';

import React, { useEffect, useState } from 'react';
import { useWorkingOnStore } from '../store/workingOnStore';
// import { useCommandPaletteStore } from '@/store/commandPaletteStore';
import { useCurrentFocusTask } from '../hooks/useWorkingOnSelectors';
import { ContextView } from '../components/ContextView';
import { HandoffInterface } from '../components/HandoffInterface';
import { WorkingOnHeaderActions } from '../components/WorkingOnHeaderActions';
import { WorkingOnSingleMode } from './WorkingOnSingleMode';
import { WorkingOnMultiMode } from './WorkingOnMultiMode';

export function WorkingOnPage() {
  const [viewMode, setViewMode] = useState<'single' | 'multi'>('single');

  const {
    contextViewOpen,
    selectedTaskId,
    closeContextView,
    setLayout,
    handoffModalOpen,
    closeHandoffModal,
  } = useWorkingOnStore();

  // const { openCommandPalette } = useCommandPaletteStore();

  const currentFocusTask = useCurrentFocusTask();

  useEffect(() => {
    setLayout('desktop');
  }, [setLayout]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && contextViewOpen) {
        closeContextView();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [contextViewOpen, closeContextView]);

  return (
    <div className="px-6 space-y-6">
      {/* Header: Human Orchestration Center */}
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold">🎯 Human Orchestration Center</h1>

        <div className="flex items-center gap-3">
          <div className="inline-flex rounded-md border p-0.5">
            <button
              className={`px-3 py-1 text-sm rounded ${viewMode === 'single' ? 'bg-muted' : ''}`}
              onClick={() => setViewMode('single')}
              aria-pressed={viewMode === 'single'}
            >
              Single Task
            </button>
            <button
              className={`px-3 py-1 text-sm rounded ${viewMode === 'multi' ? 'bg-muted' : ''}`}
              onClick={() => setViewMode('multi')}
              aria-pressed={viewMode === 'multi'}
            >
              Multi-Task
            </button>
          </div>
          <WorkingOnHeaderActions />
        </div>
      </div>

      {viewMode === 'multi' ? <WorkingOnMultiMode /> : <WorkingOnSingleMode />}

      {/* Modals */}
      {selectedTaskId && (
        <ContextView taskId={selectedTaskId} isOpen={contextViewOpen} onClose={closeContextView} />
      )}

      {handoffModalOpen && currentFocusTask && (
        <HandoffInterface
          task={currentFocusTask}
          isOpen={handoffModalOpen}
          onClose={closeHandoffModal}
          onHandoff={() => {}}
        />
      )}
    </div>
  );
}
