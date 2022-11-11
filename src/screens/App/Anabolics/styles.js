import {StyleSheet, Dimensions} from 'react-native';
import { colors, fonts, sizes, weights } from '../../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    height: '100%',
    paddingTop: 80, 

  },
  contentContainer: {
    height: 200,
    width: Dimensions.get('screen').width,
  },
  title: {
    fontSize: sizes.xxl,
    color: colors.primary,
    fontFamily: fonts.bold,
    alignSelf: 'center',
  },
  disclaimer: {
    fontSize: sizes.sm,
    color: colors.white,
    fontFamily: fonts.primary,
    alignSelf: 'center',
    lineHeight: 25,
    marginTop: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
  }
})