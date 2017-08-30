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

import Login from '../CompteAriary/LoginAriary';
import Icon from 'react-native-vector-icons/FontAwesome';
import loginCss from '../../assets/css/loginCss';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import ViaMobileMoney from './ViaMobileMoney';
import ViaPaypal from './ViaPaypal';

import styles from './Styles';
// create a component
class MainAchat extends Component {
	constructor() {
		super();
		this.state = {
			loading: false
		};
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
						<Title>Bons d'achat</Title>
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
				<Tabs style={{ elevation: 3 }}>
					<Tab
						heading={
							<TabHeading style={{ backgroundColor: '#00BF9A' }}>
								<Text style={{ color: '#fff' }}>Via Mobile Money</Text>
							</TabHeading>
						}
					>
						<ViaMobileMoney navigation={this.props.navigation} />
					</Tab>
					<Tab
						heading={
							<TabHeading style={{ backgroundColor: '#00BF9A' }}>
								<Text style={{ color: '#fff' }}>Via Visa/Paypal</Text>
							</TabHeading>
						}
					>
						<ViaPaypal navigation={this.props.navigation} />
					</Tab>
				</Tabs>
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
export default MainAchat;
