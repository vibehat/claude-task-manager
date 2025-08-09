import { create } from 'zustand';

export interface AgentFile {
  path: string;
  name?: string;
  description?: string;
  tags?: string[];
  lastModified: string;
  model?: string;
  role?: string;
}

interface AgentsSidePanelStore {
  isOpen: boolean;
  agentPath: string | null;
  agentContent: string;
  panelWidth: number;
  isFullscreen: boolean;
  openPanel: (agentPath: string, content?: string) => void;
  closePanel: () => void;
  setAgentContent: (content: string) => void;
  toggleFullscreen: () => void;
  setFullscreen: (fullscreen: boolean) => void;
}

export const useAgentsSidePanelStore = create<AgentsSidePanelStore>((set) => ({
  isOpen: false,
  agentPath: null,
  agentContent: '',
  panelWidth: 600,
  isFullscreen: false,
  openPanel: (agentPath, content = '') => {
    set({ isOpen: true, agentPath, agentContent: content });
  },
  closePanel: () => set({ isOpen: false, agentPath: null, agentContent: '', isFullscreen: false }),
  setAgentContent: (content) => set({ agentContent: content }),
  toggleFullscreen: () => set((state) => ({ isFullscreen: !state.isFullscreen })),
  setFullscreen: (fullscreen) => set({ isFullscreen: fullscreen }),
}));
