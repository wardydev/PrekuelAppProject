import React from 'react';
import {Image, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import Explores from '../screens/Explores';
import Articles from '../screens/Articles';

import TabNavigation from './TabNavigation';

const Stack = createStackNavigator();

function LogoTitle() {
  return (
    <Image
      style={{width: 150, height: 50}}
      source={require('../assets/logoMd.png')}
    />
  );
}

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerTitle: props => <LogoTitle {...props} />,
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: '#F8F9FA'},
        }}
        name="Tab"
        component={TabNavigation}
      />
      <Stack.Screen name="Explores" component={Explores} />
      <Stack.Screen name="Articles" component={Articles} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
