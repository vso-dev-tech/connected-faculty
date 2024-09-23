import { Alert, Image, StyleSheet, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Container } from '../../../libraries/components/views';
import { black, white } from '../../../assets/colors';
import DeviceInfo from 'react-native-device-info';
import { ButtonL } from '../../../libraries/components/buttons';
import EncryptedStorage from 'react-native-encrypted-storage';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from 'global/types';
import { useDispatch } from 'react-redux';
import { login } from '../../..//libraries/redux/functions/auth';
import { AppDispatch } from 'redux-types';
import UserCard from './components/usercard';


const SavedLoginScreen: React.FC = () => {

  const version = DeviceInfo.getVersion();
  const [data, setdata] = useState({
    email: '',
    password: '',
    image: '',
    fullname: '',
  });
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    retrieveSavedData();
  },[]);

  const retrieveSavedData = async () => {
      const email = await EncryptedStorage.getItem('email') || '';
      const password = await EncryptedStorage.getItem('password') || '';
      const image = await EncryptedStorage.getItem('image') || '';
      const fullname = await EncryptedStorage.getItem('fullname') || '';
        setdata({email: email, password: password, image: image, fullname: fullname });
  };

  const handleLogin = () => {
    dispatch(login(data.email, data.password, true, (route: string) => {
      navigation.navigate(route as never);
    }));
  };

  const handleRemoveSaved = async () => {
    Alert.alert('', 'Are you sure you want to remove saved login?', [
      {text: 'Yes',
        onPress: async() => {
          await EncryptedStorage.clear();
          navigation.navigate('Login');
        },
      },
      {text: 'No'},
    ]);
  };

  return (
        <Container style={styles.innercontainer}>
          <Image
            source={require('../../../assets/undraw/undraw_Connection_re_lcud.png')}
            resizeMode="contain"
            style={styles.logo}
          />
          <Text style={styles.appname}>ConnectED</Text>
          <UserCard
            name = {data.fullname}
            image = {data.image}
            onPress = {() => handleLogin()}
          />
          <ButtonL
            // eslint-disable-next-line react-native/no-inline-styles
            style={{backgroundColor: 'pink'}}
            name="Remove Account"
            onPress={() => handleRemoveSaved()}
          />
          <Text style={styles.version}>{version}</Text>
        </Container>
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
    paddingTop: 0,
    height: '100%',
    width: '100%',
    backgroundColor: white.main,
  },
  version: {
    fontFamily: 'Yomogi',
    position: 'absolute',
    bottom: 10,
    fontSize: 14,
    marginTop: 100,
    marginBottom: 10,
    color: black.main,
  },
});

export default SavedLoginScreen;
