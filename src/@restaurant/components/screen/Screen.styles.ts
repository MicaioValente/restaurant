import { StyleSheet } from 'react-native';
import { stylesConstraints } from '@restaurant-ui/constants';

export const styles = StyleSheet.create({
  scroll: {
    flexGrow: 1,
  },
  keyboard: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: stylesConstraints.globalScreenPadding,
  },
  noPadding: {
    paddingHorizontal: 0,
  },
});
