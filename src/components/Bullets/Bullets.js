import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors, fonts, sizes, weights } from '../../theme/theme';

const Bullets = ({ text}) => {
  return (
    <View style={styles.bullet}>
      <Ionicons name='checkmark-circle' size={22} color={colors.primary} />
      <Text style={styles.text}>{text}</Text>
    </View>
  )
}

export default Bullets

const styles = StyleSheet.create({
  bullet: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10

  },
  text: {
    color: colors.white,
    fontSize: sizes.md,
    fontFamily: fonts.primary,
    fontWeight: weights.regular,
    paddingLeft: 10
  }
})