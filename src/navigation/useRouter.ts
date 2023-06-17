import { useContext, useEffect, useState } from 'react';
import { useNavigation } from './hooks/useNavigation';
import { Navigators } from './navigators';
import { screens } from './screens';

export const useRouter = () => {
  const navigation = useNavigation();

  const onOpenConfig = () => {
    navigation.navigate(Navigators.Home, screens.Config);
  };

  const onOpenDrawer = () => {
    navigation.openDrawer();
  };

  return { onOpenConfig, onOpenDrawer };
};
