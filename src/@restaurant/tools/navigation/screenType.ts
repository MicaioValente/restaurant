import { ImageSourcePropType } from 'react-native';

export type ScreenType = {
  name: string;
  component: any;
  presentation?: 'modal' | 'transparentModal' | 'card';
  options?: any;
  icon?: ImageSourcePropType;
  iconFocused?: ImageSourcePropType;
};
