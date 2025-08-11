'use client';

import React, { useState } from 'react';
import { Search, Plus, FileText, Tag, Calendar, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useTemplates } from '../hooks/useTemplates';
import type { TemplateMetadata } from '@/types/template.types';

interface TemplateBrowserProps {
  onSelectTemplate?: (template: TemplateMetadata) => void;
  onCreateTemplate?: () => void;
  selectionMode?: boolean;
}

export function TemplateBrowser({
  onSelectTemplate,
  onCreateTemplate,
  selectionMode = false,
}: TemplateBrowserProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const { templates, categories, isLoading, error } = useTemplates(selectedCategory || undefined);

  // Filter templates based on search query
  const filteredTemplates = templates.filter((template) => {
    const searchLower = searchQuery.toLowerCase();
    return (
      template.title.toLowerCase().includes(searchLower) ||
      template.description?.toLowerCase().includes(searchLower) ||
      template.tags?.some((tag) => tag.toLowerCase().includes(searchLower))
    );
  });

  const handleTemplateClick = (template: TemplateMetadata) => {
    if (onSelectTemplate) {
      onSelectTemplate(template);
    }
  };

  if (error) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-center">
          <p className="text-red-500 mb-2">Failed to load templates</p>
          <p className="text-sm text-gray-600">{error.message}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Templates</h2>
          <p className="text-muted-foreground">
            Choose from existing templates or create a new one
          </p>
        </div>
        {onCreateTemplate && (
          <Button onClick={onCreateTemplate} className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Create Template
          </Button>
        )}
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search templates..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        <Select
          value={selectedCategory || 'all'}
          onValueChange={(value) => setSelectedCategory(value === 'all' ? '' : value)}
        >
          <SelectTrigger className="w-full sm:w-48">
            <Filter className="h-4 w-4 mr-2" />
            <SelectValue placeholder="All Categories" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Template Grid */}
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <Card key={i} className="animate-pulse">
              <CardHeader>
                <div className="h-4 bg-gray-200 rounded w-3/4" />
                <div className="h-3 bg-gray-200 rounded w-full" />
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="h-3 bg-gray-200 rounded" />
                  <div className="h-3 bg-gray-200 rounded w-2/3" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : filteredTemplates.length === 0 ? (
        <div className="text-center py-12">
          <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            {searchQuery || selectedCategory ? 'No templates found' : 'No templates yet'}
          </h3>
          <p className="text-gray-600 mb-6">
            {searchQuery || selectedCategory
              ? 'Try adjusting your search or filters'
              : 'Create your first template to get started'}
          </p>
          {onCreateTemplate && (
            <Button onClick={onCreateTemplate} variant="outline">
              <Plus className="h-4 w-4 mr-2" />
              Create Template
            </Button>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredTemplates.map((template) => (
            <Card
              key={template.id}
              className={`transition-colors hover:bg-accent/50 ${
                selectionMode ? 'cursor-pointer' : ''
              }`}
              onClick={() => handleTemplateClick(template)}
            >
              <CardHeader className="pb-2">
                <CardTitle className="text-base line-clamp-1">{template.title}</CardTitle>
                {template.description && (
                  <CardDescription className="line-clamp-2">{template.description}</CardDescription>
                )}
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Tag className="h-3 w-3" />
                    {template.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {new Date(template.updatedAt).toLocaleDateString()}
                  </span>
                </div>

                {template.tags && template.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1">
                    {template.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {template.tags.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{template.tags.length - 3}
                      </Badge>
                    )}
                  </div>
                )}

                <div className="text-xs text-muted-foreground">
                  {template.variableCount} variable{template.variableCount !== 1 ? 's' : ''}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
