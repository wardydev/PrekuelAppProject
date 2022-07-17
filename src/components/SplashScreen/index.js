import React, {useEffect} from 'react';
import {StackActions, useNavigation} from '@react-navigation/native';
import {View, StyleSheet, Dimensions, Image, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {secondaryColor} from '../../utils/constants/fontSize';

const {width, height} = Dimensions.get('window');

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const getAsyncStorage = async () => {
      const storage = await AsyncStorage.getItem('onboarded');

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
      <View></View>
      <Image
        style={styles.splashLogo}
        source={require('../../assets/logo/splashLogo.png')}
      />
      <View style={styles.btmLogoContainer}>
        <Text style={styles.textBtm}>Based on</Text>
        <Image
          style={styles.btmImage}
          source={require('../../assets/logo/bottomLogo.png')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    backgroundColor: secondaryColor,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  splashLogo: {
    width: 56,
    height: 90,
  },
  btmLogoContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 56,
  },
  textBtm: {
    marginBottom: 8,
    color: 'white',
    fontWeight: '500',
  },
  btmImage: {
    width: 120,
    height: 30,
  },
});

export default SplashScreen;
