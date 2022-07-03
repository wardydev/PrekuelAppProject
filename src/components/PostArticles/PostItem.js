import React from 'react';
import {TouchableOpacity, Image, StyleSheet, View} from 'react-native';

import TagTitle from '../atomic/TagTitle';
import TimeList from '../atomic/TimeList';
import TitleList from '../atomic/TitleList';

const PostItem = ({data}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.headerPostContainer}>
        <View style={styles.headerProfile}>
          <Image
            style={styles.profilePict}
            source={{
              uri: data.yoast_head_json.schema['@graph'][4]['image']['url'],
            }}
          />
          <View>
            <TitleList
              title={data.yoast_head_json.twitter_misc['Written by']}
            />
            <TimeList
              minutes={data.yoast_head_json.twitter_misc['Est. reading time']}
            />
          </View>
        </View>
        <TagTitle categoryId={data.categories[0]} isPrimary={false} />
      </View>
      <View style={styles.headerContent}>
        <TitleList title={data.title.rendered} />
        <Image
          style={styles.imageContent}
          source={{
            uri: data.better_featured_image.media_details.sizes.medium
              .source_url,
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {padding: 20, backgroundColor: '#F0F0F0', borderRadius: 12},
  headerPostContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  headerProfile: {
    display: 'flex',
    flexDirection: 'row',
  },
  profilePict: {
    width: 50,
    height: 50,
    borderRadius: 200,
    backgroundColor: 'red',
    marginRight: 12,
  },
  headerContent: {},
  imageContent: {
    height: 130,
    marginTop: 16,
    borderRadius: 12,
  },
});

export default PostItem;
