import { create } from 'zustand';

interface UIState {
  isMobileMenuOpen: boolean;
  isChatOpen: boolean;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;
  toggleChat: () => void;
  closeChat: () => void;
}

const useUIStore = create<UIState>((set) => ({
  isMobileMenuOpen: false,
  isChatOpen: false,
  toggleMobileMenu: () => set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
  closeMobileMenu: () => set({ isMobileMenuOpen: false }),
  toggleChat: () => set((state) => ({ isChatOpen: !state.isChatOpen })),
  closeChat: () => set({ isChatOpen: false }),
}));

export default useUIStore;
