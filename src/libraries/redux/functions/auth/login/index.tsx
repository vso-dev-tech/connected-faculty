import {Dispatch} from 'redux';
import EncryptedStorage from 'react-native-encrypted-storage';
import {loginSuccess, loginFailure} from '../../../actions/reducers/authReducers';
import { AuthResponse } from 'library/interface';

export const login =
  (email: string, password: string, navigate: (route: string) => void) =>
  async (dispatch: Dispatch) => {
    try {
      console.log('Attempting login...');

      // Making the API call
      //Change the API address when using it in local
      const response = await fetch('http://10.0.2.2:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email, password}),
      });

      // Await the JSON response from the server
      const data: AuthResponse = await response.json();

      console.log('Response data:', data);

      if (response.ok) {
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
