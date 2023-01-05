import { View, Text, Pressable, Image } from 'react-native';
import React, { useState, useMemo, useEffect } from 'react';
import { Agenda } from 'react-native-calendars';
import { styles } from './styles';
import { colors } from '../../theme/theme';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { supabase } from '../../../server/server';
import anabolics from '../../../assets/data/dummyAgenda.json';
const AgendaList = () => {

  const [items, setItems] = useState({});
  const [loading, setLoading] = useState(true);
  const [markedDates, setMarkedDates] = useState({});
  
  // useEffect(() => { 
  //   fetchItems();
  // }, [items]);

  // const fetchItems = async () => {
  //   try {
  //     setLoading(true);
  //     const { data, error } = await supabase
  //       .from('cycles')
  //       .select('*')
  //       .eq('user_id', supabase.auth.user().id);
  //     console.log(data);
  //     if (error) {
  //       console.log(error);
  //     } else {
  //       const newItems = {};
  //       data.forEach(item => {
  //         const date = item.date;
  //         if (!newItems[date]) {
  //           newItems[date] = [];
  //         }
  //         newItems[date].push(item);
  //       });
  //       setItems(newItems);
  //       setLoading(false);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
     
  // }
    
  
  const renderItem = (anabolics) => {
    return (
      <Pressable style={[styles.item, {height: anabolics.height}]}>
        
        <View style={styles.itemsContent}>
          <Text style={styles.text}>{anabolics.name}</Text>
          <Text style={styles.text}>{anabolics.dosage}</Text>
        </View>
        <Fontisto
          name={anabolics.type === 'injection' ? 'injection-syringe' : 'pills'}
          size={20}
          color={anabolics.type === 'injection' ? colors.primary : colors.orange}
          style={{ alignSelf: 'center' }}
        />
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
        
        items={anabolics}
        showOnlySelectedDayItems={true}
        renderItem={renderItem}
        showClosingKnob={true}
        rowHasChanged={(r1, r2) => {
          return r1.text !== r2.text;
        }}  
        selected={new Date()}
        nestedScrollEnabled={true}
        renderEmptyData={() => {
          return (
            <View style={styles.emptyDate}>
              <Text style={[styles.text, { alignSelf: 'center', paddingTop: 50 }]}>No medications scheduled for this day.</Text>
            </View>
          );
        }}
        renderEmptyDate={() => {
          return (
            <View style={styles.emptyDate}>
              <Text style={[styles.text, {alignSelf: 'center', paddingTop: 50}]}>No medications scheduled for this day.</Text>
            </View>
          );
        }}
      />
    </>
  );
};

export default AgendaList;
