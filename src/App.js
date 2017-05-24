import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import firebaseSettings from '../firebaseSettings.js';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp(firebaseSettings);
  }

  render() {
    return (
      <View>
        <Header headerText={"Authentication"} />
        <Text>An App!</Text>
      </View>
    );
  }
}

export default App;
