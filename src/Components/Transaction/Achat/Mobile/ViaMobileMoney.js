//import liraries
import React, { Component } from 'react';
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
import { Content, Button } from 'native-base';

import Icon from 'react-native-vector-icons/FontAwesome';

import loginCss from '../../../../assets/css/loginCss';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

// create a component
class ViaMobileMoney extends Component {
	constructor() {
		super();
		this.state = {
			montant: '',
			password: ''
		};
	}
	_getMontant() {
		return this.state.montant;
	}
	_checkMontant() {
		let ret = false;
		if (this.state.montant != '' && this.state.montant != null && !isNaN(this.state.montant)) {
			ret = true;
		}
		return ret;
	}
	_checkPassword() {
		let ret = false;
		if (this.state.password != '' && this.state.password != null) {
			ret = true;
		}
		return ret;
	}
	_goNext() {
		this.props.navigation.navigate('AddMobileNumber', {
			montant: this.state.montant,
			password: this.state.password
		});
	}
	_goBack() {
		this.props.navigation.navigate('Achat');
	}
	_validate() {
		if (this._checkMontant() && this._checkPassword()) {
			this._goNext();
		} else {
			Alert.alert('Erreur', 'Montant et/ou mot de passe incorect,veuillez reéssayer!!!');
		}
	}
	render() {
		return (
			<Content padder contentContainerStyle={{flex: 1, justifyContent: 'center'}}>
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
						Payez vos bon Achats en toute sécurité avec votre compte Ariary en utilisant votre compte Mobile Money
						</Text>
					</View>
					<View style={loginCss.inputWrap}>
						<View style={loginCss.iconWrap}>
							<Image
								style={{ width: 20, height: 20 }}
								source={require('../../../../assets/images/ariary.png')}
								resizeMode="contain"
							/>
						</View>
						<TextInput
							placeholder="en Ariary(1 Bon = 1 Ariary)"
							keyboardType="numeric"
							style={loginCss.input}
							autoFocus={false}
							onChangeText={montant => this.setState({ montant })}
							returnKeyType="next"
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
							onChangeText={password => this.setState({ password })}
							style={loginCss.input}
							secureTextEntry={true}
						/>
					</View>

					<View style={loginCss.seperator} />
					<View style={{ alignItems: 'flex-end' }}>
						<Button success onPress={() => this._validate()} style={{ alignSelf: 'flex-end' }}>
							<Text style={{ color: '#ffffff', fontWeight: '800' }}>Valider</Text>
						</Button>
						<View style={{ flex: 1 }} />
					</View>
				</View>
			</Content>
		);
	}
}
//make this component available to the app
export default ViaMobileMoney;
