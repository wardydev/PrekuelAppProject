import React, {useEffect, useState, useRef} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import {
  grayColor,
  primaryColor,
  primaryFont,
} from '../../utils/constants/fontSize';

import {dataBoarding} from './dataBoarding';
import DotNavigation from './DotNavigation';
import FooterBoarding from './FooterBoarding';
import ItemBoarding from './ItemBoarding';

const {width} = Dimensions.get('window');

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
    return <ItemBoarding item={item} />;
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={{alignSelf: 'flex-end'}}
          onPress={handleSkipToEnd}>
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
        <View style={styles.dotContainer}>
          {
            // No. of dots
            [...Array(dataBoarding.length)].map((_, index) => (
              <DotNavigation index={index} currentPage={currentPage} />
            ))
          }
        </View>
        <FooterBoarding
          handleNext={handleNext}
          handleBack={handleBack}
          isDoneBtn={isDoneBtn}
          currentPage={currentPage}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#f8f9fa',
  },
  footerContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  headerContainer: {
    width: '100%',
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  headingContainer: {
    width: width,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dotContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 26,
  },
});

export default Onboarding;
