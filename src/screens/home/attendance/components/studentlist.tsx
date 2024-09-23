import { View, Text, FlatList, Pressable } from 'react-native';
import React from 'react';
import AttendanceCard from './attendancecard';
import { AttendanceProps } from '../../../types';
import { StyleSheet } from 'react-native';

const StudentsList = (props: AttendanceProps) => {
	const { classname, date } = props.class;
	return (
		<FlatList
			data={props.data}
			scrollEnabled={false}
			style={styles.flatlist}
			renderItem={({ item }) =>
				(
					<AttendanceCard
						openImage={(e, b, c) => props.openImage(e, b, c)}
						onPress={() => { console.log('pressed'); }}
						data={item} />
				)
			}
			ListHeaderComponent={
				<View style={styles.header}>
					<View
						style={styles.headercontent}>
						<Pressable>
							<Text>{classname}</Text>
						</Pressable>
						<Pressable>
							<Text>{date}</Text>
						</Pressable>
					</View>
				</View>
			}
			ListFooterComponent={<View style={styles.footer} />}
		/>
	);
};

const styles = StyleSheet.create({
	flatlist: {
		width: '100%',
		height: '100%',
	},
	header: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	headercontent: {
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
		width: '95%',
	},
	footer: {
		height: 50,
	},
});


export default StudentsList;
