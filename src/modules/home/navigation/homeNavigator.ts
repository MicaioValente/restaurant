import { ScreenType } from 'src/@restaurant/tools';
import { HomeRoutes } from 'src/modules/home/navigation/routes';
import { Navigators } from 'src/navigation/navigators';
import { colors } from 'src/@restaurant/components/constants';
import withBaseNavigator from 'src/navigation/withBaseNavigator';
import { HomeScreen } from 'src/modules/home/screens/home';

export const authScreens: ScreenType[] = [
  {
    name: HomeRoutes.Home,
    component: HomeScreen,
    options: {},
  },
];

const HomeNavigator = () =>
  withBaseNavigator(Navigators.Auth, authScreens, {
    contentStyle: {
      backgroundColor: colors.white,
    },
  });

export default HomeNavigator;
