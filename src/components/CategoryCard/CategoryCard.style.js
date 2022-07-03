import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#E3D5A0',
    margin: 10,
    borderRadius: 10,
    shadowColor: 'black',
  },
  image: {
    width: 100,
    minHeight: 100,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: 'black',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
    flex: 1,
    textShadowColor: 'black',
    marginTop: 25,
    marginLeft: 5,
  },
});
