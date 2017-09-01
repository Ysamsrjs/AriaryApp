/* @flow */

import React from 'react';
import { DrawerNavigator } from 'react-navigation';

import MainAchat from '../Transaction/Achat/MainAchat';
import Offrir from '../Transaction/Offrir/Offrir';
import ProfileAriary from '../CompteAriary/Profile/ProfileAriary';
import Statistique from '../Statistique/Statistique';
import SideBar from '../SideBar/';
import Apropos from '../Apropos';
import LogOut from '../CompteAriary/SignOut/LogOut';

const DrawerExample = DrawerNavigator(
	{
		Achat: { screen: MainAchat },
		Offrir: { screen: Offrir },
		Profile: { screen: ProfileAriary },
		Statistique: { screen: Statistique },
		Apropos: { screen: Apropos },
		Deconnexion: { screen: LogOut }
	},
	{
		initialRouteName: 'Achat',
		contentOptions: {
			activeTintColor: '#00C853'
		},
		contentComponent: props => <SideBar {...props} />
	}
);

export default DrawerExample;
