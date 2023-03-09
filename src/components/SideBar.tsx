import React from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import useButtonPress from '../hooks/useButtonPress'
import useSideBar from '../hooks/useSideBar'
import SideBarPressable from './SideBarPressable'

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
        <AntDesign name="menufold" size={18} color="black" />
      </Pressable>
      <View style={styles.navLinks}>
        <SideBarPressable to={'Home'} icon={'home'} />
        <SideBarPressable to={'Explore'} icon={'search1'} />
      </View>
    </View>
  )
}

export default SideBar

const styles = StyleSheet.create({
  sidebar: {
    height: '100%',
    width: '70%',
    position: 'absolute',
    backgroundColor: 'blue',
    zIndex: 999,
    opacity: 0.9
  },
  button: {
    alignSelf: 'flex-end',
    margin: 20,
    marginTop: 50,
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 50
  },
  pressablePressed: {
    backgroundColor: '#1565C0'
  },
  navLinks: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    top: '25%'
  }
})
