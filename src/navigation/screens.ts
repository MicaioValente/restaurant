import { AuthRoutes, GlobalRoutes } from 'src/modules/auth/navigation/routes';
import { ProfileRoutes } from 'src/modules/profile/navigation/routes';
import { ServiceRoutes } from 'src/modules/services/navigation/routes';
import { TabsRoutes } from 'src/modules/tabs/navigation/routes';
import { PaymentRoutes } from 'src/modules/payment/navigation/routes';

export const screens = {
  ...AuthRoutes,
  ...GlobalRoutes,
  ...ServiceRoutes,
  ...TabsRoutes,
  ...ProfileRoutes,
  ...PaymentRoutes,
};
