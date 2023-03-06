import React from 'react'
import { StatusBar } from 'expo-status-bar'
import Onboarding from './screens/Unauthenticated/Onboarding/Onboarding'
import Home from './screens/Authenticated/Home/Home'

const index = (): JSX.Element => {
  const isAuthenticated = false
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
