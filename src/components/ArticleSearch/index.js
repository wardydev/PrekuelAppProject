import React from 'react';
import {
  FlatList,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {BannerAd, BannerAdSize, TestIds} from 'react-native-google-mobile-ads';

import AutorTitle from '../atomic/AutorTitle';
import TagTitle from '../atomic/TagTitle';
import TimeList from '../atomic/TimeList';
import TitleList from '../atomic/TitleList';

const ArticleSearch = ({dataFiltered}) => {
  const navigation = useNavigation();

  const renderItem = ({item, index}) => {
    if (index === 3) {
      return (
        <View style={styles.bannerAdContainer}>
          <BannerAd
            unitId={TestIds.BANNER}
            size={BannerAdSize.LARGE_BANNER}
            requestOptions={{
              requestNonPersonalizedAdsOnly: true,
            }}
          />
        </View>
      );
    }
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() =>
          navigation.navigate('Article', {
            itemId: item.id,
            title: item.title.rendered,
            thumbnail:
              item.better_featured_image.media_details.sizes.medium.source_url,
            authorImage:
              item.yoast_head_json.schema['@graph'][4]['image']['url'],
            authorName: item.yoast_head_json.twitter_misc['Written by'],
            date: item.date,
            source: item.content.rendered,
          })
        }>
        <Image
          style={styles.imageList}
          source={{
            uri: item.better_featured_image.media_details.sizes.medium
              .source_url,
          }}
        />
        <View style={styles.titleContainer}>
          <TagTitle categoryId={item.categories[0]} isPrimary={true} />
          <TitleList title={item.title.rendered} />
          <View style={styles.footerList}>
            <AutorTitle
              author={item.yoast_head_json.twitter_misc['Written by']}
              isLarge={false}
            />
            <TimeList minutes={item.date} />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={dataFiltered && dataFiltered}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  imageList: {
    width: 100,
    height: 110,
    borderRadius: 12,
    marginRight: 20,
  },
  titleContainer: {
    width: 0,
    flexGrow: 1,
    flex: 1,
  },
  footerList: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 6,
  },
  bannerAdContainer: {
    marginVertical: 26,
  },
});

export default ArticleSearch;
