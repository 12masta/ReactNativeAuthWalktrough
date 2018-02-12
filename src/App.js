import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection, Spinner } from './components/commons';
import LoginForm from './components/LoginForm';

class App extends Component {
state = { loggedIn: null };

componentWillMount() {
  firebase.initializeApp(
    {
    apiKey: "AIzaSyCKua3lWs0O581Vx48WNnDaZYpWg7Nsh_0",
    authDomain: "authentication-c9be8.firebaseapp.com",
    databaseURL: "https://authentication-c9be8.firebaseio.com",
    projectId: "authentication-c9be8",
    storageBucket: "authentication-c9be8.appspot.com",
    messagingSenderId: "1019348472643"
  });

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      this.setState({ loggedIn: true });
    } else {
      this.setState({ loggedIn: false });
    }
  });
}

renderContent() {
  switch(this.state.loggedIn){
    case true:
      return (
        <CardSection>
          <Button>
          Log out
          </Button>
        </CardSection>
      );
    case false:
      return <LoginForm />;
    default:
      return (
        <View style={styles.viewSpinnerStyle}>
          <Spinner size="large"/>
        </View>
      );
  }
}

render() {
  return (
    <View>
      <Header headerText="Authentication" />
      {this.renderContent()}
    </View>
  )
  }
}

const styles = {
  viewSpinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export default App;
