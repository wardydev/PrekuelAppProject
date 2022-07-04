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
        <ArticleLists navigation={navigation} url={url} />
      </WrapperScreen>
    </ScrollView>
  );
};

export default Home;
