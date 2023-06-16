import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Navigators } from 'src/navigation/navigators';
import { AuthNavigator } from 'src/modules/auth/navigation';
import { HomeNavigator } from 'src/modules/home/navigation';

const { Navigator, Screen } = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={Navigators.Auth}>
        <Screen name={Navigators.Auth} component={AuthNavigator} />
        <Screen name={Navigators.Home} component={HomeNavigator} />
      </Navigator>
    </NavigationContainer>
  );
};

export default Router;
