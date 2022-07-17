import React from 'react';

import ArticleLists from '../ArticleLists';
import WrapperScreen from '../WrapperScreen';

const Netflix = () => {
  const url =
    'https://prekuel.com/wp-json/wp/v2/posts?categories=39&per_page=30';
  return (
    <WrapperScreen>
      <ArticleLists url={url} isPost={true} titleHeader={'Netflix'} />
    </WrapperScreen>
  );
};

export default Netflix;
