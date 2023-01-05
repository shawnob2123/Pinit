import { View, Text, Pressable } from 'react-native'
import React from 'react';
import { styles } from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Icons = ({name, color, onPress}) => {
  return (
    <Pressable
      onPress={onPress}
    >
      <AntDesign name={name} size={20} color={color} />
    </Pressable>
  )
}

export default Icons;