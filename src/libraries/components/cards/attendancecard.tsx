import { View, Text, Pressable, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { theme, white } from '../../../assets/colors'
import { StudentListProps } from '@libraries/types'
import Icon from 'react-native-vector-icons/MaterialIcons'


const AttendanceCard = (props: StudentListProps) => {

	const { data } = props
	let color;
	let backgroundColor;

	switch (data.attendance) {
		case 'Present':
			color = '#005A14'
			backgroundColor = '#8CFFAC'
			break;
		case 'Not Taken':
			color = '#015C68'
			backgroundColor = '#89EAFF'
			break;
		default:
			color = '#FF0000'
			backgroundColor = '#FEB8B8'

	}

	return (
		<View style={{ width: '100%', height: data.name.length > 15 ? 85: 70,  marginVertical: 4, justifyContent: 'center', alignItems: 'center' }}>
			<Pressable
				onPress={props.onPress}
				style={{ backgroundColor: white.main, borderWidth: .5, borderColor: theme.primary, paddingHorizontal: 10,  width: '95%', height: '100%', borderRadius: 10, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', }}>
				<Pressable onPress={() => props.openImage(data.photo, true, data.gender)} style={{ width: 50, height: 50, borderRadius: 500, backgroundColor: data.gender == 'male' ? 'lightblue' : 'pink', justifyContent: 'flex-end', alignItems: 'center', marginRight: 10 }}>
					<Image source={{ uri: data.photo }} resizeMode='cover' style={{ width: 55, height: 55, }} />

				</Pressable>
				<View style = {{width: '60%'}}>
					<Text style={{ fontSize: 18, color: theme.secondary, marginBottom: 5}}>{data.name}</Text>
					{data.attendance && <Text style={{ color: color, backgroundColor: backgroundColor, textAlign: 'center', borderRadius: 10, fontSize: 9, width: 75, paddingVertical: 1, fontWeight: 'bold' }} >{data.attendance}</Text>}
				</View>
				{data.attendance == 'Not Taken' &&
					<View style = {{position: 'absolute', right: 20, flexDirection: 'row', width: '17%', justifyContent: 'space-between', alignItems: 'center'}}>
						<TouchableOpacity>
							<Icon color={'green'} size={25} name = 'check'/>
						</TouchableOpacity>
						<TouchableOpacity>
							<Icon color={'red'} size={25} name = 'close'/>
						</TouchableOpacity>
					</View>
				}
			</Pressable>
		</View>
	)
}

export default AttendanceCard