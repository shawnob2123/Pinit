import {StyleSheet} from 'react-native';
import { colors, fonts, sizes, weights } from '../../theme/theme';

export const styles = StyleSheet.create({
  trackerCard: {
    backgroundColor: colors.background,
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 10,
    shadowColor: colors.black,
    width: '44%',
    height: '70%',

    shadowOffset: {
      width: 0,
      height: 2,

    },
    shadowOpacity: 0.25,
  },
  trackerContent: {
    paddingHorizontal: 5,
    
  },
  heading: {
    fontSize: sizes.lg,
    fontFamily: fonts.primary,
    fontWeight: weights.bold,
  }
})