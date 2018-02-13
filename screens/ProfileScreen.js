import React from 'react';
import { StyleSheet, Text, View, Button, Image, Dimensions, FlatList } from 'react-native';
import DatePicker from 'react-native-datepicker';
import Deal from '../components/deal';
import photo from '../selfie4.png';

export default class Profile extends React.Component {
    static navigationOptions = {header: null};
    render() {
      return (
        <View style={{paddingTop:Expo.Constants.statusBarHeight +1, backgroundColor: '#fff', flex: 1, flexDirection: 'column', alignItems: 'center'}}>
            <Image source={photo}  style={{height: 200, width: 200, borderRadius: 100, marginTop: 80}}></Image>
            <Text style={{fontSize: 25, fontWeight: 'bold', marginTop: 30}}>John Harrison</Text>
            <View style={{margin: 40}}>
            <Text style={{fontSize: 15, textAlign: 'center'}}>Birthday</Text>

                <DatePicker date={'02/01/1994'} format="MM/DD/YYYY" androidMode="spinner" mode='date' showIcon={false}
                customStyles={{
                    dateInput: {
                        borderWidth: 0,
                    },
                    dateText: {
                        fontSize: 20
                    }
                }}></DatePicker>
                <Text style={{fontSize: 12, color: '#ccc', textAlign: 'center'}}>Tap to edit</Text>
            </View>
            
        </View>
      );
    }
  }

const styles = StyleSheet.create({
    container: {
        flex: .5,
        alignItems: 'center',
        justifyContent: 'center',
    }
});