import {StyleSheet} from 'react-native';
import { colors, fonts, sizes, weights } from '../../theme/theme';

export const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    paddingVertical: 10,
    backgroundColor: colors.shade,
  },
  contentContainer: {
    padding: 10,
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    alignSelf: 'flex-start'
  },
  nameContainer: {
    
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: colors.white,
    fontSize: sizes.lg,
    fontFamily: fonts.primary,
    
    paddingLeft: 10,
  },
  // SWIPE ACTIONS
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',

  },
  delete: {
    backgroundColor: colors.red,
    justifyContent: 'center',
    alignItems: 'flex-end',
  
    padding: 10,
    marginVertical: 10,
  },
  skip: {
    backgroundColor: colors.orange,
    justifyContent: 'center',
    alignItems: 'flex-end',
    
    padding: 10,
    marginVertical: 10,
  },
  take: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'flex-end',

    padding: 10,
    marginVertical: 10,
  }
})