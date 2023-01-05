import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { styles } from './styles';
import { colors } from '../../theme/theme';
import {useStore} from '../../store/store';

const BadgedIcon = ({ count }) => { 
    
    
    return (
      <View style={styles.badgeContainer}>
        <Ionicons name='notifications-outline' size={20} color={colors.primary} />
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{count}</Text>
        </View>
      </View>
    )
  }

export default BadgedIcon;
