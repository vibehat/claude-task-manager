import React from 'react';
import type { NoteFileSummary } from '../../types/note.types';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface NoteListProps {
  files: NoteFileSummary[];
  onOpen: (path: string) => void;
}

export function NoteList({ files, onOpen }: NoteListProps): React.JSX.Element {
  if (files.length === 0) {
    return <div className="text-sm text-muted-foreground">No notes found.</div>;
  }

  return (
    <div className="space-y-2">
      {files.map((f) => (
        <div key={f.path} className="rounded-md border p-3">
          <div className="flex items-center justify-between">
            <div className="font-medium truncate">{f.title || f.name}</div>
            <div className="space-x-2">
              {f.tags?.slice(0, 3).map((t) => (
                <Badge key={t} variant="secondary">
                  {t}
                </Badge>
              ))}
            </div>
          </div>
          <div className="text-xs text-muted-foreground mt-1 truncate">
            {f.directory} • {new Date(f.lastModified).toLocaleString()}
          </div>
          {f.snippet && <div className="text-sm mt-2 line-clamp-2">{f.snippet}</div>}
          <div className="mt-3">
            <Button size="sm" variant="outline" onClick={() => onOpen(f.path)}>
              Read
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
