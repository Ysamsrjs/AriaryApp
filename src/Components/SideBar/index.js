import React, { Component } from 'react';
import { Image, View, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
	Content,
	Text,
	List,
	ListItem,
	Container,
	Left,
	Right,
	Badge,
	Button,
	StyleProvider,
	getTheme,
	variables
} from 'native-base';

import styles from './style';

const datas = [
	{
		name: 'Mon Profile',
		route: 'Profile',
		icon: 'user',
		bg: '#DA4437'
	},
	{
		name: "Achat bons d'achat",
		route: 'Achat',
		icon: 'shopping-bag',
		bg: '#C5F442'
	},
	{
		name: 'Offrir à un ami',
		route: 'Offrir',
		icon: 'handshake-o',
		bg: '#C5F442'
	},
	{
		name: 'Statistique App',
		route: 'Statistique',
		icon: 'bar-chart-o',
		bg: '#4DCAE0'
	},
	{
		name: 'A propos',
		route: 'Apropos',
		icon: 'hand-o-right',
		bg: '#477EEA'
	},
	{
		name: 'Se Deconnecter',
		route: 'Deconnexion',
		icon: 'sign-out',
		bg: '#477EEA'
	}
];

class SideBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			shadowOffsetWidth: 1,
			shadowRadius: 4,
			nom: 'Izaho',
			username:'',
			solde:'',
			message:'',
			code:'',
			data:null
		};
	}

	async componentWillMount() {
		try {
			let dataUser = await AsyncStorage.getItem('dataUser');
			if(dataUser==null){
				this.props.navigation.navigate('Home');
			}
			let userData = await JSON.parse(dataUser);
			this.setState({
				nom:userData.nom,
				username:userData.username,
				solde:userData.solde,
				code:userData.code,
				data:userData
			})
			this.setState({data:userData});
		} catch (error) {
			this.setState({nom:error,code:'diso'});
		}
	}

	render() {
		return (
			<Container>
				<Content bounces={false} style={{ flex: 1, backgroundColor: '#fff', top: -1 }}>
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
									<Text
										style={{ color: '#FFF', fontWeight: '900', fontSize: 20, textAlign: 'right' }}
									>
										Achat des bons d'achat
									</Text>
									<Text
										style={{ color: '#FFF', fontWeight: '900', fontSize: 20, textAlign: 'right' }}
									>
										({this.state.code})
									</Text>
								</View>
							</View>
						</View>
					</View>
					<List
						dataArray={datas}
						renderRow={data =>
							<ListItem button noBorder onPress={() => this.props.navigation.navigate(data.route)}>
								<Left>
									<Icon
										active
										name={data.icon}
										style={{ color: '#00BF9A', fontSize: 26, width: 30 }}
									/>
									<Text style={styles.text}>
										{data.name}
									</Text>
								</Left>
								{data.types &&
									<Right style={{ flex: 1 }}>
										<Badge
											style={{
												borderRadius: 3,
												height: 25,
												width: 72,
												backgroundColor: data.bg
											}}
										>
											<Text style={styles.badgeText}>{`${data.types} Types`}</Text>
										</Badge>
									</Right>}
							</ListItem>}
					/>
				</Content>
			</Container>
		);
	}
}

export default SideBar;
