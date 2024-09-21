import { View, Text, Pressable } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { HeaderProp } from '@libraries/types';



export const TabHeaders: React.FC<HeaderProp> = ({
	name,
	rightIcon,
	leftIcon,
	leftIconActive = false,
	rightIconActive = false,
	leftIconPress,
	rightIconPress,
}) => {
	return (
		<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', alignSelf: 'center', height: 75, width: '90%', position: 'absolute', top: 0 }}>
			{leftIconActive ? (
				<Pressable style={{ width: 35, }} onPress={leftIconPress}>
					<Icon name={leftIcon || 'blank'} color={'#898EFF'} size={30} />
				</Pressable>
			) : (<View style={{ width: 35, }} />)}
			<Text style={{ fontWeight: 'bold', fontSize: 20, color: '#898EFF' }}>{name}</Text>
			{rightIconActive ? (
				<Pressable style={{ width: 35 }} onPress={rightIconPress}>
					<Icon name={rightIcon || 'blank'} color={'#898EFF'} size={30} />
				</Pressable>
			) : (<View style={{ width: 35, }} />)}
		</View>
	);
};
