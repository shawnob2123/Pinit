import {StyleSheet} from 'react-native';
import { colors, fonts, sizes, weights } from '../../theme/theme';

export const styles = StyleSheet.create({
  weekdayStrip: {
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',

  },
  text: {
    fontSize: sizes.md,
    fontFamily: fonts.primary,
    padding: 10
 
  },
  weekdayBox: {
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    margin: 5,
  }
})