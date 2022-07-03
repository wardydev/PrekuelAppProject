import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Text,
} from 'react-native';

import AutorTitle from '../atomic/AutorTitle';
import TagTitle from '../atomic/TagTitle';
import TimeList from '../atomic/TimeList';
import TitleList from '../atomic/TitleList';
import useFetch from '../../hooks/useFetch';

const ArticleLists = () => {
  const {data, loading, error} = useFetch(
    'https://prekuel.com/wp-json/wp/v2/posts?per_page=5',
  );

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.container}>
        <Image
          style={styles.imageList}
          source={{
            uri: item.better_featured_image.media_details.sizes.medium
              .source_url,
          }}
        />
        <View style={styles.titleContainer}>
          <TagTitle tags="avengers" isPrimary={true} />
          <TitleList title={item.title.rendered} />
          <View style={styles.footerList}>
            <AutorTitle
              author={item.yoast_head_json.twitter_misc['Written by']}
            />
            <TimeList
              minutes={item.yoast_head_json.twitter_misc['Est. reading time']}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  if (loading) {
    return <Text style={{backgroundColor: 'red'}}>Loading...</Text>;
  }

  const getHeader = () => {
    return <Text>Header</Text>;
  };
  const getFooter = () => {
    return <Text>Footer</Text>;
  };

  return (
    <FlatList
      LisHeaderComponent={getHeader}
      data={data && data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      ListFooterComponent={getFooter}
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
});

export default ArticleLists;
