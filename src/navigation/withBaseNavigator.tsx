import React from 'react';
import { Navigators } from 'src/navigation/navigators';
import { createStackNavigator } from '@react-navigation/stack';
import { ScreenType } from 'src/@restaurant/tools/index';

const { Navigator, Screen, Group } = createStackNavigator();

const defaultScreenOptions = {
  headerShown: false,
};

const withBaseNavigator = (
  initialRouteName: Navigators,
  screens: ScreenType[],
  screenOptions = {},
) => {
  const options = {
    ...defaultScreenOptions,
    ...screenOptions,
  };

  return (
    <Navigator initialRouteName={initialRouteName} screenOptions={options}>
      {screens.map(screen => {
        return (
          <Group
            key={screen.name}
            screenOptions={{ presentation: screen.presentation }}>
            <Screen
              key={screen.name}
              name={screen.name}
              component={screen.component}
              options={screen.options}
            />
          </Group>
        );
      })}
    </Navigator>
  );
};

export default withBaseNavigator;
