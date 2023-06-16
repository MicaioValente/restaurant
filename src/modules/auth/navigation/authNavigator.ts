import { ScreenType } from 'src/@restaurant/tools';
import { AuthRoutes } from 'src/modules/auth/navigation/routes';
import { Navigators } from 'src/navigation/navigators';
import { colors } from 'src/@restaurant/components/constants';
import { UserRegistrationScreen } from 'src/modules/auth/screens/userRegistration';
import withBaseNavigator from 'src/navigation/withBaseNavigator';

export const authScreens: ScreenType[] = [
  {
    name: AuthRoutes.UserRegistration,
    component: UserRegistrationScreen,
    options: {},
  },
];

const AuthNavigator = () =>
  withBaseNavigator(Navigators.Auth, authScreens, {
    contentStyle: {
      backgroundColor: colors.white,
    },
  });

export default AuthNavigator;
