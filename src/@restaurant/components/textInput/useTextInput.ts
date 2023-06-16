import { useEffect, useState } from 'react';
import { Animated } from 'react-native';
import { TextInputTypes } from '@restaurant-ui/textInput/TextInput.types';

export const useTextInput = (props: TextInputTypes) => {
  const { title, secureTextEntry, isError, errorMessage, modal } = props;
  const [isFocused, setIsFocused] = useState(false);
  const [viewText, setViewText] = useState(secureTextEntry);
  const [isActive, setIsActive] = useState(false);
  const [labelPosition] = useState(new Animated.Value(10));
  const onStartLabelAnimation = () => {
    Animated.timing(labelPosition, {
      toValue: isFocused || props.value?.trim() !== '' ? 35 : 10,
      duration: 100,
      useNativeDriver: false,
    }).start(() => {
      if (!isFocused) {
        setIsActive(false);
      }
    });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setIsActive(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  useEffect(() => {
    onStartLabelAnimation();
  }, [isFocused]);

  const onDidTapEye = () => {
    setViewText(!viewText);
  };

  return {
    handleBlur,
    handleFocus,
    onDidTapEye,
    modal,
    isFocused,
    isActive,
    labelPosition,
    title,
    secureTextEntry,
    viewText,
    isError,
    errorMessage,
  };
};
