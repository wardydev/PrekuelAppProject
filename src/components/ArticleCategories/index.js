import React from 'react';
import {View, ScrollView, Text, StyleSheet} from 'react-native';

const ArticleCategories = () => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <Text style={styles.menuItem}>All</Text>
      <Text style={styles.menuItem}>Marvel</Text>
      <Text style={styles.menuItem}>Netflix</Text>
      <Text style={styles.menuItem}>sljdf</Text>
      <Text style={styles.menuItem}>sdljhf</Text>
      <Text style={styles.menuItem}>rtiu</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  menuItem: {
    fontSize: 16,
    color: 'blue',
    paddingHorizontal: 14,
    marginVertical: 16,
  },
});

export default ArticleCategories;
