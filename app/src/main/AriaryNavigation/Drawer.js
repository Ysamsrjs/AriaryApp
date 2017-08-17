
import { View, Text, ScrollView, Image } from 'react-native';
import { DrawerNavigator, DrawerItems, StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import { getNavigationOptionsWithAction, getDrawerNavigationOptions, getDrawerConfig } from './Navigation';
import NavBarItem from './NavBarItem';
import drawerCss from '../assets/css/drawerCss';

import Home from '../pages/Achat/MainBonDachat';
import Achat from '../pages/Achat';
import Aide from '../pages/Aide';
import Configuration from '../pages/Configuration';
import Apropos from '../pages/Apropos';
import LogOut from '../pages/LogOut';
import Inscription from '../pages/Inscription';
import Offrir from '../pages/Offrir';
import PartagerBluetooth from '../pages/PartagerBluetooth';
import PartagerFacebook from '../pages/PartagerFacebook';
import PasswordConfig from '../pages/PasswordConfig';
import ProfileAriary from '../pages/ProfileAriary';


const getDrawerItem = (navigation) => (
  <NavBarItem
    iconName="bars"
    onPress={() => {
      navigation.navigate('DrawerOpen');
    }}
  />
);

const getRighDrawerItem = navigation => (
  <NavBarItem
    iconName="share-alt"
    onPress={() => {
      navigation.navigate('');
    }}
  />
);

const DrawerContent = (props) => (
  <ScrollView>
    <View style={drawerCss.viewHeader}>
      <Image source={require('../assets/image/nav.jpg')} style={drawerCss.headerImage}>
        <Text style={drawerCss.textHeader}>
          Ariary.net
        </Text>
      </Image>
    </View>
    <DrawerItems {...props} />
  </ScrollView>
)
// const getDrawerIcon = (iconName, tintColor) => <Icon name={iconName} size={20} color={tintColor} />;
// const MainBonDachatDrawerIcon = ({ tintColor }) => getDrawerIcon('home', '#00BF9A');
// const achatDrawerIcon = ({ tintColor }) => getDrawerIcon('shopping-bag', '#00BF9A');
// const profileDrawerIcon = ({ tintColor }) => getDrawerIcon('user', '#00BF9A');
// const offrirDrawerIcon = ({ tintColor }) => getDrawerIcon('handshake-o', '#00BF9A');
// const configDrawerIcon = ({ tintColor }) => getDrawerIcon('gear', '#00BF9A');

// const MainBonDachatNavOptions = getDrawerNavigationOptions('Ariary', '#00C853', 'white', MainBonDachatDrawerIcon);
// const profileNavOptions = getDrawerNavigationOptions('Mon rofile', '#00C853', 'white', profileDrawerIcon);
// const achatNavOptions = getDrawerNavigationOptions('Achat bon d\'achat', '#00C853', 'white', achatDrawerIcon);
// const offrirNavOptions = getDrawerNavigationOptions('Offrir à un ami', '#00C853', 'white', offrirDrawerIcon);
// const configNavOptions = getDrawerNavigationOptions('Configuration Compte', '#00C853', 'white', configDrawerIcon);

const Drawer = DrawerNavigator({
  Accueil: {
    initialRoute: true,
    screen: StackNavigator({
      Achat: {
        screen: Home,
        navigationOptions: ({ navigation }) => ({
          headerStyle: {
            backgroundColor: '#00C853',
          },
          headerTitleStyle: {
            color: 'white',
          },
          headerTintColor: 'white',
          headerLeft: getDrawerItem(navigation),
          headerRight: getRighDrawerItem(navigation),
          title: 'Ariary',
          drawerLabel: "Ariary",
          drawerIcon: ({ tintColor }) => <Icon name="home" size={20} color="#00BF9A" />
        })
      }
    })
  },
  Profile: {
    screen: StackNavigator({
      Achat: {
        screen: ProfileAriary,
        navigationOptions: ({ navigation }) => ({
          headerStyle: {
            backgroundColor: '#00C853',
          },
          headerTitleStyle: {
            color: 'white',
          },
          headerTintColor: 'white',
          headerLeft: getDrawerItem(navigation),
          headerRight: getRighDrawerItem(navigation),
          title: 'Mon Profile',
          drawerLabel: "Mon Profile",
          drawerIcon: ({ tintColor }) => <Icon name="user" size={20} color="#00BF9A" />
        })
      }
    })

  },
  "Achat Bon d'Achat": {
    screen: StackNavigator({
      Achat: {
        screen: Achat,
        navigationOptions: ({ navigation }) => ({
          headerStyle: {
            backgroundColor: '#00C853',
          },
          headerTitleStyle: {
            color: 'white',
          },
          headerTintColor: 'white',
          headerLeft: getDrawerItem(navigation),
          headerRight: getRighDrawerItem(navigation),
          title: 'Achat bon d\'achat',
          drawerLabel: "Bon d'achat",
          drawerIcon: ({ tintColor }) => <Icon name="shopping-bag" size={20} color="#00BF9A" />
        })
      }
    })
  },
  Offrir: {
    screen: StackNavigator({
      Achat: {
        screen: Offrir,
        navigationOptions: ({ navigation }) => ({
          headerStyle: {
            backgroundColor: '#00C853',
          },
          headerTitleStyle: {
            color: 'white',
          },
          headerTintColor: 'white',
          headerLeft: getDrawerItem(navigation),
          headerRight: getRighDrawerItem(navigation),
          title: 'Offrir à un ami',
          drawerLabel: "Offrir à un ami",
          drawerIcon: ({ tintColor }) => <Icon name="handshake-o" size={20} color="#00BF9A" />
        })
      }
    })
  },
  Parametre: {
    screen: StackNavigator({
      Achat: {
        screen: PasswordConfig,
        navigationOptions: ({ navigation }) => ({
          headerStyle: {
            backgroundColor: '#00C853',
          },
          headerTitleStyle: {
            color: 'white',
          },
          headerTintColor: 'white',
          headerLeft: getDrawerItem(navigation),
          headerRight: getRighDrawerItem(navigation),
          title: 'Parametre Compte',
          drawerLabel: "Parametre Compte",
          drawerIcon: ({ tintColor }) => <Icon name="gear" size={20} color="#00BF9A" />
        })
      }
    })
  },
}, {
    drawerWidth: 300,
    contentComponent: DrawerContent,
  });
Drawer.navigationOptions = ({ navigation }) => ({
  headerStyle: {
    backgroundColor: '#00C853',
  },
  headerTitleStyle: {
    color: 'white',
  },
  headerTintColor: 'white',
  headerLeft: getDrawerItem(navigation),
  headerRight: getRighDrawerItem(navigation),
});
export default Drawer;