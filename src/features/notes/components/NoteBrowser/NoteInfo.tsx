'use client';

import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { FileText, Calendar, Folder, Hash } from 'lucide-react';
import type { NoteFile } from '../../stores/notesSidePanelStore';

interface NoteInfoProps {
  file: NoteFile;
}

export function NoteInfo({ file }: NoteInfoProps): React.JSX.Element {
  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const formatDate = (dateString: string): string => {
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });
    } catch {
      return 'Unknown';
    }
  };

  return (
    <ScrollArea className="h-full">
      <div className="space-y-6">
        {/* File Details */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
            File Details
          </h3>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <FileText className="h-4 w-4 text-muted-foreground" />
              <span className="font-medium">Name:</span>
              <span>{file.name}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Folder className="h-4 w-4 text-muted-foreground" />
              <span className="font-medium">Path:</span>
              <span className="font-mono text-xs break-all">{file.path}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="font-medium">Size:</span>
              <span>{formatFileSize(file.size)}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span className="font-medium">Modified:</span>
              <span>{formatDate(file.lastModified)}</span>
            </div>
          </div>
        </div>

        <Separator />

        {/* Category */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
            Category
          </h3>
          <div className="flex items-center gap-2">
            <Badge
              variant={file.category.type === 'auto' ? 'secondary' : 'outline'}
              className="text-xs"
            >
              {file.category.name || 'Uncategorized'}
            </Badge>
            <span className="text-xs text-muted-foreground">({file.category.type})</span>
          </div>
        </div>

        {/* Tags */}
        {file.tags && file.tags.length > 0 && (
          <>
            <Separator />
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide flex items-center gap-2">
                <Hash className="h-4 w-4" />
                Tags
              </h3>
              <div className="flex flex-wrap gap-1">
                {file.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Note Content Info */}
        {(file.title || file.snippet) && (
          <>
            <Separator />
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                Content
              </h3>
              {file.title && (
                <div className="space-y-1">
                  <span className="text-sm font-medium">Title:</span>
                  <p className="text-sm text-muted-foreground">{file.title}</p>
                </div>
              )}
              {file.snippet && (
                <div className="space-y-1">
                  <span className="text-sm font-medium">Preview:</span>
                  <p className="text-sm text-muted-foreground line-clamp-3">{file.snippet}</p>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </ScrollArea>
  );
}
