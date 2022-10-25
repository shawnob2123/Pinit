import { View, Text } from 'react-native'
import React from 'react';
import CalendarStrip from 'react-native-calendar-strip';

const HomeCalendarStrip = () => {
  return (
    <>
       <CalendarStrip
              calendarAnimation={{ type: 'sequence', duration: 30 }}
              style={{ height: 100, paddingTop: 20, borderRadius: 10 }}
              startingDate={new Date()}
              calendarHeaderStyle={{ color: 'white', fontFamily: 'AlbertSans-Regular' }}
              calendarColor={'#1e1e1e'}
              dateNumberStyle={{ color: 'white', fontFamily: 'AlbertSans-Regular' }}
              dateNameStyle={{ color: 'white', fontFamily: 'AlbertSans-Regular' }}
              highlightDateNumberStyle={{ color: '#00a6fb', fontFamily: 'AlbertSans-Regular' }}
        highlightDateNameStyle={{ color: '#00a6fb' }}
            />
    </>
  )
}

export default HomeCalendarStrip;