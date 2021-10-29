import React from 'react';
import { View, Text } from 'react-native';
import SearchBar from '../components/SearchBar';
import tw from 'tailwind-react-native-classnames';


const SearchScreen = () => {
  return (
    <View>
      <SearchBar />
      <Text>Search Sceen</Text>
    </View>
  );
}

export default SearchScreen;