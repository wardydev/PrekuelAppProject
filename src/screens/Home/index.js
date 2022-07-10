import React from 'react';
import {ScrollView} from 'react-native';
import CarouseBanner from '../../components/CarouselBanner';
import WrapperScreen from '../../components/WrapperScreen';
import ArticleLists from '../../components/ArticleLists';

const Home = ({navigation}) => {
  const url = 'https://prekuel.com/wp-json/wp/v2/posts?per_page=10';
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <CarouseBanner navigation={navigation} titleHeader="Trending" />
      <WrapperScreen>
        <ArticleLists
          navigation={navigation}
          url={url}
          isPost={true}
          titleHeader="Post Terbaru"
        />
      </WrapperScreen>
    </ScrollView>
  );
};

export default Home;
