import { ActivityIndicator, ToastAndroid } from 'react-native';
import React, { useEffect, useState } from 'react';
import { theme } from '../../..//assets/colors';
import { Container } from '../../../libraries/components/views';
import { useNavigation } from '@react-navigation/native';
import EncryptedStorage from 'react-native-encrypted-storage';


const Logout: React.FC = () => {

  const [success, setsuccess] = useState<string | null>('');
  const navigation = useNavigation();
  // if api is ready the logout function must be in redux, also validation must be done in the API so a smooth logout works
  // if user is not connected to the internet then it must not proceed to logout
  useEffect(() => {
    const logoutfunction = async () => {
      await EncryptedStorage.setItem('auth_token', '');
      setTimeout(async () => {
        const item = await EncryptedStorage.getItem('auth_token');
        console.log(item);
        if (item === '') {
          navigation.navigate('Login' as never);
          ToastAndroid.show('You are now logged out from this device', ToastAndroid.LONG);
          setsuccess('oy');
        }
      }, 3000);
    };
    logoutfunction();
  }, [navigation, success]);

  return (
    <Container>
      <ActivityIndicator
        size={100}
        color={theme.primary}
      />
    </Container>
  );
};

export default Logout;
