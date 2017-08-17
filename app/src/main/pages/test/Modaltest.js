import React, { Component } from 'react';
import { StyleSheet, Modal, Text, TouchableHighlight, View } from 'react-native';

export default class FacebookModal extends Component {

    state = {
        modalVisible: false,
    }

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    render() {
        return (
            <View style={{ backgroundColor: '#006400' }}>
                <Modal
                    style={{ backgroundColor: '#006400' }}
                    animationType={"slide"}
                    transparent={true}
                    visible={this.state.modalVisible}
                >
                    <View style={modal.contenue}>
                        <View style={modal.header}>
                            <TouchableHighlight onPress={() => { this.setModalVisible(!this.state.modalVisible) }}>
                                <Text style={{ textAlign: 'right', fontSize: 30, color: 'black' }}>x</Text>
                            </TouchableHighlight>
                        </View>
                        <View style={modal.content}>

                        </View>
                        <View style={modal.footer}>

                        </View>
                    </View>
                </Modal>
                <View>
                    <TouchableHighlight onPress={() => { this.setModalVisible(true) }}>
                        <Text style={{ textAlign: 'center', fontSize: 15, color: 'black' }}>open modal</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}
const modal = StyleSheet.create({
    header: {
        backgroundColor: 'transparent',
        padding: 20
    },
    content: {
        backgroundColor: '#ffffff'
    },
    footer: {
        backgroundColor: 'transparent',
        padding: 20
    },
    contenue: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#006400'
    }
});