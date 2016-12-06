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
  Navigator,
  TouchableHighlight,
  BackAndroid
} from 'react-native';
import backAndroid from 'react-native-back-android';

import Header from './cominfo';
import Myproduct from './myproduct';
import Order from './order';
import Index from './splash_display';
import Display from './index_display';
import Add from './add_product';
import Edit from './edit_product';
import Detail from './product_detail';
import First from './../src/App';

class NavigatorScreen extends Component {

  renderScene(route, navigator) {
      console.log(route);
      if(route.name == 'index_display') {
        return <Display navigator={navigator} />
      }
      if(route.name == 'cominfo') {
        return <Header navigator={navigator} {...route.passProps}/>
      }
      if(route.name == 'App') {
        return <First navigator={navigator} {...route.passProps}/>
      }
  }
  
  render() {

    BackAndroid.addEventListener('hardwareBackPress', function() {
       if (navigator &&navigator.getCurrentRoutes().length > 1) {
       navigator.pop();
       return true;
       }
       return false;
    });

    return (
      <View style={styles.container}>
        <Navigator
          ref={(nav) => { navigator = nav; }}
          initialRoute={{name: 'index_display'}}
          renderScene={this.renderScene.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  row:{
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15
  }
});

export default NavigatorScreen;