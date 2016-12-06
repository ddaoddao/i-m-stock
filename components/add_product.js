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

import Myproduct from './myproduct'

class Add extends Component {

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
	                Add Product
	            </Text>
	      </View>	

        <TouchableOpacity>
              <View style={styles.buttonStyle}>
                  <Image
                      source={require('./pic/browse.png')}
                  />
              </View>
        </TouchableOpacity>

        <View style={styles.box}>
          <View> 
            <TouchableOpacity onPress={ this.navigate.bind(this,'myproduct') }>
                  <View style={styles.buttonStyle}>
                      <Image
                          style={{width:150}}
                          source={require('./pic/add.png')}
                      />
                  </View>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={ this.navigate.bind(this,'myproduct') }>
                  <View style={styles.buttonStyle}>
                      <Image
                          source={require('./pic/cancel.png')}
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
    flex:2,
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
   buttonStyle:{
    alignItems: 'center',
    paddingTop: 10
  },
  cancel:{

  },
  add:{

  },
  box:{
    flex:2,
    flexDirection: 'column'
  }

});

export default Add;