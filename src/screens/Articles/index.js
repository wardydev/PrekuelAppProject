import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';

import ArticleLists from '../../components/ArticleLists';
import HeaderTitle from '../../components/HeaderTitle';
import PostArticles from '../../components/PostArticles';
import WrapperScreen from '../../components/WrapperScreen';

const Articles = () => {
  return (
    <ScrollView style={styles.container}>
      <PostArticles />
      <WrapperScreen>
        <HeaderTitle title="Reading List" isSeeAll={true} />
        <ArticleLists />
        <ArticleLists />
        <ArticleLists />
      </WrapperScreen>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f9fa',
  },
});

export default Articles;
