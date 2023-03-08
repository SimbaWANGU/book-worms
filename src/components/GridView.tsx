import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { useFonts } from 'expo-font'
import { Family1, Family2, Family3 } from '../constants/fonts'
import { LinearGradient } from 'expo-linear-gradient'
import type { gridViewProps } from '../interfaces/Interface'

const GridView: React.FC<gridViewProps> = ({ src, subHeading, gradientColor }): JSX.Element => {
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
      </LinearGradient>
    </View>
  )
}

export default GridView

const styles = StyleSheet.create({
  gridView: {
    width: '45%',
    padding: 10
  },
  gradient: {
    borderRadius: 20,
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
    top: -20,
    fontFamily: 'family1',
    fontSize: 18,
    textAlign: 'center'
  }
})
