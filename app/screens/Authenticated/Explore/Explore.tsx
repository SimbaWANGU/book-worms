import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import GenreFilter from '../../../../src/components/GenreFilter'
import Header from '../../../../src/components/Header'
import SearchBox from '../../../../src/components/SearchBox'
import SideBar from '../../../../src/components/SideBar'
import useSideBar from '../../../../src/hooks/useSideBar'

const Explore = (): JSX.Element => {
  const [showSidebar] = useSideBar()

  return (
    <>
      <Header />
      {showSidebar ? <SideBar /> : null}
      <SearchBox />
      <GenreFilter />
    </>
  )
}

const styles = StyleSheet.create({
  container: {}
})

export default Explore
