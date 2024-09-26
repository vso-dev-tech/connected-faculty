import React, {useCallback} from 'react';
import { StyleSheet, Text } from 'react-native';
import { Container } from '../../../libraries/components/views';
import { black } from '../../../assets/colors';
import DeviceInfo from 'react-native-device-info';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from 'global/types';
import EncryptedStorage from 'react-native-encrypted-storage';
import { useFocusEffect } from '@react-navigation/native';

const Splash: React.FC = () => {
  const version = DeviceInfo.getVersion();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  useFocusEffect(
    useCallback(() => {
      const whereTo = async () => {
        const isSaved = await EncryptedStorage.getItem('email');
        const isToken = await EncryptedStorage.getItem('auth_token');
        if (isToken) {
          navigation.navigate('Tabs');
        } else {
          if (isSaved) {
            navigation.navigate('SaveLogin');
          } else {
            navigation.navigate('Login');
          }
        }
      };
      whereTo();
    }, [navigation])
  );

  return (
    <Container style={styles.innercontainer}>
      <Text style={styles.appname}>ConnectED</Text>
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
    paddingTop: 75,
    height: '100%',
  },
  version: {
    fontFamily: 'Yomogi',
    position: 'absolute',
    bottom: 20,
    fontSize: 14,
    marginTop: 100,
    marginBottom: 10,
    color: black.main,
  },
});

export default Splash;
