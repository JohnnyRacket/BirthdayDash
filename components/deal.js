import React from 'react';
import { StyleSheet, Text, View, Button, Image, Dimensions, FlatList } from 'react-native';
import {Icon} from 'react-native-elements';

export default class Deal extends React.Component {
    render() {
      return (
        <View
            style={{
            flexDirection: 'row',
            height: 120,
            padding: 10,
            backgroundColor: '#f5f5f5',
            borderRadius: 10,
            margin: 5
            }}>
            <View style={{backgroundColor: 'grey', width: 90, height: 90, alignSelf: 'center', marginLeft: 5}} />
            <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-start', marginLeft: 10}}>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>Starbucks</Text>
                <Text style={{fontSize: 15}}>Free grande drink with any purchase</Text>
            </View>
            <View style={{ flexDirection: 'column', alignItems: 'center', marginRight: 5, marginLeft: 10}}>
                <Icon size={25} name="crown" type='material-community' color='gold'/>
                <Text style={{fontSize: 10, fontWeight: 'bold'}}>FREE</Text>
            </View>
            
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      marginTop: Expo.Constants.statusBarHeight
    }
  });