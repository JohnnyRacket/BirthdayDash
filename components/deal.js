import React from 'react';
import { StyleSheet, Text, View, Button, Image, Dimensions, FlatList } from 'react-native';

export default class Deal extends React.Component {
    render() {
      return (
        <View
            style={{
            flexDirection: 'column',
            height: 150,
            padding: 10,
            backgroundColor: '#f5f5f5',
            borderRadius: 10,
            margin: 5
            }}>
            <View style={{flex: 0.3, flexDirection: 'column', height: 150, justifyContent: 'flex-start'}}>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>Starbucks Free Grande Drink</Text>
            </View>
            <View style={{backgroundColor: 'grey', flex: 0.5}} />
            <Text>Hello World!</Text>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      marginTop: Expo.Constants.statusBarHeight
    }
  });