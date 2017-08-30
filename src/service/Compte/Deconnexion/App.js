//import liraries
//RJS
import React from 'react';

import { Platform } from 'react-native';
import { Root } from 'native-base';
import { StackNavigator } from 'react-navigation';

import Drawer from '../../../Components/NavigationAriary/Drawer';
import MainAchat from '../../../Components/Achat/MainAchat';
import Offrir from '../../../Components/Transaction/Offrir';
import ProfileAriary from '../../../Components/CompteAriary/ProfileAriary';
import Statistique from '../../../Components/Statistique/Statistique';
import InscriptionArariary from '../../../Components/CompteAriary/Inscription/InscriptionAriary';
import EditPassword from '../../../Components/CompteAriary/Config/EditPassword';
import EditPhone from '../../../Components/CompteAriary/Config/EditPhone';
import AddMobileNumber from '../../../Components/Achat/AddMobileNumber';
//import Loader from '../../../Components/Home';

const AppNavigator = StackNavigator(
	{
		Drawer: { screen: Drawer },
		Achat: { screen: MainAchat },
		Offrir: { screen: Offrir },
		Profile: { screen: ProfileAriary },
		Statistique: { screen: Statistique },
		InscriptionArariary: { screen: InscriptionArariary },
		EditPassword: { screen: EditPassword },
		EditPhone: { screen: EditPhone },
		AddMobileNumber: { screen: AddMobileNumber },
		//Home: { screen: Loader }
	},
	{
		initialRouteName: 'Drawer',
		headerMode: 'none'
	}
);

export default () => (
	<Root>
		<AppNavigator />
	</Root>
);
