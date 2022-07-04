import React from 'react';
import {Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import Explores from '../screens/Explores';
import Article from '../screens/Article';

import TabNavigation from './TabNavigation';
import TopNavigation from './TopNavigation';

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
          headerShown: true,
        }}
        name="Tab"
        component={TabNavigation}
      />
      <Stack.Screen name="Explores" component={Explores} />
      <Stack.Screen name="Articles" component={TopNavigation} />
      <Stack.Screen
        options={{headerTitleAlign: 'center'}}
        name="Article"
        component={Article}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
