import React from 'react';
import {
  TextInput as RNTextInput,
  View,
  Animated,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import { styles } from './TextInput.styles';
import { useTextInput } from '@restaurant-ui/textInput/useTextInput';
import { colors } from '@restaurant-ui/constants';
import { TextInputTypes } from './TextInput.types';
import Error from '@restaurant-ui/assets/images/error.png';
import ClosedEye from '@restaurant-ui/assets/images/closedEye.svg';
import OpenEye from '@restaurant-ui/assets/images/openEye.svg';

const TextInput = (props: TextInputTypes) => {
  const {
    handleFocus,
    handleBlur,
    onDidTapEye,
    isFocused,
    labelPosition,
    isActive,
    title,
    secureTextEntry,
    viewText,
    isError,
    errorMessage,
  } = useTextInput(props);

  return (
    <View
      style={[
        null,
        isFocused || props.value?.trim() !== ''
          ? styles.containerFocused
          : null,
      ]}>
      <View style={styles.inputWrapper}>
        {(isFocused || isActive || props.value?.trim() !== '') && (
          <Animated.View
            style={[styles.labelWrapper, { bottom: labelPosition }]}>
            <Text>{props.label}</Text>
          </Animated.View>
        )}
        {title && <Text style={styles.title}>{title}</Text>}
        <RNTextInput
          {...props}
          placeholder={!isFocused && !isActive ? props.placeholder : ''}
          style={[styles.input, props.style]}
          placeholderTextColor={colors.gray}
          selectionColor={colors.gray}
          onFocus={e => /* istanbul ignore next */ {
            handleFocus();
            props?.onFocus && props.onFocus(e);
          }}
          onBlur={e => /* istanbul ignore next */ {
            handleBlur();
            props?.onBlur && props.onBlur(e);
          }}
          secureTextEntry={viewText}
        />
        {secureTextEntry && (
          <TouchableOpacity style={styles.eyeContainer} onPress={onDidTapEye}>
            {viewText ? (
              <ClosedEye style={styles.closedEye} fill={colors.gray} />
            ) : (
              <OpenEye fill={colors.gray} />
            )}
          </TouchableOpacity>
        )}
      </View>
      {!!isError && (
        <View style={styles.errorContainer}>
          <Image source={Error} />
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        </View>
      )}
    </View>
  );
};

export default TextInput;
