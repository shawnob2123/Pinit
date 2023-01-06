import {StyleSheet} from 'react-native';
import { colors, fonts, sizes, weights } from '../../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    height: '100%'
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    alignContent: 'center',
    
  },
  title: {
    fontSize: sizes.lg,
    fontFamily: fonts.bold,
    color: colors.primary,
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
})