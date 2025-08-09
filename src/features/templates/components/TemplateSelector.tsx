'use client';

import React, { useState } from 'react';
import { ChevronDown, FileText, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useTemplates } from '../hooks/useTemplates';
import type { TemplateMetadata } from '@/types/template.types';

interface TemplateSelectorProps {
  selectedTemplate?: TemplateMetadata | null;
  onSelectTemplate: (template: TemplateMetadata | null) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

export function TemplateSelector({
  selectedTemplate,
  onSelectTemplate,
  placeholder = 'Select a template...',
  disabled = false,
  className,
}: TemplateSelectorProps) {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const { templates, isLoading, error } = useTemplates();

  // Filter templates based on search
  const filteredTemplates = templates.filter((template) => {
    const query = searchQuery.toLowerCase();
    return (
      template.title.toLowerCase().includes(query) ||
      template.description?.toLowerCase().includes(query) ||
      template.category?.toLowerCase().includes(query) ||
      template.tags?.some((tag) => tag.toLowerCase().includes(query))
    );
  });

  // Group templates by category
  const templatesByCategory = filteredTemplates.reduce(
    (acc, template) => {
      const category = template.category || 'Other';
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(template);
      return acc;
    },
    {} as Record<string, TemplateMetadata[]>
  );

  const handleTemplateSelect = (template: TemplateMetadata) => {
    onSelectTemplate(template);
    setOpen(false);
    setSearchQuery('');
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    onSelectTemplate(null);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          disabled={disabled}
          className={`justify-between min-w-0 ${className}`}
        >
          <div className="flex items-center gap-2 min-w-0">
            <FileText className="h-4 w-4 shrink-0" />
            <span className="truncate">
              {selectedTemplate ? selectedTemplate.title : placeholder}
            </span>
          </div>
          <div className="flex items-center gap-1 shrink-0">
            {selectedTemplate && (
              <X
                className="h-4 w-4 hover:bg-accent hover:text-accent-foreground rounded-sm p-0.5"
                onClick={handleClear}
              />
            )}
            <ChevronDown className="h-4 w-4" />
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0" align="start">
        <div className="border-b p-3">
          <Input
            placeholder="Search templates..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            autoFocus
          />
        </div>

        <ScrollArea className="h-80">
          <div className="p-1">
            {isLoading ? (
              <div className="p-3 text-center text-sm text-muted-foreground">
                Loading templates...
              </div>
            ) : error ? (
              <div className="p-3 text-center text-sm text-red-500">Failed to load templates</div>
            ) : filteredTemplates.length === 0 ? (
              <div className="p-3 text-center text-sm text-muted-foreground">
                {searchQuery ? 'No templates found' : 'No templates available'}
              </div>
            ) : (
              Object.entries(templatesByCategory)
                .sort(([a], [b]) => a.localeCompare(b))
                .map(([category, categoryTemplates]) => (
                  <div key={category} className="mb-2">
                    <div className="px-2 py-1 text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                      {category}
                    </div>
                    {categoryTemplates.map((template) => (
                      <button
                        key={template.id}
                        className={`w-full text-left p-2 rounded-sm hover:bg-accent hover:text-accent-foreground transition-colors ${
                          selectedTemplate?.id === template.id ? 'bg-accent' : ''
                        }`}
                        onClick={() => handleTemplateSelect(template)}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div className="min-w-0 flex-1">
                            <div className="font-medium text-sm truncate">{template.title}</div>
                            {template.description && (
                              <div className="text-xs text-muted-foreground mt-1 line-clamp-2">
                                {template.description}
                              </div>
                            )}
                            {template.tags && template.tags.length > 0 && (
                              <div className="flex flex-wrap gap-1 mt-2">
                                {template.tags.slice(0, 2).map((tag) => (
                                  <Badge
                                    key={tag}
                                    variant="secondary"
                                    className="text-xs px-1 py-0"
                                  >
                                    {tag}
                                  </Badge>
                                ))}
                                {template.tags.length > 2 && (
                                  <Badge variant="secondary" className="text-xs px-1 py-0">
                                    +{template.tags.length - 2}
                                  </Badge>
                                )}
                              </div>
                            )}
                          </div>
                          <div className="text-xs text-muted-foreground shrink-0">
                            {template.variableCount} vars
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                ))
            )}
          </div>
        </ScrollArea>
      </PopoverContent>
    </Popover>
  );
}
