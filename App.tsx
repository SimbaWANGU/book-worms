import React from 'react'
import { View, StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import Onboarding from './src/screens/Onboarding/Onboarding'

const App = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Onboarding />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App
