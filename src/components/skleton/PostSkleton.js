import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const PostSkleton = () => {
  return (
    <SkeletonPlaceholder>
      <SkeletonPlaceholder.Item
        width={width}
        height={120}
        borderRadius={12}
        marginBottom={16}
      />
      <SkeletonPlaceholder.Item width={width} height={120} borderRadius={12} />
    </SkeletonPlaceholder>
  );
};

export default PostSkleton;
