import React, {useState, useRef} from 'react';
import {View, Dimensions, StyleSheet, Text} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';

import useFetch from '../../hooks/useFetch';
import ErrorSection from '../ErrorSection';
import HeaderTitle from '../HeaderTitle';
import BannerSkleton from '../skleton/BannerSkleton';
import WrapperScreen from '../WrapperScreen';
import CarouselItem from './CarouselItem';

const CarouseBanner = ({titleHeader}) => {
  const carouselRef = useRef();
  const [index, setIndex] = useState(0);
  const windowWidth = Dimensions.get('window').width;

  const {data, loading, error} = useFetch(
    'https://prekuel.com/wp-json/wp/v2/posts?categories=42&per_page=3',
  );

  if (loading) {
    return (
      <WrapperScreen>
        <BannerSkleton />
      </WrapperScreen>
    );
  }

  if (error) {
    return <ErrorSection />;
  }

  return (
    <View>
      <WrapperScreen>
        <HeaderTitle title={titleHeader} isSeeAll={false} />
      </WrapperScreen>
      <Carousel
        ref={carouselRef}
        data={data && data}
        renderItem={({item, i}) => <CarouselItem data={item && item} key={i} />}
        sliderWidth={windowWidth}
        itemWidth={300}
        loop={true}
        onSnapToItem={index => setIndex(index)}
        useScrollView={true}
      />
      <Pagination
        dotsLength={data && data}
        activeDotIndex={index}
        carouselRef={carouselRef}
        dotStyle={styles.dotStyle}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 0,
    backgroundColor: '#E31E26',
  },
});

export default CarouseBanner;
