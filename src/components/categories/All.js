import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';

import ArticleLists from '../ArticleLists';
import WrapperScreen from '../WrapperScreen';

const All = () => {
  const url = 'https://prekuel.com/wp-json/wp/v2/posts?per_page=100';
  return (
    <WrapperScreen>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ArticleLists
          url={url}
          isPost={false}
          titleHeader={'Semua Kategori'}
          isAdd={true}
        />
      </ScrollView>
    </WrapperScreen>
  );
};

export default All;
