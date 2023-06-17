import React from 'react';
import { useHome } from './useHome';
import { Screen } from 'src/@restaurant/components';
import { colors } from 'src/@restaurant/components/constants';

const HomeScreen = () => {
  const {} = useHome();
  return (
    <Screen withSafeArea>
      <></>
    </Screen>
  );
};

export default HomeScreen;
