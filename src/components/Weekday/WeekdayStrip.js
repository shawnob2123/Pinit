import { StyleSheet, Text, View, Pressable, FlatList } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import { colors } from '../../theme/theme';
import { useDaySelector } from '../../store/store';
const WeekdayStrip = ({selectedDays}) => {

  const addSelectedDay = useDaySelector(state => state.addSelectedDay);
  const removeSelectedDay = useDaySelector(state => state.removeSelectedDay);
  
  const days = [
    {
      id: 1,
      day: 'M',
      value: 'Monday',
    },
    {
      id: 2,
      day: 'Tu',
      value: 'Tuesday',
    },
    {
      id: 3,
      day: 'W',
      value: 'Wednesday',
    },
    {
      id: 4,
      day: 'Th',
      value: 'Thursday',
    },
    {
      id: 5,
      day: 'F',
      value: 'Friday',
    },
    {
      id: 6,
      day: 'Sa',
      value: 'Saturday',
    },
    {
      id: 7,
      day: 'Su',
      value: 'Sunday',
    },
  ]

  const handleSelect = (day) => {
    if (selectedDays.includes(day)) {
      removeSelectedDay(day)
    } else {
      addSelectedDay(day)
    }
  }

  return (
    <View style={styles.weekdayStrip}>
      <FlatList
        data={days.map((item) => item.day)}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => handleSelect(item)}
            style={[
              styles.weekdayBox,
              {
                backgroundColor: selectedDays.includes(item)
                  ? colors.primary
                  : colors.background,
                borderColor: selectedDays.includes(item)
                  ? colors.primary
                  : colors.primary,
              },
            ]}
          >
            <Text
              style={[
                styles.text,
                {
                  color: selectedDays.includes(item)
                    ? colors.white
                    : colors.primary,
                },
              ]}
            >
              {item}
            </Text>

          </Pressable>
        )}
      />
    </View>
  )
};

export default WeekdayStrip
