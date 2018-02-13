import React from 'react';
import { StyleSheet, Text, View, Button, Image, Dimensions, FlatList } from 'react-native';
import Deal from '../components/deal';

export default class DashScreen extends React.Component {
    static navigationOptions = {header: null};
    render() {
      return (
        <View style={{paddingTop:Expo.Constants.statusBarHeight +1, backgroundColor: '#274690', flex: 1}}>
            <FlatList style={styles.container} contentContainerStyle={{paddingBottom: 20}}
            data={[{key: 'a'}, {key: 'b'}]}
            renderItem={({item}) => <Deal></Deal>}
            />
        </View>
      );
    }
  }

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 20
    }
});