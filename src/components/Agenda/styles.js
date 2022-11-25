import {StyleSheet} from 'react-native';
import { colors, fonts, sizes, weights } from '../../theme/theme';

export const styles = StyleSheet.create({
  calendar: {
    borderRadius: 10, 
    overflow: 'hidden',
    height: 800
  },  
  item: {
    backgroundColor: '#F0FAFF',
    flex: 1,
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
    marginTop: 17,

  },
  text: {
    color: colors.black,
    fontFamily: fonts.primary,
    fontSize: sizes.sm
  }
})