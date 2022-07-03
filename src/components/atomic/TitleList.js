import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {getSomeStringArticleTitle} from '../../utils/functions/getSomeString';
import {primaryFont} from '../../utils/constants/fontSize';

const TitleList = ({title}) => {
  return (
    <Text style={styles.titleList}>
      {Array.from(title).length < 10 ? title : getSomeStringArticleTitle(title)}
    </Text>
  );
};

const styles = StyleSheet.create({
  titleList: {
    fontSize: 20,
    fontFamily: primaryFont,
    fontWeight: 'bold',
    color: '#08080A',
  },
});

export default TitleList;
