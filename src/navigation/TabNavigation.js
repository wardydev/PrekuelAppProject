import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import Explores from '../screens/Explores';
import TopNavigation from './TopNavigation';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Explores" component={Explores} />
      <Tab.Screen name="Articles" component={TopNavigation} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
