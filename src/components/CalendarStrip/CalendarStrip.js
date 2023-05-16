import { Text, View } from 'react-native'
import React, {useState, useEffect} from 'react';
import moment from 'moment';
import CalendarStrip from 'react-native-calendar-strip';
import {colors, sizes, fonts, weights} from '../../theme/theme';
import { supabase } from '../../../server/server';
import { useMarkedDateStore } from '../../store/store';

const CalendarStripAgenda = (props) => {
  const [loading, setLoading] = useState(false);

  const markedDates = useMarkedDateStore((state) => state.markedDates);

 

 
  return (
    <>
      <CalendarStrip
        useNativeDriver={true}
        scrollable={true}
        calendarAnimation={{ type: 'sequence', duration: 30 }}
        daySelectionAnimation={{ type: 'border', duration: 200, borderWidth: 1, borderHighlightColor: colors.primary, borderRadius: 10 }}
        style={{ height: 100,}}
        calendarHeaderStyle={{ color: 'white', fontFamily: fonts.primary, fontSize: sizes.md }}
        dateNumberStyle={{ color: 'white', fontFamily: fonts.primary, fontSize: sizes.md }}
        dateNameStyle={{ color: 'white', fontFamily: fonts.primary, fontSize: sizes.sm }}
        highlightDateNumberStyle={{ color: colors.white, fontFamily: fonts.primary }}
        highlightDateNameStyle={{ color: colors.white, fontFamily: fonts.primary, fontSize: sizes.sm }}
        highlightDateContainerStyle={{ backgroundColor: colors.background, borderRadius: 10, }}
        disabledDateNameStyle={{ color: 'grey' }}
        disabledDateNumberStyle={{ color: 'grey' }}
        iconContainer={{ flex: 0.1}}
        markedDatesStyle={{ backgroundColor: colors.orange }}
        markedDates={markedDates}

        selectedDate={moment()}
        
       
        

      />
    </>
  )
}

export default CalendarStripAgenda

