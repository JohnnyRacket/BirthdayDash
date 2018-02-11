import React from 'react';
import { StyleSheet, Text, View, Button, Image, Dimensions, Alert } from 'react-native';
import logo from '../birthdaydashlogo.png';
import {Facebook} from 'expo';


export default class LaunchScreen extends React.Component {
    static navigationOptions = { header: null }

    async logIn() {
        const { type, token } = await Facebook.logInWithReadPermissionsAsync('2024500857831946', {
          permissions: ['public_profile, user_birthday'],
        });
        if (type === 'success') {
          // Get the user's name using Facebook's Graph API
          const response = await fetch(
            `https://graph.facebook.com/me?access_token=${token}`);
        //   Alert.alert(
        //     'Logged in!',
        //     `Hi ${(await response.json()).name}!`,
        //   );
          this.props.navigation.navigate('Deals');
        }
        else{
          Alert.alert(
            'Error Connecting to Facebook.'
          );
        }
      }
    
      componentWillMount(){ this.logIn(); }
    

    render() {
        return (
        <View style={styles.container}>
            <Image source={logo}  style={{flex: 1, alignSelf: 'stretch', width: undefined, height: undefined}} resizeMode="contain"></Image>
        </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#274690',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
