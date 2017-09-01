import React, { Component } from 'react';
import { StatusBar, View, TouchableHighlight, Dimensions, Image, rEFRE } from 'react-native';
import {
	Container,
	Header,
	Title,
	Content,
	Button,
	Footer,
	FooterTab,
	Text,
	Body,
	Left,
	Right,
	Icon as NtIcon
} from 'native-base';

import Icon from 'react-native-vector-icons/FontAwesome';
import Materialcon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

class Bienvenue extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: false,
			identifiant: '',
			phoneNumber: '',
			compte:'',
			tab1: false,
			tab2: false,
			password: 'Arairy1'
		};
	}

	toggleTab1() {
		this.setState({
			tab1: true,
			tab2: false
		});
		this.props.navigation.navigate('Inscription1');
	}

	toggleTab2() {
		this.setState({
			tab1: false,
			tab2: true
		});
		this.props.navigation.navigate('App');
	}
	componentWillMount() {
		this.setState({
			identifiant: this.props.navigation.state.params.pseudo,
			phoneNumber: this.props.navigation.state.params.phone,
			password:this.props.navigation.state.params.password,
			compte:this.props.navigation.state.params.compte
		});
		//addTempUser();
	}
	async addTempUser() {
		this.setState({ loading: true });
		if (!this.isEmptyField()) {
			let url = 'http://192.168.1.20/ariary2/web/app.php/api/add';
			try {
				await fetch(url, {
					method: 'POST',
					headers: {
						Accept: 'application/json',
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						username: this.props.navigation.state.params.pseudo,
						phone: this.props.navigation.state.params.phone,
						password: this.state.password
					})
				})
					.then(response => response.json())
					.then(responseJson => {
						console.log(responseJson);
						if (responseJson.error_message != null) {
							this.setState({ message: responseJson.error_message });
							Alert.alert('Erreur Login', responseJson.error_message);
						} else {
						}
					});
				this.setState({ loading: false });
			} catch (error) {
				this.setState({ loading: false });
				Alert.alert('Erreur Login', error);
			}
		} else {
			this.setState({ isLoggedIn: false, message: 'Tous les champs sont requis' });
			Alert.alert('Erreur Login', this.state.message);
		}
	}

	render() {
		return (
			<Container style={styles.container}>
				<StatusBar hidden={true} />
				<Header style={styles.header}>
					<Left>
						<Button transparent onPress={() => this.props.navigation.goBack()}>
							<Materialcon name="done" color="#fff" size={30} style={{ fontWeight: '900' }} />
						</Button>
					</Left>
					<Body>
						<Title>Félicitation</Title>
					</Body>
					<Right>
						<Button transparent>
							<Materialcon name="help" color="#FFF" size={30} style={{ fontWeight: '900' }} />
						</Button>
					</Right>
				</Header>
				<View>
					<View style={{ backgroundColor: '#00BF9A', padding: 15 }}>
						<View style={{ flexDirection: 'row' }}>
							<View style={{ justifyContent: 'center', width: '40%' }}>
								<View
									style={{
										backgroundColor: '#FFF',
										borderRadius: 100,
										height: 100,
										width: 100,
										padding: 10
									}}
								>
									<Image
										style={{ width: 80, height: 80 }}
										source={require('../../assets/images/ariary.png')}
										resizeMode="contain"
									/>
								</View>
							</View>
							<View style={{ justifyContent: 'center', width: '60%' }}>
								<Text style={{ color: '#FFF', fontWeight: '900', fontSize: 20, textAlign: 'right' }}>
									Bienvenue sur
								</Text>
								<Text style={{ color: '#FFF', fontWeight: '900', fontSize: 20, textAlign: 'right' }}>
									Ariary.net
								</Text>
								<Text style={{ color: '#FFF', fontWeight: '900', fontSize: 20, textAlign: 'right' }}>
									({this.state.identifiant})
								</Text>
							</View>
						</View>
					</View>
				</View>
				<Content padder contentContainerStyle={{ flex: 1, justifyContent: 'center' }}>
					<View style={{ flex: 1, justifyContent: 'center' }}>
						<View style={styles.textbienvenue}>
							<Materialcon name="done" color="#009688" size={30} style={{ fontWeight: '900' }} />
							<Text style={{ flexWrap: 'wrap', flex: 1 }}>
								Félicitation, nous venons de créer un compte temporaire avec  500 Ar de solde.
							</Text>
						</View>

						<View style={styles.textbienvenue}>
							<Materialcon name="done" color="#009688" size={30} style={{ fontWeight: '900' }} />
							<Text style={{ flexWrap: 'wrap', flex: 1 }}>
								On vous a attribué le numero de compte {this.state.compte}
							</Text>
						</View>
						<View style={styles.textbienvenue}>
							<Materialcon name="done" color="#009688" size={30} style={{ fontWeight: '900' }} />
							<Text style={{ flexWrap: 'wrap', flex: 1 }}>
								Vous avez choisi le pseudo {this.state.identifiant}
							</Text>
						</View>
						<View style={styles.textbienvenue}>
							<Materialcon name="done" color="#009688" size={30} style={{ fontWeight: '900' }} />
							<Text style={{ flexWrap: 'wrap', flex: 1 }}>
								Votre numéro Tél est {this.state.phoneNumber}
							</Text>
						</View>
						<View style={styles.textbienvenue}>
							<Materialcon name="done" color="#009688" size={30} style={{ fontWeight: '900' }} />
							<Text style={{ flexWrap: 'wrap', flex: 1 }}>
								Grâce à votre compte temporaire ariary, vous pouvez déjà recevoir de l'argent
							</Text>
						</View>

						<View style={styles.textbienvenue}>
							<Materialcon name="done" color="#009688" size={30} style={{ fontWeight: '900' }} />
							<Text style={{ flexWrap: 'wrap', flex: 1 }}>
								L'assistance de configuration vous aide à completer vos informations
							</Text>
						</View>
					</View>
					<View style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }}>
						<Text style={{ fontSize: 12, color: '#666', textAlign: 'right' }}>
							ariary.net 2017 | ariary@ariary.net | by Rjs
						</Text>
					</View>
				</Content>
				<Footer style={styles.footer}>
					<FooterTab style={styles.footer}>
						<Button active={this.state.tab1} onPress={() => this.toggleTab1()}>
							<Materialcon name="settings" size={20} color="#FFF" style={{ fontWeight: '900' }} />
							<Text style={{ color: '#fff' }}>Configurer compte</Text>
						</Button>
						<Button active={this.state.tab2} onPress={() => this.toggleTab2()}>
							<Materialcon name="done" size={20} color="#FFF" style={{ fontWeight: '900' }} />
							<Text style={{ color: '#fff' }}>Passer</Text>
						</Button>
					</FooterTab>
				</Footer>
			</Container>
		);
	}
}

export default Bienvenue;
