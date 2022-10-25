import { View, Text, ScrollView } from 'react-native'
import React from 'react';
import { styles } from './styles';
import {Calendar} from 'react-native-calendars';

const CalendarScreen = () => {
  return (
    <ScrollView
    contentContainerStyle={styles.container}
    >
      <Calendar
        // Collection of dates that have to be marked. Default = {}
        markedDates={{
          '2020-09-16': { selected: true, marked: true, selectedColor: 'blue' },
          '2020-09-17': { marked: true },

        }}
        // Date marking style [simple/period/multi-dot/custom]. Default = 'simple'
        markingType={'period'}
      />
    </ScrollView>
  )
}

export default CalendarScreen;