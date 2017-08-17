//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,StatusBar } from 'react-native';
// create a component

import TesHttpExample from '../pages/webservice/Test2';
class Achat extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TesHttpExample />
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
});

//make this component available to the app
export default Achat;
