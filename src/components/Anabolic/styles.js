import {StyleSheet} from 'react-native';
import { colors, fonts, sizes, weights } from '../../theme/theme';

export const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    paddingVertical: 10,
    

  },
  name: {
    fontSize: sizes.md,
    color: colors.white,
    fontFamily: fonts.primary,
    fontWeight: weights.regular,
    paddingLeft: 10,

  },
  contentContainer: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
   
    width: '100%',
  },
  icon: {
    position: 'absolute',
    right: 10,
  }
})