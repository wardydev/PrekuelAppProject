import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const BannerSkleton = () => {
  return (
    <SkeletonPlaceholder>
      <SkeletonPlaceholder.Item
        width={93}
        height={30}
        marginBottom={12}
        borderRadius={8}
      />
      <SkeletonPlaceholder.Item
        width={width}
        height={142}
        borderRadius={14}
        marginBottom={16}
      />
    </SkeletonPlaceholder>
  );
};

export default BannerSkleton;
