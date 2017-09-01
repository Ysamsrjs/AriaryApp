//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, StatusBar, Text, Platform, Share, TouchableHighlight, Image } from 'react-native';
import {
	Container,
	Header,
	Title,
	Content,
	Button,
	ListItem,
	Icon,
	Badge,
	Left,
	Right,
	Body,
	Switch,
	Radio,
	Picker,
	Separator
} from 'native-base';
import FontIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import loginCss from '../../../assets/css/loginCss';

// create a component
const Item = Picker.Item;
class MainConfig extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedItem: undefined,
			selected1: 'key1',
			results: {
				items: []
			}
		};
	}

	onValueChange(value) {
		this.setState({
			selected1: value
		});
	}
	_showShareMenu(result) {}
	_shareTextWithTitle() {
		Share.share(
			{
				message: 'This message has a title',
				title: 'Best title ever!',
				url: 'http://test.com'
			},
			{
				dialogTitle: 'Partager avec:',
				excludedActivityTypes: ['com.apple.UIKit.activity.PostToTwitter', 'com.apple.uikit.activity.mail'],
				tintColor: 'green'
			}
		)
			.then(this._showShareMenu)
			.catch(err => console.log(err));
	}
	render() {
		return (
			<Container style={styles.container} contentContainerStyle={{ justifyContent: 'center' }}>
				<StatusBar hidden={true} />
				<Header style={styles.header}>
					<Left>
						<Button transparent onPress={() => this.props.navigation.goBack()}>
							<Icon name="arrow-back" size={25} style={{ color: '#FFF' }} />
						</Button>
					</Left>
					<Body>
						<Title>Parametre de compte</Title>
					</Body>
					<Right>
						<Button transparent onPress={() => this._shareTextWithTitle()}>
							<FontIcon name="share-alt" size={25} style={{ color: '#FFF' }} />
						</Button>
					</Right>
				</Header>

				<Content contentContainerStyle={{ justifyContent: 'center' }}>
					<Separator bordered noTopBorder>
						<Text style={{ alignSelf: 'flex-end', fontSize: 18, color: '#666', paddingRight: 15 }}>
							Compte Ariary
						</Text>
					</Separator>

					<ListItem padder icon>
						<Left>
							<Image
								source={require('../../../assets/images/ariary.png')}
								style={{ width: 25, height: 25 }}
								resizeMode="contain"
							/>
						</Left>
						<Body>
							<View>
								<Text>Numéro de compte</Text>
								<Text style={{ color: '#666', fontSize: 12 }}>Test</Text>
							</View>
						</Body>
						<Right />
					</ListItem>
					<ListItem padder icon>
						<Left>
							<View>
								<MaterialIcon size={25} color="#00BF9A" name="person" />
							</View>
						</Left>
						<Body>
							<View>
								<Text>Nom</Text>
								<Text style={{ color: '#666', fontSize: 12 }}>Test</Text>
							</View>
						</Body>
						<Right />
					</ListItem>
					<ListItem padder icon>
						<Left>
							<View>
								<MaterialIcon size={25} color="#c8b900" name="euro-symbol" />
							</View>
						</Left>
						<Body>
							<View>
								<Text>Mon Solde</Text>
								<Text style={{ color: '#666', fontSize: 12 }}>######</Text>
							</View>
						</Body>
						<Right>
							<TouchableHighlight
								onPress={() => this.props.navigation.navigate('ConsulterSolde')}
								style={{ backgroundColor: 'transparent' }}
							>
								<Text style={{ color: 'rgba(52, 152, 219,1.0)', fontWeight: '900' }}>Consulter</Text>
							</TouchableHighlight>
						</Right>
					</ListItem>

					<Separator bordered noTopBorder>
						<Text style={{ alignSelf: 'flex-end', fontSize: 18, color: '#666', paddingRight: 15 }}>
							Configuration de compte
						</Text>
					</Separator>
					<ListItem padder icon>
						<Left>
						<Button style={{ backgroundColor: '#00BF9A' }}>
								<MaterialIcon size={20} color="#fff" name="person" />
							</Button>
						</Left>
						<Body>
							<View>
								<Text>Pseudo</Text>
								<Text style={{ color: '#666', fontSize: 12 }}>Test</Text>
							</View>
						</Body>
						<Right>
							<TouchableHighlight onPress={() => this.props.navigation.navigate('EditPseudo')}>
								<MaterialIcon primary size={25} color="rgba(52, 152, 219,1.0)" name="mode-edit" />
							</TouchableHighlight>
						</Right>
					</ListItem>
					<View style={{ marginVertical: 5 }} />

					<ListItem padder icon>
						<Left>
							<Button style={{ backgroundColor: '#FF9501' }}>
								<MaterialIcon size={20} color="#fff" name="mail" />
							</Button>
						</Left>
						<Body>
							<View>
								<Text>Email</Text>
								<Text style={{ color: '#666', fontSize: 12 }}>Test</Text>
							</View>
						</Body>
						<Right>
							<TouchableHighlight onPress={() => this.props.navigation.navigate('EditMail')}>
								<MaterialIcon primary size={25} color="rgba(52, 152, 219,1.0)" name="mode-edit" />
							</TouchableHighlight>
						</Right>
					</ListItem>
					<View style={{ marginVertical: 5 }} />

					<ListItem padder icon>
						<Left>
							<Button style={{ backgroundColor: '#4CDA64' }}>
								<MaterialIcon size={20} color="#fff" name="call" />
							</Button>
						</Left>
						<Body>
							<View>
								<Text>Tél</Text>
								<Text style={{ color: '#666', fontSize: 12 }}>Test</Text>
							</View>
						</Body>
						<Right>
							<TouchableHighlight onPress={() => this.props.navigation.navigate('EditPhone')}>
								<MaterialIcon primary size={25} color="rgba(52, 152, 219,1.0)" name="mode-edit" />
							</TouchableHighlight>
						</Right>
					</ListItem>

					<View style={{ marginVertical: 5 }} />

					<ListItem contentContainerStyle={{ paddingVertical: 5 }} icon>
						<Left>
							<Button style={{ backgroundColor: 'rgba(231, 76, 60,1.0)' }}>
								<MaterialIcon size={20} color="#fff" name="lock" />
							</Button>
						</Left>
						<Body>
							<View>
								<Text>Mot de passe</Text>
								<Text style={{ color: '#666', fontSize: 12, fontWeight: '900' }}>......</Text>
							</View>
						</Body>
						<Right>
							<TouchableHighlight onPress={() => this.props.navigation.navigate('EditPassword')}>
								<MaterialIcon primary size={25} color="rgba(52, 152, 219,1.0)" name="mode-edit" />
							</TouchableHighlight>
						</Right>
					</ListItem>

					<Separator bordered>
						<Text style={{ alignSelf: 'flex-end', fontSize: 18, color: '#666', paddingRight: 15 }}>
							Appareil connectés
						</Text>
					</Separator>

					<ListItem padder icon>
						<Left>
							<Button style={{ backgroundColor: 'transparent' }}>
								<MaterialIcon size={30} color="#00BF9A" name="devices" />
							</Button>
						</Left>
						<Body>
							<Text>Device 1</Text>
						</Body>
						<Right>
							<Text style={{ color: '#666' }}>13h 00</Text>
						</Right>
					</ListItem>
					<View style={{ marginVertical: 5 }} />
					<ListItem padder icon>
						<Left>
							<Button style={{ backgroundColor: 'transparent' }}>
								<MaterialIcon size={30} color="#00BF9A" name="devices" />
							</Button>
						</Left>
						<Body>
							<Text>Device 2</Text>
						</Body>
						<Right>
							<Text style={{ color: '#666' }}>13h 00</Text>
						</Right>
					</ListItem>
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
export default MainConfig;
