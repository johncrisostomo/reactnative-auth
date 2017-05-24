import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { Button, Card, CardSection } from './common';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  render() {
    const { textInputStyle } = styles;
    return (
      <Card>
        <CardSection>
          <TextInput
            value={this.state.text}
            onChangeText={text => this.setState({ text })}
            style={textInputStyle} />
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
