import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from '../screens/Home';
import Explores from '../screens/Explores';
import TopNavigation from './TopNavigation';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          if (route.name === 'Home') {
            return focused ? (
              <Icon name="home" size={26} color="#E31E26" />
            ) : (
              <Icon name="home" size={26} color="#C4C4C4" />
            );
          } else if (route.name === 'Explores') {
            return focused ? (
              <Icon name="search" size={26} color="#E31E26" />
            ) : (
              <Icon name="search" size={26} color="#C4C4C4" />
            );
          } else {
            return focused ? (
              <Icon name="albums" size={26} color="#E31E26" />
            ) : (
              <Icon name="albums" size={26} color="#C4C4C4" />
            );
          }
        },
        tabBarActiveTintColor: '#E31E26',
        tabBarInactiveTintColor: '#C4C4C4',
        headerShown: false,
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Explores" component={Explores} />
      <Tab.Screen name="Articles" component={TopNavigation} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
