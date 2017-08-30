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

class Inscription2 extends Component {
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
                        <Title>Inscription Step 2</Title>
                    </Body>
                    <Right />

                </Header>

                <Content>
                    <Button
                        primary
                        onPress={() => this.navigation.navigate('InscriptionAriary3')}>
                    </Button>
                    <Text>Suivant</Text>
                </Content>
            </Container>
        );
    }
}

export default Inscription2;
