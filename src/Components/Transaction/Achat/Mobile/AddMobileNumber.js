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
import loginCss from '../../../../assets/css/loginCss';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import styles from './Styles';
// create a component
class AddMobileNumber extends Component {
	constructor() {
		super();
		this.state = {
			loading: false,
			phone: '',
			montant: '',
			password: ''
		};
	}

	_isEmptyField() {
		return this.state.phone == '' || this.state.phone == null;
	}
	componentWillMount() {
		this.setState({
			montant: this.props.navigation.state.params.montant,
			password: this.props.navigation.state.params.password
		});
	}

	_checkNumberPhone() {}
	_procedAchat() {
		if (!this._isEmptyField()) {
			Alert.alert('', this.state.montant + '=>' + this.state.password + '=>' + this.state.phone);
			// let url = 'http://192.168.1.20/ariary2/web/app.php/api/achatbondachat';
			// try {
			// await fetch(url, {
			// 	method: 'POST',
			// 	headers: {
			// 		Accept: 'application/json',
			// 		'Content-Type': 'application/json'
			// 	},
			// 	body: JSON.stringify({
			// 		senderId: this.state.sender,
			// 		recipientId: this.state.recipient,
			// 		amount: this.state.amount,
			// 		comment: this.state.message
			// 	})
			// })
			// 	.then(response => response.json())
			// 	.then(responseJson => {
			// 		console.log(responseJson);
			// 		if (responseJson.error_message != null) {
			// 			this.setState({ erreur: responseJson.error_message });
			// 			Alert.alert('Erreur survenue', this.state.erreur);
			// 		} else {
			// 			let success = responseJson.result;
			// 			if (success) {
			// 				this.setState({ balence: responseJson.balence });
			// 				Alert.alert('Felicitation', this.state.balance);
			// 			}
			// 		}
			// 	});
			//this.setState({ loading: false });
			// } catch (error) {
			// 	this.setState({ loading: false, erreur: error });
			// 	Alert.alert('Erreur survennue', this.state.erreur);
			// }
		} else {
			this.setState({ loading: false });
			Alert.alert('Erreur survennue', 'Tous les champs sont requis');
		}
	}

	render() {
		return (
			<Container style={styles.container}>
				<StatusBar hidden={true} />
				<Header style={styles.header}>
					<Left>
						<Button transparent onPress={() => this.props.navigation.goBack()}>
							<MaterialIcon name="arrow-back" size={25} fontWeight="900" color="#FFF" />
						</Button>
					</Left>
					<Body>
						<Title>Mobile Number</Title>
					</Body>
					<Right>
						<Button transparent>
							<Icon name="share-alt" size={25} style={{ color: '#FFF' }} />
						</Button>
					</Right>
				</Header>
				<Content contentContainerStyle={{flex: 1, justifyContent: 'center'}}>
					<View
						style={styles.centeredContent}
					>
						<View style={{ alignContent: 'center' }}>
							<Text style={{ fontWeight: '900', textAlign: 'center', color: '#00BF9A', fontSize: 18 }}>
								Numero mobile pour le paiement
							</Text>
						</View>
						<View style={loginCss.inputWrap}>
							<View style={loginCss.iconWrap}>
								<MaterialIcon name="call" size={20} color="#00BF9A" />
							</View>
							<TextInput
								placeholder="Phone Number"
								keyboardType="numeric"
								style={loginCss.input}
								autoFocus={false}
								onChangeText={phone => this.setState({ phone: phone })}
							/>
						</View>
						<View style={loginCss.seperator} />
						<View style={{ alignItems: 'flex-end' }}>
							<Button success onPress={() => this._procedAchat()} style={{ alignSelf: 'flex-end' }}>
								<Text style={{ color: '#ffffff', fontWeight: '800' }}>Acheter</Text>
							</Button>
							<View style={{ flex: 1 }} />
						</View>
					</View>
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

//make this component available to the app
export default AddMobileNumber;
