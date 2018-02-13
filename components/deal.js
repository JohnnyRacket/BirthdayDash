import React from 'react';
import { StyleSheet, Text, View, Button, Image, Dimensions, FlatList } from 'react-native';
import {Icon} from 'react-native-elements';

export default class Deal extends React.Component {
    render() {
      return (
        <View
            style={{
            flexDirection: 'row',
            height: 130,
            backgroundColor: '#fff',
            paddingTop: 20,
            paddingBottom: 20,
            borderBottomColor: '#e7e5e5',
            borderBottomWidth: 1

            }}>
            <View style={{backgroundColor: 'grey', width: 90, height: 90, alignSelf: 'center'}} />
            <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-start', marginLeft: 20}}>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>Starbucks</Text>
                <Text style={{fontSize: 15}}>Free grande drink with any purchase</Text>
            </View>
            <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', marginLeft: 20, marginTop: -9}}>
                <Icon size={25} name="crown" type='material-community' color='gold' />
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