'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { X, Maximize2, Minimize2, Edit, Save, XCircle } from 'lucide-react';
import { useNotesSidePanelStore } from '../../stores/notesSidePanelStore';

interface NoteHeaderProps {
  notePath: string;
  fileName: string;
  isEditing: boolean;
  onClose: () => void;
  onEdit: () => void;
  onSave: () => void;
  onCancel: () => void;
}

export function NoteHeader({
  notePath,
  fileName,
  isEditing,
  onClose,
  onEdit,
  onSave,
  onCancel,
}: NoteHeaderProps): React.JSX.Element {
  const { isFullscreen, toggleFullscreen } = useNotesSidePanelStore();

  return (
    <div className="p-6 pb-4 border-b">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Badge variant="secondary" className="font-mono text-xs">
            {fileName}
          </Badge>
          <span className="text-sm text-muted-foreground truncate">{notePath}</span>
        </div>
        <div className="flex items-center gap-1">
          {isEditing ? (
            <>
              <Button
                variant="ghost"
                size="icon"
                onClick={onSave}
                className="h-6 w-6"
                title="Save changes"
              >
                <Save className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={onCancel}
                className="h-6 w-6"
                title="Cancel editing"
              >
                <XCircle className="h-4 w-4" />
              </Button>
            </>
          ) : (
            <Button
              variant="ghost"
              size="icon"
              onClick={onEdit}
              className="h-6 w-6"
              title="Edit note"
            >
              <Edit className="h-4 w-4" />
            </Button>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleFullscreen}
            className="h-6 w-6"
            title={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
          >
            {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
          </Button>
          <Button variant="ghost" size="icon" onClick={onClose} className="h-6 w-6">
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
