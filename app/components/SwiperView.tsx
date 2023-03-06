import React, { useState } from 'react'
import { View, Text, ImageBackground, StyleSheet, Pressable } from 'react-native'
import { useFonts } from 'expo-font'
import { useRouter } from 'expo-router'
import { Family1, Family2, Family3 } from '../constants/fonts'
import type { SwiperViewProps } from '../interfaces/Interface'

const SwiperView: React.FC<SwiperViewProps> = ({ src, textArray }): JSX.Element => {
  const router = useRouter()
  const [isPressed, setIsPressed] = useState(false)
  const [loaded, error] = useFonts({
    family1: Family1,
    family2: Family2,
    family3: Family3
  })

  const handlePressIn = (): void => {
    setIsPressed(true)
  }

  const handlePressOut = (): void => {
    setIsPressed(false)
  }

  const handleSignIn = (): void => {
    router.push('/screens/SignIn/SignIn')
  }

  if (!loaded || (error != null) || textArray === undefined) {
    return <></>
  }

  return (
    <ImageBackground
      source={src}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Text style={[styles.text, styles.text1]}>{textArray[0]}</Text>
        <Text style={[styles.text, styles.text2]}>{textArray[1]}</Text>
        <Text style={[styles.text, styles.text3]}>{textArray[2]}</Text>
        <Pressable
          onPress={handleSignIn}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          style={[styles.button, isPressed && styles.pressablePressed]}>
            <Text style={styles.buttonText}>Sign In</Text>
        </Pressable>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'contain'
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'flex-end',
    paddingBottom: 200,
    paddingLeft: 30
  },
  text: {
    textAlign: 'left',
    textAlignVertical: 'center'
  },
  text1: {
    fontSize: 45,
    color: '#f0f0f0',
    fontFamily: 'family1',
    fontWeight: 'normal'
  },
  text2: {
    fontSize: 100,
    color: '#f0f0f0',
    fontFamily: 'family3',
    fontWeight: '100'
  },
  text3: {
    marginTop: 100,
    fontSize: 30,
    color: '#f0f0f0',
    fontFamily: 'family1',
    fontWeight: '100'
  },
  button: {
    alignSelf: 'flex-start',
    marginTop: 20,
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 50,
    width: 200
  },
  pressablePressed: {
    backgroundColor: '#1565C0'
  },
  buttonText: {
    lineHeight: 25,
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'family1'
  }
})

export default SwiperView
