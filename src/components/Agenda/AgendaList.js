import {View, Text, TouchableOpacity, Image} from 'react-native';
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

  // const loadItems = day => { 
  //   setTimeout(() => {
  //     for (let i = -15; i < 85; i++) {
  //       const time = day.timestamp + i * 24 * 60 * 60 * 1000;
  //       const strTime = timeToString(time);
  //       if (!items[strTime]) {
  //         items[strTime] = [];
  //         const numItems = Math.floor(Math.random() * 5);
  //         for (let j = 0; j < numItems; j++) {
  //           items[strTime].push({
  //             name: 'Item for ' + strTime + ' #' + j,
  //             height: Math.max(50, Math.floor(Math.random() * 150)),
  //           });
  //         }
  //       }
  //     }
  //     const newItems = {};
  //     Object.keys(items).forEach(key => {
  //       newItems[key] = items[key];
  //     });
  //     setItems(newItems);
  //   }, 1000);
  // }

  const renderItem = item => {
    return (
      <View style={styles.item}>
        <Fontisto name="injection-syringe" size={18} color={colors.primary} />
        <View style={{alignSelf:'center'}}>
        
          <Text style={styles.text}>Testosterone Cypionate 250mg</Text>
          <Text style={[styles.text, {color: 'gray', paddingTop: 5}]}>1 injection (250mg)</Text>
          </View>
      </View>
    );
  };

  return (
    <>
      <Agenda
        style={styles.calendar}
        theme={{
          backgroundColor: 'red',
          calendarBackground: '#1e1e1e',
          agendaKnobColor: colors.primary,
          selectedDayBackgroundColor: colors.primary,
          selectedDayTextColor: colors.white,
          dayTextColor: colors.white,
          monthTextColor: colors.white,
          // marked dates style
          todayTextColor: colors.black,
          todayBackgroundColor: colors.primary,
          dotColor: colors.orange

        }}
        items={items}
        renderItem={renderItem}
        // loadItemsForMonth={loadItems}
      />
    </>
  );
};

export default AgendaList;
