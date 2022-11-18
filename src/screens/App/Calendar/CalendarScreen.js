import { View, Text, ScrollView } from 'react-native'
import React, {useState, useEffect} from 'react';
import { styles } from './styles';
import {Agenda} from 'react-native-calendars';

const CalendarScreen = () => {

  const [events, setEvents] = useState({});
  const [markedDates, setMarkedDates] = useState({});
  const [refreshCalendar, setRefreshCalendar] = useState(false);

  // ADD EVENT
  const addEvent = () => {
    setRefreshCalendar(true);
    let items = events;
    let mark = {};
    let eventDetails = {
      name: 'Test Event',
      height: 80,
      date: '2020-10-10'
    }
  }
  return (
    <ScrollView
    contentContainerStyle={styles.container}
    >
      <View style={styles.contentContainer}>
        {/* <Agenda

      /> */}
        </View>
    </ScrollView>
  )
}

export default CalendarScreen;