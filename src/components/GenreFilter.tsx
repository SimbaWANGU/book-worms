import React, { useState } from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import GenreFilterItem from './GenreFilterItem'

const GenreFilter = (): JSX.Element => {
  const [selectedGenre, setSelectedGenre] = useState('')

  const handleGenrePress = (genre: string): void => {
    setSelectedGenre(genre)
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.containerStyle} horizontal={true} showsHorizontalScrollIndicator={false}>
      <GenreFilterItem genre={'fantasy'} onPress={handleGenrePress} selected={selectedGenre === 'fantasy'} />
      <GenreFilterItem genre={'educational'} onPress={handleGenrePress} selected={selectedGenre === 'educational'} />
      <GenreFilterItem genre={'science fiction'} onPress={handleGenrePress} selected={selectedGenre === 'science fiction'} />
      <GenreFilterItem genre={'history'} onPress={handleGenrePress} selected={selectedGenre === 'history'} />
      <GenreFilterItem genre={'mystery'} onPress={handleGenrePress} selected={selectedGenre === 'mystery'} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    height: '6%'
  },
  containerStyle: {
    justifyContent: 'center'
  }
})

export default GenreFilter
