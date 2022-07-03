import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  primaryFont,
  h2,
  blackColor,
  grayColor,
} from '../../utils/constants/fontSize';

const HeadingScreen = ({heading, paragraph}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{heading}</Text>
      <Text style={styles.headingParagraph}>{paragraph}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
  },
  heading: {
    fontFamily: primaryFont,
    fontSize: h2,
    color: blackColor,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  headingParagraph: {
    fontSize: 16,
    fontFamily: primaryFont,
    color: grayColor,
  },
});

export default HeadingScreen;
