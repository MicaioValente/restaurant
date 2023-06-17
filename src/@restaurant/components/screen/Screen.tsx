import React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { ScreenTypes } from './Screen.types';
import { styles } from './Screen.styles';

const Screen = ({
  children,
  justify,
  withScroll,
  withKeyboard,
  withSafeArea,
  noPadding,
  backgroundColor,
}: ScreenTypes) => {
  if (withKeyboard && withSafeArea && withScroll) {
    return (
      <SafeAreaView
        style={[styles.safeArea, { backgroundColor: backgroundColor }]}>
        <KeyboardAvoidingView
          style={styles.keyboard}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <ScrollView
            contentContainerStyle={styles.scroll}
            keyboardShouldPersistTaps="always">
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View
                style={[
                  styles.container,
                  { justifyContent: justify },
                  noPadding ? styles.noPadding : null,
                ]}>
                {children}
              </View>
            </TouchableWithoutFeedback>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }

  if (withKeyboard && withScroll) {
    return (
      <KeyboardAvoidingView
        style={styles.keyboard}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView
          contentContainerStyle={styles.scroll}
          keyboardShouldPersistTaps="always">
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View
              style={[
                styles.container,
                { justifyContent: justify },
                noPadding ? styles.noPadding : null,
              ]}>
              {children}
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }

  if (withKeyboard && withSafeArea && noPadding) {
    return (
      <SafeAreaView
        style={[styles.safeArea, { backgroundColor: backgroundColor }]}>
        <KeyboardAvoidingView
          style={styles.keyboard}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <View
            style={[
              styles.container,
              { justifyContent: justify },
              noPadding ? styles.noPadding : null,
            ]}>
            {children}
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }

  if (withKeyboard && withSafeArea) {
    return (
      <SafeAreaView
        style={[styles.safeArea, { backgroundColor: backgroundColor }]}>
        <KeyboardAvoidingView
          style={styles.keyboard}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View
              style={[
                styles.container,
                { justifyContent: justify },
                noPadding ? styles.noPadding : null,
              ]}>
              {children}
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }

  if (withSafeArea) {
    return (
      <SafeAreaView
        style={[styles.safeArea, { backgroundColor: backgroundColor }]}>
        <View
          style={[
            styles.container,
            { justifyContent: justify },
            noPadding ? styles.noPadding : null,
          ]}>
          {children}
        </View>
      </SafeAreaView>
    );
  }

  if (withKeyboard) {
    return (
      <KeyboardAvoidingView
        style={styles.keyboard}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View
            style={[
              styles.container,
              { justifyContent: justify },
              noPadding ? styles.noPadding : null,
            ]}>
            {children}
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }

  if (withScroll) {
    return (
      <ScrollView contentContainerStyle={styles.scroll}>
        <View
          style={[
            styles.container,
            { justifyContent: justify },
            noPadding ? styles.noPadding : null,
          ]}>
          {children}
        </View>
      </ScrollView>
    );
  }

  if (withSafeArea) {
    return (
      <SafeAreaView
        style={[styles.safeArea, { backgroundColor: backgroundColor }]}>
        <View
          style={[
            styles.container,
            { justifyContent: justify },
            noPadding ? styles.noPadding : null,
          ]}>
          {children}
        </View>
      </SafeAreaView>
    );
  }

  return (
    <View
      style={[
        styles.container,
        { justifyContent: justify },
        noPadding ? styles.noPadding : null,
      ]}>
      {children}
    </View>
  );
};

export default Screen;
