import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { styles } from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Heading = ({title, icon}) => {
  return (
    <View style={styles.headingContainer}>
      <Ionicons name={icon} size={24} color="black" />
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

export default Heading

