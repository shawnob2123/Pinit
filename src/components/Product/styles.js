import {StyleSheet} from 'react-native';
import { colors, fonts, sizes, weights } from '../../theme/theme';

export const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    padding: 5,
    marginBottom: 10,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    }

  },
  name: {
    fontSize: sizes.md,
    fontWeight: weights.bold,
    color: colors.white,
    fontFamily: fonts.primary

  }
})