import { Dispatch } from 'redux';
import { search } from '../../actions/reducers/searchReducers';
import { screens } from '../../../constants';
import { Alert } from 'react-native';
export const searchfunction = (type: string, navigate: (route: string) => void) => async (dispatch: Dispatch) => {

    if (type && screens.includes(type)) {
        dispatch(search(type));

        navigate('Search');
    } else {
        Alert.alert('', 'access denied')
        console.warn(`Type '${type}' does not exist in screens array.`);
    }
};
