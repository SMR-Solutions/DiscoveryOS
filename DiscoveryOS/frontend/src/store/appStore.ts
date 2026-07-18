import { create } from 'zustand'

/**
 * Global application state
 * Extend this interface as you add more state
 */
interface AppState {
  // Add global state properties here
  isDarkMode: boolean
  setDarkMode: (isDarkMode: boolean) => void
}

/**
 * Global store using Zustand
 * This is an empty store ready for extension as features are built
 */
export const useAppStore = create<AppState>((set) => ({
  isDarkMode: false,
  setDarkMode: (isDarkMode: boolean) => set({ isDarkMode }),
}))
