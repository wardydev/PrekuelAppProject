import React from 'react';

import ArticleLists from '../ArticleLists';
import WrapperScreen from '../WrapperScreen';

const SerialTv = ({navigation}) => {
  const url =
    'https://prekuel.com/wp-json/wp/v2/posts?categories=162&per_page=30';
  return (
    <WrapperScreen>
      <ArticleLists navigation={navigation} url={url} />
    </WrapperScreen>
  );
};

export default SerialTv;
