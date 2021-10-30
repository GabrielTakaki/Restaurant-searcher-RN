import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import User from '../helper/UserInterface';

const ResultList = ({ businesses, onPress }: any) => {
  return (
    <ScrollView alwaysBounceHorizontal horizontal={ true } style={ tw`flex flex-row mb-5` }>
      {businesses.map((result: any, index: number) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={() => onPress(result)}
            style={tw`flex flex-col content-center p-4 justify-center`}
          >
            <View style={ tw`flex flex-col bg-gray-200 rounded-lg shadow-lg w-full` }>
              <Image
                source={ { uri: result.image_url } }
                style={tw`h-20 w-48`}
              />
              <View style={ tw`flex flex-col content-center` }>
                <Text style={tw`font-bold w-48 px-8 py-3 text-center`}>{result.name}</Text>
                <Text style={tw`text-sm p-3`}>{result.rating} Stars, {result.review_count} Reviews</Text>
                <Text>{result.price}</Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}

export default ResultList;
