import React, {useState} from 'react';
import {TextInput, StyleSheet, ScrollView, View} from 'react-native';

import WrapperScreen from '../../components/WrapperScreen';
import HeadingScreen from '../../components/atomic/HeadingScreen';
import {primaryFont} from '../../utils/constants/fontSize';
import TagCategories from '../../components/TagCategories';
import useFetch from '../../hooks/useFetch';
import ArticleSearch from '../../components/ArticleSearch';
import ArticleListsSkleton from '../../components/skleton/ArticleListSkleton';
import {URLSEARCHPOST} from '../../utils/constants/urls';
import ErrorSection from '../../components/ErrorSection';
import Recomendation from '../../components/Recomendation';

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
        <HeadingScreen heading="Mau baca apa?" paragraph="Cari Disini yuk!" />
        <TextInput
          style={styles.input}
          placeholder="Marvel avengers"
          onChangeText={text => handleTyping(text)}
          value={search}
          onSubmitEditing={handleKeyPress}
          keyboardType="web-search"
        />

        {isSearch && (
          <View style={{marginBottom: 26}}>
            <ArticleSearch
              dataFiltered={dataFiltered}
              navigation={navigation}
            />
          </View>
        )}

        {loading ? (
          skletonLoading()
        ) : (
          <View>
            <TagCategories navigation={navigation} />
            <Recomendation />
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
