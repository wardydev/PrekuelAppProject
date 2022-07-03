import React from 'react';
import {View, Text, FlatList} from 'react-native';

import useFetch from '../../hooks/useFetch';

const Screen2 = () => {
  const {data, loading, error} = useFetch(
    'https://jsonplaceholder.typicode.com/users',
  );

  const renderItem = ({item}) => {
    return <Text>{item.name}</Text>;
  };

  if (loading) {
    return <Text style={{backgroundColor: 'red'}}>Loading...</Text>;
  }

  return (
    <View>
      <Text>Screen 2</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Screen2;
