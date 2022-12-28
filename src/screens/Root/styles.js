import { StyleSheet } from 'react-native';
import { colors, fonts, sizes, weights } from '../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    paddingTop: 70,
    backgroundColor: colors.background
  },
  title: {
    color: colors.primary,
    fontSize: sizes.xl,
    fontWeight: weights.bold,
    fontFamily: fonts.primary,
    marginBottom: 10,
    alignSelf: 'flex-start',  
    marginLeft: 20
  },
  subtitle: {
    color: colors.white,
    fontSize: sizes.md,
    fontWeight: weights.light,
    fontFamily: fonts.primary,
    marginBottom: 10,
    lineHeight: 25,
    alignSelf: 'flex-start',
    marginLeft: 20
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
    alignSelf: 'flex-end',
    marginRight: 20,
  },
  checkbox: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    padding: 0,
    margin: 0,
    paddingVertical: 40,
  },
  checkboxText: {
    color: colors.white,
    fontSize: sizes.md,
    fontFamily: fonts.primary,
    fontWeight: weights.light,
    alignSelf: 'flex-start',
    padding: 5,
    lineHeight: 25
  },
  continue: {
    color: colors.white,
    fontSize: sizes.md,
    fontFamily: fonts.primary,
    alignSelf: 'center',
    marginVertical: 20,
  },
  socialButtons: {
    paddingHorizontal: 20,
    marginTop: 20,
    alignSelf: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30,
    paddingHorizontal: 20,
  }

})