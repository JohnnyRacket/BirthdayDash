import {StackNavigator} from 'react-navigation';
import LaunchScreen from '../screens/LaunchScreen';
import DealsScreen from '../screens/DealsScreen';

export const AppScreens = StackNavigator({
        Launch: { screen: LaunchScreen },
        Deals: { screen: DealsScreen }
    },
    {initialRouteName: 'Launch'}
);

