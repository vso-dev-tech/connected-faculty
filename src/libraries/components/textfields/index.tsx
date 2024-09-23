import { View, TextInput, StyleSheet, KeyboardTypeOptions } from 'react-native';
import React from 'react';
import { black } from '../../../assets/colors';

type Props = {
  onChangeText: (e: string) => void
  placeholder: string
  value: string
  keyboardType: KeyboardTypeOptions
  secureTextEntry?: boolean,

}

export const LoginField: React.FC<Props> = ({
  onChangeText,
  placeholder,
  value,
  keyboardType,
  secureTextEntry,
}) => {
  return (
    <View style = {styles.textinputcontainer}>
      <TextInput
        onChangeText={onChangeText}
        placeholder={placeholder}
        value={value}
        placeholderTextColor={black.main}
        style = {styles.textinput}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textinputcontainer: {
    borderWidth: 0.5,
    borderColor: black.main,
    justifyContent: 'center',
    alignItems: 'center',
    width: '85%',
    height: 55,
    borderRadius: 5,
    marginVertical: 10,
  },
  textinput: {
    fontFamily: 'Yomogi',
    fontSize: 18,
    color: black.main,
    width: '100%',
    height: '100%',
    marginLeft: 20,
  },
});
