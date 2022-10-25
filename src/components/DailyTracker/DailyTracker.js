import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import {styles} from './styles';
const DailyTracker = ({heading}) => {
  return (
    <Pressable style={styles.trackerCard}>
      <View style={styles.trackerContent}>
        <Text style={styles.heading}>{heading}</Text>
        <Image />
        <View>
          <Text>1</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default DailyTracker;
