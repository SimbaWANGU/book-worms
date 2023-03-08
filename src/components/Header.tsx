import React from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'
import useButtonPress from '../hooks/useButtonPress'
import useSideBar from '../hooks/useSideBar'

const Header = (): JSX.Element => {
  const [isMenuButtonPressed, setMenuButton] = useButtonPress(false)
  const [isProfileButtonPressed, setProfileButton] = useButtonPress(false)
  const [, setSideBar] = useSideBar()

  const handlePress = (): void => {
    console.log('lmao')
  }

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => { setSideBar(true) }}
        onPressIn={() => { setMenuButton(true) }}
        onPressOut={() => { setMenuButton(false) }}
        disabled={false}
        style={[styles.button, isMenuButtonPressed ? styles.pressablePressed : null]}
      >
        <AntDesign name="menuunfold" size={18} color="black" style={styles.icon} />
      </Pressable>
      <Pressable
        onPress={handlePress}
        onPressIn={() => { setProfileButton(true) }}
        onPressOut={() => { setProfileButton(false) }}
        disabled={false}
        style={[styles.button, isProfileButtonPressed ? styles.pressablePressed : null]}
      >
        <MaterialCommunityIcons name="face-man-profile" size={18} color="black" style={styles.icon} />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    alignSelf: 'flex-start',
    marginTop: 20,
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 50
  },
  pressablePressed: {
    backgroundColor: '#1565C0'
  },
  icon: {
    top: 0,
    left: 0
  },
  sidebar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#b4b4b4',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Header
