import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {h3, aLink} from '../../utils/constants/fontSize';

const HeaderTitle = ({title, isSeeAll, navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{title}</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Articles')}>
        <Text style={styles.headingLink}>{isSeeAll ? 'See All' : ''}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  heading: {
    fontSize: h3,
    color: '#121314',
    fontWeight: '700',
    fontFamily: 'VistolSans-Bold',
  },
  headingLink: {
    fontSize: aLink,
    color: '#1E3464',
    fontWeight: 'bold',
    fontFamily: 'VistolSans-Medium',
  },
});

export default HeaderTitle;
