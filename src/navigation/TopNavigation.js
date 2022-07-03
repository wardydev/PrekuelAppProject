import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Articles from '../screens/Articles';
import Screen1 from '../screens/test/Screen1';
import Screen2 from '../screens/test/Screen2';
import Screen3 from '../screens/test/Screen3';
import Screen4 from '../screens/test/Screen4';
import Screen5 from '../screens/test/Screen5';
import Screen6 from '../screens/test/Screen6';

const Top = createMaterialTopTabNavigator();

const TopNavigation = () => {
  return (
    <Top.Navigator
      screenOptions={{
        tabBarScrollEnabled: true,
        tabBarItemStyle: {width: 100},
      }}>
      <Top.Screen
        options={{tabBarLabel: 'Marvel'}}
        name="Marvel"
        component={Articles}
      />
      <Top.Screen
        options={{tabBarLabel: 'Dc'}}
        name="Screen2"
        component={Screen2}
      />
      <Top.Screen
        options={{tabBarLabel: 'Disney+'}}
        name="Screen3"
        component={Screen3}
      />
      <Top.Screen
        options={{tabBarLabel: 'K-Drama'}}
        name="Screen4"
        component={Screen4}
      />
      <Top.Screen
        options={{tabBarLabel: 'Netflix'}}
        name="Screen5"
        component={Screen5}
      />
      <Top.Screen
        options={{tabBarLabel: 'Movie News'}}
        name="Screen6"
        component={Screen6}
      />
    </Top.Navigator>
  );
};

export default TopNavigation;
