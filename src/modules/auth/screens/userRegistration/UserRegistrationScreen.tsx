import React from 'react';
import { useUserRegistration } from './useUserRegistration';
import { Screen } from 'src/@restaurant/components';

const UserRegistrationScreen = () => {
  const {} = useUserRegistration();
  return (
    <Screen withSafeArea withKeyboard withScroll>
      <></>
    </Screen>
  );
};

export default UserRegistrationScreen;
