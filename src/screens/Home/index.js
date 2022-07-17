import React from 'react';
import {ScrollView} from 'react-native';

import CarouseBanner from '../../components/CarouselBanner';
import WrapperScreen from '../../components/WrapperScreen';
import ArticleLists from '../../components/ArticleLists';
import {URLPOSTTERBARU} from '../../utils/constants/urls';

const Home = ({navigation}) => {
  const url = URLPOSTTERBARU;

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <CarouseBanner
        navigation={navigation}
        titleHeader="Lagi trending nih 🔥"
      />
      <WrapperScreen>
        <ArticleLists
          navigation={navigation}
          url={url}
          isPost={true}
          titleHeader="Post Terbaru"
          isSeeAll={true}
        />
      </WrapperScreen>
    </ScrollView>
  );
};

export default Home;
