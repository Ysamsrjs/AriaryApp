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
  Text
} from "native-base";

import styles from "./Styles";

class HeaderMain extends Component {
  // eslint-disable-line
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Ariary</Title>
          </Body>
          <Right>
            <Button transparent><Icon name="help" /></Button>
            <Button transparent><Icon name="more" /></Button>
          </Right>
        </Header>
      </Container>
    );
  }
}

export default HeaderMain;
