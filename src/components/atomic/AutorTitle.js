import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {primaryFont} from '../../utils/constants/fontSize';

const AutorTitle = ({author}) => {
  return <Text style={styles.authorList}>{author}</Text>;
};

const styles = StyleSheet.create({
  authorList: {
    marginRight: 12,
    color: '#EB797E',
    fontFamily: primaryFont,
  },
});

export default AutorTitle;
