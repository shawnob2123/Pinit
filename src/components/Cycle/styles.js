import {StyleSheet} from 'react-native';
import { colors, fonts, sizes, weights } from '../../theme/theme';

export const styles = StyleSheet.create({
  item: {
    backgroundColor: colors.background,
    borderRadius: 10,
    padding: 10,
    margin: 10,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,

    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,

  },
  itemContent: {
    padding: 10,
    
  },
})