import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { styles } from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';

const Heading = ({title, icon}) => {
  return (
    <View style={styles.headingContainer}>
      <Fontisto name={icon} size={20} color="black" />
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

export default Heading

