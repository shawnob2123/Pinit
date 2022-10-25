import { View, Text } from 'react-native'
import React from 'react';
import {styles} from './styles';

const DailyLog = () => {
  return (
    <View style={styles.dailyLogCard}>
      <View style={styles.dailyLogStatusContainer}>
        <Text style={styles.title}>Daily Log Status</Text>
        <Text style={[styles.title, {color: 'red'}]}>Incomplete</Text>
        </View>
      <Text style={styles.text}>You have not logged anything today</Text>
    </View>
  )
}

export default DailyLog