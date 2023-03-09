import React from 'react'
import { StyleSheet, ScrollView, View } from 'react-native'
import GenreFilter from '../../../../src/components/GenreFilter'
import GridView from '../../../../src/components/GridView'
import Header from '../../../../src/components/Header'
import SearchBox from '../../../../src/components/SearchBox'
import SideBar from '../../../../src/components/SideBar'
import useSideBar from '../../../../src/hooks/useSideBar'
import { posp } from '../../../../src/constants/images'

const Explore = (): JSX.Element => {
  const [showSidebar] = useSideBar()
  const images = [posp, posp, posp, posp, posp, posp, posp, posp, posp, posp]

  const rows = []
  let temp = []
  for (let i = 0; i < images.length; i++) {
    temp.push(
      <GridView
        key={i}
        src={images[i]}
        subHeading={'The Kid who Grew Up too Fast'}
        gradientColor="#FFD700"
      />
    )
    if (temp.length === 2 || i === images.length - 1) {
      rows.push(<View key={i} style={styles.row}>{temp}</View>)
      temp = []
    }
  }

  return (
    <>
      <Header />
      {showSidebar ? <SideBar /> : null}
      <SearchBox />
      <GenreFilter />
      <ScrollView contentContainerStyle={styles.container}>
        {rows}
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 20,
    paddingBottom: 50
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 20,
    alignItems: 'center',
    height: 170
  }
})

export default Explore
