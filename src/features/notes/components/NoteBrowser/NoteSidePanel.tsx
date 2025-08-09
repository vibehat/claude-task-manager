'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import dynamic from 'next/dynamic';
import { useNotesSidePanelStore } from '../../stores/notesSidePanelStore';
import { fetchNoteContent, saveNoteContent } from '../../services/docsClient';
import { NoteHeader } from './NoteHeader';
import { NoteEditor } from './NoteEditor';
import { NoteInfo } from './NoteInfo';
import { Separator } from '@/components/ui/separator';

const MDEditor = dynamic(() => import('@uiw/react-md-editor').then((m) => m.default), {
  ssr: false,
});

export function NoteSidePanel(): React.JSX.Element {
  const {
    isOpen,
    notePath,
    noteContent,
    panelWidth,
    isFullscreen,
    closePanel,
    setFullscreen,
    setNoteContent,
  } = useNotesSidePanelStore();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState('');

  // Load note content when panel opens
  useEffect(() => {
    if (isOpen && notePath && !noteContent) {
      loadNoteContent();
    }
  }, [isOpen, notePath, noteContent]);

  // Keyboard shortcut to exit fullscreen
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isFullscreen && isOpen) {
        setFullscreen(false);
      }
    };

    if (isOpen && isFullscreen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, isFullscreen, setFullscreen]);

  const loadNoteContent = async () => {
    if (!notePath) return;

    setLoading(true);
    setError(null);

    try {
      const result = await fetchNoteContent(notePath);
      setNoteContent(result.content);
    } catch (err) {
      setError('Failed to load note content');
      console.error('Error loading note content:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
    setEditContent(noteContent);
  };

  const handleSave = async () => {
    if (!notePath) return;

    setLoading(true);
    setError(null);

    try {
      await saveNoteContent(notePath, editContent);
      setNoteContent(editContent);
      setIsEditing(false);
    } catch (err) {
      setError('Failed to save note');
      console.error('Error saving note:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditContent('');
  };

  const getFileName = (path: string): string => {
    return path.split('/').pop() || path;
  };

  const getFileInfo = (path: string) => {
    return {
      name: getFileName(path),
      path: path,
      directory: path.substring(0, path.lastIndexOf('/')) || '/',
      size: noteContent.length,
      lastModified: new Date().toISOString(),
      category: {
        type: 'auto' as const,
        name: 'Documentation',
      },
    };
  };

  if (!isOpen || !notePath) {
    return <></>;
  }

  const fileInfo = getFileInfo(notePath);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: isFullscreen ? 0 : panelWidth }}
        animate={{ x: 0 }}
        exit={{ x: isFullscreen ? 0 : panelWidth }}
        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
        className={`fixed top-0 h-full bg-background shadow-lg z-50 overflow-hidden ${
          isFullscreen ? 'left-0 right-0 w-full border-none' : 'right-0 border-l'
        }`}
        style={{ width: isFullscreen ? '100vw' : panelWidth }}
      >
        <NoteHeader
          notePath={notePath}
          fileName={fileInfo.name}
          isEditing={isEditing}
          onClose={closePanel}
          onEdit={handleEdit}
          onSave={handleSave}
          onCancel={handleCancel}
        />

        {isFullscreen ? (
          /* Fullscreen 2-column layout */
          <div className="p-8 h-full">
            <div className="grid grid-cols-3 gap-8" style={{ height: 'calc(100vh - 120px)' }}>
              {/* Left Column - Note Content (2/3 width) */}
              <div className="col-span-2 flex flex-col overflow-hidden">
                <div className="flex-1 overflow-y-auto pr-4">
                  {loading ? (
                    <div className="flex items-center justify-center h-32">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
                    </div>
                  ) : error ? (
                    <div className="text-center text-red-500 p-4">{error}</div>
                  ) : isEditing ? (
                    <NoteEditor content={editContent} onChange={setEditContent} height="100%" />
                  ) : (
                    <MDEditor value={noteContent} preview="preview" hideToolbar height="100%" />
                  )}
                </div>
              </div>

              {/* Right Column - Note Info (1/3 width) */}
              <div className="col-span-1 overflow-y-auto pl-4 border-l">
                <NoteInfo file={fileInfo} />
              </div>
            </div>
          </div>
        ) : (
          /* Normal single column layout */
          <div className="p-6 h-full flex flex-col">
            <div className="flex-1 overflow-y-auto space-y-6">
              {/* Note Content */}
              <div className="flex-1">
                {loading ? (
                  <div className="flex items-center justify-center h-32">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
                  </div>
                ) : error ? (
                  <div className="text-center text-red-500 p-4">{error}</div>
                ) : isEditing ? (
                  <NoteEditor content={editContent} onChange={setEditContent} height={400} />
                ) : (
                  <MDEditor value={noteContent} preview="preview" hideToolbar height={400} />
                )}
              </div>

              <Separator />

              {/* Note Info */}
              <NoteInfo file={fileInfo} />
            </div>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
