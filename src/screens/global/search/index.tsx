import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import { SearchState } from '@libraries/interfaces';
import { TabHeaders } from '../../../libraries/components/headers';
import { RootState } from '@libraries/redux/context/store';
import { TextInput } from 'react-native-gesture-handler';

type Props = {}

const Search = (props: Props) => {
    const search: any = useSelector((state: RootState) => state.search)
    console.log(search.type)
  return (
    <View>
      <TabHeaders 
        name={`Search ${search.type}`}
      />
      <TextInput
        autoFocus
        value=''
        placeholder='red'
      />
    </View>
  )
}

export default Search