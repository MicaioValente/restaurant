import { StyleSheet } from 'react-native';
import { colors } from '@restaurant-ui/constants';

export const styles = StyleSheet.create({
  container: {
    width: 110,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.yellow,
    borderRadius: 10,
    marginBottom: 10,
  },
  image: {},
  title: {
    fontSize: 15,
    color: colors.black,
    fontWeight: '500',
    textAlign: 'center',
  },
});
