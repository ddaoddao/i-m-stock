import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Switch,
  TextInput,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';

import SplashScreen from './splashScreen/splashScreen'
import Display from './index_display';
import NavigatorScreen from './navigator'
import First from './../src/App';

class Index extends Component {

  render() {
    return (
      <SplashScreen logo={require('./splashScreen/imstock.png')} duration={1200} 
        backgroundColor={styles.splashScreenContainer}>
        <NavigatorScreen />
      </SplashScreen>
    );
 }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#003870'
  },
  row:{
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15
  },
  header:{
    marginTop: 20,
    marginBottom: 5,
    fontSize:30,
    flexWrap: 'wrap',
    color: '#00CCCC',
    fontWeight: 'bold'
  },
  splashScreenContainer:{
    backgroundColor: '#FFFFFF'
  }

});

export default Index;
