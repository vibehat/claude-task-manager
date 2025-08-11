import React from 'react';
import type { NoteFileSummary } from '../../types/note.types';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { getNoteTypeIcon, formatRelativeTime, formatFileDirectory } from '../../utils/noteHelpers';

interface CategorySectionProps {
  title: string;
  items: NoteFileSummary[];
  autoDetected?: boolean;
  needsAttention?: boolean;
  onOpen: (path: string) => void;
}

export function CategorySection({
  title,
  items,
  autoDetected,
  needsAttention,
  onOpen,
}: CategorySectionProps): React.JSX.Element {
  if (items.length === 0) return <></>;
  return (
    <div className="mb-6">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-sm font-medium flex items-center gap-1.5">
          <span>🏷️</span>
          <span>{title}</span>
        </span>
        {autoDetected && (
          <Badge variant="secondary" className="text-xs">
            📍 Auto-detected
          </Badge>
        )}
        {needsAttention && (
          <Badge variant="destructive" className="text-xs">
            🎯 Needs attention
          </Badge>
        )}
      </div>
      <div className="pl-6 space-y-3">
        {items.map((n) => {
          const icon = getNoteTypeIcon(n.name, n.snippet);
          const formattedTime = formatRelativeTime(n.lastModified);
          const formattedDir = formatFileDirectory(n.directory);

          return (
            <div key={n.path} className="group">
              <div className="flex items-start gap-3">
                <span className="text-lg mt-0.5">{icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3">
                    <div className="font-medium truncate flex-1">{n.title || n.name}</div>
                    <div className="text-xs text-muted-foreground flex items-center gap-2">
                      <span>📂 {formattedDir}</span>
                      <span>•</span>
                      <span>{formattedTime}</span>
                    </div>
                  </div>
                  {n.snippet && (
                    <div className="text-sm text-muted-foreground mt-1 line-clamp-2">
                      {n.snippet}
                    </div>
                  )}
                  <div className="text-xs text-muted-foreground mt-1">📍 /{n.path}</div>
                  {needsAttention && !n.category.name && (
                    <div className="flex items-center gap-2 mt-2">
                      <Button size="sm" variant="outline" className="h-7 text-xs">
                        + Add Category
                      </Button>
                      <Button size="sm" variant="outline" className="h-7 text-xs">
                        🏷️ Suggest
                      </Button>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex items-center justify-between mt-2 pl-9">
                <div className="flex items-center gap-1.5">
                  {n.tags?.slice(0, 4).map((t) => (
                    <Badge key={t} variant="outline" className="text-xs h-5">
                      #{t}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button
                    size="sm"
                    variant="ghost"
                    className="h-7 text-xs"
                    onClick={() => onOpen(n.path)}
                  >
                    📖 Read
                  </Button>
                  <a href={`/workspace/docs/${encodeURIComponent(n.path)}`}>
                    <Button size="sm" variant="ghost" className="h-7 text-xs">
                      ✏️ Edit
                    </Button>
                  </a>
                  <Button size="sm" variant="ghost" className="h-7 text-xs">
                    🔗 Link
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
