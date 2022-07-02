import React from 'react';
import {TouchableOpacity, Image, StyleSheet, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {primaryFont} from '../../utils/constants/fontSize';
import {getSomeStringArticleTitle} from '../../utils/functions/getSomeString';

const CarouselItem = ({data}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image style={styles.imageItem} source={{uri: data.imgUrl}} />
      <LinearGradient
        colors={['#ffffff44', 'black']}
        style={styles.linearGradient}>
        <Text style={styles.titleCarousel}>
          {getSomeStringArticleTitle(data.title)}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 6,
    position: 'relative',
    borderRadius: 16,
    overflow: 'hidden',
  },
  imageItem: {
    height: 160,
    width: 300,
  },
  titleCarousel: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    fontSize: 20,
    fontFamily: primaryFont,
    fontWeight: 'bold',
    color: '#f8f9fa',
  },
  linearGradient: {
    height: 160,
    width: 300,
    position: 'absolute',
    top: 0,
    left: 0,
  },
});

export default CarouselItem;
