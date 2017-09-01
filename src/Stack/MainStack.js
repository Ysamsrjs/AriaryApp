//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {StackNavigator } from 'react-navigation';

import Loader from "../Components/Home/";
import StartStack from "./StartStack";
import AppStack from "./AppStack";

const MainStack = StackNavigator(
	{
		Loader: { screen: Loader },
		StartAriary: { screen: StartStack },
		App: { screen: AppStack }
	},
	{
		headerMode: 'none'
	}
);
export default MainStack;