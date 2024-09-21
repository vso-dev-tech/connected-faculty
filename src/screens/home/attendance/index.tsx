import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Container, SafeAreaContainer, ScrollContainer } from '../../../libraries/components/views'
import { TabHeaders } from '../../../libraries/components/headers'
import EncryptedStorage from 'react-native-encrypted-storage'
import { useDispatch } from 'react-redux'
import { search } from '@libraries/redux/actions/reducers/searchReducers'
import { useNavigation } from '@react-navigation/native'
import { searchfunction } from '../../../libraries/redux/functions/global'
import { AppDispatch } from '@libraries/redux/context/store'
import StudentsList from './components/studentlist'
import { ImageViewer } from '../../../libraries/components/modals'

type Props = {}

interface ImageViewerState {
  photo: string,
  gender: string,
}

const Attendance = (props: Props) => {
  const [token, settoken] = useState<string | null>('');
  const [imageviewer, setimageviewer] = useState<ImageViewerState>({ photo: '', gender: '' });
  const [openimage, setopenimage] = useState<boolean>(false)
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation();

  useEffect(() => {
    const getEncrypted = async () => {
      const item = await EncryptedStorage.getItem('auth_token') || null
      settoken(item)

    }
    getEncrypted()
  }, [])

  const classdata =
    { classname: 'A-2024', classId: 2, date: '24 Aug 2024' }


  const data = [
    {
      name: 'Lucas Smith',
      attendance: 'Present',
      remarks: 'On time',
      attendanceId: 'A001',
      studentId: 'S1001',
      photo: 'https://example.com/photos/lucas_smith.jpg',
      gender: 'male',
    },
    {
      name: 'Olivia Brown',
      attendance: 'Absent',
      remarks: 'Sick leave',
      attendanceId: 'A002',
      studentId: 'S1002',
      photo: 'https://example.com/photos/olivia_brown.jpg',
      gender: 'female',
    },
    {
      name: 'Mia Johnson',
      attendance: 'Present',
      remarks: 'Early arrival',
      attendanceId: 'A003',
      studentId: 'S1003',
      photo: 'https://example.com/photos/mia_johnson.jpg',
      gender: 'female',
    },
    {
      name: 'Ethan Davis',
      attendance: 'Not Taken',
      remarks: 'Traffic delay',
      attendanceId: 'A004',
      studentId: 'S1004',
      photo: 'https://example.com/photos/ethan_davis.jpg',
      gender: 'male',
    },
    {
      name: 'Sophia Martinez',
      attendance: 'Present',
      remarks: 'Participated actively',
      attendanceId: 'A005',
      studentId: 'S1005',
      photo: 'https://example.com/photos/sophia_martinez.jpg',
      gender: 'female',
    },
    {
      name: 'Liam Garcia',
      attendance: 'Present',
      remarks: 'On time',
      attendanceId: 'A006',
      studentId: 'S1006',
      photo: 'https://example.com/photos/liam_garcia.jpg',
      gender: 'male',
    },
    {
      name: 'Ava Wilson',
      attendance: 'Absent',
      remarks: 'Sick leave',
      attendanceId: 'A007',
      studentId: 'S1007',
      photo: 'https://example.com/photos/ava_wilson.jpg',
      gender: 'female',
    },
    {
      name: 'Isabella Anderson',
      attendance: 'Present',
      remarks: 'Early arrival',
      attendanceId: 'A008',
      studentId: 'S1008',
      photo: 'https://example.com/photos/isabella_anderson.jpg',
      gender: 'female',
    },
    {
      name: 'Noah Thomas',
      attendance: 'Not Taken',
      remarks: 'Traffic delay',
      attendanceId: 'A009',
      studentId: 'S1009',
      photo: 'https://example.com/photos/noah_thomas.jpg',
      gender: 'male',
    },
    {
      name: 'Emma Harris',
      attendance: 'Present',
      remarks: 'Participated actively',
      attendanceId: 'A010',
      studentId: 'S1010',
      photo: 'https://example.com/photos/emma_harris.jpg',
      gender: 'female',
    },
    {
      name: 'Jackson Lee',
      attendance: 'Present',
      remarks: 'On time',
      attendanceId: 'A011',
      studentId: 'S1011',
      photo: 'https://example.com/photos/jackson_lee.jpg',
      gender: 'male',
    },
    {
      name: 'Charlotte Walker',
      attendance: 'Absent',
      remarks: 'Sick leave',
      attendanceId: 'A012',
      studentId: 'S1012',
      photo: 'https://example.com/photos/charlotte_walker.jpg',
      gender: 'female',
    },
    {
      name: 'Amelia Hall',
      attendance: 'Present',
      remarks: 'Early arrival',
      attendanceId: 'A013',
      studentId: 'S1013',
      photo: 'https://example.com/photos/amelia_hall.jpg',
      gender: 'female',
    },
    {
      name: 'James Young',
      attendance: 'Not Taken',
      remarks: 'Traffic delay',
      attendanceId: 'A014',
      studentId: 'S1014',
      photo: 'https://example.com/photos/james_young.jpg',
      gender: 'male',
    },
    {
      name: 'Avery Scott',
      attendance: 'Present',
      remarks: 'Participated actively',
      attendanceId: 'A015',
      studentId: 'S1015',
      photo: 'https://example.com/photos/avery_scott.jpg',
      gender: 'female',
    },
    {
      name: 'John Doe',
      attendance: 'Present',
      remarks: 'On time',
      attendanceId: 'A016',
      studentId: 'S1016',
      photo: 'https://static.vecteezy.com/system/resources/previews/026/540/473/non_2x/portrait-of-a-beautiful-young-woman-isolated-png.png',
      gender: 'female',
    },
    {
      name: 'Jane Smith Jana Smit the smits of jhhana',
      attendance: 'Absent',
      remarks: 'Sick leave',
      attendanceId: 'A017',
      studentId: 'S1017',
      photo: 'https://example.com/photos/jane_smith.jpg',
      gender: 'female',
    },
    {
      name: 'Emily Johnson',
      attendance: 'Present',
      remarks: 'Early arrival',
      attendanceId: 'A018',
      studentId: 'S1018',
      photo: 'https://example.com/photos/emily_johnson.jpg',
      gender: 'female',
    },
    {
      name: 'Michael Brown',
      attendance: 'Not Taken',
      remarks: 'Traffic delay',
      attendanceId: 'A019',
      studentId: 'S1019',
      photo: 'https://example.com/photos/michael_brown.jpg',
      gender: 'male',
    },
    {
      name: 'Sarah Davis',
      attendance: 'Present',
      remarks: 'Participated actively',
      attendanceId: 'A020',
      studentId: 'S1020',
      photo: 'https://example.com/photos/sarah_davis.jpg',
      gender: 'female',
    },
  ];

  function handleViewImage(photo: string, imageOpen: boolean, gender: string) {
    console.log(photo)
    if (photo == '') {
      return
    } else {
      setimageviewer({ photo: photo, gender: gender });
      setopenimage(imageOpen)
    }
  }


  return (
    <SafeAreaContainer>

      <ScrollContainer>
        <TabHeaders
          name='Attendance'
          rightIconActive
          rightIcon='manage-search'
          rightIconPress={() => { dispatch(searchfunction('Student', (route: string) => navigation.navigate(route as never))) }}
        />
        <Container style={{ marginTop: 50 }}>
          <StudentsList openImage={(e, b, c) => handleViewImage(e, b, c)} class={classdata} data={data} />
        </Container>
      </ScrollContainer>
      <ImageViewer source={imageviewer.photo} gender={imageviewer.gender} visible={openimage} onRequestClose={() => setopenimage(false)} close={() => setopenimage(false)} />
    </SafeAreaContainer>

  )
}

export default Attendance;