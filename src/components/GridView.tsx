import React from 'react'
import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import { useFonts } from 'expo-font'
import { Family1, Family2, Family3 } from '../constants/fonts'
import { LinearGradient } from 'expo-linear-gradient'
import useButtonPress from '../hooks/useButtonPress'
import { AntDesign } from '@expo/vector-icons'
import type { gridViewProps } from '../interfaces/Interface'

const GridView: React.FC<gridViewProps> = ({ src, subHeading, gradientColor }): JSX.Element => {
  const [isPressed, setIsPressed] = useButtonPress(false)
  const [loaded, error] = useFonts({
    family1: Family1,
    family2: Family2,
    family3: Family3
  })

  if (!loaded || (error != null)) {
    return <></>
  }

  return (
    <View style={styles.gridView}>
      <LinearGradient
        colors={['#0f0f0f', gradientColor, '#f0f0f0']}
        locations={[0, 0.65, 1]}
        style={styles.gradient}
      >
        <Image source={src} style={styles.images} />
        <Text style={[styles.text1, { color: '#f0f0f0' }]}>{subHeading}</Text>
        <Pressable
          onPress={() => { console.log('lmao') }}
          onPressIn={() => { setIsPressed(true) }}
          onPressOut={() => { setIsPressed(false) }}
          style={[styles.button, isPressed && styles.pressablePressed]}
        >
          <View style={styles.buttonContent}>
            <AntDesign name="arrowright" size={24} color="black" />
          </View>
        </Pressable>
      </LinearGradient>
    </View>
  )
}

export default GridView

const styles = StyleSheet.create({
  gridView: {
    width: '45%'
  },
  gradient: {
    padding: 10,
    borderRadius: 20,
    borderBottomRightRadius: 100,
    height: '100%',
    width: '100%'
  },
  images: {
    width: 100,
    height: 100,
    position: 'relative',
    alignSelf: 'center',
    top: -40
  },
  text1: {
    top: -30,
    fontFamily: 'family1',
    fontSize: 18
  },
  button: {
    alignSelf: 'flex-end',
    top: 80,
    marginTop: 20,
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 50,
    position: 'absolute'
  },
  pressablePressed: {
    backgroundColor: '#1565C0'
  },
  buttonContent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
})
