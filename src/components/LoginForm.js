import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { Button, Card, CardSection } from './common';

export default class LoginForm extends Component {
  render() {
    const { textInputStyle } = styles;
    return (
      <Card>
        <CardSection>
          <TextInput style={textInputStyle} />
        </CardSection>

        <CardSection />

        <CardSection>
          <Button>
            Log in
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  textInputStyle: {
    height: 20,
    width: 100,
  },
});
