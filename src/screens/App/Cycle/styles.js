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
  
    paddingTop: 80,
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
    paddingHorizontal: 20,
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'flex-end',
    width: 80,
  },
  calendarView: {
    flex: 1,
    marginTop: 20,

  },
  progressView: {
    flex: 1,
    marginTop: 40,
    paddingHorizontal: 20,
  }
})