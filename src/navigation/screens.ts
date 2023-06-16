import { AuthRoutes } from 'src/modules/auth/navigation/routes';
import { HomeRoutes } from 'src/modules/home/navigation/routes';

export const screens = {
  ...AuthRoutes,
  ...HomeRoutes,
};
