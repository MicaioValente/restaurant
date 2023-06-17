import React from 'react';

import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { styles } from './CardBusiness.styles';

const CardBusiness = ({
  onPress,
  title,
  image,
}: {
  onPress: () => void;
  title: string;
  image: ImageSourcePropType;
}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => onPress()}
        activeOpacity={0.8}
        style={[styles.container]}>
        <Image source={image} style={styles.image} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default CardBusiness;
