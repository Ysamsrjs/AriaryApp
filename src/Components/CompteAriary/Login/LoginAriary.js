import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableHighlight,
	Dimensions,
	TextInput,
	ScrollView,
	Image,
	ActivityIndicator,
	AsyncStorage,
	Alert,
	BackHandler
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import loginCss from '../../../assets/css/loginCss';
import FacebookLogin from './FacebookLogin';

class LoginAriary extends React.Component {
	static proptypes = {
		changeVisible: React.PropTypes.func,
		navigation: React.PropTypes.object
	};

	constructor() {
		super();
		this.state = {
			username: '',
			password: '',
			message: '',
			isLoggedIn: false
		};
	}

	changeVisibility() {
		this.props.changeVisible();
	}

	async onLoginSuccess() {
		this.changeVisibility();
		this.props.loginSuccessed();
	}

	async saveItem(item, selectedValue) {
		try {
			await AsyncStorage.setItem(item, selectedValue);
		} catch (error) {
			console.error('AsyncStorage error: ' + error.message);
		}
	}

	_facebookLoginView(components) {
		this.props.facebookLoginView(components);
	}

	async _userLogin() {
		this.setState({ isLoggedIn: true, message: '' });
		if (!this.isEmptyField()) {
			let url = 'http://54.229.79.45/ariary2API/web/api/login';
			try {
				await fetch(url, {
					method: 'POST',
					headers: {
						Accept: 'application/json',
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						username: this.state.username,
						password: this.state.password
					})
				})
					.then(response => response.json())
					.then(responseJson => {
						console.log(responseJson);
						if (responseJson.error_message != null) {
							this.setState({ message: responseJson.error_message });
							Alert.alert('Erreur Login', this.state.message);
						} else {
							let users = {
								code:responseJson.code + '',
								nom:responseJson.nom + '',
								solde:responseJson.solde + '',
								username:responseJson.username + ''
							};
							this.saveItem('dataUser', JSON.stringify(users));
							this.onLoginSuccess();
						}
					});
				this.setState({ isLoggedIn: false });
			} catch (error) {
				this.setState({ isLoggedIn: false, message: error });
				Alert.alert('Erreur Login', this.state.message);
			}
		} else {
			this.setState({ isLoggedIn: false, message: 'Tous les champs sont requis' });
			Alert.alert('Erreur Login', this.state.message);
		}
	}
	isEmptyField() {
		return (
			this.state.username == null ||
			this.state.password == null ||
			this.state.username == '' ||
			this.state.password == ''
		);
	}

	render() {
		return (
			<View>
				<ScrollView style={{ backgroundColor: '#eee' }}>
					<View style={loginCss.loginScreen}>
						<View style={{ backgroundColor: '#009688', padding: 15, width: '100%' }}>
							<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
								<View style={loginCss.imageLogin}>
									<Icon name="user-circle-o" size={130} color="#FFF" />
								</View>
							</View>
						</View>
						<View style={loginCss.wrapper}>
							<TouchableHighlight
								style={[loginCss.toutchable, { marginVertical: 15 }]}
								onPress={() => this._facebookLoginView(<FacebookLogin />)}
							>
								<View style={[loginCss.buttonLogin, { backgroundColor: '#3b5998', borderRadius: 100 }]}>
									<Icon name="facebook-official" size={25} color="#fff" style={{ marginRight: 5 }} />
									<Text style={{ textAlign: 'left', color: '#FFF', fontWeight: '900' }}>
										Se Connecter via Facebook
									</Text>
								</View>
							</TouchableHighlight>

							<View style={{ paddingVertical: 5 }}>
								<Text style={{ textAlign: 'center' }}>-- OR --</Text>
							</View>

							<View style={loginCss.inputWrap}>
								<View style={loginCss.iconWrap}>
									<Icon name="user" size={20} color="#00BF9A" />
								</View>
								<TextInput
									placeholder="numéro ou e-mail"
									keyboardType="email-address"
									style={loginCss.input}
									onChangeText={username => this.setState({ username })}
									autoFocus={false}
									returnKeyType="done"
									onEndEditing={event => {
										//this.refs.password.focus();
									}}
								/>
							</View>
							<View style={loginCss.inputWrap}>
								<View style={loginCss.iconWrap}>
									<Icon name="lock" size={20} color="#00BF9A" />
								</View>
								<TextInput
									ref="password"
									placeholder="Mot de passe"
									secureTextEntry
									style={loginCss.input}
									onChangeText={password => this.setState({ password })}
									secureTextEntry={true}
									returnKeyType="done"
								/>
							</View>
							<View style={loginCss.seperator} />

							<TouchableHighlight style={loginCss.toutchable}>
								<View style={loginCss.instructions}>
									<Text style={loginCss.textforgot}>Mot de passe oublié?</Text>
								</View>
							</TouchableHighlight>

							<View style={loginCss.seperator} />
							<View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
								<TouchableHighlight
									style={[loginCss.toutchable, { width: '49%', marginRight: '1%' }]}
									onPress={this.changeVisibility.bind(this)}
								>
									<View
										style={[
											loginCss.buttonLogin,
											{
												backgroundColor: '#F44336',
												borderTopLeftRadius: 100,
												borderBottomLeftRadius: 100
											}
										]}
									>
										<Text style={{ color: '#ffffff', fontWeight: '900' }}>Annuler</Text>
									</View>
								</TouchableHighlight>
								<TouchableHighlight
									style={[loginCss.toutchable, { width: '49%', marginLeft: '1%' }]}
									onPress={this._userLogin.bind(this)}
								>
									<View
										style={[
											loginCss.buttonLogin,
											{
												backgroundColor: '#00BF9A',
												borderTopRightRadius: 100,
												borderBottomRightRadius: 100
											}
										]}
									>
										<Image
											style={{ width: 25, height: 25, marginRight: 5 }}
											source={require('../../../assets/images/ariary.png')}
											resizeMode="contain"
										/>
										<Text style={{ color: '#ffffff', fontWeight: '900' }}>Se connecter</Text>
									</View>
								</TouchableHighlight>
							</View>
							<TouchableHighlight style={[loginCss.toutchable, { marginVertical: 15 }]}>
								<View
									style={[
										loginCss.instructions,
										{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }
									]}
								>
									<Text
										style={[
											loginCss.textforgot,
											{ color: '#666', fontSize: 12, fontWeight: '900' }
										]}
									>
										Je n'ai pas de compte
									</Text>
									<Text style={{ paddingHorizontal: 3 }} />
									<Text style={[loginCss.textforgot, { fontSize: 20, fontWeight: '900' }]}>
										S'inscrire
									</Text>
								</View>
							</TouchableHighlight>
						</View>
					</View>
				</ScrollView>
				{this.state.isLoggedIn &&
					<View
						style={{
							backgroundColor: 'rgba(44, 62, 80,0.7)',
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
						<ActivityIndicator size="large" animating={true} color="#FFF" />
						<Text style={{ textAlign: 'center', fontWeight: '900', fontSize: 20, color: '#FFF' }}>
							Connexion encours...
						</Text>
					</View>}
			</View>
		);
	}
}
export default LoginAriary;
