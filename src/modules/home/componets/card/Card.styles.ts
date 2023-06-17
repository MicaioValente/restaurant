import { StyleSheet } from 'react-native';
import { colors } from '@restaurant-ui/constants';

export const styles = StyleSheet.create({
  shadow: {
    backgroundColor: colors.white,
    marginBottom: 20,
    borderRadius: 10,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  container: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 10,
    width: 150,
    height: 150,
  },
  image: {
    width: 130,
    height: 77,
    borderRadius: 10,
    justifyContent: 'flex-end',
    padding: 10,
    marginBottom: 5,
  },
  containerRate: {
    backgroundColor: colors.yellow,
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 2,
    alignSelf: 'flex-end',
  },
  textRate: {
    fontSize: 8,
    color: colors.white,
    fontWeight: '700',
  },
  activated: {
    backgroundColor: colors.yellow50,
  },
  title: {
    fontSize: 12,
    color: colors.black,
    fontWeight: '500',
    backgroundColor: 'transparent',
  },
  colorWhite: {
    color: colors.white,
  },
  colorYellow: {
    color: colors.yellow,
  },
});
