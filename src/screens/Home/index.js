import React from 'react';
import {ScrollView, Text, StyleSheet} from 'react-native';
import CarouseBanner from '../../components/CarouselBanner';

import HeaderTitle from '../../components/HeaderTitle';
import WrapperScreen from '../../components/WrapperScreen';
import ArticleLists from '../../components/ArticleLists';

const Home = () => {
  return (
    <ScrollView>
      <WrapperScreen>
        <HeaderTitle title="Trending" isSeeAll={false} />
      </WrapperScreen>
      <CarouseBanner />
      <WrapperScreen>
        <HeaderTitle title="Terbaru" isSeeAll={true} />
        <ArticleLists />
        <ArticleLists />
        <ArticleLists />
      </WrapperScreen>
    </ScrollView>
  );
};

export default Home;
