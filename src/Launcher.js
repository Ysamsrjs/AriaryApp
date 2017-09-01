
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import MainStack from './Stack/MainStack';
// create a component
class Launcher extends Component {
    render() {
        return (
            <MainStack />
        );
    }
}

export default Launcher;
