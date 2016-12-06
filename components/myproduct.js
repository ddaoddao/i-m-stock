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

import Add from './add_product';
import Detail from './product_detail';
import Display from './index_display';

class Myproduct extends Component {

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
	                My Product
	            </Text>
	      </View>	
        <View>
              <Text style={styles.textPro}>
                  {'  PRODUCT LIST'}
                  <Text style={styles.text}>
                      {' : search a product by product name\n'} 
                      {'  or code'}
                  </Text>
              </Text>
        </View>
        <TouchableOpacity onPress={ this.navigate.bind(this,'product_detail') }>
              <View style={styles.buttonStyle}>
                  <Image
                      source={require('./pic/product.png')}
                  />
              </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={ this.navigate.bind(this,'add_product') }>
              <View style={styles.buttonStyle}>
                  <Image
                      source={require('./pic/plus.png')}
                  />
              </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={ this.navigate.bind(this,'index_display') }>
              <View style={styles.buttonStyle}>
                  <Image
                      source={require('./pic/home.png')}
                  />
              </View>
        </TouchableOpacity>

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
    paddingTop: 10
  },
  text:{
    paddingTop: 5,
    fontSize: 15,
    color: '#FFF',
    fontWeight: 'normal',
    textAlign: 'left'
  },
  textPro:{
    paddingTop: 1,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#00CCCC',
    textAlign: 'left'
  }

});

export default Myproduct;