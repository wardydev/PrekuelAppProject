import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {grayColor, primaryFont} from '../../utils/constants/fontSize';

const TimeList = ({minutes}) => {
  return <Text style={styles.timeList}>{minutes}</Text>;
};

const styles = StyleSheet.create({
  timeList: {
    color: grayColor,
    fontFamily: primaryFont,
  },
});

export default TimeList;
