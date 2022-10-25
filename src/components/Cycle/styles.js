import {StyleSheet} from 'react-native';
import { colors, fonts, sizes, weights } from '../../theme/theme';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1e1e1e',
    borderRadius: 10,
    height: 100,
  
  },
  cardContent: {
    padding: 15,

  },
  title: {
    fontSize: sizes.lg,
    fontFamily: fonts.primary,
    fontWeight: weights.bold,
    color: colors.white,
    paddingLeft: 20

  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 30

  },
  text: {
    fontSize: sizes.sm,
    fontFamily: fonts.primary,
    fontWeight: weights.regular,
    color: colors.white,
    alignSelf: 'center',
  }
})