import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  homeIntro: {
    width: '90%',
    height: '35%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    alignSelf: 'center',
    backgroundColor: 'blue',
    borderRadius: 50,
    paddingHorizontal: 20,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 20
  },
  heading: {
    fontSize: 30,
    fontFamily: 'family3'
  },
  bookTitle: {
    fontSize: 50,
    fontFamily: 'family1'
  },
  icons: {
    display: 'flex',
    flexDirection: 'row'
  },
  button: {
    alignSelf: 'flex-start',
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
    justifyContent: 'space-between'
  },
  buttonText: {
    lineHeight: 25,
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'family1'
  },
  subHeading: {
    textAlign: 'center',
    margin: 20,
    fontSize: 30,
    lineHeight: 35,
    fontFamily: 'family1'
  },
  homeGrid: {
    width: '90%',
    justifyContent: 'flex-start',
    alignSelf: 'center'
  },
  row1: {
    justifyContent: 'space-around',
    display: 'flex',
    flexDirection: 'row',
    height: '33%',
    padding: 20
  }
})

export { styles }
