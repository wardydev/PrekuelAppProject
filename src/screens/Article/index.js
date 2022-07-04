import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useWindowDimensions} from 'react-native';
import RenderHtml from 'react-native-render-html';

import AutorTitle from '../../components/atomic/AutorTitle';
import TimeList from '../../components/atomic/TimeList';
import WrapperScreen from '../../components/WrapperScreen';
import {
  blackColor,
  h1,
  primaryColor,
  primaryFont,
} from '../../utils/constants/fontSize';

const tagsStyles = {
  a: {
    color: primaryColor,
  },
  p: {
    fontSize: 17,
    lineHeight: 28,
    color: '#8F8F8F',
  },
  li: {
    fontSize: 17,
    lineHeight: 28,
    color: '#8F8F8F',
  },
  ul: {
    fontSize: 17,
    lineHeight: 28,
    color: '#8F8F8F',
  },
  script: {
    display: 'none',
  },
  ins: {
    display: 'none',
  },
  h3: {
    fontSize: 22,
    color: '#545454',
  },
  h4: {
    fontSize: 22,
    color: '#545454',
  },
  h5: {
    fontSize: 22,
    color: '#545454',
  },
  h1: {
    fontSize: 26,
    color: blackColor,
  },
  h2: {
    fontSize: 26,
    color: blackColor,
  },
  img: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
};

const renderersProps = {
  img: {
    enableExperimentalPercentWidth: true,
  },
};

const Article = ({route}) => {
  const {title, thumbnail, authorImage, authorName, date, source} =
    route.params;
  const {width} = useWindowDimensions();

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
                <AutorTitle author={authorName && authorName} isLarge={true} />
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
          <RenderHtml
            contentWidth={width}
            source={{html: source && source}}
            tagsStyles={tagsStyles}
            renderersProps={renderersProps}
          />
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
  contentContainer: {
    overflow: 'hidden',
  },
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
