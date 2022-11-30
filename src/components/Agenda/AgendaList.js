import {View, Text, Pressable, Image} from 'react-native';
import React, {useState} from 'react';
import {Agenda} from 'react-native-calendars';
import {styles} from './styles';
import { colors } from '../../theme/theme';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { supabase } from '../../../server/server';

const timeToString = time => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
};

const AgendaList = () => {
  const [items, setItems] = useState({});

  const loadItems = day => { 
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);
        if (!items[strTime]) {
          items[strTime] = [];
          const numItems = Math.floor(Math.random() * 5);
          for (let j = 0; j < numItems; j++) {
            items[strTime].push({
              name: 'Item for ' + strTime + ' #' + j,
              height: Math.max(50, Math.floor(Math.random() * 150)),
            });
          }
        }
      }
      const newItems = {};
      Object.keys(items).forEach(key => {
        newItems[key] = items[key];
      });
      setItems(newItems);
    }, 1000);
  }

  // const markDate = useMemo(() => { 
  //   const {data, error} = supabase.from('cycles').select('*').eq('user_id', supabase.auth.user().id);
  //   if (data) {
  //     const markedDates = data.reduce((acc, cycle) => {
  //       acc[cycle.start_date] = {marked: true, dotColor: colors.primary};
  //       return acc;
  //     }, {});
  //     return markedDates;
  //   }
  // }, []);
  
  


 

  const renderItem = item => {
    return (
      <Pressable
        
        style={styles.item}>
        <Fontisto name={item.name === 'injection' ? 'injection-syringe' : 'pills'} size={20} color={item.name === 'injection' ? colors.primary : colors.orange} style={{top: 20}} />
        <View style={styles.itemsContent}>
        <Text style={styles.text}>Testosterone Cypionat 250mg</Text>
          <Text style={[styles.text, { color: 'gray', paddingTop: 5 }]}>1 injection (250mg)</Text>
          </View>
      </Pressable>
    );
  };

  

  return (
    <>
      <Agenda
        style={styles.calendar}
        theme={{
          backgroundColor: '#1e1e1e',
          calendarBackground: '#1e1e1e',
          agendaKnobColor: colors.primary,
          agendaDayNumColor: colors.black,
          agendaTodayColor: colors.black,
          agendaDayTextColor: colors.black,
          selectedDayBackgroundColor: colors.primary,
          selectedDayTextColor: colors.white,
          dayTextColor: colors.white,
          monthTextColor: colors.white,
          todayTextColor: colors.black,
          todayBackgroundColor: colors.primary,
          dotColor: colors.orange

        }}
        showOnlySelectedDayItems={true}
        items={items}
        showClosingKnob={true}
        selected={new Date()}
        renderItem={renderItem}
        loadItemsForMonth={loadItems}
        renderEmptyData={() => {
          return (
            <View style={{alignItems: 'center', paddingTop: 20}}>
              <Text style={styles.text}>No medications scheduled for this day</Text>
            </View>
          )
        }}
        
      />
      
    </>
  );
};

export default AgendaList;
