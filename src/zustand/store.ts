import { create } from 'zustand'

interface Store {
  Theme: string
  setTheme: (theme: string) => void
  ShowSideBar: boolean
  setSideBar: (sidebar: boolean) => void
}

const useStore = create<Store>((set) => ({
  Theme: '',
  setTheme: (theme) => { set({ Theme: theme }) },
  ShowSideBar: false,
  setSideBar: (sidebar) => { set({ ShowSideBar: sidebar }) }
}))

export { useStore }
