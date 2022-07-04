import React from 'react';

import ArticleLists from '../ArticleLists';
import HeaderTitle from '../HeaderTitle';
import WrapperScreen from '../WrapperScreen';

const Movie = ({navigation}) => {
  const url =
    'https://prekuel.com/wp-json/wp/v2/posts?categories=161&per_page=30';
  return (
    <WrapperScreen>
      <HeaderTitle title="Movie news" />
      <ArticleLists navigation={navigation} url={url} isPost={false} />
    </WrapperScreen>
  );
};

export default Movie;
