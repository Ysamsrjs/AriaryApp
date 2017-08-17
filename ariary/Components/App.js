//import liraries
//RJS
import React from "react";

import { Platform } from "react-native";
import { Root } from "native-base";
import { StackNavigator } from "react-navigation";

import Drawer from "./NavigationAriary/Drawer";

import Home from "./Components/Home/";

import Achat from "./Components/Achat/";
import MainAchat from "./Components/Achat/MainAchat";

import Offrir from "./Components/Transaction/Offrir";

import CompteAriary from "./Components/CompteAriary/";
import LoginAriary from "./Components/CompteAriary/LoginAriary";
import ProfileArairy from "./Components/CompteAriary/ProfileAriary";


import MainAchat from "./Achat/MainAchat";
import Offrir from "./Transaction/Offrir";
import ProfileAriary from "./CompteAriary/ProfileAriary";
import Statistique from "./Statistique/Statistique";
import LoginAriary from "../CompteAriary/Login";
import InscriptionArariary from "../Inscription/InscriptionAriary";
import EditPassword from "../CompteAriary/Config/EditPassword";
import EditPhone from "../CompteAriary/Config/EditPhone"


const AppNavigator = StackNavigator(
    {
        Drawer: { screen: Drawer },
        Achat: { screen: MainAchat },
        Offrir: { screen: Offrir },
        Profile: { screen: ProfileAriary },
        Statistique: { screen: Statistique },
        LoginAriary: { screen: LoginAriary },
        InscriptionArariary: { screen: InscriptionArariary },
        EditPassword: { screen: EditPassword },
        EditPhone: { screen: EditPhone }

    },
    {
        initialRouteName: "Drawer",
        headerMode: "none",
    }
);

export default () =>
    <Root>
        <AppNavigator />
    </Root>;
