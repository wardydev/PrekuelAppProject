import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Home from '../screens/Home';
import Explores from '../screens/Explores';
import Articles from '../screens/Articles';

const Tab = createMaterialTopTabNavigator();

const TopNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Explores" component={Explores} />
      <Tab.Screen name="Articles" component={Articles} />
    </Tab.Navigator>
  );
};

export default TopNavigation;
