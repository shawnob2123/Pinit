import { View, Text } from 'react-native';
import React from 'react';
import { styles } from './styles';
import FastImage from 'react-native-fast-image';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { TouchableOpacity } from 'react-native-gesture-handler';


const CycleCard = ({
  type,
  compoundUsed,
  dosage,
  dosageUnit,
  startDate,
  endDate,
  selectedDays,
  notes,
  timeOfDay,
}) => {


  const renderRightActions = () => { 

    const onDelete = () => {
      console.log('delete')
     }
    const onSkip = () => { 
      console.log('skip')
    }
    const onTake = () => { 
      console.log('take')
    }
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={onDelete}
          style={styles.delete}>
          <Ionicons name='trash-outline' size={26} color='#fff' />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onSkip}
          style={styles.skip}>
          <Ionicons name='close-outline' size={26} color='#fff' />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onTake}
          style={styles.take}>
          <Ionicons name='checkmark-outline' size={26} color='#fff' />
        </TouchableOpacity>
      </View>
    );
  }

  

  return (
    <Swipeable
      renderRightActions={renderRightActions}
      containerStyle={{paddingVertical: 10}}

    >
      <View style={styles.card}>
        <View style={styles.contentContainer}>
          <View style={styles.nameContainer}>
            {/* type */}
            <FastImage
              style={styles.icon}
              source={require('../../../assets/images/syringe.png')}
            />
            {/* compoundUsed, dosage, dosageUnit */}
            <Text style={styles.text}>Trenbolone Acetate 100mg</Text> 
          </View>
          <View>
            {/* clock icon and timeOfDay */}
          </View>
        </View>
      </View>
    </Swipeable>
  );
};

export default CycleCard;
