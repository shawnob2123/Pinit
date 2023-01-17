import {StyleSheet, Dimensions} from 'react-native';
import { colors, fonts, sizes, weights } from '../../theme/theme';

export const styles = StyleSheet.create({
  calendar: {
    borderRadius: 10, 
    overflow: 'hidden',
    height: Dimensions.get('window').height - 300
  },  
  item: {
   height: 70,
    // shadowColor: colors.primary,
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.22,
    // shadowRadius: 2.22,
    // elevation: 3,
    backgroundColor: '#F0FBFF',
    flex: 1,
    borderRadius: 15,
    padding: 10,
    marginRight: 10,
    marginTop: 17,

  },
// ITEM STYLES START
  itemContent: {
    alignContent: 'center',
    paddingHorizontal: 10,
  },
  itemHeader: {
    bottom: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },
  // ITEMS STYLES END
  text: {
    fontFamily: fonts.primary,
    fontSize: sizes.md,
    padding: 5,
  
  },
  title: {
    fontFamily: fonts.bold,
    fontSize: sizes.md,

  }
})