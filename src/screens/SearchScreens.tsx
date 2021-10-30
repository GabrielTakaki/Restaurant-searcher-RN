import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import tw from 'tailwind-react-native-classnames';
import yelp from '../api/yelp';
import useRes from '../hooks/useRes';
import ResultList from '../components/ResultList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, businesses, cheapBusinesses, midBusinesses] = useRes();

  return (
    <ScrollView style={ styles.container }>
      <SearchBar
        placeholder="Search"
        term={ term }
        onTermChange={ (val: string) => setTerm(val) }
        onTermSubmit={ () => searchApi(term, 'california')}
      />
      {/* style={ tw`top-24 mx-5 absolute text-xl font-bold max-w-sm` } */}
      <Text style={ tw`mt-5 ml-5 text-xl font-bold max-w-sm` }>Cheap</Text>
      <ResultList title="Cheap" businesses={ cheapBusinesses } />
      {/* style={ tw`top-72 mx-5 mb-2 absolute text-xl font-bold max-w-sm` } */}
      <Text style={ tw`mt-5 ml-5 text-xl font-bold max-w-sm` }>Mid Range</Text>
      <ResultList title="Mid Range" businesses={ midBusinesses } />
      {/* style={ tw`top-3/4 mx-5 absolute text-xl font-bold max-w-sm` } */}
      <Text style={ tw`mt-5 ml-5 text-xl font-bold max-w-sm` }>Expensive</Text>
      <ResultList title="Expensive" businesses={ businesses } />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // overflow: 'visible',
  }
});

export default SearchScreen;