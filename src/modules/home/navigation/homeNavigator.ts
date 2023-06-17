import { ScreenType } from 'src/@restaurant/tools';
import { HomeRoutes } from 'src/modules/home/navigation/routes';
import { Navigators } from 'src/navigation/navigators';
import { colors } from 'src/@restaurant/components/constants';
import { HomeScreen } from 'src/modules/home/screens/home';
import withDrawerNavigator from 'src/navigation/withDrawerNavigator';
import { useRouter } from 'src/navigation/useRouter';

export const homeScreens: ScreenType[] = [
  {
    name: HomeRoutes.Home,
    component: HomeScreen,
    options: {},
  },
];

const HomeNavigator = () => {
  const { onOpenConfig, onOpenDrawer } = useRouter();

  return withDrawerNavigator(
    Navigators.Home,
    homeScreens,
    {
      contentStyle: {
        backgroundColor: colors.yellow,
      },
    },
    onOpenConfig,
    onOpenDrawer,
  );
};

export default HomeNavigator;
