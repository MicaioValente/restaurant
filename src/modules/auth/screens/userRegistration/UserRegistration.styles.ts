import { StyleSheet } from 'react-native';
import { colors } from '@restaurant-ui/constants';

export const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  formControl: {
    marginBottom: 18,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  content: {
    marginTop: 35,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 130,
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    color: colors.white,
    marginTop: 10,
  },
  divider: {
    marginBottom: 30,
  },
  containerButton: {
    width: 140,
    alignSelf: 'center',
    alignItems: 'center',
  },
  image: {
    height: 260,
    width: 242,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  containerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    paddingHorizontal: 15,
  },
  marginBottom: {
    marginBottom: 20,
  },
  imageBuilding: {
    marginTop: 14,
  },

  welcomeText: {
    fontSize: 14,
    color: colors.white,
    textAlign: 'center',
    marginBottom: 10,
  },
  frame: {
    height: 210,
    width: 212,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 18,
    borderRadius: 15,
  },
  buttonShare: {
    width: 140,
    marginBottom: 15,
  },
  buttonCopy: {
    width: '100%',
    marginTop: 5,
  },
});
