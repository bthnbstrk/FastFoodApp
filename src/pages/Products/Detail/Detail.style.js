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
    backgroundColor: 'white',
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
    padding: 10,
    fontWeight: 'bold',
  },
});
