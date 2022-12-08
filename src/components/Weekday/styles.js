import {StyleSheet} from 'react-native';
import { colors, fonts, sizes, weights } from '../../theme/theme';

export const styles = StyleSheet.create({
  weekdayContainer: {
    width: '100%',
    height: 50,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
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