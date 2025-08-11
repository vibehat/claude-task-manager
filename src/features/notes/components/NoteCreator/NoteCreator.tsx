import React, { useState } from 'react';
import { NoteTabs } from '../NoteBrowser/NoteTabs';
import { NoteDetailsSection } from './NoteDetailsSection';
import { ContentEditorSection } from './ContentEditorSection';
import { KnowledgeIntelligenceSection } from './KnowledgeIntelligenceSection';
import type { TemplateMetadata } from '@/features/templates';

export interface NoteCreatorState {
  title: string;
  tags: string[];
  linkedTask: { id: string; title: string } | null;
  noteType: 'Research' | 'Bug Report' | 'Learning' | 'Idea';
  content: string;
  selectedTemplate: TemplateMetadata | null;
}

const initialState: NoteCreatorState = {
  title: '',
  tags: [],
  linkedTask: null,
  noteType: 'Research',
  content: '',
  selectedTemplate: null,
};

export function NoteCreator(): React.JSX.Element {
  const [activeTab, setActiveTab] = useState<
    'Notes' | 'Browse' | 'Create' | 'Templates' | 'Settings'
  >('Notes');
  const [noteState, setNoteState] = useState<NoteCreatorState>(initialState);

  const updateNoteState = (updates: Partial<NoteCreatorState>) => {
    setNoteState((prev) => ({ ...prev, ...updates }));
  };

  const handleSaveDraft = () => {
    console.log('Saving draft:', noteState);
    // TODO: Implement save as draft functionality
  };

  const handlePublish = () => {
    console.log('Publishing note:', noteState);
    // TODO: Implement publish to knowledge base functionality
  };

  const handleDiscard = () => {
    setNoteState(initialState);
  };

  if (activeTab !== 'Notes') {
    return (
      <div className="space-y-3" data-color-mode="dark">
        <NoteTabs active={activeTab} onChange={setActiveTab} />
        <div className="py-8 text-center text-muted-foreground">
          {activeTab} functionality will be implemented here...
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-3" data-color-mode="dark">
      <NoteTabs active={activeTab} onChange={setActiveTab} />

      <div className="max-w-6xl mx-auto space-y-6">
        <div className="text-center py-4">
          <h1 className="text-2xl font-semibold text-foreground">Create New Note</h1>
        </div>

        <NoteDetailsSection state={noteState} onChange={updateNoteState} />

        <ContentEditorSection
          content={noteState.content}
          onChange={(content) => updateNoteState({ content })}
        />

        <KnowledgeIntelligenceSection
          onSaveDraft={handleSaveDraft}
          onPublish={handlePublish}
          onDiscard={handleDiscard}
        />
      </div>
    </div>
  );
}
