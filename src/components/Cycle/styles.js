import {StyleSheet} from 'react-native';
import { colors, fonts, sizes, weights } from '../../theme/theme';

export const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f8f8ff',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    
    shadowColor: colors.secondary,
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
  
  image: {
    width: 50,
    height: 50,
    borderRadius: 10,
    backgroundColor: colors.primary,
    padding: 10
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  title: {
    fontFamily: fonts.primary,
    fontSize: sizes.md,
    fontWeight: weights.bold,
  },
  text: {
    fontFamily: fonts.primary,
    fontSize: sizes.sm,
    color: 'gray',
    paddingVertical: 10,
  },
  type: {
    fontFamily: fonts.primary,
    fontSize: sizes.md,
    fontWeight: weights.bold,
  }
})