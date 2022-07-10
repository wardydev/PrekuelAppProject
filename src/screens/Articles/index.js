import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';

import ArticleLists from '../../components/ArticleLists';
import PostArticles from '../../components/PostArticles';
import WrapperScreen from '../../components/WrapperScreen';

const Articles = ({navigation}) => {
  const url =
    'https://prekuel.com/wp-json/wp/v2/posts?categories=28&per_page=5';
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <PostArticles navigation={navigation} />
      <WrapperScreen>
        <ArticleLists
          navigation={navigation}
          url={url}
          titleHeader="Marvel News"
          isSeeAll={false}
        />
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
