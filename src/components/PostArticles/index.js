import React, {useState, useRef} from 'react';
import {View, Dimensions, StyleSheet, Text} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';

import useFetch from '../../hooks/useFetch';
import PostSkleton from '../skleton/PostSkleton';
import WrapperScreen from '../WrapperScreen';
import PostItem from './PostItem';

const PostArticles = () => {
  const postRef = useRef();
  const [index, setIndex] = useState(0);
  const windowWidth = Dimensions.get('window').width;
  const {data, loading} = useFetch(
    'https://prekuel.com/wp-json/wp/v2/posts?categories=42&per_page=3',
  );

  if (loading) {
    return (
      <WrapperScreen>
        <PostSkleton />
      </WrapperScreen>
    );
  }

  return (
    <View style={styles.postContainer}>
      <Carousel
        ref={postRef}
        data={data && data}
        renderItem={({item, i}) => <PostItem data={item} key={i} />}
        sliderWidth={windowWidth}
        itemWidth={300}
        loop={true}
        onSnapToItem={index => setIndex(index)}
        useScrollView={true}
      />
      <Pagination
        dotsLength={data && data.length}
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
