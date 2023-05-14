import { View, Text, Pressable } from 'react-native'
import React, {memo} from 'react';
import { Divider } from "@rneui/themed";
import { styles } from './styles'
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../theme/theme';
import FastImage from 'react-native-fast-image'

const Anabolic = ({ anabolics }) => {
  const navigation = useNavigation();

  return (
    <Pressable style={styles.card}
      onPress={() => navigation.navigate('View Anabolics', { anabolics })}
    >
      <View style={styles.contentContainer}>
        <FastImage
          style={styles.image}
          // if type is injection, reder synringe image else render capsule image
          source={anabolics.type === 'injectable' ? require('../../../assets/images/syringe.png') : require('../../../assets/images/capsule.png')}
        />
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