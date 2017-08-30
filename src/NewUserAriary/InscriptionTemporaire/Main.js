import React, { Component } from 'react';
import {
	StatusBar,
	View,
	TouchableHighlight,
	Dimensions,
	Image,
	ScrollView,
	TextInput,
	AsyncStorage
} from 'react-native';
import { Container, Header, Title, Content, Button, Footer, FooterTab, Text, Body, Left, Right } from 'native-base';

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
			solde: 500,
			loading: false
		};
	}
	async saveItem(item, selectedValue) {
		try {
			await AsyncStorage.setItem(item, selectedValue);
		} catch (error) {
			console.error('AsyncStorage error: ' + error.message);
		}
	}
	_Next() {
		let users = {
			code: this.state.pseudo,
			nom: this.state.pseudo,
			solde: this.state.solde,
			username: this.state.phoneNumber
		};
		this.saveItem('dataUser', JSON.stringify(users));
		this.props.navigation.navigate('Bienvenue', {
			pseudo: this.state.pseudo,
			phone: this.state.phoneNumber
		});
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
						<Title>Initialisation Ariary</Title>
					</Body>
					<Right>
						<Button transparent>
							<Materialcon name="help" color="#FFF" size={30} style={{ fontWeight: '900' }} />
						</Button>
					</Right>
				</Header>
				<Content padder contentContainerStyle={{ flex: 1, justifyContent: 'center' }}>
					<View style={{ flex: 1, justifyContent: 'center' }}>
						<View style={loginCss.inputWrap}>
							<View style={loginCss.iconWrap}>
								<View style={loginCss.iconWrap}>
									<Icon name="user" size={20} color="#00BF9A" />
								</View>
							</View>
							<TextInput
								placeholder="Pseudo"
								style={loginCss.input}
								autoFocus={false}
								onChangeText={pseudo => this.setState({ pseudo })}
								returnKeyType="next"
							/>
						</View>
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
						<View style={{ alignItems: 'flex-end' }}>
							<Button success onPress={() => this._Next()} style={{ alignSelf: 'center' }}>
								<Text style={{ color: '#ffffff', fontWeight: '800' }}>Suivant</Text>
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
