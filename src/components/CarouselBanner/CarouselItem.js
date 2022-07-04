import React from 'react';
import {TouchableOpacity, Image, StyleSheet, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {primaryFont} from '../../utils/constants/fontSize';
import {getSomeStringArticleTitle} from '../../utils/functions/getSomeString';

const CarouselItem = ({data, navigation}) => {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Article', {
          itemId: data.id,
          title: data.title.rendered,
          thumbnail:
            data.better_featured_image.media_details.sizes.medium.source_url,
          authorImage: data.yoast_head_json.schema['@graph'][4]['image']['url'],
          authorName: data.yoast_head_json.twitter_misc['Written by'],
          date: data.yoast_head_json.twitter_misc['Est. reading time'],
          source: data.content.rendered,
        })
      }
      style={styles.container}>
      <Image
        style={styles.imageItem}
        source={{
          uri: data.better_featured_image.media_details.sizes.medium.source_url,
        }}
      />
      <LinearGradient
        colors={['#1E346444', 'black']}
        style={styles.linearGradient}>
        <Text style={styles.titleCarousel}>
          {getSomeStringArticleTitle(data.title.rendered)}
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
