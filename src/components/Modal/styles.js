import { StyleSheet } from 'react-native';
import { colors, fonts, sizes, weights } from '../../theme/theme';

export const styles = StyleSheet.create({
   modal: {
    flex: 1,
    padding: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
    width: '100%',
  },
  modalContent: {
    width: '100%',
    padding: 20,
    flex: 1
  },
  modalTitle: {
    fontSize: sizes.lg,
    fontFamily: fonts.primary,
    fontWeight: weights.bold,
    color: colors.black,
  },
  createCycleContent: {
    marginTop: 40,
    width: '100%',
  },
  text: {
    fontSize: sizes.md,
    fontFamily: fonts.primary,
    fontWeight: weights.regular,
  },
  input: {
    backgroundColor: colors.background,
    borderRadius: 10,
    padding: 15,
    fontSize: sizes.md,
    fontFamily: fonts.primary,
    borderBottomWidth: 0,
    borderColor: colors.primary
  },
  headingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 20
  }
})