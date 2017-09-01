//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, TextInput, Text,Alert } from 'react-native';
import { Container, Header, Title, Content, Button, Icon, Left, Right, Body } from 'native-base';

import styles from './styles';

import FontIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import loginCss from '../../../assets/css/loginCss';
// create a component
class Consulter extends Component {
	constructor() {
		super();
		this.state = {
			password: '',
			solde:500,
			loading: false
		};
	}
	showSolde(){
		if(this.state.password!=null && this.state.password!=''){
			Alert.alert('Solde','Votre solde est de'+ this.state.solde+' Ariary');
			this.props.navigation.goBack();
		}else{
			Alert.alert('Erreur','Votre Mot de passe est incorect');
		}
	}
	getSolde(){

	}
	render() {
		return (
			<Container style={styles.container}>
				<Header style={styles.header}>
					<Left>
						<Button transparent onPress={() => this.props.navigation.goBack()}>
							<Icon name="arrow-back" style={{ color: '#FFF' }} />
						</Button>
					</Left>
					<Body>
						<Title>Consultation solde</Title>
					</Body>
					<Right />
				</Header>
				<Content padder contentContainerStyle={{ flex: 1, justifyContent: 'center' }}>
					<View
						style={{
							justifyContent: 'center',
							alignContent: 'center',
							padding: 15
						}}
					>
						<View style={{ padding: 15, width: '100%' }}>
							<View style={{ alignItems: 'center', justifyContent: 'center' }}>
								<View style={loginCss.imageLogin}>
									<Text>Entrez mot de passe</Text>
								</View>
							</View>
						</View>
						<View style={loginCss.inputWrap}>
							<View style={loginCss.iconWrap}>
								<MaterialIcon name="lock" size={20} color="#00BF9A" />
							</View>
							<TextInput
								placeholder="Nouveau mot de passe"
								secureTextEntry
								onChangeText={password => this.setState({ password })}
								style={loginCss.input}
								secureTextEntry={true}
								returnKeyType='done'
								onEndEditing={() => this.showSolde()}
							/>
						</View>
					</View>
				</Content>
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
export default Consulter;
