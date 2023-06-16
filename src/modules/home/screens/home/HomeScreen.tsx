import React from 'react';
import { useHome } from './useHome';
import { Screen } from 'src/@restaurant/components';

const HomeScreen = () => {
  const {} = useHome();
  return (
    <Screen withSafeArea withKeyboard withScroll justify="space-between">
      <></>
    </Screen>
  );
};

export default HomeScreen;
