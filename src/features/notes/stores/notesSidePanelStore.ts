import { create } from 'zustand';

export interface NoteFile {
  path: string;
  name: string;
  directory: string;
  size: number;
  lastModified: string;
  title?: string;
  snippet?: string;
  tags?: string[];
  category: {
    type: 'auto' | 'manual' | 'uncategorized';
    name?: string;
  };
}

interface NotesSidePanelStore {
  isOpen: boolean;
  notePath: string | null;
  noteContent: string;
  panelWidth: number;
  isFullscreen: boolean;
  openPanel: (notePath: string, content?: string) => void;
  closePanel: () => void;
  setNoteContent: (content: string) => void;
  toggleFullscreen: () => void;
  setFullscreen: (fullscreen: boolean) => void;
}

export const useNotesSidePanelStore = create<NotesSidePanelStore>((set) => ({
  isOpen: false,
  notePath: null,
  noteContent: '',
  panelWidth: 600,
  isFullscreen: false,
  openPanel: (notePath, content = '') => {
    set({ isOpen: true, notePath, noteContent: content });
  },
  closePanel: () => set({ isOpen: false, notePath: null, noteContent: '', isFullscreen: false }),
  setNoteContent: (content) => set({ noteContent: content }),
  toggleFullscreen: () => set((state) => ({ isFullscreen: !state.isFullscreen })),
  setFullscreen: (fullscreen) => set({ isFullscreen: fullscreen }),
}));
