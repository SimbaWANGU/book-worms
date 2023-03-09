import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'
import type { GenreFilterItemProps } from '../interfaces/Interface'

const GenreFilterItem: React.FC<GenreFilterItemProps> = ({ genre, onPress, selected }): JSX.Element => {
  const handlePress = (): void => {
    onPress(genre)
  }

  return (
    <>
      <Pressable style={[styles.genrePressable, selected && styles.selectedGenre]} onPress={handlePress}>
        <Text style={[selected && styles.selectedText]}>{genre}</Text>
      </Pressable>
    </>
  )
}

export default GenreFilterItem

const styles = StyleSheet.create({
  genrePressable: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 50,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40
  },
  selectedGenre: {
    backgroundColor: 'blue',
    zIndex: 1
  },
  selectedText: {
    color: 'white'
  }
})
