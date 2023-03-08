import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import useButtonPress from '../hooks/useButtonPress'
import useSideBar from '../hooks/useSideBar'

const SideBar = (): JSX.Element => {
  const [isButtonPressed, setButtonPressed] = useButtonPress(false)
  const [, setSideBar] = useSideBar()

  return (
    <View style={styles.sidebar}>
      <Pressable
        onPress={() => { setSideBar(false) }}
        onPressIn={() => { setButtonPressed(true) }}
        onPressOut={() => { setButtonPressed(false) }}
        style={[styles.button, isButtonPressed ? styles.pressablePressed : null]}
      >
        <AntDesign name="arrowleft" size={24} color="black" />
      </Pressable>
      <View></View>
    </View>
  )
}

export default SideBar

const styles = StyleSheet.create({
  sidebar: {
    height: '100%',
    width: '60%',
    position: 'absolute',
    backgroundColor: 'blue',
    zIndex: 999,
    opacity: 0.8
  },
  button: {
    alignSelf: 'flex-end',
    margin: 20,
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 50
  },
  pressablePressed: {
    backgroundColor: '#1565C0'
  },
})
