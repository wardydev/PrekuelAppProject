import React from 'react';
import {ScrollView, View, StyleSheet, Dimensions} from 'react-native';
import {BannerAd, BannerAdSize, TestIds} from 'react-native-google-mobile-ads';

import CarouseBanner from '../../components/CarouselBanner';
import WrapperScreen from '../../components/WrapperScreen';
import ArticleLists from '../../components/ArticleLists';
import {URLPOSTTERBARU} from '../../utils/constants/urls';

const {width} = Dimensions.get('window');

const Home = ({navigation}) => {
  const url = URLPOSTTERBARU;

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <CarouseBanner
        navigation={navigation}
        titleHeader="Lagi trending nih 🔥"
      />
      <WrapperScreen>
        <View style={styles.bannerAdContainer}>
          <BannerAd
            unitId={TestIds.BANNER}
            size={BannerAdSize.LARGE_BANNER}
            requestOptions={{
              requestNonPersonalizedAdsOnly: true,
            }}
          />
        </View>
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

const styles = StyleSheet.create({
  bannerAdContainer: {
    width: width,
    marginBottom: 26,
  },
});

export default Home;
