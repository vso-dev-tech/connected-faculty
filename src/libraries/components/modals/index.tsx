/* eslint-disable react-native/no-inline-styles */
import { View, Modal, Image, Pressable, Text } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ModalProps } from 'library/types';
import { black, white } from '../../../assets/colors';


export const ImageViewer = (props: ModalProps) => {
	return (
		<Modal
			visible={props.visible}
			onRequestClose={props.onRequestClose}
			animationType="slide"
			statusBarTranslucent
		>
			<View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%', backgroundColor: black.main }}>
				<View style={{ width: '85%', height: '40%', borderRadius: 500, backgroundColor: props.gender === 'male' ? 'lightblue' : 'pink', justifyContent: 'flex-end', alignItems: 'center', marginTop: '7%' }} />
				<Image source={{ uri: props.source }} resizeMode="contain" style={{ width: '100%', height: '100%', position: 'absolute' }} />
				<Pressable  style={{ position: 'absolute', top: 50, left: 15 }} onPress={props.onRequestClose}>
				<Icon
					name="close"
					color={white.main}
					size={30}
				/>
				</Pressable>
			</View>
		</Modal>
	);
};

export const MenuModal: React.FC = () => {
	return (
		<Modal>
			<View>
				<Text>
					WTF
				</Text>
			</View>
		</Modal>
	);
};
