import { StyleSheet, Text, View, Pressable } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import { colors } from '../../theme/theme';

const Weekday = ({day}) => {
  
    const [selectedDays, setSelectedDays] = useState([]);
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const [select, setSelect] = useState(false);
  // press for weekday
  const handlePress = (day) => { 
    setSelect(!select);
    if (select) {
      setSelectedDays(selectedDays.filter((item) => item !== day));
    } else {
      setSelectedDays([...selectedDays, day]);
    }
    console.log(selectedDays);
  }
  return (
    <Pressable
      style={[
        styles.weekdayBox,
        {
          borderColor: select ? '#C4FFEA' : colors.primary,
          backgroundColor: select ? '#C4FFEA' : colors.white,
        },
      ]}
      onPress={() => handlePress(day)}
    >
      <Text style={styles.text}>
        {
          days.map((item, index) => {
            if (index === day) {
              return item;
            }
          
          })
        }
      </Text>
    </Pressable>
  );
};

export default Weekday;
