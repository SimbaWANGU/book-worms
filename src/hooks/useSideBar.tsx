import { useStore } from '../zustand/store'

const useSideBar = (): [boolean, (sidebar: boolean) => void] => {
  const [showSidebar, setShowSidebar] = useStore((state) => [state.ShowSideBar, state.setSideBar])

  return [showSidebar, setShowSidebar]
}

export default useSideBar
