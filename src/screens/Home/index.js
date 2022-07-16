import React, {useEffect} from 'react';
import {ScrollView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import CarouseBanner from '../../components/CarouselBanner';
import WrapperScreen from '../../components/WrapperScreen';
import ArticleLists from '../../components/ArticleLists';
import {URLPOSTTERBARU} from '../../utils/constants/urls';

const Home = ({navigation}) => {
  const url = URLPOSTTERBARU;

  useEffect(() => {
    const getAsyncStorage = async () => {
      const storage = await AsyncStorage.getItem('onboarded');
    };

    getAsyncStorage();
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <CarouseBanner navigation={navigation} titleHeader="Trending" />
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
