import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {primaryFont, h2, blackColor} from '../../utils/constants/fontSize';

const HeadingScreen = () => {
  return (
    <View>
      <Text style={styles.heading}>Explores</Text>
      <Text style={styles.headingParagraph}>
        Explores your Favorit articles
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
    color: '#cccccc',
  },
});

export default HeadingScreen;
