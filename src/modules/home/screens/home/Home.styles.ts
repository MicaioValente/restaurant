import { ProgressBarAndroid, StyleSheet } from 'react-native';
import { colors } from 'src/@restaurant/components/constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
  },
  titleContainer: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    marginBottom: 30,
  },
  buttonContainer: {
    width: 180,
    alignSelf: 'center',
    marginBottom: 25,
  },
  line: {
    height: 2,
    backgroundColor: colors.grayLight,
  },
  containerCards: {
    marginBottom: 20,
  },
  marginBottom50: {
    marginBottom: 50,
  },
});
