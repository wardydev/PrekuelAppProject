import React, {useState, useRef} from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {renderPostCarousel} from '../../utils/functions/renderPostCarousel';

import DataCarousel from '../../utils/constants/DataCarousel';

const PostArticles = () => {
  const postRef = useRef();
  const [index, setIndex] = useState(0);
  const windowWidth = Dimensions.get('window').width;

  return (
    <View style={styles.postContainer}>
      <Carousel
        ref={postRef}
        data={DataCarousel}
        renderItem={renderPostCarousel}
        sliderWidth={windowWidth}
        itemWidth={300}
        loop={true}
        onSnapToItem={index => setIndex(index)}
        useScrollView={true}
      />
      <Pagination
        dotsLength={DataCarousel.length}
        activeDotIndex={index}
        carouselRef={postRef}
        dotStyle={styles.dotStyle}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    marginTop: 36,
  },
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 0,
    backgroundColor: '#E31E26',
  },
});

export default PostArticles;
