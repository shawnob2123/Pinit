import { View, Text, Pressable } from 'react-native'
import React, {useState, useEffect} from 'react';
import {styles} from './styles'
import Fontisto from 'react-native-vector-icons/Fontisto';
import { supabase } from '../../../server/server';

const CycleCard = ({ cycles }) => {
  
  const [cycle, setCycle] = useState(cycles);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  return (
    <Pressable style={styles.card}>
      <View style={styles.cardContent}>
        <View style={styles.titleContainer}>
        <Fontisto name='injection-syringe' size={22} color={'#00a6fb'} style={{top: 20}} />
          <Text style={styles.title}>Test Name</Text>
        </View>
        <View style={styles.dateContainer}>
         
         
        </View>
        </View>
    </Pressable>
  )
}

export default CycleCard;