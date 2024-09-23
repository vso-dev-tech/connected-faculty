import { useCallback } from 'react';
import { Dispatch } from 'redux';
import { search } from '../../actions/reducers/searchReducers';
import { screens } from '../../../constants';
import { Alert, BackHandler } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
export const searchfunction = (type: string, navigate: (route: string) => void) => async (dispatch: Dispatch) => {

    if (type && screens.includes(type)) {
        dispatch(search(type));

        navigate('Search');
    } else {
        Alert.alert('', 'access denied');
        console.warn(`Type '${type}' does not exist in screens array.`);
    }
};


export const useExitApp = () => {
	useFocusEffect(
			useCallback(() => {
					const onBackPress = () => {
							BackHandler.exitApp();
							return true;
					};

					BackHandler.addEventListener('hardwareBackPress', onBackPress);

					return () => {
							BackHandler.removeEventListener('hardwareBackPress', onBackPress);
					};
			}, [])
	);
};
