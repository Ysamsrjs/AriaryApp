import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { Image, View, AsyncStorage } from 'react-native';
import { Root } from 'native-base';

import Expo from 'expo';

import Accueil from './Accueil';
import Login from '../CompteAriary/LoginAriary';
import StartAriary from './StartAriary';
import App from './App';

class Loader extends React.Component {
	constructor() {
		super();
		this.state = {
			isReady: false,
			hasToken: false,
			isLoading: true,
			data: null
		};
	}

	componentDidMount() {}

	async componentWillMount() {
		await Expo.Font.loadAsync({
			Roboto: require('native-base/Fonts/Roboto.ttf'),
			Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
			Ionicons: require('@expo/vector-icons/fonts/Ionicons.ttf')
		});
		try {
			let dataUser = await AsyncStorage.getItem('dataUser');
			if (dataUser != null) {
				this.setState({ hasToken: true });
			} else {
				this.setState({ data: dataUser });
			}
		} catch (error) {
			console.error('AsyncStorage error: ' + error.message);
		}
		this.setState({ isLoading: false, isReady: true });
	}
	render() {
		if (!this.state.isReady) {
			return (
				<View
					style={{
						backgroundColor: '#fff',
						flex: 1,
						justifyContent: 'center',
						alignItems: 'center',
						position: 'absolute',
						top: 0,
						left: 0,
						right: 0,
						bottom: 0
					}}
				>
					<Image
						style={{ width: 150, height: 150 }}
						source={require('../../assets/images/ariary.png')}
						resizeMode="contain"
					>
						<Expo.AppLoading />
					</Image>
				</View>
			);
		}
		if (this.state.hasToken) {
			return <App />;
		} else {
			return <AppNavigation />;
		}
	}
}
const Home = StackNavigator(
	{
		Loader: { screen: Loader },
		Accueil: { screen: Accueil },
		StartAriary: { screen: StartAriary },
		App: { screen: App }
	},
	{
		headerMode: 'none'
	}
);

export default Home;
