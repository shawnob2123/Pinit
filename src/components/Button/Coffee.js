import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { styles } from './styles';
import FastImage from 'react-native-fast-image';

const Coffee = ({onPress}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.coffee, { alignSelf: 'center' }]}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <FastImage
          resizeMode={FastImage.resizeMode.contain}
           style={styles.image}
          source={require('../../../assets/images/coffee-cup.png')}
        />
        <Text style={[styles.text, { color: 'black', fontWeight: '800' }]}>Buy Me A Coffee!</Text>
        </View>
    </Pressable>
  )
}

export default Coffee