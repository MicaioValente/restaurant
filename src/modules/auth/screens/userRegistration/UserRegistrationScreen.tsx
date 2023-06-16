import React from 'react';
import { useUserRegistration } from './useUserRegistration';
import { Button, Screen, TextInput } from 'src/@restaurant/components';
import UserRegister from 'src/@restaurant/assets/userRegister.png';
import { Image, View } from 'react-native';
import { styles } from './UserRegistration.styles';
import { FormikProvider } from 'formik';
const UserRegistrationScreen = () => {
  const { formik, isLoading } = useUserRegistration();

  return (
    <Screen withSafeArea withKeyboard withScroll>
      <View style={styles.container}>
        <Image source={UserRegister} style={styles.image} />
        <FormikProvider value={formik}>
          <View style={styles.formControl}>
            <TextInput
              title={'Nome'}
              placeholder={'Nome'}
              value={formik.values.name}
              onChangeText={formik.handleChange('name')}
              onBlur={formik.handleBlur('name')}
              isError={!!formik.errors.name && !!formik.touched.name}
              errorMessage={formik.errors.name}
            />
          </View>
          <View style={styles.formControl}>
            <TextInput
              title={'E-Mail'}
              placeholder={'E-Mail'}
              value={formik.values.email}
              onChangeText={formik.handleChange('email')}
              onBlur={formik.handleBlur('email')}
              isError={!!formik.errors.email && !!formik.touched.email}
              errorMessage={formik.errors.email}
            />
          </View>
          <View style={styles.formControl}>
            <TextInput
              title={'Telefone'}
              placeholder={'Telefone'}
              value={formik.values.phone_number}
              onChangeText={formik.handleChange('phone_number')}
              onBlur={formik.handleBlur('phone_number')}
              isError={
                !!formik.errors.phone_number && !!formik.touched.phone_number
              }
              errorMessage={formik.errors.phone_number}
            />
          </View>
          <View style={styles.formControl}>
            <TextInput
              title={'Criar senha'}
              placeholder={'Senha'}
              value={formik.values.password}
              onChangeText={formik.handleChange('password')}
              onBlur={formik.handleBlur('password')}
              secureTextEntry
              isError={!!formik.errors.password && !!formik.touched.password}
              errorMessage={formik.errors.password}
            />
          </View>
          <View style={styles.formControl}>
            <TextInput
              title={'Confirma senha'}
              placeholder={'Senha'}
              value={formik.values.passwordConfirmation}
              onChangeText={formik.handleChange('passwordConfirmation')}
              onBlur={formik.handleBlur('passwordConfirmation')}
              secureTextEntry
              isError={
                !!formik.errors.passwordConfirmation &&
                !!formik.touched.passwordConfirmation
              }
              errorMessage={formik.errors.passwordConfirmation}
            />
          </View>

          <View style={styles.containerButton}>
            <Button
              label={'Criar Conta'}
              onPress={formik.handleSubmit}
              loading={isLoading}
            />
          </View>
        </FormikProvider>
      </View>
    </Screen>
  );
};

export default UserRegistrationScreen;
