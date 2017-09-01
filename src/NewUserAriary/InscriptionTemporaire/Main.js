import React, { Component } from 'react';
import {
	StatusBar,
	View,
	TouchableHighlight,
	Dimensions,
	Image,
	ScrollView,
	TextInput,
	AsyncStorage,
	Alert,
	Text
} from 'react-native';
import { Container, Header, Title, Content, Button, Footer, FooterTab, Body, Left, Right } from 'native-base';

import Icon from 'react-native-vector-icons/FontAwesome';
import Materialcon from 'react-native-vector-icons/MaterialIcons';

import loginCss from '../../assets/css/loginCss';

import styles from './styles';

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pseudo: '',
			phoneNumber: '',
			password: '',
			email:'',
			compte: 'AA147',
			solde: 500,
			loading: false
		};
	}

	_arrayRand() {
		let nom = [
			'jean',
			'nicolas',
			'soa',
			'koto',
			'bema',
			'nick',
			'rjs',
			'joe',
			'hasina',
			'kelene',
			'jeandarc',
			'andry',
			'kentia',
			'jeanette'
		];
		return nom;
	}
	_getNameRand() {
		let rand = Math.floor(Math.random() * 8);
		let array = this._arrayRand();
		let name = array[rand];
		return name;
	}
	async saveItem(item, selectedValue) {
		try {
			await AsyncStorage.setItem(item, selectedValue);
		} catch (error) {
			console.error('AsyncStorage error: ' + error.message);
		}
	}
	componentWillMount() {
		this.setState({ 
			pseudo: this._getNameRand(),
		});
	}
	componentDidMount(){
		this.setState({
			email:this.state.pseudo+"@ariary.net"
		});
	}
	_Next() {
		if (!this._isEmptyField()) {
			let users = {
				code: this.state.compte,
				nom: this.state.pseudo,
				solde: this.state.solde,
				username: this.state.phoneNumber
			};
			this.saveItem('dataUser', JSON.stringify(users));
			this.props.navigation.navigate('Bienvenue', {
				pseudo: this.state.pseudo,
				phone: this.state.phoneNumber,
				password: this.state.password,
				compte: this.state.compte,
				email:this.state.email
			});
		} else {
			Alert.alert('Erreur', 'Tous les champs sont requis');
		}
	}

	_isEmptyField() {
		return (
			this.state.pseudo == null ||
			this.state.password == null ||
			this.state.phoneNumber == null ||
			this.state.pseudo == '' ||
			this.state.password == '' ||
			this.state.phoneNumber == ''
		);
	}

	render() {
		return (
			<Container style={styles.container}>
				<StatusBar hidden={true} />
				<Header style={styles.header}>
					<Left>
						<Button transparent onPress={() => this.props.navigation.goBack()}>
							<Materialcon name="arrow-back" color="#fff" size={30} style={{ fontWeight: '900' }} />
						</Button>
					</Left>
					<Body>
						<Title>Ariary.net</Title>
					</Body>
					<Right>
						<Button transparent>
							<Materialcon name="help" color="#FFF" size={30} style={{ fontWeight: '900' }} />
						</Button>
					</Right>
				</Header>
				<Content padder contentContainerStyle={{ flex: 1, justifyContent: 'center' }}>
					<View style={{ flex: 1, justifyContent: 'center',paddingHorizontal:10}}>
						<Text style={{ alignSelf: 'flex-end', color: '#666' }}>Pseudo</Text>
						<View style={loginCss.inputWrap}>
							<View style={loginCss.iconWrap}>
								<View style={loginCss.iconWrap}>
									<Icon name="user" size={20} color="#00BF9A" />
								</View>
							</View>
							<TextInput
								placeholder="Pseudo"
								value={this.state.pseudo}
								style={loginCss.input}
								autoFocus={false}
								onChangeText={pseudo => this.setState({ pseudo })}
								returnKeyType="next"
							/>
						</View>
						<Text style={{ alignSelf: 'flex-end', color: '#666' }}>Numéro Tél</Text>
						<View style={loginCss.inputWrap}>
							<View style={loginCss.iconWrap}>
								<Materialcon name="call" size={20} color="#00BF9A" />
							</View>
							<TextInput
								placeholder="Numero Tél"
								keyboardType="phone-pad"
								onChangeText={phoneNumber => this.setState({ phoneNumber })}
								style={loginCss.input}
							/>
						</View>
						<Text style={{ alignSelf: 'flex-end', color: '#666' }}>Mot de passe</Text>
						<View style={loginCss.inputWrap}>
							<View style={loginCss.iconWrap}>
								<Materialcon name="lock" size={20} color="#00BF9A" />
							</View>
							<TextInput
								placeholder="Mot de passe"
								onChangeText={password => this.setState({ password })}
								secureTextEntry
								style={loginCss.input}
							/>
						</View>
						<View style={{ alignItems: 'flex-end' }}>
							<Button success onPress={() => this._Next()} style={{ alignSelf: 'flex-end' }}>
								<Text style={{ color: '#ffffff', fontWeight: '900',paddingRight:5}}>Suivant</Text>
								<Icon name="arrow-right" color='#FFF'/>
							</Button>
							<View style={{ flex: 1 }} />
						</View>
					</View>
				</Content>
				<Footer>
					<FooterTab style={styles.header}>
						<Button>
							<Text style={{ color: '#fff' }}>Application 2017 | Ariary.net | ariary@ariary.net</Text>
						</Button>
					</FooterTab>
				</Footer>
			</Container>
		);
	}
}

export default Main;
