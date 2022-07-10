import React from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  blackColor,
  primaryColor,
  primaryFont,
} from '../../utils/constants/fontSize';

const {height} = Dimensions.get('window');

const ErrorSection = () => {
  return (
    <View style={styles.container}>
      <Icon name="wifi" size={64} color={primaryColor} />
      <Text style={styles.textStyle}>Waduhhh masalah koneksi..</Text>
      <Text>Coba cek internetmu!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  textStyle: {
    fontSize: 24,
    fontFamily: primaryFont,
    color: blackColor,
  },
});

export default ErrorSection;
