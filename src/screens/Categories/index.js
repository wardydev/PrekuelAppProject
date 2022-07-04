import React from 'react';
import {View, Text} from 'react-native';
import {useRoute} from '@react-navigation/native';

import Articles from '../Articles';
import Movie from '../../components/categories/Movie';
import Disney from '../../components/categories/Disney';
import Kdrama from '../../components/categories/Kdrama';
import Netflix from '../../components/categories/Netflix';
import SerialTv from '../../components/categories/SerialTv';
import {ScrollView} from 'react-native-gesture-handler';

const Categories = ({navigation}) => {
  const route = useRoute();

  const categoryView = () => {
    switch (route.name) {
      case 'Movie':
        return <Movie navigation={navigation} />;
      case 'SerialTV':
        return <SerialTv navigation={navigation} />;
      case 'KDrama':
        return <Kdrama navigation={navigation} />;
      case 'Netflix':
        return <Netflix navigation={navigation} />;
      case 'Disney':
        return <Disney navigation={navigation} />;
      default:
        return <Articles navigation={navigation} />;
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {categoryView()}
    </ScrollView>
  );
};

export default Categories;
