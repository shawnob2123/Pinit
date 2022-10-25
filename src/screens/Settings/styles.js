import {StyleSheet} from 'react-native';
import { colors, fonts, sizes, weights} from '../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: colors.background

  },
  contentContainer: {
    padding: 10,
    paddingTop: 10,
  },
  title: {
    fontSize: sizes.lg,
    fontWeight: weights.bold,
    color: colors.primary,
    fontFamily: fonts.primary,
    alignSelf: 'flex-start',
    marginBottom: 30,
    paddingLeft: 10,
  },
  error: {
    color: 'red',
    fontSize: sizes.sm,
    fontWeight: weights.regular,
    fontFamily: fonts.primary,
    paddingBottom: 30,

  },
  input: {
     backgroundColor: '#1e1e1e',
    borderRadius: 10,
    padding: 15,
    width: '100%',
    color: colors.white,
    fontSize: sizes.md,
    fontFamily: fonts.primary,
    borderBottomWidth: 0,
  }
})