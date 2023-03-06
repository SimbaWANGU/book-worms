import { create } from 'zustand'

interface Store {
  Theme: string
  setTheme: (theme: string) => void
}

const useStore = create<Store>((set) => ({
  Theme: '',
  setTheme: (theme) => { set({ Theme: theme }) }
}))

export { useStore }
