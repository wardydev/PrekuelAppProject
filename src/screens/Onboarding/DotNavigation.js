import React from 'react';
import {View} from 'react-native';

const DotNavigation = ({index, currentPage}) => {
  return (
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
  );
};

export default DotNavigation;
