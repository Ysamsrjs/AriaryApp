import React, { Component } from "react";
import { Image, View, StatusBar } from "react-native";

import { Container, Button, H3, Text, Header, Title, Body, Left, Right } from "native-base";

import styles from "./styles";

const launchscreenBg = require("../../Assets/images/launchscreen-bg.JPG");
const launchscreenLogo = require("../../Assets/images/ariary.png");

class Home extends Component {
    // eslint-disable-line

    render() {
        return (
            <Container>
                <StatusBar barStyle="light-content" />
                <Image source={launchscreenBg} style={styles.imageContainer}>
                    <View style={styles.logoContainer}>
                        <Image source={launchscreenLogo} style={styles.logo} />
                    </View>
                    <View
                        style={{
                            alignItems: "center",
                            marginBottom: 50,
                            backgroundColor: "transparent",
                        }}
                    >
                    </View>
                    <View style={{ marginBottom: 80 }}>
                        <Button
                            iconLeft primary
                            style={styles.mb15}
                            onPress={() => this.props.navigation.navigate("DrawerOpen")}
                        >
                            <Icon active name="login" />
                            <Text>Commencer</Text>
                        </Button>
                        <Button
                            iconLeft success
                            style={styles.mb15}
                            onPress={() => this.props.navigation.navigate("DrawerOpen")}
                        >
                            <Icon active name="login" />
                            <Text>Connexion Ariary</Text>
                        </Button>
                        <Button iconLeft style={styles.mb15}>
                            <Icon active name="facebook-official" />
                            <Text>Connexion via Facebook</Text>
                        </Button>
                        <Button
                            iconLeft success
                            style={styles.mb15}
                            onPress={() => this.props.navigation.navigate("DrawerOpen")}
                        >
                            <Icon active name="user-plus" />
                            <Text>S'inscrire</Text>
                        </Button>
                    </View>
                </Image>
            </Container>
        );
    }
}

export default Home;
