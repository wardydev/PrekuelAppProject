import React, {useEffect, useState, useRef} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Image,
} from 'react-native';
import {
  blackColor,
  grayColor,
  primaryColor,
  primaryFont,
} from '../../utils/constants/fontSize';

import {dataBoarding} from './dataBoarding';

const {width, height} = Dimensions.get('window');

const Onboarding = ({navigation}) => {
  const flatlistRef = useRef();
  const [currentPage, setCurrentPage] = useState(0);
  const [viewableItems, setViewableItems] = useState([]);
  const [isDoneBtn, setIsDoneBtn] = useState(false);

  const handleViewableItemsChanged = useRef(({viewableItems}) => {
    setViewableItems(viewableItems);
  });

  useEffect(() => {
    if (!viewableItems[0] || currentPage === viewableItems[0].index) return;
    setCurrentPage(viewableItems[0].index);
  }, [viewableItems, currentPage]);

  const handleNext = () => {
    if (currentPage === dataBoarding.length - 2) {
      setIsDoneBtn(true);
    } else if (currentPage === dataBoarding.length - 1) {
      navigation.navigate('Tab');
      return;
    }

    flatlistRef.current.scrollToIndex({
      animated: true,
      index: currentPage + 1,
    });
  };

  const handleBack = () => {
    if (currentPage === 0) return;
    flatlistRef.current.scrollToIndex({
      animated: true,
      index: currentPage - 1,
    });
  };

  const handleSkipToEnd = () => {
    navigation.navigate('Tab');
  };

  const renderItem = ({item}) => {
    return (
      <View
        style={{
          width: width,
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={item.img}
          style={{
            width: 191,
            height: 150,
            marginBottom: 20,
          }}
        />
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>{item.heading}</Text>
          <Text style={styles.subHeading}>{item.subHeading}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text></Text>
        <TouchableOpacity onPress={handleSkipToEnd}>
          <Text>skip</Text>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={dataBoarding}
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          ref={flatlistRef}
          onViewableItemsChanged={handleViewableItemsChanged.current}
          viewabilityConfig={{viewAreaCoveragePercentThreshold: 100}}
          initialNumToRender={1}
        />
      </View>
      <View style={styles.footerContainer}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 26,
          }}>
          {
            // No. of dots
            [...Array(dataBoarding.length)].map((_, index) => (
              <View
                key={index}
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  backgroundColor: index == currentPage ? 'red' : 'grey',
                  marginRight: 8,
                }}
              />
            ))
          }
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btnNavigation} onPress={handleNext}>
            {isDoneBtn ? (
              <Text
                style={{
                  color: 'white',
                  fontFamily: primaryFont,
                  fontWeight: 'bold',
                }}>
                Done
              </Text>
            ) : (
              <Text
                style={{
                  color: 'white',
                  fontFamily: primaryFont,
                  fontWeight: 'bold',
                }}>
                Next
              </Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity style={styles.prevBtn} onPress={handleBack}>
            {currentPage > 0 && (
              <Text
                style={{
                  color: grayColor,
                  fontFamily: primaryFont,
                  fontWeight: 'bold',
                }}>
                Prev
              </Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#f8f9fa',
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  footerContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headingContainer: {
    width: width,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnContainer: {
    paddingHorizontal: 20,
  },
  btnNavigation: {
    backgroundColor: primaryColor,
    paddingHorizontal: 12,
    width: 300,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
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
    fontSize: 18,
    width: '70%',
  },
  prevBtn: {
    paddingHorizontal: 12,
    width: 300,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
});

export default Onboarding;
