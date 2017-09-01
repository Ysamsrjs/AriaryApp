import React, { Component } from 'react';
import {
	Text as Article,
	Image,
	View,
	StatusBar,
	StyleSheet,
	Modal,
	TouchableHighlight,
	BackHandler,
	Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, Button, H3, Header, Text, Title, Body, Left, Right } from 'native-base';

import LoginAriary from '../CompteAriary/Login/LoginAriary';
import styles from './styles';
import FacebookLogin from '../CompteAriary/Login/FacebookLogin';

class Accueil extends Component {
	constructor() {
		super();
		this.state = {
			modalVisible: false,
			facebookVisible: false,
			componentsView: null,
			isLoggedIn: false
		};
	}
	setModalVisible(visible, componenets) {
		this.setState({
			modalVisible: visible,
			componentsView: componenets
		});
	}

	changevisibility() {
		this.setState({
			modalVisible: !this.state.modalVisible
		});
	}
	_onFBLoginSuccess() {}

	_loginSuccess() {
		this.props.navigation.navigate('App');
	}

	_facebookLoginViewer(components) {
		this.changevisibility();
		this.setModalVisible(true, <FacebookLogin changeVisible={() => this.changevisibility()} />);
	}
	render() {
		return (
			<Container>
				<StatusBar barStyle="light-content" />
				<Image
					source={require('../../assets/images/launchscreen-bg.jpg')}
					style={styles.imageContainer}
					resizeMode="stretch"
				>
					<View
						style={{
							flex: 1,
							alignItems: 'center',
							justifyContent: 'center',
							backgroundColor: 'rgba(44, 62, 80,0.7)'
						}}
					>
						<View style={styles.logoContainer}>
							<Image
								source={require('../../assets/images/ariary.png')}
								style={styles.logo}
								resizeMode="contain"
							/>
						</View>
						<View style={{padding:10}}>
							<Article style={{ textAlign: 'center', color: '#fff', fontWeight: '900', fontSize: 25 }}>
								Ariary.net
							</Article>
						</View>
						<View style={{ marginBottom: 80, alignItems: 'center', justifyContent: 'center' }}>
							<TouchableHighlight
								style={{ borderRadius: 50, width: 250 }}
								onPress={() => {
									this.props.navigation.navigate('StartAriary');
								}}
							>
								<View
									style={{
										backgroundColor: '#00BCD4',
										borderRadius: 50,
										height: 60,
										alignContent: 'center',
										justifyContent: 'center'
									}}
								>
									<Article
										style={{ textAlign: 'center', color: '#fff', fontWeight: '900', fontSize: 12 }}
									>
										nouveau utilisateur Ariary
									</Article>
									<Article
										style={{ textAlign: 'center', color: '#fff', fontWeight: '900', fontSize: 18 }}
									>
										{'Commencer AriaryNet'.toUpperCase()}
									</Article>
								</View>
							</TouchableHighlight>
							<Text style={{ margin: 3 }} />
							<Button
								iconLeft
								success
								rounded
								style={styles.buttonAccueil}
								onPress={() => {
									this.setModalVisible(
										true,
										<LoginAriary
											changeVisible={() => this.changevisibility()}
											facebookLoginView={components => this._facebookLoginViewer(components)}
											loginSuccessed={() => this._loginSuccess()}
										/>
									);
								}}
							>
								<Image
									style={{ width: 25, height: 25, marginRight: 5 }}
									source={require('../../assets/images/ariary.png')}
									resizeMode="contain"
								/>
								<Text style={{ textAlign: 'left' }}>Se connecter</Text>
							</Button>
							<View>
								<Modal
									style={modal.main}
									animationType={'slide'}
									transparent={true}
									visible={this.state.modalVisible}
								>
									<View style={[modal.contenuemodal, { backgroundColor: 'rgba(44, 62, 80,0.7)' }]}>
										<View style={[modal.content, { backgroundColor: '#FFF' }]}>
											{this.state.componentsView}
										</View>
									</View>
								</Modal>
							</View>
						</View>
					</View>
				</Image>
			</Container>
		);
	}
}

const modal = StyleSheet.create({
	annuler: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		height: 50,
		backgroundColor: '#FFC107',
		paddingHorizontal: 20
	},
	header: {
		backgroundColor: '#009688',
		padding: 10,
		width: '90%'
	},
	content: {
		backgroundColor: '#eee',
		width: '90%'
	},
	footer: {
		backgroundColor: '#009688',
		padding: 20
	},
	contenuemodal: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
	page: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(0,0,0,0.5)'
	},
	main: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(0,0,0,0.5)'
	}
});
export default Accueil;
