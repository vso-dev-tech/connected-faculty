/* eslint-disable react-native/no-inline-styles */
import { Text, Pressable, Image, View } from 'react-native';
import React from 'react';
import { UserCardProp } from 'library/types';
import { black, theme } from '../../../../assets/colors';

const UserCard = (props: UserCardProp) => {
  const {name, image, onPress} = props;
  return (
    <Pressable
      style = {{width: '90%', height: 70, borderWidth: 0.5, borderRadius: 5, borderColor: theme.secondary, marginVertical: 25, justifyContent: 'center', alignItems: 'center'}}
      onPress={onPress}
    >
      <View style = {{width: '100%', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', paddingHorizontal: 10}}>
      <Image
        source={{ uri: image }}
        resizeMode="cover"
        style = {{height: 50, width: 50, borderRadius: 500 }}
      />
      <Text style = {{fontFamily: 'Yomogi', fontSize: 20, marginLeft: 25, color: black.main}}>
        {name}
      </Text>
      </View>
    </Pressable>
  );
};

export default UserCard;
