//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, AsyncStorage,Alert } from 'react-native';

// create a component
class LogOut extends Component {
	constructor() {
		super();
		this.state = {
			hasToken: true
		};
	}
	async componentWillMount() {
		Alert.alert('Log Out', 'Would you like to log out?', [
			{ text: 'No', onPress: () => this.props.navigation.navigate('Achat')},
			{ text: 'Yes', onPress: () => this._logOunt()}
		]);
	}
	async _logOunt() {
		try {
            await AsyncStorage.removeItem('dataUser');
            this.setState({ hasToken: false });
            this.props.navigation.navigate('Home');
		} catch (error) {
		    console.error('AsyncStorage error: ' + error.message);
		}
	}
	render() {
		return <View style={styles.container} />;
	}
}

// define your styles
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#2c3e50'
	}
});
export default LogOut;
