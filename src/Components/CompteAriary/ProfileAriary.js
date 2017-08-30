//import liraries
import React, { Component } from 'react';
import {
	Container,
	Header,
	Title,
	Button,
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
	StatusBar
} from 'react-native';

import Login from '../CompteAriary/LoginAriary';
import Icon from 'react-native-vector-icons/FontAwesome';
import loginCss from '../../assets/css/loginCss';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';
// create a component
class ProfileAriary extends Component {
	constructor() {
		super();
		this.state = {
			loading: false,
			pseudo: '',
			code: '',
			nom: '',
			solde: ''
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
				nom: userData.nom,
				pseudo: userData.username,
				solde: userData.solde,
				code: userData.code
			});
		} catch (error) {
			this.setState({ nom: error, code: 'diso' });
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
						<Title>Mon Profile</Title>
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
					<View>
						<View style={{padding: 15, width: '100%' }}>
							<View style={{alignItems: 'center', justifyContent: 'center' }}>
								<View style={loginCss.imageLogin}>
									<Icon name="user-circle-o" size={130} color="#00BF9A" />
								</View>
							</View>
						</View>
						<View style={{justifyContent: 'center' }}>
							<View style={styles.textbienvenue}>
								<MaterialIcon name="done" color="#009688" size={30} style={{ fontWeight: '900' }} />
								<Text style={{ fontSize: 18 }}>Nom:</Text>
								<Text style={{ color: '#009688', fontSize: 18, textAlign: 'right' }}>
									{this.state.nom}
								</Text>
							</View>
							<View style={styles.textbienvenue}>
								<MaterialIcon name="done" color="#009688" size={30} style={{ fontWeight: '900' }} />
								<Text style={{ fontSize: 18 }}>Pseudo:</Text>
								<Text style={{ color: '#009688', fontSize: 18, textAlign: 'right' }}>
									{this.state.pseudo}
								</Text>
							</View>
							<View style={styles.textbienvenue}>
								<MaterialIcon name="done" color="#009688" size={30} style={{ fontWeight: '900' }} />
								<Text style={{ fontSize: 18 }}>Numéro de compte:</Text>
								<Text style={{ color: '#009688', fontSize: 18, textAlign: 'right' }}>
									{this.state.code}
								</Text>
							</View>
						</View>

						<View style={loginCss.seperator} />

						<View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
							<TouchableHighlight style={[loginCss.toutchable, { width: '49%', marginRight: '1%' }]}>
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
									<MaterialIcon name="edit" size={20} color="#fff" />
									<Text style={{ color: '#ffffff', fontWeight: '900' }}>Edit Password</Text>
								</View>
							</TouchableHighlight>
							<TouchableHighlight style={[loginCss.toutchable, { width: '49%', marginLeft: '1%' }]}>
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
										source={require('../../assets/images/ariary.png')}
										resizeMode="contain"
									/>
									<Text style={{ color: '#ffffff', fontWeight: '900' }}>Mon solde</Text>
								</View>
							</TouchableHighlight>
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
export default ProfileAriary;
