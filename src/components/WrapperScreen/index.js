import React from 'react';
import {View, StyleSheet} from 'react-native';

const WrapperScreen = ({children}) => {
  return <View style={styles.wrapper}>{children}</View>;
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#f8f9fa',
    paddingVertical: 16,
    paddingHorizontal: 24,
    overflow: 'hidden',
  },
});

export default WrapperScreen;
