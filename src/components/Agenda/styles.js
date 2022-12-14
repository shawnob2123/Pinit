import {StyleSheet, Dimensions} from 'react-native';
import { colors, fonts, sizes, weights } from '../../theme/theme';

export const styles = StyleSheet.create({
  calendar: {
    borderRadius: 10, 
    overflow: 'hidden',
    height: 600,
  },  
  item: {
    height: 50,
    padding: 10,
    shadowColor: colors.white,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    backgroundColor: colors.white,
    flex: 1,
    borderRadius: 25,
    padding: 10,
    marginRight: 10,
    marginTop: 17,

  },

  itemContent: {
    padding: 5,

  },
  text: {
    color: colors.black,
    fontFamily: fonts.primary,
    fontSize: sizes.md,
  
  }
})