import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {
  grayColor,
  primaryColor,
  primaryFont,
} from '../../utils/constants/fontSize';

const FooterBoarding = ({handleNext, isDoneBtn, handleBack, currentPage}) => {
  return (
    <View style={styles.btnContainer}>
      <TouchableOpacity style={styles.btnNavigation} onPress={handleNext}>
        {isDoneBtn ? (
          <Text style={styles.doneText}>Done</Text>
        ) : (
          <Text style={styles.doneText}>Next</Text>
        )}
      </TouchableOpacity>
      <TouchableOpacity style={styles.prevBtn} onPress={handleBack}>
        {currentPage > 0 && <Text style={styles.prevText}>Prev</Text>}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btnNavigation: {
    backgroundColor: primaryColor,
    paddingHorizontal: 12,
    width: 300,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  btnContainer: {
    paddingHorizontal: 20,
  },
  prevBtn: {
    paddingHorizontal: 12,
    width: 300,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  doneText: {
    color: 'white',
    fontFamily: primaryFont,
    fontWeight: 'bold',
  },
  prevText: {
    color: grayColor,
    fontFamily: primaryFont,
    fontWeight: 'bold',
  },
});

export default FooterBoarding;
