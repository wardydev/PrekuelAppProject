import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Articles from '../screens/Articles';
import Categories from '../screens/Categories';

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
        options={{tabBarLabel: 'Movie'}}
        name="Movie"
        component={Categories}
      />
      <Top.Screen
        options={{tabBarLabel: 'Serial TV'}}
        name="SerialTV"
        component={Categories}
      />
      <Top.Screen
        options={{tabBarLabel: 'K-Drama'}}
        name="KDrama"
        component={Categories}
      />
      <Top.Screen
        options={{tabBarLabel: 'Netflix'}}
        name="Netflix"
        component={Categories}
      />
      <Top.Screen
        options={{tabBarLabel: 'Disney+'}}
        name="Disney"
        component={Categories}
      />
    </Top.Navigator>
  );
};

export default TopNavigation;
