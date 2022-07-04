import React from 'react';

import ArticleLists from '../ArticleLists';
import WrapperScreen from '../WrapperScreen';

const Disney = ({navigation}) => {
  const url =
    'https://prekuel.com/wp-json/wp/v2/posts?categories=50&per_page=30';
  return (
    <WrapperScreen>
      <ArticleLists navigation={navigation} url={url} isPost={false} />
    </WrapperScreen>
  );
};

export default Disney;
