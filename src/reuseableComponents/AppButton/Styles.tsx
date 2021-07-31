import {StyleSheet} from 'react-native';
const Styles = StyleSheet.create({
  btn: {
    width: '100%',
    minHeight: 44,
    marginVertical: 20,
    borderRadius: 40,
  },
  viDashboard: {
    width: '80%',
    height: '15%',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  absoluteView: {
    flex: 1,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'transparent',
  },
  img: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
});

export default Styles;
