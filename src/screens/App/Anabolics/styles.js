import {StyleSheet, Dimensions} from 'react-native';
import { colors, fonts, sizes, weights } from '../../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    height: '100%', 

  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20
  },
  title: {
    fontSize: sizes.xxl,
    color: colors.primary,
    fontFamily: fonts.bold,
    alignSelf: 'flex-start',
    paddingLeft: 10,
  },
  text: {
    fontSize: sizes.md,
    color: colors.white,
    fontFamily: fonts.primary,
    alignSelf: 'flex-start',
    paddingLeft: 10,
    paddingTop: 10,
    lineHeight: 25
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
  },
  anabolicsContent: {
    paddingTop: 50
  }
})