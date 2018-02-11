import React from 'react';
import { StyleSheet, Text, View, Button, Image, Dimensions, FlatList } from 'react-native';
import Deal from '../components/deal';

export default class DealsScreen extends React.Component {
    static navigationOptions = {header: null};
    render() {
      return (
        <FlatList style={styles.container}
        data={[{key: 'a'}, {key: 'b'}, {key: 'c'}, {key: 'd'},{key: 'e'},{key: 'f'},{key: 'g'}]}
        renderItem={({item}) => <Deal></Deal>}
        />
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      marginTop: Expo.Constants.statusBarHeight,
      backgroundColor: '#274690',
      padding: 5
    }
  });