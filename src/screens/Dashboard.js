import React from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Account from './Account';
import AddGame from './AddGame';
import Games from './Games';
import SCREENS from '../constants/screens';

const Dashboard = createStackNavigator(
  {
    Games,
    AddGame,
  }
);

const AccountStack = createStackNavigator({
  Account,
})

export default createBottomTabNavigator(
  {
    Dashboard,
    Account,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === SCREENS.DASHBOARD) {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === SCREENS.ACCOUNT) {
          iconName = 'ios-options';
        }

        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'pink',
      inactiveTintColor: 'gray',
    },
  }
);
