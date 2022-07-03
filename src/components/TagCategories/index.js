import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {primaryColor} from '../../utils/constants/fontSize';

const TagCategories = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.tagCategory}>
        <Text style={styles.textCategory}>Marvel</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tagCategory}>
        <Text style={styles.textCategory}>Disney+</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tagCategory}>
        <Text style={styles.textCategory}>Netflix</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tagCategory}>
        <Text style={styles.textCategory}>K-Drama</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tagCategory}>
        <Text style={styles.textCategory}>Film Indo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tagCategory}>
        <Text style={styles.textCategory}>Genre Action</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginBottom: 16,
  },
  tagCategory: {
    backgroundColor: '#FFE1E2',
    width: 'auto',
    paddingHorizontal: 8,
    paddingVertical: 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    marginBottom: 12,
  },
  textCategory: {
    color: primaryColor,
  },
});

export default TagCategories;
