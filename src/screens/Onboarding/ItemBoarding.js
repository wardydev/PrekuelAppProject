import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import {
  blackColor,
  grayColor,
  primaryFont,
} from '../../utils/constants/fontSize';

const {width} = Dimensions.get('window');

const ItemBoarding = ({item}) => {
  return (
    <View style={styles.itemContainer}>
      <Image source={item.img} style={styles.imageItem} />
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>{item.heading}</Text>
        <Text style={styles.subHeading}>{item.subHeading}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    color: blackColor,
    fontFamily: primaryFont,
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'center',
    marginBottom: 12,
  },
  subHeading: {
    textAlign: 'center',
    fontSize: 22,
    width: width - 100,
    flexShrink: 1,
    color: grayColor,
  },
  imageItem: {
    width: 191,
    height: 150,
    marginBottom: 36,
  },
  itemContainer: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ItemBoarding;
