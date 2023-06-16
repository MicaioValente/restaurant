import { StyleSheet } from 'react-native';
import colors from './colors';

export default StyleSheet.create({
  card: {
    shadowColor: colors.blackShadow,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },
  button: {
    shadowColor: colors.blackShadow,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
});
