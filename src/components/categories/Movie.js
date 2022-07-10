import React from 'react';

import ArticleLists from '../ArticleLists';
import HeaderTitle from '../HeaderTitle';
import WrapperScreen from '../WrapperScreen';

const Movie = () => {
  const url =
    'https://prekuel.com/wp-json/wp/v2/posts?categories=161&per_page=30';
  return (
    <WrapperScreen>
      <ArticleLists url={url} isPost={false} titleHeader={'Movie News'} />
    </WrapperScreen>
  );
};

export default Movie;
