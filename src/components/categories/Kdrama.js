import React from 'react';

import ArticleLists from '../ArticleLists';
import WrapperScreen from '../WrapperScreen';

const Kdrama = () => {
  const url =
    'https://prekuel.com/wp-json/wp/v2/posts?categories=30&per_page=30';
  return (
    <WrapperScreen>
      <ArticleLists url={url} isPost={false} titleHeader={'Kdrama'} />
    </WrapperScreen>
  );
};

export default Kdrama;
