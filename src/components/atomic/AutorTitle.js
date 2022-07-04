import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {primaryFont, secondaryColor} from '../../utils/constants/fontSize';

const AutorTitle = ({author, isLarge}) => {
  return (
    <Text style={isLarge ? styles.authorListLarge : styles.authorList}>
      {author}
    </Text>
  );
};

const styles = StyleSheet.create({
  authorList: {
    marginRight: 12,
    color: secondaryColor,
    fontFamily: primaryFont,
    fontSize: 16,
  },
  authorListLarge: {
    marginRight: 12,
    color: secondaryColor,
    fontFamily: primaryFont,
    fontSize: 18,
  },
});

export default AutorTitle;
