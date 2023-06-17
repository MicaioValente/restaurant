import {
  CommonActions,
  DrawerActions,
  NavigationProp,
  useNavigation as RNUseNavigation,
} from '@react-navigation/native';
import { Navigators } from 'src/navigation/navigators';

export const useNavigation = <T extends {}>() => {
  const navigation = RNUseNavigation<NavigationProp<any>>();
  const navigate = (navigator: Navigators, screen: string, options?: T) => {
    navigation.navigate(navigator, { screen, params: options });
  };

  const reset = (
    navigator: string,
    screen: string,
    options?: Readonly<object | undefined>,
  ) => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          {
            name: navigator,
            state: {
              routes: [
                {
                  name: screen,
                  params: options,
                },
              ],
            },
          },
        ],
      }),
    );
  };

  const openDrawer = () => {
    navigation.dispatch(state => {
      return DrawerActions.openDrawer();
    });
  };

  return {
    navigate,
    reset,
    openDrawer,
    goBack: navigation.goBack,
    addListener: navigation.addListener,
  };
};
