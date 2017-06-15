import {
  StyleSheet,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  navigationBar: {
    backgroundColor: 'orange',
    width: width,
    height: 54,
    paddingTop: 14,
    
  },
  navContent: {
    justifyContent: 'flex-end',
    paddingBottom: 5,
  },
  leftView: {
    flex: 0.3,
    paddingLeft: 10,
  },
  rightView: {
    flex: 0.3,
    alignItems: 'flex-end',
    paddingRight: 10,
  },
  middleView: {
    flex: 0.4,
    alignItems: 'center',
  },
  titleText: {
    fontWeight: '500',
  },
  whiteText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default styles
