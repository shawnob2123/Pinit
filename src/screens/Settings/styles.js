import {StyleSheet} from 'react-native';
import { colors, fonts, sizes, weights} from '../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: colors.background

  },
  contentContainer: {
    paddingTop: 10,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: sizes.lg,
    fontWeight: weights.bold,
    color: colors.primary,
    fontFamily: fonts.primary,
    alignSelf: 'flex-start',
    marginBottom: 20,
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
  },
  text: {
    color: colors.white,
    fontSize: sizes.md,
    fontFamily: fonts.primary,
    fontWeight: weights.regular,
    alignSelf: 'flex-start',
    paddingLeft: 10,
    lineHeight: 25
  },
  upgrade: {
    color: colors.primary,
    fontSize: sizes.xxxl,
    fontFamily: fonts.primary,
    fontWeight: weights.bold,
    alignSelf: 'flex-start',
    paddingLeft: 10,
    paddingTop: 70
  },
  upgradeContainer: {
    height: '90%',
    backgroundColor: '#1e1e1e',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  upgradeButton: {
    backgroundColor: colors.background,
    borderRadius: 10,
  },
  bulletContainer: {
    alignSelf: 'center'
    
  }
})