import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import AutorTitle from '../../components/atomic/AutorTitle';
import TimeList from '../../components/atomic/TimeList';
import WrapperScreen from '../../components/WrapperScreen';
import {paragraph} from '../../utils/constants/DummyParagraph';
import {blackColor, h1, primaryFont} from '../../utils/constants/fontSize';

const Article = ({route}) => {
  const {title, thumbnail, authorImage, authorName, date} = route.params;
  console.log(title);
  return (
    <ScrollView>
      <WrapperScreen>
        <View style={styles.headerContainer}>
          <Text style={styles.heading}>{title && title}</Text>
          <View style={styles.subHeaderContainer}>
            <View style={styles.profileContainer}>
              <Image
                style={styles.profilPict}
                source={{
                  uri: authorImage && authorImage,
                }}
              />
              <View>
                <AutorTitle author={authorName && authorName} />
                <TimeList minutes={date && date} />
              </View>
            </View>
            <View style={styles.shareIcon}></View>
          </View>
        </View>
        <View style={styles.contentContainer}>
          <Image
            style={styles.contentImage}
            source={{
              uri: thumbnail && thumbnail,
            }}
          />
          <Text style={styles.contentParagraph}>{paragraph}</Text>
        </View>
      </WrapperScreen>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {},
  subHeaderContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 32,
  },
  profileContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  contentContainer: {},
  heading: {
    fontSize: h1,
    fontWeight: 'bold',
    color: blackColor,
    marginBottom: 16,
  },
  profilPict: {
    width: 50,
    height: 50,
    borderRadius: 200,
    marginRight: 16,
  },
  shareIcon: {
    width: 20,
    height: 20,
    backgroundColor: 'red',
  },
  contentImage: {
    width: 327,
    height: 214,
    borderRadius: 12,
    marginBottom: 24,
  },
  contentParagraph: {
    color: blackColor,
    fontSize: 18,
    fontFamily: primaryFont,
    lineHeight: 24,
    textAlign: 'justify',
  },
});

export default Article;
