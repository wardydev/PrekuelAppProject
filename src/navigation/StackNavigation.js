import React from 'react';
import {Image, View, StyleSheet, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import Explores from '../screens/Explores';
import Article from '../screens/Article';

import TabNavigation from './TabNavigation';
import TopNavigation from './TopNavigation';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Onboarding from '../screens/Onboarding';

const Stack = createStackNavigator();

function LogoTitle() {
  return (
    <Image
      style={{width: 160, height: 50}}
      source={require('../assets/logoMd.png')}
    />
  );
}

const StackNavigation = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Onboarding"
        component={Onboarding}
      />
      <Stack.Screen
        options={{
          headerTitle: props => (
            <View style={styles.container}>
              <Text></Text>
              <LogoTitle {...props} />
              <TouchableOpacity onPress={() => navigation.navigate('Explores')}>
                <Icon name="search" size={26} color="#E31E26" />
              </TouchableOpacity>
            </View>
          ),
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: '#f8f9fa'},
          headerShown: true,
          headerLeft: null,
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

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
});

export default StackNavigation;
