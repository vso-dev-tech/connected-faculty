import {View, Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {HeaderProp} from 'library/types';

export const TabHeaders: React.FC<HeaderProp> = ({
  name,
  rightIcon,
  leftIcon,
  leftIconActive = false,
  rightIconActive = false,
  leftIconPress,
  rightIconPress,
	MIcon,
}) => {
  return (
    <View style={styles.headercontainer}>
      {leftIconActive ? (
        <Pressable style={styles.iconpress} onPress={leftIconPress}>
          {MIcon ? <MCIcon name={leftIcon || 'blank'} color={'#898EFF'} size={30}  /> : <Icon name={leftIcon || 'blank'} color={'#898EFF'} size={30} />}
        </Pressable>
      ) : (
        <View style={styles.iconpress} />
      )}
      <Text style={styles.headername}>{name}</Text>
      {rightIconActive ? (
        <Pressable style={styles.iconpress} onPress={rightIconPress}>
          {MIcon ? <MCIcon name={leftIcon || 'blank'} color={'#898EFF'} size={30}  /> : <Icon name={rightIcon || 'blank'} color={'#898EFF'} size={30} />}
        </Pressable>
      ) : (
        <View style={styles.iconpress} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  headercontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
    height: 75,
    width: '90%',
    position: 'absolute',
    top: 0,
  },
  iconpress: {
    width: 35,
  },
  headername: {fontWeight: 'bold', fontSize: 20, color: '#898EFF'},
});
