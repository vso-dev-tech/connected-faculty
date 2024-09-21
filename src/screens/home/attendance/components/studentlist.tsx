import { View, Text, FlatList, Pressable } from 'react-native';
import React from 'react';
import AttendanceCard from '../../../../libraries/components/cards/attendancecard';
import { AttendanceProps } from 'screens/types';

const StudentsList = (props: AttendanceProps) => {
	const { classname, date } = props.class;
	return (
		<FlatList
			data={props.data}
			scrollEnabled={false}
			style={{ width: '100%', height: '100%' }}
			renderItem={({ item }) => <AttendanceCard openImage={(e, b, c) => props.openImage(e, b, c)} onPress={() => {console.log('pressed')}} data={item} />}
			ListHeaderComponent={
				<View style={{ justifyContent: 'center', alignItems: 'center' }}>
					<View
						style={{
							justifyContent: 'space-between',
							alignItems: 'center',
							flexDirection: 'row',
							width: '95%',
						}}>
							<Pressable>
								<Text>{classname}</Text>
							</Pressable>
							<Pressable>
								<Text>{date}</Text>
							</Pressable>
					</View>
				</View>
			}
			ListFooterComponent={<View style={{ height: 50 }} />}
		/>
	);
};

export default StudentsList;
