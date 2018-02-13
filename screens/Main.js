import React from 'react';
import { StyleSheet, Text, View, Button, Image, Dimensions, FlatList } from 'react-native';
import {TabNavigator, TabBarBottom} from 'react-navigation';
import {Icon} from 'react-native-elements';
import DealsScreen from './DealsScreen';
import DashScreen from './DashScreen';
import Profile from './ProfileScreen';


const Tabs = TabNavigator({
    Profile: {screen: Profile},
    Deals: { screen: DealsScreen },
    Dash: {screen: DashScreen}
    },
    {
        navigationOptions: ({ navigation }) => ({
          tabBarIcon: ({ focused, tintColor }) => {
            const { routeName } = navigation.state;
            let iconName;
            let iconSet;
            if (routeName === 'Dash') {
                iconName = 'run';
                iconSet = 'material-community';
            } else if (routeName === 'Profile') {
                iconName = 'person';
                iconSet = '';
            } else if (routeName === 'Deals') {
                iconName = 'cash';
                iconSet = 'material-community';
            }
    
            // You can return any component that you like here! We usually use an
            // icon component from react-native-vector-icons
            return <Icon name={iconName} type={iconSet} size={25} color={tintColor} style={{marginTop: 6}} />;
          },
          
        }),
        tabBarOptions: {
            activeTintColor: 'white',
            inactiveTintColor: '#e7e5e5',
            upperCaseLabel: false,
            showIcon: true,
            style: {
                backgroundColor: '#274690',
            },
            indicatorStyle:{
                backgroundColor: '#fff'
            },
            tabStyle:{
                padding: 5
            },
            labelStyle:{
                marginTop: -2
            },
            iconStyle:{
                marginTop: 5
            }
          },
          tabBarPosition: 'bottom'

    
  });


export default class Main extends React.Component {
    static navigationOptions = {header: null};
    render() {
      return (
        <Tabs />
      );
    }
  }

const styles = StyleSheet.create({
    container: {
        padding: 5,
        backgroundColor: '#274690'
      
    }
});
