import {StyleSheet} from 'react-native';
import { colors, fonts, sizes, weights } from '../../theme/theme';

export const styles = StyleSheet.create({
  dailyLogCard: {
   backgroundColor: colors.background,
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 10,
    shadowColor: colors.black,

    shadowOffset: {
      width: 0,
      height: 2,

    },
    shadowOpacity: 0.25,

  },
  dailyLogStatusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  title: {
    fontSize: sizes.lg,
    fontFamily: fonts.primary,
    fontWeight: weights.bold,

  },
  text: {
    fontSize: sizes.md,
    fontFamily: fonts.primary,
    fontWeight: weights.regular,
    paddingTop: 20
  }
})