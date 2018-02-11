import React from 'react';
import { StyleSheet, Text, View, Button, Image, Dimensions, Alert } from 'react-native';
import logo from './birthdaydashlogo.png';
import {AppScreens} from './navigation/routes';
import { StackNavigator } from 'react-navigation';
import Expo from 'expo';

export default class App extends React.Component {

  render() {
    return (
      <AppScreens /> 
    );
  }
}



