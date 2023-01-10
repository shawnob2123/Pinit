import { View, Text, Pressable, Image } from 'react-native';
import React, { useState, useMemo, useEffect } from 'react';
import { Agenda } from 'react-native-calendars';
import { styles } from './styles';
import { colors } from '../../theme/theme';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AgendaList = () => {

  const [items, setItems] = useState({});
  const [loading, setLoading] = useState(true);
  
  // use async storage to get the anabolics

  const getAnabolics = async () => { 
    try {
      const value = await AsyncStorage.getItem('@anabolic');
      if (value !== null) { 
        setItems(JSON.parse(value));
        console.log(JSON.parse(value));
        setLoading(false);
      } 
    } catch (e) { 
      console.log(e);
    }
  }

  useEffect(() => { 
    getAnabolics();
  }, []);

  const renderItems = (items) => { 
    return (
      <View style={styles.item}>
        <View style={styles.itemContent}>
          <Text>
            {items.anabolic.used}
          </Text>
        </View>
      </View>
    )
  }

  

  

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
        
        items={items}
        
        renderItem={renderItems}
        showOnlySelectedDayItems={true}
        
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
