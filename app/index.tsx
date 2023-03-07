import React, { useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import Onboarding from './screens/Unauthenticated/Onboarding/Onboarding'
import Home from './screens/Authenticated/Home/Home'
import { Appearance, useColorScheme } from 'react-native'
import useTheme from '../src/hooks/useTheme'

const index = (): JSX.Element => {
  const isAuthenticated = false
  const [, setTheme] = useTheme()
  const colorScheme = useColorScheme()

  useEffect(() => {
    setTheme(colorScheme as string)

    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setTheme(colorScheme as string)
    })
    return () => {
      subscription.remove()
    }
  }, [])

  return (
    <>
      {(isAuthenticated)
        ? <Home />
        : <Onboarding />
      }
      <StatusBar style="auto" />
    </>
  )
}

export default index
