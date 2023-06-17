import React from 'react';

import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { cardTypes } from './Card.types';
import { styles } from './Card.styles';

const Card = ({ id, onPress, activated, image, title, rate }: cardTypes) => {
  return (
    <View style={styles.shadow}>
      <TouchableOpacity
        onPress={() => onPress(id)}
        activeOpacity={0.8}
        style={[styles.container, activated ? styles.activated : null]}>
        <ImageBackground source={image} style={styles.image}>
          <View style={styles.containerRate}>
            <Text style={styles.textRate}>{rate}</Text>
          </View>
        </ImageBackground>
        <Text style={styles.title}>{title}</Text>
        <Text
          style={[
            styles.title,
            activated ? styles.colorWhite : styles.colorYellow,
          ]}>
          Ver Mais
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Card;
