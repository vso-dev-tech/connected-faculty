import { View } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { TabHeaders } from '../../../libraries/components/headers';
import { TextInput } from 'react-native-gesture-handler';
import { RootState } from 'redux-types';


const Search: React.FC = () => {
    const search: any = useSelector((state: RootState) => state.search);
    console.log(search.type);
  return (
    <View>
      <TabHeaders
        name={`Search ${search.type}`}
      />
      <TextInput
        autoFocus
        value=""
        placeholder="red"
      />
    </View>
  );
};

export default Search;
