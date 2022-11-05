import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import {styles} from './styles';

const RemindersScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Reminders</Text>
      </View>
    </View>
  )
}

export default RemindersScreen;

