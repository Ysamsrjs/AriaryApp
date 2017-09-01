//import liraries
import React, { Component } from 'react';
import {
	Container,
	Header,
	Title,
	Button,
	Icon as Icon1,
	Tabs,
	Tab,
	Right,
	Left,
	Body,
	TabHeading,
	Footer,
	FooterTab,
	Content
} from 'native-base';
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
	BackHandler,
	StatusBar
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import loginCss from '../../../assets/css/loginCss';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import styles from './style';
// create a component
class Offrir extends Component {
	constructor() {
		super();
		this.state = {
			loading: false,
			amount: 0,
			recipient: '',
			password: '',
			sender: '',
			erreur: '',
			balence: ''
		};
	}
	async componentWillMount() {
		try {
			let dataUser = await AsyncStorage.getItem('dataUser');
			if (dataUser == null) {
				this.props.navigation.navigate('Home');
			}
			let userData = await JSON.parse(dataUser);
			this.setState({
				sender: userData.code
			});
		} catch (error) {
			console.log(error);
		}
	}

	_cancelTransfer() {}

	_confirmTransfer() {
		if (!this._isEmptyField()) {
			Alert.alert(
				'Confirm',
				'Vous essayez de transferer ' + this.state.amount + ' au numéro de compte ' + this.state.sender + ' ?',
				[
					{ text: 'Annuller', onPress: () => _cancelTransfer() },
					{ text: 'Confirmer', onPress: () => this._validerOffre() }
				]
			);
		} else {
			this.setState({ loading: false });
			Alert.alert('Erreur survennue', 'Tous les champs sont requis');
		}
	}
	_onsSuccess(amount,solde){
		Alert.alert(
			'Felicitation',
			'Vous  venez de tranferer  ' + mount + ' au numéro de compte ' + this.state.sender + '. Votre solde est de '+solde + 'Ariary'
		);
	}
	_isEmptyField() {
		return this._isEmptyAmount() || this._isEmptyRecipient();
	}
	_isEmptyAmount() {
		return this.state.amount == null || this.state.amount == '';
	}
	_isEmptyRecipient() {
		return this.state.recipient == null || this.state.recipient == '';
	}
	_isEmptyPassword() {
		return this.state.password == null || this.state.password == '';
	}
	async _validerOffre() {
		this.setState({ loading: true, erreur: '' });
		let url = 'http://54.229.79.45/ariary2API/web/api/transaction';
		try {
			await fetch(url, {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					senderId: this.state.sender,
					recipientId: this.state.recipient,
					amount: this.state.amount,
					comment: this.state.message
				})
			})
				.then(response => response.json())
				.then(responseJson => {
					console.log(responseJson);
					if (responseJson.error_message != null) {
						this.setState({ erreur: responseJson.error_message });
						Alert.alert('Erreur survenue', this.state.erreur);
					} else {
						let success = responseJson.result;
						if (success=="success") {
							this._onsSuccess(this.state.amount,responseJson.balence);
						}
					}
				});
			this.setState({ loading: false });
		} catch (error) {
			this.setState({ loading: false });
			Alert.alert('Erreur survennue', error);
		}
	}

	render() {
		return (
			<Container style={styles.container}>
				<StatusBar hidden={true} />
				<Header style={{ backgroundColor: '#00BF9A', height: 60 }}>
					<Left>
						<Button transparent onPress={() => this.props.navigation.navigate('DrawerOpen')}>
							<Icon name="bars" size={25} style={{ color: '#FFF' }} />
						</Button>
					</Left>
					<Body>
						<Title>Offrir</Title>
					</Body>
					<Right>
						<Button transparent>
							<Icon name="share-alt" size={25} style={{ color: '#FFF' }} />
						</Button>
						<Button transparent>
							<MaterialIcon size={30} name="settings" style={{ color: '#FFF' }} />
						</Button>
					</Right>
				</Header>
				<Content padder contentContainerStyle={{ flex: 1, justifyContent: 'center' }}>
					<View
						style={{
							justifyContent: 'center',
							alignContent: 'center',
							backgroundColor: '#eee',
							padding: 15
						}}
					>
						<View style={{ alignContent: 'center' }}>
							<Text style={{ fontWeight: '900', textAlign: 'center', color: '#00BF9A' }}>
								Offrir à des amis
							</Text>
						</View>
						<View style={loginCss.inputWrap}>
							<View style={loginCss.iconWrap}>
								<Image
									style={{ width: 20, height: 20 }}
									source={require('../../../assets/images/ariary.png')}
									resizeMode="contain"
								/>
							</View>
							<TextInput
								placeholder="Montant en Ariary"
								keyboardType="numeric"
								style={loginCss.input}
								autoFocus={false}
								onChangeText={amount => this.setState({ amount })}
								returnKeyType="next"
							/>
						</View>
						<View style={loginCss.inputWrap}>
							<View style={loginCss.iconWrap}>
								<Icon name="user" size={20} color="#00BF9A" />
							</View>
							<TextInput
								ref="recipient"
								placeholder="Compte du beneficiaire"
								onChangeText={recipient => this.setState({ recipient })}
								style={loginCss.input}
							/>
						</View>
						<View style={loginCss.inputWrap}>
							<View style={loginCss.iconWrap}>
								<Icon name="edit" size={20} color="#00BF9A" />
							</View>
							<TextInput
								multiline={true}
								numberOfLines={10}
								placeholder="Comentaire"
								onChangeText={message => this.setState({ message })}
								style={loginCss.input}
							/>
						</View>
						<View style={loginCss.seperator} />
						<View style={{ alignItems: 'flex-end' }}>
							<Button success onPress={() => this._confirmTransfer()} style={{ alignSelf: 'flex-end' }}>
								<Text style={{ color: '#ffffff', fontWeight: '800' }}>Valider</Text>
							</Button>
							<View style={{ flex: 1 }} />
						</View>
					</View>
					{this.state.loading && (
						<View
							style={{
								backgroundColor: 'rgba(44, 62, 80,0.5)',
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
								Traitement encours...
							</Text>
						</View>
					)}
				</Content>
				<Footer>
					<FooterTab style={{ backgroundColor: '#00BF9A' }}>
						<Button>
							<Text style={{ color: '#fff' }}>Ariary.net | ariary@ariary.net | Application 2017</Text>
						</Button>
					</FooterTab>
				</Footer>
			</Container>
		);
	}
}

// define your styles
const test = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#2c3e50'
	}
});

//make this component available to the app
export default Offrir;
