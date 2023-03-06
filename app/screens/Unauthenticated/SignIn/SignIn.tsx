import { Text, View } from 'react-native'
import React from 'react'
import { styles } from './styles'
import useTheme from '../../../../src/hooks/useTheme'

const SignIn = (): JSX.Element => {
  const [theme] = useTheme()
  const bgColor = theme === 'light' ? '#f0f0f0' : '#0f0f0f'
  console.log(theme, bgColor)

  return (
    <View style={[styles.container, { backgroundColor: `${bgColor}` }]}>
      <Text>Implement Sign In later</Text>
    </View>
  )
}

export default SignIn
