import React, { useState } from 'react';
import { TemplateBrowser, TemplateCreator, TemplateToNoteForm } from '@/features/templates';
import type { TemplateMetadata, Template } from '@/features/templates';

type TemplateTabState = 'browse' | 'create' | 'use-template';

export function TemplatesTab(): React.JSX.Element {
  const [state, setState] = useState<TemplateTabState>('browse');
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateMetadata | null>(null);
  const [editingTemplate, setEditingTemplate] = useState<Template | null>(null);
  const [createModalOpen, setCreateModalOpen] = useState(false);

  const handleSelectTemplate = (template: TemplateMetadata) => {
    setSelectedTemplate(template);
    setState('use-template');
  };

  const handleCreateTemplate = () => {
    setEditingTemplate(null);
    setCreateModalOpen(true);
  };

  const handleEditTemplate = (template: Template) => {
    setEditingTemplate(template);
    setCreateModalOpen(true);
  };

  const handleSaveTemplate = (template: Template) => {
    // Refresh the templates list
    setCreateModalOpen(false);
    setEditingTemplate(null);
    // TODO: Show success message
  };

  const handleCreateNote = (noteData: {
    title: string;
    content: string;
    category?: string;
    templateId: string;
  }) => {
    console.log('Creating note from template:', noteData);
    // TODO: Integrate with the note creation API
    // For now, we'll just log and close
    setState('browse');
    setSelectedTemplate(null);
  };

  const handleBackToBrowse = () => {
    setState('browse');
    setSelectedTemplate(null);
  };

  if (state === 'use-template' && selectedTemplate) {
    return (
      <TemplateToNoteForm
        selectedTemplate={selectedTemplate}
        isOpen={true}
        onClose={handleBackToBrowse}
        onCreateNote={handleCreateNote}
        onBack={handleBackToBrowse}
      />
    );
  }

  return (
    <div className="space-y-6">
      <TemplateBrowser
        onSelectTemplate={handleSelectTemplate}
        onCreateTemplate={handleCreateTemplate}
        selectionMode={true}
      />

      <TemplateCreator
        template={editingTemplate}
        isOpen={createModalOpen}
        onClose={() => {
          setCreateModalOpen(false);
          setEditingTemplate(null);
        }}
        onSave={handleSaveTemplate}
      />
    </div>
  );
}
