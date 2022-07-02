import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {primaryFont} from '../../utils/constants/fontSize';

const TagTitle = ({tags}) => {
  return (
    <View style={styles.tagList}>
      <Text style={styles.tagTitle}>{tags}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tagList: {
    backgroundColor: '#E31E26',
    width: 100,
    height: 26,
    borderRadius: 12,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  tagTitle: {
    color: 'white',
    fontWeight: '500',
    fontFamily: primaryFont,
  },
});

export default TagTitle;
