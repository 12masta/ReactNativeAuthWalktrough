import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/commons'

class App extends Component {
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
}

  render() {
    return (
      <View>
      <Header headerText="Authentication" />
        <Text>An app</Text>
      </View>
    )
  }
}

export default App;
