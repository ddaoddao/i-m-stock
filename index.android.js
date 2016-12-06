import {
  AppRegistry
} from 'react-native';
import React, { Component } from 'react';
import Index from './components/splash_display';

class App extends Component{
    render(){
        return (
		  <Index />
		);
    }
}

AppRegistry.registerComponent('firebase_new', () => App);
