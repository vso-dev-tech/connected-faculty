// loginActions.ts
import { Dispatch } from 'redux';
import EncryptedStorage from 'react-native-encrypted-storage';
import { loginSuccess, loginFailure } from '../../../actions/reducers/authReducers';

const login = (email: string, password: string, navigate: (route: string) => void) => async (dispatch: Dispatch) => {
  try {
    console.log('yow');
    // const response = await fetch('https://your-api-url.com/login', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ email, password }),
    // });
    // const data: AuthResponse = response.json() as any
    const response = { ok: true };
    const data = { ok: true, token: '-1902380-12893-01293-01293', message: 'success' };

    if (response.ok) {
      await EncryptedStorage.setItem('auth_token', data.token);
      dispatch(loginSuccess(data.token));
      navigate('Tabs');
    } else {
      dispatch(loginFailure(data.message));
    }
  } catch (error: any) {
    dispatch(loginFailure(error.message));
  }
};

export default login;
