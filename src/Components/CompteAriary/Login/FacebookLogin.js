import React from 'react';
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
	TouchableOpacity,
	Alert,
	BackHandler,
	WebView
} from 'react-native';

import Expo from 'expo';

const APP_ID="1534612943226959";
import Icon from 'react-native-vector-icons/FontAwesome';
import loginCss from '../../../assets/css/loginCss';

const HEADER = '#3b5998';
const BGWASH = 'rgba(255,255,255,0.8)';
const DISABLED_WASH = 'rgba(255,255,255,0.25)';

const TEXT_INPUT_REF = 'urlInput';
const WEBVIEW_REF = 'webview';
const DEFAULT_URL = 'http://m.facebook.com';

class FacebookLogin extends React.Component {
	constructor() {
		super();
		this.state = {
			url: '',
			status: 'No Page Loaded',
			loading: true,
			scalesPageToFit: true,
			inputText: ''
		};
	}

	async logIn() {
		const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(APP_ID, {
			permissions: ['public_profile'],
		  });
		if (type === 'success') {
		  // Get the user's name using Facebook's Graph API
		  const response = await fetch(
			`https://graph.facebook.com/me?access_token=${token}`);
		  Alert.alert(
			'Logged in!',
			`Hi ${(await response.json()).name}!`,
		  );
		}
	  }

	handleTextInputChange(event) {
		let url = event.nativeEvent.text;
		if (!/^[a-zA-Z-_]+:/.test(url)) {
			url = 'http://' + url;
		}
		this.setState({ url: url });
	}

	reload() {
		this.refs[WEBVIEW_REF].reload();
	}

	changeVisibility() {
		this.props.changeVisible();
	}

	onNavigationStateChange(navState) {
		this.setState({
			url: navState.url
		});
	}
	onLoad(test){
		this.setState({url:test.url})
	}
	render() {
		return (
			<View>
				<ScrollView style={{ backgroundColor: '#eee' }}>
					<View style={[loginCss.loginScreen, { height: Dimensions.get('window').height - 50 }]}>
						<View style={[styles.addressBarRow]}>
							<TextInput
								ref={TEXT_INPUT_REF}
								autoCapitalize="none"
								editable={false}
								defaultValue={this.state.url}
								onChange={this.handleTextInputChange.bind(this)}
								style={styles.addressBarTextInput}
							/>
						</View>
						<WebView
							scrollEnabled={false}
							startInLoadingState={true}
							automaticallyAdjustContentInsets={true}
							source={{ uri: 'https://m.facebook.com'}}
							ref={WEBVIEW_REF}
							automaticallyAdjustContentInsets={false}
							javaScriptEnabled={true}
							domStorageEnabled={true}
							decelerationRate="normal"
							onNavigationStateChange={this.onNavigationStateChange.bind(this)}
							onShouldStartLoadWithRequest={true}
							scalesPageToFit={this.state.scalesPageToFit}
						/>
						<View>
							<TouchableHighlight
								style={[loginCss.toutchable, { width: '100%' }]}
								onPress={this.logIn.bind(this)}
							>
								<View
									style={[
										loginCss.buttonLogin,
										{
											backgroundColor: '#F44336'
										}
									]}
								>
									<Text style={{ color: '#ffffff', fontWeight: '900' }}>Annuler</Text>
								</View>
							</TouchableHighlight>
						</View>
					</View>
					<View>
						<TextInput 
							defaultValue={this.state.url}
							style={{height:40}}
						/>
					</View>
				</ScrollView>
			</View>
		);
	}
}
export default FacebookLogin;
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: HEADER
	},
	addressBarRow: {
		flexDirection: 'row',
		padding: 8,
		backgroundColor: '#3b5998'
	},
	webView: {
		backgroundColor: 'rgba(255,255,255,0.8)',
		height: 350
	},
	addressBarTextInput: {
		backgroundColor: 'rgba(255,255,255,0.8)',
		borderColor: 'transparent',
		borderRadius: 3,
		borderWidth: 1,
		height: 40,
		paddingLeft: 10,
		paddingTop: 3,
		paddingBottom: 0,
		flex: 1,
		fontSize: 14
	},
	navButton: {
		width: 20,
		padding: 3,
		marginRight: 3,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: BGWASH,
		borderColor: 'transparent',
		borderRadius: 3
	},
	disabledButton: {
		width: 20,
		padding: 3,
		marginRight: 3,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: DISABLED_WASH,
		borderColor: 'transparent',
		borderRadius: 3
	},
	goButton: {
		height: 24,
		padding: 3,
		marginLeft: 8,
		alignItems: 'center',
		backgroundColor: BGWASH,
		borderColor: 'transparent',
		borderRadius: 3,
		alignSelf: 'stretch'
	},
	statusBar: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingLeft: 5,
		height: 22
	},
	statusBarText: {
		color: 'white',
		fontSize: 13
	},
	spinner: {
		width: 20,
		marginRight: 6
	},
	buttons: {
		flexDirection: 'row',
		height: 30,
		backgroundColor: 'black',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	button: {
		flex: 0.5,
		width: 0,
		margin: 5,
		borderColor: 'gray',
		borderWidth: 1,
		backgroundColor: 'gray'
	}
});
