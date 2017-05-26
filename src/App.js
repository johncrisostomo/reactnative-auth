import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, Card,CardSection } from './components/common';
import firebaseSettings from '../firebaseSettings.js';

import LoginForm from './components/LoginForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: null,
    };
  }

  componentWillMount() {
    firebase.initializeApp(firebaseSettings);

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true});
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
          </CardSection>
        );
        break;
      case false:
        return <LoginForm />;
        break;
      default:
        return (
          <CardSection>
            <Spinner size={'large'} />
          </CardSection>
        );
    }
  }

  render() {
    return (
      <View>
        <Header headerText={"Authentication"} />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
