import {StyleSheet, Dimensions} from 'react-native';
import { colors, fonts, sizes, weights } from '../../theme/theme';

export const styles = StyleSheet.create({
  calendar: {
    borderRadius: 25, 
    overflow: 'hidden',
    backgroundColor: colors.primary,
    height: Dimensions.get('window').height - 200,
  },  
  item: {
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
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
    marginTop: 17,

  },
  itemsContent: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 30,

  },
  text: {
    color: colors.black,
    fontFamily: fonts.primary,
    fontSize: sizes.md,
  }
})