import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {primaryFont} from '../../utils/constants/fontSize';

const TagCategories = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Articles')}
        style={styles.container}>
        <Image
          style={styles.imageStyle}
          source={require('../../assets/images/category/marvel.jpg')}
        />
        <Text style={styles.textStyle}>Marvel</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Movie')}
        style={styles.container}>
        <Image
          style={styles.imageStyle}
          source={require('../../assets/images/category/kdrama.jpg')}
        />
        <Text style={styles.textStyle}>K-Drama</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Netflix')}
        style={styles.container}>
        <Image
          style={styles.imageStyle}
          source={require('../../assets/images/category/netflix.jpg')}
        />
        <Text style={styles.textStyle}>Netflix</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    height: 112,
    borderRadius: 12,
    backgroundColor: 'gray',
    marginBottom: 18,
    overflow: 'hidden',
  },
  imageStyle: {
    width: 350,
    height: 112,
    flex: 1,
    zIndex: 99,
  },
  textStyle: {
    position: 'absolute',
    top: 50,
    flex: 1,
    alignSelf: 'center',
    zIndex: 99,
    color: 'white',
    fontSize: 24,
    fontFamily: primaryFont,
    fontWeight: 'bold',
  },
});

export default TagCategories;
