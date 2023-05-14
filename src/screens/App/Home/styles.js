import { StyleSheet } from 'react-native';
import { colors, fonts, sizes, weights } from '../../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,

  },
  contentContainer: {
    paddingTop: 60,

  },
  title: {
    fontSize: sizes.xl,
    fontFamily: fonts.primary,
    fontWeight: weights.bold,
    alignSelf: 'flex-start',
    paddingLeft: 10,
    color: colors.white
    
  },
  text: {
    fontSize: sizes.sm,
    fontFamily: fonts.primary,
    paddingBottom: 10,
    color: colors.white,
    lineHeight: 25,
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
  upcomingContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
    height: 600,
    backgroundColor: '#171717',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,

  },
  upcomingHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
  },
  input:  {
    backgroundColor: '#141414',
    borderRadius: 10,
    padding: 15,
    fontSize: sizes.md,
    fontFamily: fonts.primary,
    color: colors.white,
    borderBottomWidth: 0,

  },
  label: {
    fontSize: sizes.sm,
    fontFamily: fonts.primary,
    
    color: colors.white,
    paddingBottom: 15
  },
  dosageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '50%'
  },
})