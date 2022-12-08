import { StyleSheet, Text, View, Pressable } from 'react-native'
import React, {useState} from 'react';
import { styles } from './styles';
import { colors } from '../../theme/theme';

const Weekday = ({ day, onPress }) => {
    const [select, setSelect] = useState(false);

  const handlePress = () => { 
    setSelect(!select);
  }
  return (
    <Pressable
      style={[styles.weekdayBox, {borderColor: select ? '#C4FFEA' : colors.primary, backgroundColor: select ? '#C4FFEA' : colors.white}]}
      onPress={handlePress}
    >
      <Text style={styles.text}>{day}</Text>
    </Pressable>
  )
}

export default Weekday
