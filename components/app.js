import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
}from 'react-native';


class App extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to Home Screen !
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    splashScreenContainer:{
        backgroundColor: '#FFFFFF'
    }
});

export default App