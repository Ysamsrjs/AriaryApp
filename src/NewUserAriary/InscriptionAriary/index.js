import React, { Component } from "react";

import {
    Container,
    Header,
    Title,
    Content,
    Button,
    Icon,
    Left,
    Right,
    Body,
    Text,
    ListItem,
    List
} from "native-base";

import styles from "./styles";

class Inscription1 extends Component {
    // eslint-disable-line

    render() {
        return (
            <Container style={styles.container}>
                <Header>
                    <Left>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.goBack()}
                        >
                            <Icon name="arrow-back" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Inscription Ariary</Title>
                    </Body>
                    <Right />
                </Header>

                <Content>
                    <Button
                        primary
                        onPress={() => { this.navigation.navigate('InscriptionAriary2') }}>
                    </Button>
                </Content>
            </Container>
        );
    }
}

export default Inscription1;
