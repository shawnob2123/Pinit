import { StyleSheet, Text, View, Pressable, FlatList } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import { colors } from '../../theme/theme';

const WeekdayStrip = ({ day }) => {


  const [selectedDays, setSelectedDays] = useState([]);
  const days = ['M', 'Tu', 'W', 'Th', 'F', 'Sa', 'S'];

  const handleSelect = (day) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter((item) => item !== day));
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  }
  return (
    <View style={styles.weekdayStrip}>
      <FlatList
        data={days}
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
                  : colors.white,
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
