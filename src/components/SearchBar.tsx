import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import tw from 'tailwind-react-native-classnames';

const SearchBar = (props: any) => {
  const { term, onTermChange, onTermSubmit, placeholder } = props;
  return (
    <View style={ tw`flex flex-row self-center bg-gray-200 rounded-md m-5 shadow-md` } >
      <View style={ tw`ml-2 py-3` }>
        <Feather name="search" size={ 25 }/>
      </View>
      <TextInput
        placeholder={ placeholder }
        
        style={ tw`flex-1 mx-5 py-3 text-xl` }
        value={ term }
        onChangeText={ onTermChange }
        autoCapitalize="none"
        autoCorrect={ false }
        onEndEditing={ () => onTermSubmit() }
      />
    </View>
  );
}

export default SearchBar;
