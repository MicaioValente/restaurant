import React from 'react';
import { Navigators } from 'src/navigation/navigators';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ScreenType } from 'src/@restaurant/tools/index';
import { Image, TouchableOpacity, View } from 'react-native';
import { styles } from './withDrawerNavigator.styles';
import IconHeader from 'src/@restaurant/assets/iconHeader.png';
import IconHeaderMenu from 'src/@restaurant/assets/iconHeaderMenu.svg';
import IconHeaderConfig from 'src/@restaurant/assets/iconHeaderConfig.svg';
import { colors } from 'src/@restaurant/components/constants';
import { useRouter } from './useRouter';

const { Navigator, Screen, Group } = createDrawerNavigator();

const withDrawerNavigator = (
  initialRouteName: Navigators,
  screens: ScreenType[],
  screenOptions = {},
) => {
  const { onOpenConfig, onOpenDrawer } = useRouter();
  const options = {
    headerTitle: () => {
      return (
        <View style={styles.containerImage}>
          <Image source={IconHeader} style={styles.image} />
        </View>
      );
    },
    headerLeft: ({}) => {
      return (
        <TouchableOpacity activeOpacity={0.8} style={styles.iconMenu}>
          <IconHeaderMenu onPress={onOpenDrawer} />
        </TouchableOpacity>
      );
    },
    headerRight: ({}) => {
      return (
        <TouchableOpacity activeOpacity={0.8} style={styles.iconConfig}>
          <IconHeaderConfig onPress={onOpenConfig} />
        </TouchableOpacity>
      );
    },
    headerStyle: {
      backgroundColor: colors.yellow,
    },
    headerTintColor: colors.white,
    ...screenOptions,
  };

  return (
    <Navigator initialRouteName={initialRouteName} screenOptions={options}>
      {screens.map(screen => {
        return (
          <Group key={screen.name}>
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

export default withDrawerNavigator;
