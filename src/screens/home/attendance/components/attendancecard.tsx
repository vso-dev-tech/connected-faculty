import {
  View,
  Text,
  Pressable,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {theme, white} from '../../../../assets/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { StudentListProps } from 'library/types';

const AttendanceCard = (props: StudentListProps) => {
  const {data} = props;
  let color;
  let backgroundColor;

  switch (data.attendance) {
    case 'Present':
      color = '#005A14';
      backgroundColor = '#8CFFAC';
      break;
    case 'Not Taken':
      color = '#015C68';
      backgroundColor = '#89EAFF';
      break;
    default:
      color = '#FF0000';
      backgroundColor = '#FEB8B8';
  }

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={[styles.container, {height: data.name.length > 15 ? 85 : 70}]}>
      <Pressable onPress={props.onPress} style={styles.pressablecontainer}>
        <Pressable
          onPress={() => props.openImage(data.photo, true, data.gender)}
          // eslint-disable-next-line react-native/no-inline-styles
          style={[styles.pressableimage, {backgroundColor: data.gender === 'male' ? 'lightblue' : 'pink'}]}>
          <Image
            source={{uri: data.photo}}
            resizeMode="cover"
            style={styles.image}
          />
        </Pressable>
        <View style={styles.studentcontainer}>
          <Text style={styles.studentname}>{data.name}</Text>
          {data.attendance && (
            <Text
              style={[
                styles.attendancestatus,
                {color: color, backgroundColor: backgroundColor},
              ]}>
              {data.attendance}
            </Text>
          )}
        </View>
        {data.attendance === 'Not Taken' && (
          <View style={styles.attendance}>
            <TouchableOpacity>
              <Icon color={'green'} size={25} name="check" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon color={'red'} size={25} name="close" />
            </TouchableOpacity>
          </View>
        )}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressablecontainer: {
    backgroundColor: white.main,
    borderWidth: 0.5,
    borderColor: theme.primary,
    paddingHorizontal: 10,
    width: '95%',
    height: '100%',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  pressableimage: {
    width: 50,
    height: 50,
    borderRadius: 500,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: 10,
  },
  studentcontainer: {
		width: '60%',
	},
  studentname: {
		fontSize: 18,
		color: theme.secondary,
		marginBottom: 5,
	},
  image: {
		width: 55,
		height: 55,
	},
  attendancestatus: {
    textAlign: 'center',
    borderRadius: 10,
    fontSize: 9,
    width: 75,
    paddingVertical: 1,
    fontWeight: 'bold',
  },
  attendance: {
    position: 'absolute',
    right: 20,
    flexDirection: 'row',
    width: '17%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default AttendanceCard;
