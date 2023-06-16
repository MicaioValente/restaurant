import { TextInputProps } from 'react-native';

export type TextInputTypes = TextInputProps & {
  label?: string;
  placeholder: string;
  isError?: boolean;
  errorMessage?: string;
  title?: string;
  style?: any;
};
