import React from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';

import AutorTitle from '../atomic/AutorTitle';
import TagTitle from '../atomic/TagTitle';
import TimeList from '../atomic/TimeList';
import TitleList from '../atomic/TitleList';

const ArticleLists = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        style={styles.imageList}
        source={{
          uri: 'https://static.republika.co.id/uploads/images/inpicture_slide/040385300-1599905210-595e0d7b6e158-spiderman-homeco.jpg',
        }}
      />
      <View style={styles.titleContainer}>
        <TagTitle tags="avengers" />
        <TitleList
          title={
            'TV Spot Black Adam Menampilkan Scene Lebih Banyak untuk Debut The Rock di DC'
          }
        />
        <View style={styles.footerList}>
          <AutorTitle author="hairul wardi" />
          <TimeList minutes="2 minutes ago" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  imageList: {
    width: 100,
    height: 110,
    borderRadius: 12,
    marginRight: 20,
  },
  titleContainer: {
    width: 0,
    flexGrow: 1,
    flex: 1,
  },
  footerList: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 6,
  },
});

export default ArticleLists;
