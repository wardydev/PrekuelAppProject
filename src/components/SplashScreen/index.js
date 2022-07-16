import React, {useEffect, useState} from 'react';
import {StackActions, useNavigation} from '@react-navigation/native';
import {View, StyleSheet, Dimensions, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {secondaryColor} from '../../utils/constants/fontSize';

const {width, height} = Dimensions.get('window');

const SplashScreen = () => {
  const navigation = useNavigation();
  const [isBoarded, setIsBoarded] = useState(null);

  useEffect(() => {
    const getAsyncStorage = async () => {
      const storage = await AsyncStorage.getItem('onboarded');
      console.log(storage);

      if (!storage) {
        setTimeout(() => {
          navigation.dispatch(StackActions.replace('Onboarding'));
        }, 3000);
      } else {
        setTimeout(() => {
          navigation.dispatch(StackActions.replace('Tab'));
        }, 3000);
      }
    };

    getAsyncStorage();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo/logo.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    backgroundColor: secondaryColor,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SplashScreen;
