/* @flow */

import React from "react";
import { DrawerNavigator } from "react-navigation";

import Home from "../Home";
import MainAchat from "../Achat/MainAchat";
import Offrir from "../Transaction/Offrir";
import ProfileAriary from "../CompteAriary/ProfileAriary";
import Statistique from "../Statistique/Statistique";
import SideBar from "../SideBar/";

const DrawerExample = DrawerNavigator(
  {
    Home: { screen: Home },
    Achat: { screen: MainAchat },
    Offrir: { screen: Offrir },
    Profile: { screen: ProfileAriary },
    Statistique: { screen: Statistique }


  },
  {
    initialRouteName: "Home",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideBar {...props} />
  }
);

export default DrawerExample;
