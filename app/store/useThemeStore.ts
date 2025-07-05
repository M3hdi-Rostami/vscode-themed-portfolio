import { create } from "zustand";

interface ThemeSelectorStore {
  isVisible: boolean;
  handleShow: () => void;
  handleHide: () => void;
  handleToggle: () => void;
}

export const useThemeSelectorStore = create<ThemeSelectorStore>((set) => ({
  isVisible: false,
  handleShow: () => set({ isVisible: true }),
  handleHide: () => set({ isVisible: false }),
  handleToggle: () => set((state) => ({ isVisible: !state.isVisible })),
}));
