import { StyleSheet } from 'react-native';
import { colors } from '@restaurant-ui/constants';

export const styles = StyleSheet.create({
  containerFloatingButton: {},
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,
    borderRadius: 10,
    backgroundColor: colors.yellow,
    width: '100%',
  },
  animationWrapper: {
    height: 40,
    width: 40,
  },
  disabled: {
    backgroundColor: colors.yellow50,
  },
  label: {
    fontSize: 18,
    color: colors.white,
  },
});
