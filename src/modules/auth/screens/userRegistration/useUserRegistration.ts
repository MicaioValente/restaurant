import * as yup from 'yup';
import { UserRegistrationDto } from './UserRegistration.types';
import { useFormik } from 'formik';
import { useState } from 'react';
import { Navigators } from 'src/navigation/navigators';
import { screens } from 'src/navigation/screens';
import { useNavigation } from 'src/navigation/hooks/useNavigation';

const validationSchema = yup.object().shape({
  // name: yup.string().required('Nome é obrigatório'),
  // email: yup.string().required('Email é obrigatório').email('Email inválido'),
  // phone_number: yup.string().required('Telefone é obrigatório'),
  // password: yup.string().required('Senha é obrigatória'),
});

export const useUserRegistration = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  const initialValues: UserRegistrationDto = {
    name: '',
    email: '',
    phone_number: '',
    password: '',
    passwordConfirmation: '',
  };

  const onSubmit = async (values: UserRegistrationDto) => {
    console.log(values);
    navigation.navigate(Navigators.Home, screens.Home);
  };

  const formik = useFormik({
    validationSchema,
    initialValues,
    validateOnBlur: true,
    enableReinitialize: true,
    onSubmit,
  });

  return { formik, isLoading };
};
