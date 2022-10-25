import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { styles } from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.headerContent}>
        <Text style={styles.title}>Hi, Shawn!</Text>
        <View style={styles.iconContainer}>
          <Pressable>
            <Ionicons name="person-circle-outline" size={24} color="#fff" />
          </Pressable>
          <Pressable>
            <Ionicons name="notifications" size={24} color="#fff" />
            </Pressable>
          </View>
      </View>
    </View>
  )
}

export default Header