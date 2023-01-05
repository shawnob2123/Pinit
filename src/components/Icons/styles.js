import {StyleSheet} from 'react-native';
import { colors, fonts, sizes, weights } from '../../theme/theme';

export const styles = StyleSheet.create({
    badgeContainer: {
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: -10,
    right: -15,
    backgroundColor: colors.orange,
    borderRadius: 50,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',

  },
  badgeText: {
    color: colors.white,
    fontSize: 12,
    fontFamily: fonts.primary,
    fontWeight: weights.bold,
  }
})