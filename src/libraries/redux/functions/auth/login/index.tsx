import { Dispatch } from 'redux';
import EncryptedStorage from 'react-native-encrypted-storage';
import { AuthResponse } from 'library/interface';
import { loginFailure, loginSuccess } from '../../../../../libraries/redux/actions/reducers/authReducers/loginReducers';
import saveCredentials from '../savecredentials';
import { Alert, Platform, ToastAndroid } from 'react-native';

/**
 *
 * @type {AuthResponse}
 * @property {string} email credentails to obtain token
 * @property {string} password credential to obtain token combined with the email
 * @property {function} navigate where the logged in screen should navigate
 *
 */

const login = (email: string, password: string, checked: boolean, navigate: (route: string) => void) => async (dispatch: Dispatch) => {

  try {
    console.log('Attempting login...');
    if (email === '' || password === '') {
      Alert.alert('', `seems like you forgot to put your ${email === '' ? 'email' : 'password'}`);
      return;
    }
    // Making the API call
    //Change the API address when using it in local
    // const response = await fetch('http://10.0.2.2:3000/login', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({email, password}),
    // });

    // Await the JSON response from the server
    // const data: AuthResponse = await response.json();
    const response = { ok: true };
    const data: AuthResponse = { token: '123123', message: '1234', ok: true, name: 'Juan Dela Cruz', image: 'https://i.redd.it/i-got-bored-so-i-decided-to-draw-a-random-image-on-the-v0-4ig97vv85vjb1.png?width=1280&format=png&auto=webp&s=7177756d1f393b6e093596d06e1ba539f723264b' };
    console.log('Response data:', data);

    if (response.ok) {
      if (checked) {
        const saved = await saveCredentials(email, password, data.image, data.name);
        saved ?
          Platform.OS === 'ios' ?
            Alert.alert('Saved Credentials', 'We successfully have stored your credentials on your device.')
            :
            ToastAndroid.show('Successfully stored credentials', ToastAndroid.BOTTOM)
          :
          Platform.OS === 'ios' ?
            Alert.alert('', 'Error storing your credentials, contact admin for more info.')
            :
            ToastAndroid.show('Error storing credentials', ToastAndroid.BOTTOM);
      }
      // Store the token in encrypted storage and dispatch success action
      await EncryptedStorage.setItem('auth_token', data.token);
      dispatch(loginSuccess(data.token));
      navigate('Tabs');
    } else {
      // Dispatch failure action with the error message from the server
      dispatch(loginFailure(data.message));
    }
  } catch (error: any) {
    console.error('Login failed:', error);
    dispatch(loginFailure(error.message));
  }
};

export default login;
