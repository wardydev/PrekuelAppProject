import React from 'react';

import ArticleLists from '../ArticleLists';
import HeaderTitle from '../HeaderTitle';
import WrapperScreen from '../WrapperScreen';

const SerialTv = () => {
  const url =
    'https://prekuel.com/wp-json/wp/v2/posts?categories=162&per_page=30';
  return (
    <WrapperScreen>
      <ArticleLists url={url} isPost={true} titleHeader={'Serial Tv News'} />
    </WrapperScreen>
  );
};

export default SerialTv;
