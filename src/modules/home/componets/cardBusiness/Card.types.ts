import { ImageSourcePropType } from 'react-native';

export type cardTypes = {
  id: string;
  onPress: (id: string) => void;
  activated?: boolean;
  image: ImageSourcePropType;
  title: string;
  rate: string;
};
