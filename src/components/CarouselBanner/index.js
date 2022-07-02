import React, {useState, useRef} from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {renderCarousel} from '../../utils/functions/renderCarousel';

import DataCarousel from '../../utils/constants/DataCarousel';

const CarouseBanner = () => {
  const carouselRef = useRef();
  const [index, setIndex] = useState(0);
  const windowWidth = Dimensions.get('window').width;

  return (
    <View>
      <Carousel
        ref={carouselRef}
        data={DataCarousel}
        renderItem={renderCarousel}
        sliderWidth={windowWidth}
        itemWidth={300}
        loop={true}
        onSnapToItem={index => setIndex(index)}
        useScrollView={true}
      />
      <Pagination
        dotsLength={DataCarousel.length}
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
    backgroundColor: '#1E3464',
  },
});

export default CarouseBanner;
