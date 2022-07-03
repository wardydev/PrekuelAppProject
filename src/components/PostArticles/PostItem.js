import React from 'react';
import {TouchableOpacity, Image, StyleSheet, View, Text} from 'react-native';

// import {primaryFont} from '../../utils/constants/fontSize';
// import {getSomeStringArticleTitle} from '../../utils/functions/getSomeString';
// <Image style={styles.imageItem} source={{uri: data.imgUrl}} />

import TagTitle from '../atomic/TagTitle';
import TimeList from '../atomic/TimeList';
import TitleList from '../atomic/TitleList';

const PostItem = ({data}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.headerPostContainer}>
        <View style={styles.headerProfile}>
          <View style={styles.profilePict}></View>
          <View>
            <TitleList title="wardy" />
            <TimeList minutes="1 Hour Ago" />
          </View>
        </View>
        <TagTitle tags="kdrama" isPrimary={false} />
      </View>
      <View style={styles.headerContent}>
        <TitleList title="Ms marvel akan rilis di disney+ tahun ini tepat di bulan mei" />
        <Image style={styles.imageContent} source={{uri: data.imgUrl}} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {padding: 20, backgroundColor: '#f8f9fa', borderRadius: 12},
  headerPostContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  headerProfile: {
    display: 'flex',
    flexDirection: 'row',
  },
  profilePict: {
    width: 50,
    height: 50,
    borderRadius: 200,
    backgroundColor: 'red',
    marginRight: 12,
  },
  headerContent: {},
  imageContent: {
    height: 130,
    marginTop: 16,
    borderRadius: 12,
  },
});

export default PostItem;
