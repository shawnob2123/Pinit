import { View, Text } from 'react-native'
import React from 'react';
import {styles} from './styles';
import Swipeable from 'react-native-gesture-handler/Swipeable';






const CycleCard = ({type, compoundUsed, dosage, dosageUnit, startDate, endDate, selectedDays, notes, timeOfDay}) => {
  return (
    <View style={styles.card}>
      <Text>Cycle</Text>
    </View>
  )
}

export default CycleCard;