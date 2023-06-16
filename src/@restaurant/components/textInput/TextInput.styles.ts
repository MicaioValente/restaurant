import { StyleSheet } from 'react-native';
import { colors } from '@restaurant-ui/constants';

export const styles = StyleSheet.create({
  container: {
    minHeight: 76,
  },
  containerFocused: {
    borderBottomColor: colors.white,
  },
  inputWrapper: {
    flex: 1,
  },
  input: {
    fontSize: 12,
    borderWidth: 1,
    paddingHorizontal: 20,
    height: 48,
    borderColor: colors.gray,
    color: colors.gray,
    borderRadius: 8,
  },
  inputModal: {},
  labelWrapper: {
    position: 'absolute',
  },
  label: {
    fontSize: 13,
  },
  title: {
    fontSize: 16,
    marginBottom: 7,
    marginRight: 'auto',
  },
  modalTitle: {},
  eyeContainer: {
    width: 22,
    height: 22,
    position: 'absolute',
    right: 20,
    bottom: 14,
  },
  closedEye: {
    marginTop: 'auto',
  },
  errorContainer: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  errorMessage: {
    fontSize: 16,
    color: colors.red,
    marginLeft: 8,
  },
  error: {
    height: 120,
    marginBottom: 18,
  },
});
