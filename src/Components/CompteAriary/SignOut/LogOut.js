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
	componentWillMount() {
		Alert.alert('Log Out', 'Would you like to log out?', [
			{ text: 'No', onPress: () => this.props.navigation.navigate('Achat')},
			{ text: 'Yes', onPress: () => this._logOut()}
		]);
	}
	async _logOut() {
		try {
            await AsyncStorage.removeItem('dataUser');
            this.setState({ hasToken: false });
            this.props.navigation.navigate('Loader');
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
		backgroundColor: '#FFF'
	}
});
export default LogOut;
