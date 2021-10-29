import React, { useState } from 'react';
import { View, Text } from 'react-native';
import SearchBar from '../components/SearchBar';
import tw from 'tailwind-react-native-classnames';

interface Provider {
  success: boolean;
  message: string;
}

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  return (
    <View>
      <SearchBar term={ term } onTermChange={ (val: string) => setTerm(val) } />
      <Text>Search Sceen</Text>
    </View>
  );
}

export default SearchScreen;