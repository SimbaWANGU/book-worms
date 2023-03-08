import React from 'react'
import { Pressable, Text, View } from 'react-native'
import Header from '../../../../src/components/Header'
import { styles } from './styles'
import { AntDesign } from '@expo/vector-icons'
import { useFonts } from 'expo-font'
import useButtonPress from '../../../../src/hooks/useButtonPress'
import { Family1, Family2, Family3 } from '../../../../src/constants/fonts'
import GridView from '../../../../src/components/GridView'
import { posp } from '../../../../src/constants/images'
import SideBar from '../../../../src/components/SideBar'
import useSideBar from '../../../../src/hooks/useSideBar'

const Home = (): JSX.Element => {
  const [isPressed, setIsPressed] = useButtonPress(false)
  const [showSidebar] = useSideBar()
  const [loaded, error] = useFonts({
    family1: Family1,
    family2: Family2,
    family3: Family3
  })

  const handleSignIn = (): void => {
    console.log('Hello')
  }

  if (!loaded || (error != null)) {
    return <></>
  }

  return (
    <>
      <Header />
      {showSidebar ? <SideBar /> : null}
      <View style={styles.homeIntro}>
        <Text style={[styles.heading, { color: '#f0f0f0' }]}>Your First Read...</Text>
        <Text style={[styles.bookTitle, { color: '#f0f0f0' }]}>The Kid that Grew Up Too Fast</Text>
        <Pressable
          onPress={handleSignIn}
          onPressIn={() => { setIsPressed(true) }}
          onPressOut={() => { setIsPressed(false) }}
          style={[styles.button, isPressed && styles.pressablePressed]}
        >
          <View style={styles.buttonContent}>
            <Text style={[styles.buttonText]}>View Book</Text>
            <AntDesign name="arrowright" size={24} color="black" />
          </View>
        </Pressable>
      </View>
      <Text style={[styles.subHeading, { color: '#0d0d0d' }]}>More Suggestions</Text>
      <View style={styles.homeGrid}>
        <View style={styles.row1}>
          <GridView
            src={posp}
            subHeading={'A boy and his two cats'}
            gradientColor={'#FF5733'}
            />
          <GridView
            src={posp}
            subHeading={'A boy and his two cats'}
            gradientColor={'#581845'}
            />
        </View>
        <View style={styles.row1}>
          <GridView
            src={posp}
            subHeading={'A boy and his two cats'}
            gradientColor={'#C70039'}
            />
          <GridView
            src={posp}
            subHeading={'A boy and his two cats'}
            gradientColor={'#E033FF'}
            />
        </View>
      </View>
    </>
  )
}

export default Home
