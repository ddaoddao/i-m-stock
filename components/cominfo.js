import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import SplashScreen from './splashScreen/splashScreen'

const Header = () => {
	const { textCom, 
			viewStyle, 
			textName, 
			text,  
			picposition,
			container,
			welcome,
			splashScreenContainer } = styles;

	return (
		<View style={viewStyle}>	
			<Text style={textCom}>{'Company Info.'}</Text>
			<Image style={styles.picposition} 
				   source={require('./pic/com_pic.png')}/>
			<Text style={textName}>{'   Company Name : ImStock'}</Text>
			<Text style={text}>{'   Tel : 02-999-9999'}</Text>
			<Text style={text}>{'   Email : imstock@gmail.com'}</Text>
			<Text style={text}>{'   Address : ImStock.LTD'}</Text>
			<Text style={text}>{'   Website : www.imstock.com'}</Text>

		</View>
	);
};

const styles = {

	viewStyle: {
		flex: 1,
		backgroundColor: '#FFF',
		position: 'relative'	
	},

	textCom: {
		paddingTop: 20,
		fontSize: 35,
		color: '#BA0923',
		fontWeight: 'bold',
		paddingLeft: 20,
		textAlign: 'center'
	},

	textName: {
		paddingTop: 30,
		fontSize: 21,
		color: '#000',
		paddingLeft: 20,
		textAlign: 'left' 
	},

	text: {
		paddingTop: 10,
		fontSize: 21,
		color: '#000',
		paddingLeft: 20,
		textAlign: 'left' 
	},

	picposition: {
		alignSelf: 'center', 
		marginTop: 30,
   		width: 300,
    	height: 200,
    	borderColor: '#BA0923',
    	borderWidth: 10,
    	borderRadius: 20, 
	},


	container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    splashScreenContainer:{
        backgroundColor: '#FFFFFF'
    }

};

export default Header;