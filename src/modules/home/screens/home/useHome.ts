import { Restaurants, Business } from './Home.constants';

export const useHome = () => {
  const onActivateGPS = () => {};
  const onDidTapCard = (id: string) => {
    console.log(id);
  };
  const onDidTapCardBusiness = () => {};

  return {
    onActivateGPS,
    onDidTapCard,
    onDidTapCardBusiness,
    Restaurants,
    Business,
  };
};
