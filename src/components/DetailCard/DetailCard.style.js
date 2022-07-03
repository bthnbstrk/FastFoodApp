import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: '#e3d5a0',
    flex: 1,
  },
  image: {
    width: deviceSize.width,
    height: deviceSize.height / 3,
    resizeMode: 'contain',
    backgroundColor: 'black',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    padding: 10,
  },
  desc: {
    fontStyle: 'italic',
    fontSize: 19,
    marginTop: 2,
    padding: 10,
  },
  tags: {
    fontSize: 28,
    padding: 3,
    margin: 10,
    fontWeight: 'bold',
  },
  watchButton: {
    width: 250,
    height: 40,
    backgroundColor: 'red',
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    flexDirection: 'row',
  },
  watchButtonText: {
    color: 'white',
    fontSize: 20,
  },
});
