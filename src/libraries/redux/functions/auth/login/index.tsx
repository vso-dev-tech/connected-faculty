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
 * @returns {function} A function that handles the dispatch process of the login action.
 *
 * @throws Will dispatch a login failure action and show an error message if the login process fails.
 *
 */

const login = (email: string, password: string, checked: boolean, navigate: (route: string) => void) => async (dispatch: Dispatch) => {

  try {
    console.log('Attempting login...');
    if (email === '' || password === '') {
      Alert.alert('', `seems like you forgot to put your ${email === '' ? 'email' : 'password'}`);
      return;
    }
    const response = await fetch('http://192.168.0.102:3000/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email, password}),
    });
    const data: AuthResponse = await response.json();
    console.log('Response data:', data);
    if(data.error){
      Alert.alert('', data.message);
      return;
    }
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
