import {View, Text, Pressable, Image} from 'react-native';
import React, {useState, useMemo, useEffect} from 'react';
import {Agenda} from 'react-native-calendars';
import {styles} from './styles';
import {colors} from '../../theme/theme';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {supabase} from '../../../server/server';

const timeToString = time => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
};

const AgendaList = () => {
  const [items, setItems] = useState({});

  // const markDate = useMemo(() => {
  //   const {data, error} = supabase
  //     .from('cycles')
  //     .select('*')
  //     .eq('user_id', supabase.auth.user().id);
  //   if (data) {
  //     const markedDates = data.reduce((acc, cycle) => {
  //       acc[cycle.start_date] = {marked: true, dotColor: colors.primary};
  //       return acc;
  //     }, {});
  //     return markedDates;
  //   }
  // }, []);

  useEffect(() => { 
    const {data, error} = supabase
      .from('cycles')
      .select('*')
      .eq('user_id', supabase.auth.getUser().id);
    if (data) {
      console.log(data);
      const markedDates = data.reduce((acc, cycle) => {
        acc[cycle.start_date] = { marked: true, dotColor: colors.orange };
        acc[cycle.end_date] = { marked: true, dotColor: colors.orange };
        return acc;
      }, {});
      return markedDates;
    }
  }, []);

  const renderItem = item => {
    return (
      <Pressable style={styles.item}>
        <Fontisto
          name={item.name === 'injection' ? 'injection-syringe' : 'pills'}
          size={20}
          color={item.name === 'injection' ? colors.primary : colors.orange}
          style={{top: 20}}
        />
        <View style={styles.itemsContent}>
          <Text style={styles.text}>{item.anabolic}</Text>
          <Text style={[styles.text, {color: 'gray', paddingTop: 5}]}>
            {item.dosage}{' '}
          </Text>
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
          dotColor: colors.orange,
        }}
        
        showOnlySelectedDayItems={true}
        items={items}
        showClosingKnob={true}
        rowHasChanged={(r1, r2) => {
    return r1.text !== r2.text;
  }}
        selected={new Date()}
        renderItem={renderItem}
        renderEmptyDate={() => {
          return (
            <View style={styles.emptyDate}>
              <Text style={styles.text}>No medications scheduled for this day.</Text>
            </View>
          );
        }}
        renderEmptyData={() => {
          return (
            <View style={{alignItems: 'center', paddingTop: 20}}>
              <Text style={styles.text}>
                No medications scheduled for this day
              </Text>
            </View>
          );
        }}
      />
    </>
  );
};

export default AgendaList;
