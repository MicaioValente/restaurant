import * as yup from 'yup';
import { UserRegistrationDto } from './UserRegistration.types';
import { useFormik } from 'formik';
import { Navigators } from 'src/navigation/navigators';
import { screens } from 'src/navigation/screens';
import { useNavigation } from 'src/navigation/hooks/useNavigation';

const validationSchema = yup.object().shape({
  name: yup.string().required('Nome é obrigatório'),
  email: yup.string().required('Email é obrigatório').email('Email inválido'),
  phone_number: yup.string().required('Telefone é obrigatório'),
  password: yup
    .string()
    .min(5, 'Senha precisa ser maior que 5 caracteres')
    .required('Senha é obrigatória')
    .required('Senha é obrigatória'),
  passwordConfirmation: yup
    .string()
    .label('confirm password')
    .required()
    .oneOf([yup.ref('password')], 'Passwords must match'),
});

export const useUserRegistration = () => {
  const isLoading = false;
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

  function phoneNumberMask(number: string) {
    const regex = /^([0-9]{2})([0-9]{4,5})([0-9]{4})$/;
    var str = number.replace(/[^0-9]/g, '').slice(0, 11);

    return str.replace(regex, '($1) $2-$3');
  }

  return { phoneNumberMask, formik, isLoading };
};
