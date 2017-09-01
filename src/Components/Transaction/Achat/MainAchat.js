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
	Modal,
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
	StatusBar,
	Share
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import loginCss from '../../../assets/css/loginCss';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import ViaMobileMoney from './Mobile/ViaMobileMoney';
import ViaPaypal from './Paypal/ViaPaypal';
import TestShare from '../../AppShare/testShare';

import styles from './Styles';
// create a component
class MainAchat extends Component {
	constructor() {
		super();
		this.state = {
			loading: false,
			isVisible: false,
			result:''
		};
	}

	_showShareMenu(result) {
		this.setState({ result: result });
	}
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
			<Container style={styles.container}>
				<StatusBar hidden={true} />
				<Header style={styles.header}>
					<Left>
						<Button transparent onPress={() => this.props.navigation.navigate('DrawerOpen')}>
							<Icon name="bars" size={25} style={{ color: '#FFF' }} />
						</Button>
					</Left>
					<Body>
						<Title>Bons d'achat</Title>
					</Body>
					<Right>
						<Button transparent onPress={() => this._shareTextWithTitle()}>
							<Icon name="share-alt" size={25} style={{ color: '#FFF' }} />
						</Button>
						<Button transparent>
							<MaterialIcon size={30} name="settings" style={{ color: '#FFF' }} onPress={()=>this.props.navigation.navigate('Config')}/>
						</Button>
					</Right>
				</Header>
				<Tabs style={{ elevation: 3 }}>
					<Tab
						heading={
							<TabHeading style={styles.modeaba}>
								<Text style={{ color: '#fff' }}>Via Mobile Money</Text>
							</TabHeading>
						}
					>
						<ViaMobileMoney navigation={this.props.navigation} />
					</Tab>
					<Tab
						heading={
							<TabHeading style={styles.modeaba}>
								<Text style={{ color: '#fff' }}>Via Visa/Paypal</Text>
							</TabHeading>
						}
					>
						<ViaPaypal navigation={this.props.navigation} />
					</Tab>
				</Tabs>
				<View>
					<View><Text>{this.state.result}</Text></View>
					<Modal style={modal.main} animationType={'slide'} transparent={true} visible={this.state.isVisible}>
						<View style={[modal.contenuemodal, { backgroundColor: 'rgba(44, 62, 80,0.7)' }]}>
							<TestShare />
						</View>
					</Modal>
				</View>
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
const modal = StyleSheet.create({
	annuler: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		height: 50,
		backgroundColor: '#FFC107',
		paddingHorizontal: 20
	},
	header: {
		backgroundColor: '#009688',
		padding: 10,
		width: '90%'
	},
	content: {
		flex: 1,
		backgroundColor: '#eee'
	},
	footer: {
		backgroundColor: '#009688',
		padding: 20
	},
	contenuemodal: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	page: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(0,0,0,0.5)'
	},
	main: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(0,0,0,0.5)'
	}
});
export default MainAchat;
