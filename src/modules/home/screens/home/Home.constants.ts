import Image from 'src/@restaurant/assets/imageCard.png';
import Gym from 'src/@restaurant/assets/gym.png';
import Pizza from 'src/@restaurant/assets/pizza.png';
import Restaurant from 'src/@restaurant/assets/restaurant.png';
import { BusinessDto, RestaurantDto } from './Home.types';

export const Restaurants: RestaurantDto[] = [
  {
    id: '1',
    title: 'Prato Pronto',
    location: 'Rua , bairro , cidade e cep',
    rate: '30%',
    image: Image,
    businessHours: 'Segunda a sexta 12:00 até as 23:00',
    style: ['Romântico', 'Casual'],
    about:
      'Um espaço agrádavel e carismático na cidade de viseu , o prato pronto surgiu da idéia de uma cozinheira sonhadora de ter o próprio negócio.',
    menu: [
      {
        image: Image,
        title: 'Cafe',
      },
    ],
  },
  {
    id: '2',
    title: 'Salão espaço Glamour',
    location: 'Rua , bairro , cidade e cep',
    rate: '30%',
    image: Image,
    businessHours: 'Segunda a sexta 12:00 até as 23:00',
    style: ['Romântico', 'Casual'],
    about:
      'Um espaço agrádavel e carismático na cidade de viseu , o prato pronto surgiu da idéia de uma cozinheira sonhadora de ter o próprio negócio.',
    menu: [
      {
        image: Image,
        title: 'Cafe',
      },
    ],
  },
];

export const Business: BusinessDto[] = [
  {
    title: 'Restaurantes',
    image: Restaurant,
  },
  {
    title: 'Pizzaria',
    image: Pizza,
  },
  {
    title: 'Esportes',
    image: Gym,
  },
];
