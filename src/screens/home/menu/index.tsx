import { View, Text } from 'react-native'
import React from 'react'
import { Container, SafeAreaContainer } from '../../../libraries/components/views'
import { TabHeaders } from '../../../libraries/components/headers'

type Props = {}

const Menu = (props: Props) => {
  return (
    <SafeAreaContainer>
        <TabHeaders 
          name='Menu'
          rightIconActive
          rightIcon='manage-search'
        />
      <Container>
        <Text>Others</Text>
      </Container>
    </SafeAreaContainer>

  )
}

export default Menu;