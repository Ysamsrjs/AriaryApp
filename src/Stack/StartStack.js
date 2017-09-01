//import liraries
//RJS
import React from 'react';
import { Platform } from 'react-native';
import { Root } from 'native-base';
import { StackNavigator } from 'react-navigation';


import Main from '../NewUserAriary/InscriptionTemporaire/Main';
import Bienvenue from '../NewUserAriary/InscriptionTemporaire/Bienvenue';
import AppStack from './AppStack';

const StartStack = StackNavigator(
	{
		Main: { screen: Main },
		Bienvenue: { screen: Bienvenue },
		App: { screen: AppStack }
	},
	{
		headerMode: 'none'
	}
);

export default StartStack;
