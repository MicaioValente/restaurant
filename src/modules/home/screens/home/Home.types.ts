import { ImageSourcePropType } from 'react-native';

export type RestaurantDto = {
  id: string;
  title: string;
  location: string;
  rate: string;
  image: ImageSourcePropType;
  businessHours: string;
  style: string[];
  about: string;
  menu: {
    image: ImageSourcePropType;
    title: string;
  }[];
};

export type BusinessDto = {
  title: string;
  image: ImageSourcePropType;
};
