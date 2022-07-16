import React, {useState} from 'react';
import {TextInput, StyleSheet, ScrollView, View, Text} from 'react-native';

import WrapperScreen from '../../components/WrapperScreen';
import HeadingScreen from '../../components/atomic/HeadingScreen';
import {primaryFont} from '../../utils/constants/fontSize';
import TagCategories from '../../components/TagCategories';
import ArticleList from '../../components/ArticleLists';
import useFetch from '../../hooks/useFetch';
import ArticleSearch from '../../components/ArticleSearch';
import ArticleListsSkleton from '../../components/skleton/ArticleListSkleton';
import {URLRECOMMENDATION, URLSEARCHPOST} from '../../utils/constants/urls';
import ErrorSection from '../../components/ErrorSection';

const Explores = ({navigation}) => {
  const [isSearch, setIsSearch] = useState(false);
  const [search, setSearch] = useState('');
  const {data, loading, error} = useFetch(URLSEARCHPOST, search);
  const [dataFiltered, setDataFiltered] = useState();

  const handleKeyPress = ({nativeEvent: {text}}) => {
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

  const handleTyping = text => {
    setSearch(text);
    setIsSearch(true);
    if (text === '') {
      setIsSearch(false);
    }
  };

  const url = URLRECOMMENDATION;

  const skletonLoading = () => {
    return (
      <View>
        <ArticleListsSkleton />
        <ArticleListsSkleton />
        <ArticleListsSkleton />
        <ArticleListsSkleton />
        <ArticleListsSkleton />
        <ArticleListsSkleton />
        <ArticleListsSkleton />
      </View>
    );
  };

  if (error) {
    return <ErrorSection />;
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <WrapperScreen>
        <HeadingScreen heading="Explores" paragraph="Cari Artikelmu Disini!" />
        <TextInput
          style={styles.input}
          placeholder="Marvel avengers"
          // onChangeText={text => filteredData(text)}
          onChangeText={text => handleTyping(text)}
          value={search}
          // onKeyPress={handleKeyPress}
          onSubmitEditing={handleKeyPress}
          keyboardType="web-search"
        />

        {loading && skletonLoading()}

        {isSearch ? (
          <ArticleSearch dataFiltered={dataFiltered} navigation={navigation} />
        ) : (
          <View>
            <TagCategories navigation={navigation} />
            <ArticleList
              url={url}
              navigation={navigation}
              isPost={false}
              titleHeader={'Anime'}
              isSeeAll={true}
            />
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
