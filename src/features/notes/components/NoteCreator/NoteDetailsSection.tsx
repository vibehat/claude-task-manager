import React, { useState } from 'react';
import { Search, X, Plus } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { TemplateSelector } from '@/features/templates';
import type { TemplateMetadata } from '@/features/templates';
import { useSearchTasks } from '@/libs/client/hooks/tasks/queries/tasks/useSearchTasks';
import type { Task } from '@/features/tasks/types/taskTypes';
import type { NoteCreatorState } from './NoteCreator';

interface NoteDetailsSectionProps {
  state: NoteCreatorState;
  onChange: (updates: Partial<NoteCreatorState>) => void;
}

const NOTE_TYPES = [
  { value: 'Research', icon: '💡', label: 'Research' },
  { value: 'Bug Report', icon: '🐛', label: 'Bug Report' },
  { value: 'Learning', icon: '📚', label: 'Learning' },
  { value: 'Idea', icon: '💭', label: 'Idea' },
] as const;

export function NoteDetailsSection({
  state,
  onChange,
}: NoteDetailsSectionProps): React.JSX.Element {
  const [tagInput, setTagInput] = useState('');
  const [taskSearch, setTaskSearch] = useState('');
  const [showTaskSearch, setShowTaskSearch] = useState(false);

  const { data: searchResults, loading: searchLoading } = useSearchTasks({
    query: taskSearch,
    skip: !showTaskSearch || !taskSearch.trim(),
  });

  const handleAddTag = () => {
    const trimmedTag = tagInput.trim();
    if (trimmedTag && !state.tags.includes(trimmedTag)) {
      onChange({ tags: [...state.tags, trimmedTag] });
      setTagInput('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    onChange({ tags: state.tags.filter((tag) => tag !== tagToRemove) });
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddTag();
    }
  };

  const handleSelectTask = (task: Task) => {
    onChange({ linkedTask: { id: task.id, title: task.title } });
    setShowTaskSearch(false);
    setTaskSearch('');
  };

  const handleClearTask = () => {
    onChange({ linkedTask: null });
  };

  return (
    <div className="border rounded-lg p-6 bg-card">
      <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <span>📝</span>
        Note Details
      </h2>

      <div className="space-y-4">
        {/* Title Input */}
        <div className="space-y-2">
          <Label htmlFor="note-title" className="text-sm font-medium flex items-center gap-2">
            📝 Title:
          </Label>
          <Input
            id="note-title"
            placeholder="JWT Implementation Research and Findings"
            value={state.title}
            onChange={(e) => onChange({ title: e.target.value })}
            className="text-lg"
          />
        </div>

        {/* Tags Input */}
        <div className="space-y-2">
          <Label className="text-sm font-medium flex items-center gap-2">🏷️ Tags:</Label>
          <div className="flex flex-wrap items-center gap-2 mb-2">
            {state.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                #{tag}
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="h-auto p-0.5 hover:bg-destructive hover:text-destructive-foreground"
                  onClick={() => handleRemoveTag(tag)}
                >
                  <X className="h-3 w-3" />
                </Button>
              </Badge>
            ))}
          </div>
          <div className="flex gap-2">
            <Input
              placeholder="Add tag"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1"
            />
            <Button type="button" variant="outline" size="sm" onClick={handleAddTag}>
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Link to Task */}
        <div className="space-y-2">
          <Label className="text-sm font-medium flex items-center gap-2">📋 Link to Task:</Label>
          {state.linkedTask ? (
            <div className="flex items-center gap-2 p-3 bg-muted rounded-md">
              <span className="flex-1 font-medium">
                Task {state.linkedTask.id}: {state.linkedTask.title}
              </span>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={handleClearTask}
                className="h-auto p-1 hover:bg-destructive hover:text-destructive-foreground"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <div className="relative">
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search tasks..."
                    value={taskSearch}
                    onChange={(e) => {
                      setTaskSearch(e.target.value);
                      setShowTaskSearch(true);
                    }}
                    onFocus={() => setShowTaskSearch(true)}
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Task Search Results */}
              {showTaskSearch && taskSearch.trim() && (
                <div className="absolute top-full left-0 right-0 z-10 mt-1 bg-popover border rounded-md shadow-md max-h-60 overflow-auto">
                  {searchLoading ? (
                    <div className="p-3 text-center text-muted-foreground">Searching tasks...</div>
                  ) : searchResults?.searchTasks && searchResults.searchTasks.length > 0 ? (
                    <div className="divide-y">
                      {searchResults.searchTasks.map((task) => (
                        <button
                          key={task.id}
                          type="button"
                          className="w-full p-3 text-left hover:bg-accent transition-colors"
                          onClick={() => handleSelectTask(task)}
                        >
                          <div className="font-medium">{task.title}</div>
                          <div className="text-sm text-muted-foreground truncate">
                            {task.description}
                          </div>
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="p-3 text-center text-muted-foreground">
                      No tasks found for "{taskSearch}"
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Template Selection */}
        <div className="space-y-2">
          <Label className="text-sm font-medium flex items-center gap-2">📋 Template:</Label>
          <TemplateSelector
            selectedTemplate={state.selectedTemplate}
            onSelectTemplate={(template) => onChange({ selectedTemplate: template })}
            placeholder="Choose a template (optional)..."
          />
          {state.selectedTemplate && (
            <div className="text-xs text-muted-foreground">
              Using template: {state.selectedTemplate.title}
              {state.selectedTemplate.description && ` - ${state.selectedTemplate.description}`}
            </div>
          )}
        </div>

        {/* Note Type Selection */}
        <div className="space-y-2">
          <Label className="text-sm font-medium flex items-center gap-2">📁 Note Type:</Label>
          <div className="flex gap-2 flex-wrap">
            {NOTE_TYPES.map((type) => (
              <Button
                key={type.value}
                type="button"
                variant={state.noteType === type.value ? 'default' : 'outline'}
                size="sm"
                onClick={() => onChange({ noteType: type.value })}
                className="flex items-center gap-2"
              >
                <span>{type.icon}</span>
                <span>{type.label}</span>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
