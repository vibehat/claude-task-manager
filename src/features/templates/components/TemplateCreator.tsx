'use client';

import React, { useState } from 'react';
import { Save, Eye, X, FileText } from 'lucide-react';
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
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useCreateTemplate, useUpdateTemplate, useTemplatePreview } from '../hooks/useTemplates';
import type {
  Template,
  CreateTemplateRequest,
  UpdateTemplateRequest,
} from '@/types/template.types';

interface TemplateCreatorProps {
  template?: Template | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (template: Template) => void;
  categories?: string[];
}

export function TemplateCreator({
  template,
  isOpen,
  onClose,
  onSave,
  categories = ['General', 'Meeting Notes', 'Bug Reports', 'Feature Design', 'Research'],
}: TemplateCreatorProps) {
  const isEditing = !!template;

  // Form state
  const [formData, setFormData] = useState<CreateTemplateRequest>({
    name: template?.name || '',
    title: template?.title || '',
    description: template?.description || '',
    category: template?.category || 'General',
    content: template?.content || '',
    tags: template?.tags || [],
  });

  const [currentTag, setCurrentTag] = useState('');
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewContent, setPreviewContent] = useState('');
  const [previewVariables, setPreviewVariables] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  const { createTemplate } = useCreateTemplate();
  const { updateTemplate } = useUpdateTemplate();
  const { previewTemplate } = useTemplatePreview();

  // Extract variables from content
  const extractedVariables = React.useMemo(() => {
    const variableRegex = /\{\{(\w+)\}\}/g;
    const variables = new Set<string>();
    let match;

    while ((match = variableRegex.exec(formData.content)) !== null) {
      variables.add(match[1]);
    }

    return Array.from(variables);
  }, [formData.content]);

  const handleInputChange = (field: keyof CreateTemplateRequest, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleAddTag = () => {
    if (currentTag.trim() && !formData.tags.includes(currentTag.trim())) {
      setFormData((prev) => ({
        ...prev,
        tags: [...prev.tags, currentTag.trim()],
      }));
      setCurrentTag('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== tagToRemove),
    }));
  };

  const handlePreview = async () => {
    if (!formData.name || !formData.content) return;

    try {
      // If we're editing, use the current template ID, otherwise use a temporary ID
      const templateId = template?.id || 'preview';

      // For preview, we'll create sample values for variables
      const sampleVariables: Record<string, string> = {};
      extractedVariables.forEach((variable) => {
        sampleVariables[variable] = previewVariables[variable] || `[${variable}]`;
      });

      const { preview } = await previewTemplate(templateId, sampleVariables);
      setPreviewContent(preview);
      setPreviewOpen(true);
    } catch (error) {
      console.error('Preview error:', error);
      // For now, show a basic preview without API call
      let preview = formData.content;
      extractedVariables.forEach((variable) => {
        const value = previewVariables[variable] || `[${variable}]`;
        preview = preview.replace(new RegExp(`\\{\\{${variable}\\}\\}`, 'g'), value);
      });
      setPreviewContent(preview);
      setPreviewOpen(true);
    }
  };

  const handleSave = async () => {
    if (!formData.name.trim() || !formData.title.trim() || !formData.content.trim()) {
      return;
    }

    setIsLoading(true);
    try {
      if (isEditing && template) {
        const updateData: UpdateTemplateRequest = {
          title: formData.title,
          description: formData.description,
          category: formData.category,
          content: formData.content,
          tags: formData.tags,
        };
        const { template: updatedTemplate } = await updateTemplate(template.id, updateData);
        onSave(updatedTemplate);
      } else {
        const { template: newTemplate } = await createTemplate(formData);
        onSave(newTemplate);
      }
      onClose();
    } catch (error) {
      console.error('Save error:', error);
      // Handle error (show toast, etc.)
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    // Reset form if not editing
    if (!isEditing) {
      setFormData({
        name: '',
        title: '',
        description: '',
        category: 'General',
        content: '',
        tags: [],
      });
      setCurrentTag('');
    }
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>{isEditing ? 'Edit Template' : 'Create New Template'}</DialogTitle>
          <DialogDescription>
            {isEditing
              ? 'Modify the template content and metadata'
              : 'Create a reusable template for generating notes'}
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="flex-1 pr-4">
          <div className="space-y-6">
            {/* Basic Information */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Template Name *</Label>
                <Input
                  id="name"
                  placeholder="e.g., meeting-notes"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  disabled={isEditing} // Don't allow changing name when editing
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="title">Display Title *</Label>
                <Input
                  id="title"
                  placeholder="e.g., Meeting Notes Template"
                  value={formData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Brief description of what this template is for..."
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                rows={2}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select
                value={formData.category}
                onValueChange={(value) => handleInputChange('category', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Tags */}
            <div className="space-y-2">
              <Label>Tags</Label>
              <div className="flex gap-2">
                <Input
                  placeholder="Add a tag..."
                  value={currentTag}
                  onChange={(e) => setCurrentTag(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      handleAddTag();
                    }
                  }}
                />
                <Button type="button" variant="outline" onClick={handleAddTag}>
                  Add
                </Button>
              </div>
              {formData.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {formData.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                      {tag}
                      <X className="h-3 w-3 cursor-pointer" onClick={() => handleRemoveTag(tag)} />
                    </Badge>
                  ))}
                </div>
              )}
            </div>

            {/* Template Content */}
            <div className="space-y-2">
              <Label htmlFor="content">Template Content *</Label>
              <Textarea
                id="content"
                placeholder="Enter your template content here. Use {{variable}} for replaceable parts..."
                value={formData.content}
                onChange={(e) => handleInputChange('content', e.target.value)}
                rows={15}
                className="font-mono text-sm"
              />
            </div>

            {/* Variables Preview */}
            {extractedVariables.length > 0 && (
              <div className="space-y-2">
                <Label>Detected Variables ({extractedVariables.length})</Label>
                <div className="p-3 bg-muted rounded-md">
                  <div className="flex flex-wrap gap-2">
                    {extractedVariables.map((variable) => (
                      <Badge key={variable} variant="outline">
                        {variable}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        {/* Actions */}
        <div className="flex items-center justify-between pt-4 border-t">
          <div className="flex gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={handlePreview}
              disabled={!formData.content}
              className="flex items-center gap-2"
            >
              <Eye className="h-4 w-4" />
              Preview
            </Button>
          </div>

          <div className="flex gap-2">
            <Button type="button" variant="outline" onClick={handleClose}>
              Cancel
            </Button>
            <Button
              onClick={handleSave}
              disabled={
                !formData.name.trim() ||
                !formData.title.trim() ||
                !formData.content.trim() ||
                isLoading
              }
              className="flex items-center gap-2"
            >
              <Save className="h-4 w-4" />
              {isLoading ? 'Saving...' : 'Save Template'}
            </Button>
          </div>
        </div>
      </DialogContent>

      {/* Preview Modal */}
      <Dialog open={previewOpen} onOpenChange={setPreviewOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Template Preview
            </DialogTitle>
            <DialogDescription>
              This is how your template will look with sample data
            </DialogDescription>
          </DialogHeader>

          <ScrollArea className="flex-1 max-h-96">
            <div className="p-4 bg-muted rounded-md">
              <pre className="whitespace-pre-wrap font-mono text-sm">{previewContent}</pre>
            </div>
          </ScrollArea>

          <div className="flex justify-end">
            <Button onClick={() => setPreviewOpen(false)}>Close Preview</Button>
          </div>
        </DialogContent>
      </Dialog>
    </Dialog>
  );
}
