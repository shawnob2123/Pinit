import { Text, View } from 'react-native'
import React from 'react';
import moment from 'moment';
import CalendarStrip from 'react-native-calendar-strip';
import {colors, sizes, fonts, weights} from '../../theme/theme';

const CalendarStripAgenda = (props) => {

  

  
  return (
    <View>
      <CalendarStrip
        useNativeDriver={true}
        scrollable={true}
        calendarAnimation={{ type: 'sequence', duration: 30 }}
        daySelectionAnimation={{ type: 'border', duration: 200, borderWidth: 1, borderHighlightColor: 'white' }}
        style={{ height: 100, paddingTop: 5, paddingBottom: 5 }}
        calendarHeaderStyle={{ color: 'white', fontFamily: fonts.primary, fontSize: sizes.lg }}
        dateNumberStyle={{ color: 'white', fontFamily: fonts.primary, fontSize: sizes.md}}
        dateNameStyle={{ color: 'white', fontFamily: fonts.primary, fontSize: sizes.sm }}
        highlightDateNumberStyle={{ color: colors.white, fontFamily: fonts.primary }}
        highlightDateNameStyle={{ color: colors.white, fontFamily: fonts.primary, fontSize: sizes.sm }}
        highlightDateContainerStyle={{ backgroundColor: colors.primary, borderRadius: 10,  borderWidth: 1, padding: 5 }}
        disabledDateNameStyle={{ color: 'grey' }}
        disabledDateNumberStyle={{ color: 'grey' }}
        iconContainer={{ flex: 0.05}}
        markedDatesStyle={{ backgroundColor: colors.orange }}
        markedDates={props.markedDates}
        selectedDate={moment()}
        
       
        

      />
    </View>
  )
}

export default CalendarStripAgenda

