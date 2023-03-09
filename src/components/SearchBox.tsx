import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

const SearchBox = (): JSX.Element => {
  return (
    <View style={styles.searchBox}>
      <AntDesign name="search1" size={20} color="black" />
      <TextInput
        style={styles.input}
        onChangeText={() => {
          console.log('text')
        }}
        placeholder="Search"
        placeholderTextColor="#999"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  searchBox: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 50,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    flex: 1,
    marginLeft: 10
  }
})

export default SearchBox
