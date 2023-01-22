import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import { styles } from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';
const Coffee = ({onPress}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.coffee, { alignSelf: 'center' }]}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
        style={styles.image}
          source={{uri: 'https://tinyurl.com/2leldrsq' }}
        />
        <Text style={[styles.text, { color: 'black', fontWeight: '800' }]}>Buy Me A Coffee!</Text>
        </View>
    </Pressable>
  )
}

export default Coffee