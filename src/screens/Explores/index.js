import React from 'react';
import {TextInput, StyleSheet, ScrollView} from 'react-native';

import WrapperScreen from '../../components/WrapperScreen';
import HeadingScreen from '../../components/atomic/HeadingScreen';
import {primaryFont} from '../../utils/constants/fontSize';
import TagCategories from '../../components/TagCategories';
import HeaderTitle from '../../components/HeaderTitle';
import ArticleList from '../../components/ArticleLists';

const Explores = ({navigation}) => {
  const url =
    'https://prekuel.com/wp-json/wp/v2/posts?categories=38&per_page=5';
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <WrapperScreen>
        <HeadingScreen heading="Explores" paragraph="Explore your news" />
        <TextInput style={styles.input} placeholder="Cari berita mu disini.." />
        <TagCategories />
        <HeaderTitle isSeeAll={true} title="Rekomendasi" />
        <ArticleList url={url} navigation={navigation} isPost={false} />
      </WrapperScreen>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 24,
    marginTop: 8,
    height: 45,
    padding: 10,
    borderRadius: 6,
    backgroundColor: '#E9E9E9',
    fontFamily: primaryFont,
    fontSize: 16,
  },
});

export default Explores;
