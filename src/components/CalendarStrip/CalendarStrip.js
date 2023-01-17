import { Text, View } from 'react-native'
import React from 'react';
import moment from 'moment';
import CalendarStrip from 'react-native-calendar-strip';
import {colors, sizes, fonts, weights} from '../../theme/theme';

const CalendarStripAgenda = ({markedDates}) => {

  

  
  return (
    <View>
      <CalendarStrip
        useNativeDriver={true}
        
        calendarAnimation={{ type: 'sequence', duration: 30 }}
        daySelectionAnimation={{ type: 'border', duration: 200, borderWidth: 1, borderHighlightColor: 'white' }}
        style={{ height: 100, paddingTop: 5, paddingBottom: 5 }}
        calendarHeaderStyle={{ color: 'white', fontFamily: fonts.primary, fontSize: sizes.lg }}
        dateNumberStyle={{ color: 'white', fontFamily: fonts.primary, fontSize: sizes.md}}
        dateNameStyle={{ color: 'white', fontFamily: fonts.primary, fontSize: sizes.sm }}
        highlightDateNumberStyle={{ color: colors.primary, fontFamily: fonts.primary }}
        highlightDateNameStyle={{ color: colors.primary, fontFamily: fonts.primary, fontSize: sizes.sm }}
        highlightDateContainerStyle={{ backgroundColor: colors.background, borderRadius: 10 }}
        disabledDateNameStyle={{ color: 'grey' }}
        disabledDateNumberStyle={{ color: 'grey' }}
        iconContainer={{ flex: 0.05 }}
        selectedDate={moment()}
        markedDates={markedDates}

      />
    </View>
  )
}

export default CalendarStripAgenda

