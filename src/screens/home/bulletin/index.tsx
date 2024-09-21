import { View, Text } from 'react-native'
import React from 'react'
import { Container, SafeAreaContainer } from '../../../libraries/components/views'
import { TabHeaders } from '../../../libraries/components/headers'
import { searchfunction } from '../../../libraries/redux/functions/global'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../../libraries/redux/context/store'
import { useNavigation } from '@react-navigation/native'

type Props = {}

const Bulletin = (props: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation();
  return (
    <SafeAreaContainer>
        <TabHeaders 
          name='Bulletin'
          rightIconActive
          rightIcon='manage-search'
          rightIconPress={() => {dispatch(searchfunction('Post', (route: string) => navigation.navigate(route as never)))}}
        />
      <Container>
        <Text>Bulletin</Text>
      </Container>
    </SafeAreaContainer>

  )
}

export default Bulletin;