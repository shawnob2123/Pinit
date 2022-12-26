import { View, Text, Pressable } from 'react-native'
import React, {memo} from 'react';
import { Divider } from "@rneui/themed";
import { styles } from './styles'
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../theme/theme';


const Anabolic = ({ anabolics }) => {
  const navigation = useNavigation();

  return (
    <Pressable style={styles.card}
      onPress={() => navigation.navigate('View Anabolics', { anabolics })}
    >
      <View style={styles.contentContainer}>
        <Fontisto
          name={anabolics.type === 'injectable' ? 'injection-syringe' : 'pills'}
          size={20}
          color={anabolics.type === 'injectable' ? colors.primary : colors.orange} />
        <Text style={styles.name}>{anabolics.name}</Text>
        <FontAwesome name='angle-right' size={20} color="#00a6fb" style={styles.icon} />
        </View>
      <Divider
        color="#292929"
        orientation="horizontal"
        size={1}
       
    />
    </Pressable>

  )
}

export default memo(Anabolic);