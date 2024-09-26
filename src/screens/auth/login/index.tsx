// LoginScreen.tsx
import React, { useState } from 'react';
import { Image, StyleSheet, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../../libraries/redux/context/store';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Container, SafeAreaContainer, ScrollContainer } from '../../../libraries/components/views';
import { LoginField } from '../../../libraries/components/textfields';
import { ButtonL, CheckBoxButton, TextButton } from '../../../libraries/components/buttons';
import { black } from '../../../assets/colors';
import DeviceInfo from 'react-native-device-info';
import { useExitApp } from '../../../libraries/redux/functions/global';
import { login } from '../../../libraries/redux/functions/auth';
import { RootStackParamList } from 'global/types';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [checked, setchecked] = useState<boolean>(false);

  const version = DeviceInfo.getVersion();
  useExitApp();
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const auth: any = useSelector((state: RootState) => state.auth);

  const handleLogin = () => {
    dispatch(login(email, password, checked, (route: string) => {
      navigation.navigate(route as never);
    }));
  };

  return (
    <SafeAreaContainer>
      <ScrollContainer>
        <Container style={styles.innercontainer}>
          <Image
            source={require('../../../assets/undraw/undraw_Connection_re_lcud.png')}
            resizeMode="contain"
            style={styles.logo}
          />
          <Text style={styles.appname}>ConnectED</Text>
          <LoginField
            value={email}
            onChangeText={setEmail}
            placeholder="Email Address"
            keyboardType="email-address"
          />
          <LoginField
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            secureTextEntry
            keyboardType="default"
          />
          <ButtonL
            name="Login"
            onPress={handleLogin}
          />
          {auth.error && <Text>{auth.error}</Text>}
          <CheckBoxButton
            onPress={() => { setchecked(!checked); }}
            name="save login"
            value={checked}
          />
          <TextButton
            onPress={() => { }}
            name="Forgotten Password"
          />
          <Text style={styles.version}>{version}</Text>
        </Container>
      </ScrollContainer>
    </SafeAreaContainer>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: '75%',
    height: 225,
  },
  appname: {
    marginBottom: 40,
    fontSize: 70,
    fontFamily: 'Yomogi',
    color: black.main,
  },
  innercontainer: {
    paddingTop: 75,
    height: '100%',
  },
  version: {
    fontFamily: 'Yomogi',
    fontSize: 14,
    marginTop: 100,
    marginBottom: 10,
    color: black.main,
  },
});

export default Login;
