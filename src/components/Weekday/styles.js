import {StyleSheet} from 'react-native';
import { colors, fonts, sizes, weights } from '../../theme/theme';

export const styles = StyleSheet.create({
 
  text: {
    fontSize: sizes.md,
    fontFamily: fonts.primary,
    fontWeight: weights.regular,
    padding: 10
 
  },
  weekdayBox: {
    borderWidth: 1,
    borderRadius: 10,
  }
})