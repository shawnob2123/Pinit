import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react';
import {colors, fonts, sizes, weights} from '../../theme/theme';
import { useStore } from '../../store/store';

const Counter = ({count}) => {
  
  const increment = useStore(state => state.increment);
  const decrement = useStore(state => state.decrement);
  const disable = useStore(state => state.disable);
 
  return (
    <View style={styles.counter}>
      <Pressable
        style={[styles.button, {borderColor: '#fabecf'}]}
        onPress={decrement}
      >
        <Text style={styles.counterText}>-</Text>
      </Pressable>
      <Text style={[styles.counterText, { paddingHorizontal: 15 }]}>{
        count < 0 ? disable() : count
      }</Text>
      <Pressable
        style={[styles.button, {borderColor: colors.primary}]}
        onPress={increment}>
        <Text style={styles.counterText}>+</Text>
      </Pressable>
    </View>
  )
}

export default Counter

const styles = StyleSheet.create({
  counter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '30%',
    height: 50,
    paddingBottom: 10

  },
  counterText: {
    fontSize: sizes.xl,
    fontFamily: fonts.primary,
    fontWeight: weights.bold,
    alignSelf: 'center',
    
  },
  button: {
    borderWidth: 1,
    padding: 5,
    borderRadius: 8,
    width: 50
  }
})