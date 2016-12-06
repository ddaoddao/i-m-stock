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

class Order extends Component {
	render(){
		return(
			<View style={styles.container}>
				<View style={styles.row}>
	              <Text style={styles.header}>
	                  Order
	              </Text>
	          	</View>	
          	</View>
		)
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

export default Order;