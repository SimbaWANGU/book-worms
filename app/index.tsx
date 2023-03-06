import React from 'react'
import { StatusBar } from 'expo-status-bar'
import Onboarding from './screens/Onboarding/Onboarding'

const index = (): JSX.Element => {
  return (
    <>
      <Onboarding />
      <StatusBar style="auto" />
    </>
  )
}

export default index
