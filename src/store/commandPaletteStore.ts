import { create } from 'zustand';
import type { CommandPaletteInitialState } from '@/components/command-palette/CommandPalette';

interface CommandPaletteStore {
   isOpen: boolean;
   initialState?: CommandPaletteInitialState;
   openCommandPalette: (initialState?: CommandPaletteInitialState) => void;
   closeCommandPalette: () => void;
   setInitialState: (initialState?: CommandPaletteInitialState) => void;
}

export const useCommandPaletteStore = create<CommandPaletteStore>((set) => ({
   isOpen: false,
   initialState: undefined,

   openCommandPalette: (initialState?: CommandPaletteInitialState) =>
      set({ isOpen: true, initialState }),

   closeCommandPalette: () => set({ isOpen: false, initialState: undefined }),

   setInitialState: (initialState?: CommandPaletteInitialState) => set({ initialState }),
}));
