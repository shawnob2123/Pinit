import { View, Text } from 'react-native'
import React from 'react';
import { styles } from './styles';
import Weekday from './Weekday';

const WeekdayStrip = () => {
  return (
    <View style={styles.weekdayContainer}>
      <Weekday day="M" />
      <Weekday day="Tu" />
      <Weekday day="W" />
      <Weekday day="Th" />
      <Weekday day="F" />
      <Weekday day="Sa" />
      <Weekday day="Su" />
    </View>
  )
}

export default WeekdayStrip