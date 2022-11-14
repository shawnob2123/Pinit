import {StyleSheet, Dimensions} from 'react-native';
import { colors, fonts, sizes, weights } from '../../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    height: '100%', 

  },
  contentContainer: {
    height: 200,
    width: Dimensions.get('screen').width,
  },
  title: {
    fontSize: sizes.xxl,
    color: colors.primary,
    fontFamily: fonts.bold,
    alignSelf: 'center',
  },
  disclaimer: {
    fontSize: sizes.lg,
    color: colors.primary,
    fontFamily: fonts.primary,
    fontWeight: weights.bold,
    alignSelf: 'flex-start',
    paddingBottom: 10,
  },
  disclaimerText: {
    fontSize: 12,
    color: colors.white,
    fontFamily: fonts.primary,
    lineHeight: 25,
  },
  disclaimerContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
  }
})