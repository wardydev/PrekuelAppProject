import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {
  primaryColor,
  primaryFont,
  secondaryColor,
} from '../../utils/constants/fontSize';

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
    fontWeight: '500',
  },
  authorListLarge: {
    marginRight: 12,
    color: primaryColor,
    fontFamily: primaryFont,
    fontSize: 18,
    fontWeight: '500',
  },
});

export default AutorTitle;
