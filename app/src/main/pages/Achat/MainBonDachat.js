
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
  Alert,
  Modal,
  WebView,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Login from '../../pages/Compte/Login';
import RegistrationAriary from '../../pages/Compte/RegistrationAriary';
import FacebookModal from '../../pages/test/Modaltest';
import {styles,modal} from '../../assets/css/homeCss';

import WebViewExample from '../../pages/WebViewExample';

const fbView = <WebViewExample />;
const lgView = <Login />;

const Home = React.createClass({
  getInitialState: function () {
    return {
      componentSelected: 'mainachat'
    }
  },
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  },
  changeComponent: function (component) {
    this.setState({
      componentSelected: component
    })
  },

  renderComponent: function (component) {
    if (component == 'mainachat') {
      return <MainBonDachat changeComponent={this.changeComponent} />
    } else if (component == 'connexion') {
      return <Login />
    } else if (component == 'inscription') {
      return <RegistrationAriary />
    }
  },
  render: function () {
    return (
      <View>
        {this.renderComponent(this.state.componentSelected)}
      </View>
    );
  }
});

class MainBonDachat extends React.Component {
  constructor() {
    super();
    this.state = {
      userPhone: '034 84 002 78',
      modalVisible: false,
      componentsView: null,

    }
  }

  setModalVisible(visible, componenets) {
    this.setState({
      modalVisible: visible,
      componentsView: componenets
    });
  }
  connexionAriary() {
    Alert.alert(
      'Redirection Page',
      'Contenue de l\'informations sur Ariary.net',
      [
        { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: false }
    )
  }
  render() {
    return (
      <ScrollView style={{ backgroundColor: '#eee' }}>
        <View style={styles.MainBonDachatScreen}>
          <View style={styles.wrapper}>
            <View style={{ alignItems: 'center', justifyContent: 'center', paddingTop: 5 }}>
              <View style={styles.imageMainBonDachat}>
                <Image
                  style={{ width: 100, height: 100 }}
                  source={require('../../assets/image/ariary.png')}
                  resizeMode='contain'
                />
              </View>
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 15, color: 'green' }}>Une Solution de payement en ligne</Text>
              </View>
            </View>
            <View style={styles.inputWrap}>
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: '#666', fontWeight: 'bold', fontSize: 18 }}>Votre identifiant:</Text>
              </View>
              <TextInput
                value="123456"
                editable={false}
                style={{ flex: 1, paddingHorizontal: 0, fontSize: 20, textAlign: 'right', color: '#00aced', fontWeight: 'bold' }}
              />
            </View>
            <View style={styles.inputWrap}>
              <View style={styles.iconWrap}>
                <Icon name='phone' size={20} color="#00BF9A" />
              </View>
              <TextInput
                placeholder='ex:(+261) 34 84 002 78'
                style={styles.input}
              />
            </View>

            <View style={styles.seperator} />

            <TouchableHighlight style={styles.toutchable}>
              <View style={styles.buttonMainBonDachat}>
                <Text style={{ color: '#ffffff', fontWeight: '800' }}>Suivant</Text>
              </View>
            </TouchableHighlight >

            <View style={styles.seperator} />

            <View style={styles.instructions}>
              <Text style={{ color: '#666', fontWeight: 'bold', paddingVertical: 5 }}>
                Si vous avez déjà un compte Ariary
                </Text>
            </View>

            <View style={styles.seperator} />

            <TouchableHighlight style={styles.toutchable} onPress={() => { this.setModalVisible(true, lgView) }}>
              <View style={[styles.signIn,{borderRadius:50}]}>
                <Image
                  style={{ width: 25, height: 25, marginRight: 5 }}
                  source={require('../../assets/image/ariary.png')}
                  resizeMode='contain'
                />
                <Text style={{ color: '#ffffff', fontWeight: '800' }}>Se Connecter à Ariary.net</Text>
              </View>
            </TouchableHighlight>

            <View style={styles.seperator} />

            <TouchableHighlight style={styles.toutchable} onPress={() => { this.setModalVisible(true, fbView) }}>
              <View style={[styles.buttonFacebook,{borderRadius:50}]}>
                <Icon name="facebook-official" size={30} color="#ffffff" style={{ paddingRight: 5 }} />
                <Text style={{ color: '#ffffff', fontWeight: '800' }}>Connexion via facebook</Text>
              </View>
            </TouchableHighlight>

            <View style={styles.seperator} />

            <TouchableHighlight style={styles.toutchable} onPress={() => this.props.changeComponent('inscription')}>
              <View style={[styles.signUp,{backgroundColor:'transparent'}]}>
                <Icon name="user-plus" size={30} color="#00BF9A" style={{ paddingRight: 5 }} />
                <Text style={{ color: '#00BF9A', fontWeight: '800' }}>S'inscrire à Ariary</Text>
              </View>
            </TouchableHighlight>
            <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end', padding: 10 }}>
              <Text style={{ justifyContent: 'flex-end', color: "#666", alignItems: 'flex-end', fontSize: 10 }}>contact:ariary@ariary.net | site:ariary.net</Text>
            </View>
            <View>
              <Modal
                style={modal.main}
                animationType={"fade"}
                transparent={true}
                visible={this.state.modalVisible}
              >
                <View style={[modal.contenuemodal,{backgroundColor : 'rgba(44, 62, 80,0.7)'}]}>
                  <View style={[modal.header]}>
                    <TouchableHighlight onPress={() => { this.setModalVisible(!this.state.modalVisible) }}>
                      <Text style={{ textAlign: 'right', fontSize: 30, color: 'black' }}>x</Text>
                    </TouchableHighlight>
                  </View>
                  <View style={[modal.content,{backgroundColor : '#FFF'}]}>
                    {this.state.componentsView}
                  </View>
                </View>
              </Modal>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
export default Home;
