import React, {useEffect, useState, useRef} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';

import {dataBoarding} from './dataBoarding';

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
          renderItem={({item}) => (
            <View
              style={{
                width: width,
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text>{item.title}</Text>
            </View>
          )}
          keyExtractor={item => item.id}
          ref={flatlistRef}
          onViewableItemsChanged={handleViewableItemsChanged.current}
          viewabilityConfig={{viewAreaCoveragePercentThreshold: 100}}
          initialNumToRender={1}
        />
      </View>
      <View style={styles.footerContainer}>
        <TouchableOpacity onPress={handleBack}>
          <Text>Prev</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnNavigation} onPress={handleNext}>
          {isDoneBtn ? <Text>Done</Text> : <Text>Next</Text>}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  footerContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  headerContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btnNavigation: {
    backgroundColor: 'green',
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
});

export default Onboarding;
