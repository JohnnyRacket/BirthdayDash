import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {Facebook} from 'expo';

export default class App extends React.Component {

  async logIn() {
    const { type, token } = await Facebook.logInWithReadPermissionsAsync('2024500857831946', {
      permissions: ['public_profile, user_birthday'],
    });
  if (type === 'success') {
    // Get the user's name using Facebook's Graph API
    const response = await fetch(
      `https://graph.facebook.com/me?access_token=${token}`);
    Alert.alert(
      'Logged in!',
      `Hi ${(await response.json()).name}!`,
    );
  }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Button onPress={this.logIn} title="Log in with Facebook"></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
