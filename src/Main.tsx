import * as React from 'react';
import { Platform, UIManager } from 'react-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Router } from 'src/navigation';
import 'react-native-gesture-handler';
const queryClient = new QueryClient();

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Main = () => (
  <QueryClientProvider client={queryClient}>
    <Router />
  </QueryClientProvider>
);

export default Main;
