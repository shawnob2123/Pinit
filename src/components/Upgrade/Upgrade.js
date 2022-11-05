import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react';
import {colors, fonts, sizes, weights} from '../../theme/theme';

const Upgrade = ({duration, price, onPress}) => {
  return (
    <Pressable
      onPress={onPress}
      style={styles.button}
    >
      <View style={styles.container}>
        <Text style={styles.text}>{duration}</Text>
        <Text style={styles.text}>{price}</Text>
      </View>
    </Pressable>
  )
}

export default Upgrade

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1e1e1e',
    borderRadius: 10,
    padding: 15,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: colors.primary,
    fontSize: sizes.lg,
    fontFamily: fonts.bold,
  
  },
  button: {
  
    paddingVertical: 10
    
  }
})