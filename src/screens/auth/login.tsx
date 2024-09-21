// LoginScreen.tsx
import React, { useState } from 'react';
import { Text, TextInput, Pressable } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../libraries/redux/context/store';
import { login } from '../../libraries/redux/functions/auth/auth';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaContainer } from '../../libraries/components/views';

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation();
  const auth: any = useSelector((state: RootState) => state.auth);

  const handleLogin = () => {
    dispatch(login(email, password, (route: string) => {
      navigation.navigate(route as never);
    }));
  };


  return (
    <SafeAreaContainer>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        keyboardType="email-address"
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
      />
      <Pressable onPress={handleLogin}>
        <Text>Login</Text>
      </Pressable>
      {auth.error && <Text>{auth.error}</Text>}
    </SafeAreaContainer>
  );
};

export default LoginScreen;
