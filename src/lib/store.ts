
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface PortfolioStore {
  theme: 'light' | 'dark'
  currentSection: string
  isMenuOpen: boolean
  setTheme: (theme: 'light' | 'dark') => void
  setCurrentSection: (section: string) => void
  toggleMenu: () => void
  closeMenu: () => void
}

export const usePortfolioStore = create<PortfolioStore>()(
  persist(
    (set) => ({
      theme: 'dark',
      currentSection: 'home',
      isMenuOpen: false,
      setTheme: (theme) => set({ theme }),
      setCurrentSection: (section) => set({ currentSection: section }),
      toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
      closeMenu: () => set({ isMenuOpen: false }),
    }),
    {
      name: 'portfolio-storage',
    }
  )
)

