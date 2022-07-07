import React from 'react';
import {ScrollView} from 'react-native';
import CarouseBanner from '../../components/CarouselBanner';

import HeaderTitle from '../../components/HeaderTitle';
import WrapperScreen from '../../components/WrapperScreen';
import ArticleLists from '../../components/ArticleLists';
import HeadingScreen from '../../components/atomic/HeadingScreen';

const Home = ({navigation}) => {
  const url = 'https://prekuel.com/wp-json/wp/v2/posts?per_page=10';
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <WrapperScreen>
        <HeaderTitle
          title="Trending"
          isSeeAll={false}
          navigation={navigation}
        />
      </WrapperScreen>
      <CarouseBanner navigation={navigation} />
      <WrapperScreen>
        <HeaderTitle
          title="Post Terbaru"
          isSeeAll={true}
          navigation={navigation}
        />
        <ArticleLists navigation={navigation} url={url} isPost={true} />
      </WrapperScreen>
    </ScrollView>
  );
};

export default Home;
