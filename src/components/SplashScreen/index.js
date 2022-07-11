import React, {useEffect} from 'react';
import {StackActions, useNavigation} from '@react-navigation/native';
import {View, StyleSheet, Dimensions, Image} from 'react-native';
import {secondaryColor} from '../../utils/constants/fontSize';

const {width, height} = Dimensions.get('window');

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.dispatch(StackActions.replace('Tab'));
    }, 3000);
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
