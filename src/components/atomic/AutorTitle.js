import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {primaryFont, secondaryColor} from '../../utils/constants/fontSize';

const AutorTitle = ({author}) => {
  return <Text style={styles.authorList}>{author}</Text>;
};

const styles = StyleSheet.create({
  authorList: {
    marginRight: 12,
    color: secondaryColor,
    fontFamily: primaryFont,
  },
});

export default AutorTitle;
