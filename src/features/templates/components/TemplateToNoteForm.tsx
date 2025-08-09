'use client';

import React, { useState, useEffect } from 'react';
import { FileText, Save, Eye, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useTemplate, useTemplatePreview } from '../hooks/useTemplates';
import type { TemplateMetadata } from '@/types/template.types';

interface TemplateToNoteFormProps {
  selectedTemplate: TemplateMetadata;
  isOpen: boolean;
  onClose: () => void;
  onCreateNote: (noteData: {
    title: string;
    content: string;
    category?: string;
    templateId: string;
  }) => void;
  onBack: () => void;
}

export function TemplateToNoteForm({
  selectedTemplate,
  isOpen,
  onClose,
  onCreateNote,
  onBack,
}: TemplateToNoteFormProps) {
  const { template, isLoading } = useTemplate(selectedTemplate.id);
  const { previewTemplate } = useTemplatePreview();

  const [variables, setVariables] = useState<Record<string, string>>({});
  const [noteTitle, setNoteTitle] = useState('');
  const [noteCategory, setNoteCategory] = useState('');
  const [previewContent, setPreviewContent] = useState('');
  const [previewOpen, setPreviewOpen] = useState(false);
  const [isCreating, setIsCreating] = useState(false);

  // Initialize variables and note title when template loads
  useEffect(() => {
    if (template) {
      // Initialize variables with empty values
      const initialVariables: Record<string, string> = {};
      if (template.variables) {
        template.variables.forEach((variable) => {
          initialVariables[variable.name] = '';
        });
      }
      setVariables(initialVariables);

      // Set default note title based on template title
      setNoteTitle(template.title);
      setNoteCategory(template.category || '');
    }
  }, [template]);

  const handleVariableChange = (variableName: string, value: string) => {
    setVariables((prev) => ({
      ...prev,
      [variableName]: value,
    }));
  };

  const handlePreview = async () => {
    if (!template) return;

    try {
      const { preview } = await previewTemplate(template.id, variables);
      setPreviewContent(preview);
      setPreviewOpen(true);
    } catch (error) {
      console.error('Preview error:', error);
      // Fallback: manual variable replacement
      let content = template.content;
      Object.entries(variables).forEach(([key, value]) => {
        const regex = new RegExp(`\\{\\{${key}\\}\\}`, 'g');
        content = content.replace(regex, value || `{{${key}}}`);
      });
      setPreviewContent(content);
      setPreviewOpen(true);
    }
  };

  const handleCreateNote = async () => {
    if (!template || !noteTitle.trim()) return;

    setIsCreating(true);
    try {
      const { preview } = await previewTemplate(template.id, variables);
      onCreateNote({
        title: noteTitle,
        content: preview,
        category: noteCategory,
        templateId: template.id,
      });
    } catch (error) {
      console.error('Create note error:', error);
      // Fallback: manual variable replacement
      let content = template.content;
      Object.entries(variables).forEach(([key, value]) => {
        const regex = new RegExp(`\\{\\{${key}\\}\\}`, 'g');
        content = content.replace(regex, value || `{{${key}}}`);
      });
      onCreateNote({
        title: noteTitle,
        content,
        category: noteCategory,
        templateId: template.id,
      });
    } finally {
      setIsCreating(false);
    }
  };

  if (isLoading) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-2xl">
          <div className="flex items-center justify-center p-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  if (!template) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Template Not Found</DialogTitle>
            <DialogDescription>The selected template could not be loaded.</DialogDescription>
          </DialogHeader>
          <div className="flex justify-end gap-2">
            <Button onClick={onClose}>Close</Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  const extractedVariables = template.variables || [];
  const canCreateNote =
    noteTitle.trim() && extractedVariables.every((variable) => variables[variable.name]?.trim());

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-4xl max-h-[90vh] flex flex-col">
          <DialogHeader>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" onClick={onBack}>
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <div>
                <DialogTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Create Note from Template
                </DialogTitle>
                <DialogDescription>Using template: {template.title}</DialogDescription>
              </div>
            </div>
          </DialogHeader>

          <ScrollArea className="flex-1 pr-4">
            <div className="space-y-6">
              {/* Note Information */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="noteTitle">Note Title *</Label>
                  <Input
                    id="noteTitle"
                    placeholder="Enter note title..."
                    value={noteTitle}
                    onChange={(e) => setNoteTitle(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="noteCategory">Category</Label>
                  <Input
                    id="noteCategory"
                    placeholder="Optional category..."
                    value={noteCategory}
                    onChange={(e) => setNoteCategory(e.target.value)}
                  />
                </div>
              </div>

              {/* Template Variables */}
              {extractedVariables.length > 0 && (
                <div className="space-y-4">
                  <div>
                    <Label className="text-base font-medium">Fill in Variables</Label>
                    <p className="text-sm text-muted-foreground">
                      Provide values for the template variables
                    </p>
                  </div>

                  <div className="grid gap-4">
                    {extractedVariables.map((variable) => (
                      <div key={variable.name} className="space-y-2">
                        <Label htmlFor={`var-${variable.name}`}>
                          {variable.label || variable.name}
                          {variable.required !== false && ' *'}
                        </Label>
                        {variable.description && (
                          <p className="text-xs text-muted-foreground">{variable.description}</p>
                        )}
                        {variable.type === 'textarea' ? (
                          <Textarea
                            id={`var-${variable.name}`}
                            placeholder={variable.defaultValue || `Enter ${variable.name}...`}
                            value={variables[variable.name] || ''}
                            onChange={(e) => handleVariableChange(variable.name, e.target.value)}
                            rows={3}
                          />
                        ) : variable.type === 'select' && variable.options ? (
                          <Select
                            value={variables[variable.name] || undefined}
                            onValueChange={(value) => handleVariableChange(variable.name, value)}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder={`Select ${variable.name}...`} />
                            </SelectTrigger>
                            <SelectContent>
                              {variable.options.map((option) => (
                                <SelectItem key={option} value={option}>
                                  {option}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        ) : variable.type === 'date' ? (
                          <Input
                            id={`var-${variable.name}`}
                            type="date"
                            value={variables[variable.name] || ''}
                            onChange={(e) => handleVariableChange(variable.name, e.target.value)}
                          />
                        ) : (
                          <Input
                            id={`var-${variable.name}`}
                            type="text"
                            placeholder={variable.defaultValue || `Enter ${variable.name}...`}
                            value={variables[variable.name] || ''}
                            onChange={(e) => handleVariableChange(variable.name, e.target.value)}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Template Preview */}
              <div className="space-y-2">
                <Label>Template Content</Label>
                <div className="p-3 bg-muted rounded-md max-h-40 overflow-y-auto">
                  <pre className="text-xs font-mono whitespace-pre-wrap">{template.content}</pre>
                </div>
              </div>
            </div>
          </ScrollArea>

          {/* Actions */}
          <div className="flex items-center justify-between pt-4 border-t">
            <div>
              <Button
                variant="outline"
                onClick={handlePreview}
                disabled={!canCreateNote}
                className="flex items-center gap-2"
              >
                <Eye className="h-4 w-4" />
                Preview Note
              </Button>
            </div>

            <div className="flex gap-2">
              <Button variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button
                onClick={handleCreateNote}
                disabled={!canCreateNote || isCreating}
                className="flex items-center gap-2"
              >
                <Save className="h-4 w-4" />
                {isCreating ? 'Creating...' : 'Create Note'}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Preview Modal */}
      <Dialog open={previewOpen} onOpenChange={setPreviewOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Note Preview
            </DialogTitle>
            <DialogDescription>This is how your note will look</DialogDescription>
          </DialogHeader>

          <ScrollArea className="flex-1 max-h-96">
            <div className="space-y-4">
              <div>
                <Label>Title</Label>
                <div className="p-2 bg-muted rounded text-sm font-medium">{noteTitle}</div>
              </div>

              <div>
                <Label>Content</Label>
                <div className="p-4 bg-muted rounded-md">
                  <pre className="whitespace-pre-wrap text-sm">{previewContent}</pre>
                </div>
              </div>
            </div>
          </ScrollArea>

          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setPreviewOpen(false)}>
              Close Preview
            </Button>
            <Button onClick={handleCreateNote} disabled={isCreating}>
              {isCreating ? 'Creating...' : 'Create Note'}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
