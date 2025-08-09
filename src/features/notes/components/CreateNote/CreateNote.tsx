import React, { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { RichMarkdownEditor } from '@/features/tasks/components/editors/RichMarkdownEditor';
import {
  Save,
  Send,
  X,
  FileText,
  Hash,
  Link2,
  Lightbulb,
  Bug,
  BookOpen,
  Zap,
  Plus,
  Clock,
  Target,
} from 'lucide-react';

export interface CreateNoteState {
  title: string;
  content: string;
  tags: string[];
  noteType: 'research' | 'bug-report' | 'learning' | 'idea' | 'meeting' | 'experiment';
  linkedTaskId?: string;
  category?: string;
}

const initialState: CreateNoteState = {
  title: '',
  content: '',
  tags: [],
  noteType: 'research',
};

const noteTypeConfig = {
  'research': { icon: Lightbulb, label: 'Research', color: 'bg-blue-100 text-blue-800' },
  'bug-report': { icon: Bug, label: 'Bug Report', color: 'bg-red-100 text-red-800' },
  'learning': { icon: BookOpen, label: 'Learning', color: 'bg-green-100 text-green-800' },
  'idea': { icon: Zap, label: 'Idea', color: 'bg-purple-100 text-purple-800' },
  'meeting': { icon: Clock, label: 'Meeting', color: 'bg-orange-100 text-orange-800' },
  'experiment': { icon: Target, label: 'Experiment', color: 'bg-teal-100 text-teal-800' },
};

interface CreateNoteProps {
  onSave?: (note: CreateNoteState) => void;
  onCancel?: () => void;
  onPublish?: (note: CreateNoteState) => void;
}

export function CreateNote({ onSave, onCancel, onPublish }: CreateNoteProps): React.JSX.Element {
  const [noteState, setNoteState] = useState<CreateNoteState>(initialState);
  const [newTag, setNewTag] = useState('');

  const updateNoteState = (updates: Partial<CreateNoteState>) => {
    setNoteState((prev) => ({ ...prev, ...updates }));
  };

  const addTag = () => {
    if (newTag.trim() && !noteState.tags.includes(newTag.trim())) {
      updateNoteState({ tags: [...noteState.tags, newTag.trim()] });
      setNewTag('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    updateNoteState({ tags: noteState.tags.filter((tag) => tag !== tagToRemove) });
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addTag();
    }
  };

  const currentTypeConfig = noteTypeConfig[noteState.noteType];
  const TypeIcon = currentTypeConfig.icon;

  const canSave = noteState.title.trim() || noteState.content.trim();
  const canPublish = noteState.title.trim() && noteState.content.trim();

  // Template suggestions based on note type
  const templateSuggestions = useMemo(() => {
    switch (noteState.noteType) {
      case 'research':
        return [
          '## Objective\nWhat question are we trying to answer?\n\n## Key Findings\n- Finding 1\n- Finding 2\n\n## Sources\n- [Link 1](url)\n\n## Implementation Notes\n\n## Next Steps\n- [ ] Action item 1',
          '## Problem Statement\n\n## Investigation\n\n## Analysis\n\n## Recommendations\n\n## Next Steps',
        ];
      case 'bug-report':
        return [
          '## Description\nBrief description of the issue...\n\n## Steps to Reproduce\n1. Step one\n2. Step two\n\n## Expected vs Actual\n**Expected:** \n**Actual:** \n\n## Environment\n- Browser:\n- OS:\n- Version:\n\n## Solution\n',
        ];
      case 'learning':
        return [
          '## What I Learned\n\n## Key Concepts\n\n## Examples\n\n## Apply This By\n- [ ] Next action\n\n## Related Topics\n',
        ];
      default:
        return [];
    }
  }, [noteState.noteType]);

  return (
    <div className="h-screen flex flex-col bg-background">
      {/* Header */}
      <div className="border-b bg-card px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <TypeIcon className="h-5 w-5 text-muted-foreground" />
            <h1 className="text-lg font-semibold">Create New Note</h1>
            <Badge variant="secondary" className={currentTypeConfig.color}>
              {currentTypeConfig.label}
            </Badge>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => onCancel?.()}
              className="flex items-center gap-2"
            >
              <X className="h-4 w-4" />
              Cancel
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => canSave && onSave?.(noteState)}
              disabled={!canSave}
              className="flex items-center gap-2"
            >
              <Save className="h-4 w-4" />
              Save Draft
            </Button>
            <Button
              size="sm"
              onClick={() => canPublish && onPublish?.(noteState)}
              disabled={!canPublish}
              className="flex items-center gap-2"
            >
              <Send className="h-4 w-4" />
              Publish
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content - 8-4 Layout */}
      <div className="flex-1 flex overflow-hidden">
        {/* Main Editor Area (8/12) */}
        <div className="flex-1 flex flex-col min-w-0">
          <div className="flex-1 flex flex-col p-6">
            {/* Title */}
            <div className="mb-4">
              <Input
                placeholder="Enter note title..."
                value={noteState.title}
                onChange={(e) => updateNoteState({ title: e.target.value })}
                className="text-xl font-semibold border-none shadow-none px-0 py-2 h-auto focus-visible:ring-0 placeholder:text-muted-foreground/60"
                style={{ fontSize: '1.25rem', lineHeight: '1.75rem' }}
              />
            </div>

            {/* Content Editor */}
            <div className="flex-1 min-h-0">
              <RichMarkdownEditor
                value={noteState.content}
                onChange={(content) => updateNoteState({ content })}
                placeholder={`Start writing your ${currentTypeConfig.label.toLowerCase()}...\n\nTip: Use the templates in the sidebar to get started quickly.`}
                height={600}
                preview="live"
                visibleDragBar={false}
                className="h-full border rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Sidebar (4/12) */}
        <div className="w-80 border-l bg-muted/30 flex flex-col">
          <div className="p-4 space-y-4 overflow-y-auto">
            {/* Note Details */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  Note Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-2 block">
                    Type
                  </label>
                  <Select
                    value={noteState.noteType}
                    onValueChange={(value: CreateNoteState['noteType']) =>
                      updateNoteState({ noteType: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(noteTypeConfig).map(([key, config]) => {
                        const Icon = config.icon;
                        return (
                          <SelectItem key={key} value={key}>
                            <div className="flex items-center gap-2">
                              <Icon className="h-4 w-4" />
                              {config.label}
                            </div>
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-2 block">
                    Tags
                  </label>
                  <div className="space-y-2">
                    <div className="flex gap-1">
                      <Input
                        placeholder="Add tag..."
                        value={newTag}
                        onChange={(e) => setNewTag(e.target.value)}
                        onKeyPress={handleKeyPress}
                        className="text-sm"
                      />
                      <Button
                        type="button"
                        size="sm"
                        variant="outline"
                        onClick={addTag}
                        disabled={!newTag.trim()}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    {noteState.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1">
                        {noteState.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            <Hash className="h-3 w-3 mr-1" />
                            {tag}
                            <button
                              onClick={() => removeTag(tag)}
                              className="ml-1 hover:text-destructive"
                            >
                              <X className="h-3 w-3" />
                            </button>
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Templates */}
            {templateSuggestions.length > 0 && (
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <Zap className="h-4 w-4" />
                    Quick Templates
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {templateSuggestions.map((template, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="w-full justify-start text-xs"
                      onClick={() => updateNoteState({ content: template })}
                      disabled={noteState.content.trim() !== ''}
                    >
                      {currentTypeConfig.label} Template {index + 1}
                    </Button>
                  ))}
                </CardContent>
              </Card>
            )}

            {/* Context & Links */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <Link2 className="h-4 w-4" />
                  Context & Links
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" size="sm" className="w-full justify-start">
                  🔗 Link to Task
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  📂 Set Category
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  📋 Related Notes
                </Button>
              </CardContent>
            </Card>

            {/* AI Assistance */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <Zap className="h-4 w-4" />
                  AI Assistance
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" size="sm" className="w-full justify-start text-xs">
                  🧠 Generate Outline
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start text-xs">
                  ✨ Improve Writing
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start text-xs">
                  🔗 Auto-Link Related
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start text-xs">
                  📊 Extract Insights
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
