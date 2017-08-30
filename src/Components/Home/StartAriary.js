//import liraries
//RJS
import React from 'react';
import { Platform } from 'react-native';
import { Root } from 'native-base';
import { StackNavigator } from 'react-navigation';


import Main from '../../NewUserAriary/InscriptionTemporaire/Main';
import Bienvenue from '../../NewUserAriary/InscriptionTemporaire/Bienvenue';
import App from './';

const StartAriary = StackNavigator(
	{
		Main: { screen: Main },
		Bienvenue: { screen: Bienvenue },
		App: { screen: App }
	},
	{
		headerMode: 'none'
	}
);

export default StartAriary;
