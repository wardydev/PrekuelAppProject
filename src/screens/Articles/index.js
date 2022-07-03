import React from 'react';
import {View, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import ArticleCategories from '../../components/ArticleCategories';
import ArticleLists from '../../components/ArticleLists';
import HeaderTitle from '../../components/HeaderTitle';
import PostArticles from '../../components/PostArticles';
import WrapperScreen from '../../components/WrapperScreen';

const Articles = () => {
  return (
    <ScrollView>
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

export default Articles;
