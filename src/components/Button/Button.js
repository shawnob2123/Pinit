import { View, Text, Pressable } from 'react-native'
import React from 'react';
import {styles} from './styles'
const Button = ({title, onPress}) => {
  return (
    <Pressable
      onPress={onPress}
      style={styles.button}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  )
}

export default Button