import {StyleSheet} from 'react-native';
import { colors, fonts, sizes, weights } from '../../../theme/theme';

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
    paddingLeft: 20,
  },
  questionContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.background,
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,

  },
  question: {
    fontSize: sizes.md,
    fontWeight: weights.bold,
    color: colors.white,
  }
})