import {StackNavigator} from 'react-navigation';
import LaunchScreen from '../screens/LaunchScreen';
import DealsScreen from '../screens/DealsScreen';
import Main from '../screens/Main';

export const AppScreens = StackNavigator({
        Launch: { screen: LaunchScreen },
        Home: { screen: Main }
    },
    {initialRouteName: 'Launch'}
);

