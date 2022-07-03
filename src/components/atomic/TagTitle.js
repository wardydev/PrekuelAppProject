import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {primaryFont} from '../../utils/constants/fontSize';
import {categoryList} from '../../utils/functions/categoryList';

const TagTitle = ({tags, isPrimary, categoryId}) => {
  return (
    <View style={isPrimary ? styles.primaryTag : styles.secondaryTag}>
      <Text style={styles.tagTitle}>{categoryList(categoryId)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  primaryTag: {
    backgroundColor: '#E31E26',
    paddingHorizontal: 6,
    height: 26,
    borderRadius: 12,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    alignSelf: 'flex-start',
  },
  secondaryTag: {
    backgroundColor: '#1E3464',
    paddingHorizontal: 6,
    height: 26,
    borderRadius: 12,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    alignSelf: 'flex-start',
  },
  tagTitle: {
    color: 'white',
    fontWeight: '500',
    fontFamily: primaryFont,
  },
});

export default TagTitle;
