import { useStore } from '../zustand/store'

const useTheme = (): [string, ((theme: string) => void)] => {
  const [theme, setTheme] = useStore((state) => [state.Theme, state.setTheme])

  return [theme, setTheme]
}

export default useTheme
