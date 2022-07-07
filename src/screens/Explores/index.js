import React, {useState} from 'react';
import {TextInput, StyleSheet, ScrollView, View, Text} from 'react-native';

import WrapperScreen from '../../components/WrapperScreen';
import HeadingScreen from '../../components/atomic/HeadingScreen';
import {primaryFont} from '../../utils/constants/fontSize';
import TagCategories from '../../components/TagCategories';
import HeaderTitle from '../../components/HeaderTitle';
import ArticleList from '../../components/ArticleLists';
import useFetch from '../../hooks/useFetch';
import {FlatList} from 'react-native-gesture-handler';
import ArticleSearch from '../../components/ArticleSearch';

const Explores = ({navigation}) => {
  const [isSearch, setIsSearch] = useState(false);
  const [search, setSearch] = useState('');
  const {data, loading, error} = useFetch(
    'https://prekuel.com/wp-json/wp/v2/posts?per_page=100',
    search,
  );
  const [dataFiltered, setDataFiltered] = useState();

  const filteredData = text => {
    setSearch(text);
    setIsSearch(true);

    if (text === '') {
      setIsSearch(false);
    }

    if (text) {
      const newData = data.filter(item => {
        return (
          item.title.rendered.toLowerCase().includes(text) ||
          item.better_featured_image.alt_text.toLowerCase().includes(text) ||
          item.better_featured_image.description.toLowerCase().includes(text) ||
          item.content.rendered.toLowerCase().includes(text)
        );
      });
      setDataFiltered(newData && newData);
    }
  };

  const url =
    'https://prekuel.com/wp-json/wp/v2/posts?categories=38&per_page=5';

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <WrapperScreen>
        <HeadingScreen heading="Explores" paragraph="Explore your news" />
        <TextInput
          style={styles.input}
          placeholder="Cari berita mu disini.."
          onChangeText={text => filteredData(text)}
          value={search}
        />
        {isSearch ? (
          <ArticleSearch dataFiltered={dataFiltered} navigation={navigation} />
        ) : (
          <View>
            <TagCategories navigation={navigation} />
            <HeaderTitle
              isSeeAll={true}
              title="Rekomendasi"
              navigation={navigation}
            />
            <ArticleList url={url} navigation={navigation} isPost={false} />
          </View>
        )}
      </WrapperScreen>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 24,
    marginTop: 8,
    height: 45,
    padding: 10,
    borderRadius: 6,
    backgroundColor: '#E9E9E9',
    fontFamily: primaryFont,
    fontSize: 16,
  },
});

export default Explores;
