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
  TouchableHighlight
} from 'react-native';

import Header from './cominfo';
import Myproduct from './myproduct';
import Order from './order';
import Index from './splash_display';
import Add from './add_product';
import Edit from './edit_product';
import Detail from './product_detail';
import First from './../src/App';

class Display extends Component {

	navigate(routeName) {
	    this.props.navigator.push({
	      name: routeName
	    });
	}

	render(){
		return (
			<View style={styles.container}>

		        <View style={styles.row}>
		            <Text style={styles.header}>
		                IMStock
		            </Text>
		        </View>

		        <TouchableOpacity onPress={ this.navigate.bind(this,'App') }>
			        <View style={styles.row}>
			            <Image
			            	style={{height:137, width:338}}
			            	source={require('./pic/my_product.png')}
			            />
			        </View>
			    </TouchableOpacity>

		        <TouchableOpacity onPress={ this.navigate.bind(this,'cominfo') }>
			        <View style={styles.row}>
			            <Image
			                style={{height:137, width:338}}
			                source={require('./pic/com_info.png')}
			            />
			        </View>
		        </TouchableOpacity>

	        </View>
		)
	}
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#FFFFFF'
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
    fontSize:35,
    flexWrap: 'wrap',
    color: '#ba0923',
    fontWeight: 'bold'
  },
  splashScreenContainer:{
    backgroundColor: '#FFFFFF'
  }

});

export default Display;