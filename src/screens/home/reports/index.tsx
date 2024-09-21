import { View, Text } from 'react-native'
import React from 'react'
import { Container, SafeAreaContainer, ScrollContainer } from '../../../libraries/components/views'
import { TabHeaders } from '../../../libraries/components/headers'

type Props = {}

const Reports = (props: Props) => {
  return (
    <SafeAreaContainer>
        <TabHeaders 
          name='Reports'
          rightIconActive
          rightIcon='manage-search'
        />
      <Container>
        <ScrollContainer>
          <Text></Text>
        </ScrollContainer>
      </Container>
    </SafeAreaContainer>

  )
}

export default Reports;