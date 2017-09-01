//import liraries
//RJS
import React from 'react';

import { Platform } from 'react-native';
import { Root } from 'native-base';
import { StackNavigator } from 'react-navigation';

import Drawer from '../Components/NavigationAriary/Drawer';
import MainAchat from '../Components/Transaction/Achat/MainAchat';
import Offrir from '../Components/Transaction/Offrir/Offrir';
import ProfileAriary from '../Components/CompteAriary/Profile/ProfileAriary';
import Statistique from '../Components/Statistique/Statistique';
import InscriptionArariary from '../Components/CompteAriary/Inscription/InscriptionAriary';
import EditPassword from '../Components/CompteAriary/Config/EditPassword';
import EditPhone from '../Components/CompteAriary/Config/EditPhone';
import AddMobileNumber from '../Components/Transaction/Achat/Mobile/AddMobileNumber';
import MainConfig from '../Components/CompteAriary/Config/MainConfig';
import TestShare1 from '../Components/AppShare/TestShare1';
import EditMail from '../Components/CompteAriary/Config/EditMail';
import EditPseudo from '../Components/CompteAriary/Config/EditPseudo';
import Consulter from '../Components/CompteAriary/Solde/Consulter';

const AppStack = StackNavigator(
	{
		Drawer: { screen: Drawer },

		Achat: { screen: MainAchat },
		AddMobileNumber: { screen: AddMobileNumber },

		Offrir: { screen: Offrir },

		Profile: { screen: ProfileAriary },

		Statistique: { screen: Statistique },

		InscriptionArariary: { screen: InscriptionArariary },

		ShareApp: { screen: TestShare1 },

		Config: { screen: MainConfig },
		EditPassword: { screen: EditPassword },
		EditPhone: { screen: EditPhone },
		EditPseudo: { screen: EditPseudo },
		EditMail: { screen: EditMail },

		ConsulterSolde: { screen: Consulter }
	},
	{
		initialRouteName: 'Drawer',
		headerMode: 'none'
	}
);
export default AppStack;
