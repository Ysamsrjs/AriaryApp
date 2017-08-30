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

class Inscription3 extends Component {
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
                        <Title>Inscription Step 3</Title>
                    </Body>
                    <Right />

                </Header>

                <Content>
                    <Button
                    primary>
                        <Text>Valider</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

export default Inscription3;
