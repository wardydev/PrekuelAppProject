import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const ArticleListsSkleton = () => {
  return (
    <SkeletonPlaceholder>
      <SkeletonPlaceholder.Item flexDirection={'row'} marginBottom={12}>
        <SkeletonPlaceholder.Item
          width={94}
          height={94}
          borderRadius={12}
          marginRight={20}
        />
        <SkeletonPlaceholder.Item>
          <SkeletonPlaceholder.Item
            height={24}
            width={70}
            marginBottom={8}
            borderRadius={6}
          />
          <SkeletonPlaceholder.Item
            height={16}
            width={width}
            marginBottom={4}
            borderRadius={6}
          />
          <SkeletonPlaceholder.Item
            height={16}
            width={width}
            marginBottom={8}
            borderRadius={6}
          />
          <SkeletonPlaceholder.Item flexDirection={'row'} marginBottom={8}>
            <SkeletonPlaceholder.Item
              height={18}
              width={50}
              marginRight={12}
              borderRadius={6}
            />
            <SkeletonPlaceholder.Item height={18} width={50} borderRadius={6} />
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};

export default ArticleListsSkleton;
