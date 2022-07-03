import React from 'react';
import {ScrollView} from 'react-native';
import CarouseBanner from '../../components/CarouselBanner';

import HeaderTitle from '../../components/HeaderTitle';
import WrapperScreen from '../../components/WrapperScreen';
import ArticleLists from '../../components/ArticleLists';
import HeadingScreen from '../../components/atomic/HeadingScreen';

const Home = () => {
  return (
    <ScrollView>
      <WrapperScreen>
        <HeadingScreen
          heading="Welcome to prekuel App"
          paragraph="Banyak update berita terbaru disini"
        />
      </WrapperScreen>
      <CarouseBanner />
      <WrapperScreen>
        <HeaderTitle title="Terbaru" isSeeAll={true} />
        <ArticleLists />
      </WrapperScreen>
    </ScrollView>
  );
};

export default Home;
