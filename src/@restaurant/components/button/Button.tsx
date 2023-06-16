import React from 'react';

import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
import { buttonTypes } from './Button.types';
import { styles } from './Button.styles';

const Button = ({
  label,
  onPress,
  loading,
  disabled,
  textStyle,
  ...rest
}: buttonTypes) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      style={[styles.container, disabled || loading ? styles.disabled : null]}
      {...rest}>
      {loading ? (
        <View style={styles.animationWrapper}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <Text style={[styles.label, textStyle]}>{label}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
