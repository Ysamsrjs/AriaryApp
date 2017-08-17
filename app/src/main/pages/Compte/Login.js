
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
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import loginCss from '../../assets/css/loginCss';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      userPass: ''
    }
  }
  render() {
    return (
      <ScrollView style={{backgroundColor:'#eee'}}>
        <View style={loginCss.loginScreen}>
          <View style={loginCss.wrapper}>
            <View style={{ alignItems: 'center', justifyContent: 'center', paddingTop: 5 }}>
              <View style={loginCss.imageLogin}>
                {/* <Image
                  style={{ width: 150, height: 150 }}
                  source={require('../../assets/image/ariary.png')}
                /> */}
                <Icon name="user-circle-o" size={150} color="#00BF9A"/>
              </View>
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                {/* <Text style={{ fontSize: 15, color: 'green' }}>Une Soulution de payement à Madagascar</Text> */}
                <Text style={{ fontSize: 20, color: '#00BF9A', fontWeight: 'bold',padding:10}}>Connexion Ariary</Text>
              </View>
            </View>
            <View style={loginCss.inputWrap}>
              <View style={loginCss.iconWrap}>
                <Icon name='user' size={20} color="#00BF9A" />
              </View>
              <TextInput
                placeholder='numéro ou e-mail'
                style={loginCss.input}
              />
            </View>
            <View style={loginCss.inputWrap}>
              <View style={loginCss.iconWrap}>
                <Icon name='lock' size={20} color="#00BF9A" />
              </View>
              <TextInput
                placeholder='Mot de passe'
                secureTextEntry
                style={loginCss.input}
              />
            </View>

            <View style={loginCss.seperator} />

            <TouchableHighlight style={loginCss.toutchable} onPress={this.tweet}>
              <View style={loginCss.instructions}>
                <Text style={loginCss.textforgot}>Mot de passe oublié?</Text>
              </View>
            </TouchableHighlight>

            <View style={loginCss.seperator} />

            <TouchableHighlight style={loginCss.toutchable} onPress={this.facebookShare}>
              <View style={loginCss.buttonLogin}>
                {/* <Icon name="sign-in" size={30} color="#ffffff" style={{paddingRight:5}} /> */}
                <Image
                  style={{ width: 25, height: 25 ,marginRight:5}}
                  source={require('../../assets/image/ariary.png')}
                  resizeMode='contain'
                />
                <Text style={{ color: '#ffffff', fontWeight: '800' }}>Se connecter</Text>
              </View>
            </TouchableHighlight >

            <View style={loginCss.seperator} />

            {/* <TouchableHighlight style={loginCss.toutchable} onPress={this.facebookShare}>
              <View style={loginCss.buttonFacebook}>
                <Icon name="facebook-official" size={30} color="#ffffff"  style={{paddingRight:5}}/>
                <Text style={{ color: '#ffffff', fontWeight: '800' }}>Connexion via facebook</Text>
              </View>
            </TouchableHighlight>

            <View style={loginCss.seperator} /> */}

            {/* <TouchableHighlight style={loginCss.toutchable} onPress={this.tweet}>
              <View style={loginCss.signUp}>
                <Icon name="user-plus" size={30} color="#ffffff"  style={{paddingRight:5}}/>
                <Text style={{ color: '#ffffff', fontWeight: '800' }}>S'inscrire à Ariary.net</Text>
              </View>
            </TouchableHighlight> */}

            <View style={loginCss.seperator} />

            <TouchableHighlight style={loginCss.toutchable} onPress={this.tweet}>
              <View style={loginCss.annuler}>
                <Icon name="mail-reply" size={30} color="#ffffff"  style={{paddingRight:5}}/>
                <Text style={{ color: '#ffffff', fontWeight: '800' }}>Annuler</Text>
              </View>
            </TouchableHighlight>
            {/* <View style={{justifyContent:'flex-end',alignItems:'flex-end',padding:10}}>
              <Text style={{justifyContent:'flex-end',color:"#666",alignItems:'flex-end',fontSize:10}}>contact:ariary@ariary.net | site:ariary.net</Text>
            </View> */}
          </View>
        </View>
      </ScrollView>
    );
  }
}
export default Login;