import {Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { black, theme, white } from '../../../assets/colors';
import CheckBox from '@react-native-community/checkbox';

type Props = {
  onPress: (e: any) => void
  name: string
}

type TextButton = {
  onPress: (e: any) => void
  name: string
}

type CheckBoxButton = {
  onPress: (e: boolean) => void
  name: string
  value: boolean
}

export const ButtonL: React.FC<Props> = ({
  onPress,
  name,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style = {styles.buttonLcontainer}>
      <Text
        style ={styles.name}
      >{name}</Text>
    </TouchableOpacity>
  );
};


export const TextButton: React.FC<TextButton> = ({
  onPress,
  name,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style = {styles.textbuttoncontainer}>
      <Text
        style ={styles.textbuttoname}
      >{name}</Text>
    </TouchableOpacity>
  );
};

export const CheckBoxButton: React.FC<CheckBoxButton> = ({
  onPress,
  name,
  value,
}) => {
  return (
    <View style = {styles.checkboxcontainer}>
      <CheckBox
        onValueChange={onPress}
        // eslint-disable-next-line react-native/no-inline-styles
        style = {{marginTop: 10}}
        value={value}
        tintColors={{
          true: theme.secondary,
          false: theme.secondary,
        }}
      />
      <Text
        style ={[
          styles.textbuttoname,
          // eslint-disable-next-line react-native/no-inline-styles
          {
            color: black.main,
            fontSize: 20,
          },
        ]}
      >{name}</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  buttonLcontainer: {
    backgroundColor: theme.primary,
    justifyContent: 'center',
    alignItems: 'center',
    width: '85%',
    height: 55,
    borderRadius: 5,
    marginVertical: 10,
  },
  name: {
    color: white.main,
    fontSize: 18,
    fontFamily: 'Montserrat-Regular',
  },
  textbuttoncontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '85%',
    height: 55,
  },
  textbuttoname: {
    color: theme.secondary,
    fontSize: 16,
    fontFamily: 'Yomogi',
  },
  checkboxcontainer: {
    flexDirection: 'row',
    width: '85%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 10,
  }
});

