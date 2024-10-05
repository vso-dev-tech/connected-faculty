/* eslint-disable react-native/no-inline-styles */

import React, { useEffect, useState } from 'react';
import { Container, SafeAreaContainer, ScrollContainer } from '../../../libraries/components/views';
import { TabHeaders } from '../../../libraries/components/headers';
import EncryptedStorage from 'react-native-encrypted-storage';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { searchfunction } from '../../../libraries/redux/functions/global';
import StudentsList from './components/studentlist';
import { ImageViewer } from '../../../libraries/components/modals';
import { AppDispatch } from 'redux-types';
import { Text } from 'react-native';

//kelangan i move sa interface folder lahat ng interface or props sa loob ng files. - To Do pa haha
interface ImageViewerState {
  photo: string,
  gender: string,
}

interface StudentDataState {
  name: string,
  studentId: string,
  photo: string,
  gender: string,
  classId: string
}

const Attendance = () => {
  const [token, settoken] = useState<string | null>('');
  const [imageviewer, setimageviewer] = useState<ImageViewerState>({ photo: '', gender: '' });
  const [openimage, setopenimage] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const [data, setdata] = useState<StudentDataState[]>([]);
  const navigation = useNavigation();

  useEffect(() => {
    const getEncrypted = async () => {
      const item = await EncryptedStorage.getItem('auth_token') || null;
      settoken(item);
      setdata([]);
    };
    getEncrypted();
    console.log(token); //kahit sa useEffect o useFocusEffect na yung function, or pwede din hiwalay
  }, [token]);

  const classdata =
    { classname: 'A-2024', classId: 2, date: '24 Aug 2024' };

  function handleViewImage(photo: string, imageOpen: boolean, gender: string) {
    console.log(photo);
    if (photo === '') {
      return;
    } else {
      setimageviewer({ photo: photo, gender: gender });
      setopenimage(imageOpen);
    }
  }
  return (
    <SafeAreaContainer>

      <ScrollContainer>
        <TabHeaders
          name="Attendance"
          rightIconActive
          rightIcon="manage-search"
          rightIconPress={() => {
            dispatch(
              searchfunction('Student',
                (route: string) =>
                  navigation.navigate(route as never)
              )
            );
          }}
        />
        <Container style={{ marginTop: 50 }}>
          {data.length === 0 ?
          <Text>You don't have any students</Text>
          :
          <StudentsList openImage={(e, b, c) => handleViewImage(e, b, c)} class={classdata} data={data} />}
        </Container>
      </ScrollContainer>
      <ImageViewer
        source={imageviewer.photo}
        gender={imageviewer.gender}
        visible={openimage}
        onRequestClose={() => { setopenimage(false); }}
      />
    </SafeAreaContainer>

  );
};

export default Attendance;
