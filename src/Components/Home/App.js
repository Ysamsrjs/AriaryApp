//import liraries
//RJS
import React from 'react';

import { Platform } from 'react-native';
import { Root } from 'native-base';
import { StackNavigator } from 'react-navigation';

import Drawer from '../NavigationAriary/Drawer';
import MainAchat from '../Achat/MainAchat';
import Offrir from '../Transaction/Offrir';
import ProfileAriary from '../CompteAriary/ProfileAriary';
import Statistique from '../Statistique/Statistique';
import InscriptionArariary from '../CompteAriary/Inscription/InscriptionAriary';
import EditPassword from '../CompteAriary/Config/EditPassword';
import EditPhone from '../CompteAriary/Config/EditPhone';
import AddMobileNumber from '../Achat/AddMobileNumber';
import Accueil from './Accueil';

const App = new StackNavigator(
	{
		Drawer: { screen: Drawer },

		Home: { screen: Accueil },

		Achat: { screen: MainAchat },
		AddMobileNumber: { screen: AddMobileNumber },

		Offrir: { screen: Offrir },

		Profile: { screen: ProfileAriary },
		EditPassword: { screen: EditPassword },
		EditPhone: { screen: EditPhone },

		Statistique: { screen: Statistique },

		InscriptionArariary: { screen: InscriptionArariary }
	},
	{
		initialRouteName: 'Drawer',
		headerMode: 'none'
	}
);
export default App;
