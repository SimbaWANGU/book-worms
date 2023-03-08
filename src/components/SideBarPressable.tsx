import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import useButtonPress from '../hooks/useButtonPress'
import { useRouter } from 'expo-router'
import useSideBar from '../hooks/useSideBar'

interface sideBarButton {
  to: string
  icon: any
}

const SideBarPressable: React.FC<sideBarButton> = ({ to, icon }): JSX.Element => {
  const router = useRouter()
  const [isPressed, setIsPressed] = useButtonPress(false)
  const [, setSideBar] = useSideBar()

  const handlePress = (to: string): void => {
    router.push(`/screens/Authenticated/${to}/${to}`)
    setSideBar(false)
  }

  return (
    <Pressable
      onPress={() => { handlePress(to) }}
      onPressIn={() => { setIsPressed(true) }}
      onPressOut={() => { setIsPressed(false) }}
      style={[styles.button, isPressed && styles.pressablePressed]}
    >
      <View style={styles.buttonContent}>
        <AntDesign name={icon} size={24} color="black" />
        <Text style={[styles.buttonText]}>{to}</Text>
      </View>
    </Pressable>
  )
}

export default SideBarPressable

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    marginTop: 20,
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 50,
    width: 200
  },
  pressablePressed: {
    backgroundColor: '#1565C0'
  },
  buttonContent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  buttonText: {
    lineHeight: 25,
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'family1'
  }
})
