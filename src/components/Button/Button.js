import { View, Text, Pressable } from 'react-native'
import React from 'react';
import { styles } from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Button = ({title, onPress, name, size, color}) => {
  return (
    <Pressable
      onPress={onPress}
      style={styles.button}
    >
      <View style={styles.container}>
      <Ionicons name={name} size={size} color={color} />
        <Text style={styles.text}>{title}</Text>
        </View>
    </Pressable>
  )
}

export default Button