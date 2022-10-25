import { StyleSheet } from 'react-native';
import { colors, fonts, sizes, weights } from '../../theme/theme';

export const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.primary,
    height: 160,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerContent: {
    marginTop: 70,
    paddingHorizontal: 20,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 80,
    alignSelf: 'flex-end',
  },
  title: {
    color: colors.white,
    fontSize: sizes.xl,
    fontFamily: fonts.primary,
    fontWeight: weights.bold,
  }
})