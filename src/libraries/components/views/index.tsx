import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { SafeAreaProps, ScrollProps, ContainerProps } from '../../types';
import { ScrollView } from 'react-native-gesture-handler';

export const Container = (props: ContainerProps) => {
  const {children, style} = props;
  return (
    <View style = {[{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', paddingTop: 50}, style]}>
      {children}
    </View>
  )
}

export const ScrollContainer = (props: ScrollProps) => {
    const {children} = props;
    return (
      <ScrollView style = {{width: '100%', height: '100%'}}>
        {children}
      </ScrollView>
    )
}

export const SafeAreaContainer = (props: SafeAreaProps) => {
    const {children} = props;

    return (
        <SafeAreaView style = {{flex: 1,  backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', alignContent: 'center'}}>
            {children}
        </SafeAreaView>
    )
}