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
  TouchableHighlight,
  Navigator,
  BackAndroid
} from 'react-native';

import Edit from './edit_product';
import Myproduct from './myproduct';
import Display from './index_display';

class Detail extends Component {

  navigate(routeName) {
      this.props.navigator.push({
        name: routeName
      });
  }

  render(){
    return(
			<View style={styles.container}>

				<View style={styles.row}>
	            <Text style={styles.header}>
	                Product Detail
	            </Text>
	      </View>	
        <View style={styles.box}>
          <View> 
            <TouchableOpacity onPress={ this.navigate.bind(this,'edit_product') }>
                  <View style={styles.buttonStyle}>
                      <Image
                          source={require('./pic/edit.png')}
                      />
                  </View>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={ this.navigate.bind(this,'myproduct') }>
                  <View style={styles.buttonStyle}>
                      <Image
                          source={require('./pic/delete.png')}
                      />
                  </View>
            </TouchableOpacity>
          </View>
        </View>

      </View>
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
  },
  testStyle:{
    alignSelf: 'center',
    color: '#0000',
    fontSize: 20,
    fontWeight: '400'
  },
  buttonStyle:{
    alignItems: 'center',
  },
  box:{
    flex:2,
    flexDirection: 'column'
  }

});

export default Detail;