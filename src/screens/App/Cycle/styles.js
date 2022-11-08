import { StyleSheet } from 'react-native';
import { colors, fonts, sizes, weights } from '../../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    height: '100%',
    overflow: 'hidden'
  },
  contentContainer: {
    padding: 10,
    paddingTop: 60,
  },
  composeButton: {
    alignSelf: 'flex-end',
    paddingTop: 60,
  },
  title: {
    fontSize: sizes.xl,
    fontFamily: fonts.primary,
    fontWeight: weights.bold,
    alignSelf: 'flex-start',
    paddingLeft: 10,
    color: colors.primary
    
  },
  text: {
    fontSize: sizes.md,
    fontFamily: fonts.primary,
    fontWeight: weights.regular,
    paddingBottom: 20
  },
  todayContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 20,
  },
  addButton: {
    backgroundColor: colors.primary,
    borderRadius: 50,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cyclesContainer: {
    paddingTop: 20,
  }
})