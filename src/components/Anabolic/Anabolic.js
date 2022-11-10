import { View, Text, Pressable } from 'react-native'
import React, {useState, useEffect} from 'react';
import { Divider } from "@rneui/themed";
import { styles } from './styles'
import Fontisto from 'react-native-vector-icons/Fontisto';

const Anabolic = ({ anabolics, navigation }) => {


  return (
    <Pressable style={styles.card}
      onPress={() => navigation.navigate('ViewAnabolic', { anabolics })}
    >
      <View style={styles.contentContainer}>
        <Fontisto
          name={anabolics.type === 'injectable' ? 'injection-syringe' : 'pills'}
          size={20}
          color="#00a6fb" />
        <Text style={styles.name}>{anabolics.name}</Text>
        </View>
      <Divider
        color="lightgray"
        orientation="horizontal"
        size={1}
    />
    </Pressable>

  )
}

export default Anabolic;