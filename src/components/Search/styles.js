import {StyleSheet} from 'react-native';
import { colors, fonts, sizes, weights } from '../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    borderTopWidth: 0,
    borderBottomWidth: 0,
    padding: 0,
    margin: 0,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  inputContainer: {
    borderRadius: 20,
    backgroundColor: '#1e1e1e',
  },
  input: {
    color: colors.white,
    fontSize: sizes.md,
    fontFamily: fonts.primary,
    fontWeight: weights.regular,
  }
})