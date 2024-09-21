import { View, Text, Modal, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { ModalProps } from 'libraries/types'
import { black, white } from '../../../assets/colors'


export const ImageViewer = (props: ModalProps) => {
	return (
		<Modal
			visible={props.visible}
			onRequestClose={props.onRequestClose}
			animationType='slide'
			statusBarTranslucent
		>
			<View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%', backgroundColor: black.main }}>
				<View style={{ width: '85%', height: '40%', borderRadius: 500, backgroundColor: props.gender == 'male' ? 'lightblue' : 'pink', justifyContent: 'flex-end', alignItems: 'center', marginTop: '7%' }} />
				<Image source={{ uri: props.source }} resizeMode='contain' style={{ width: '100%', height: '100%', position: 'absolute' }} />
				<Icon
					name='close'
					color={white.main}
					size={30}
					onPress={props.close}
					style={{ position: 'absolute', top: 30, left: 15, }}
				/>
			</View>
		</Modal>
	)
}
