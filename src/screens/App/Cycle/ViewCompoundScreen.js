import { View, Text } from 'react-native'
import React from 'react';
import {styles} from './styles';

const ViewHomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Cycle</Text>
      </View>
    </View>
  )
}

export default ViewHomeScreen;