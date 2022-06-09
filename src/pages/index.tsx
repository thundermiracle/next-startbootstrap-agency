import Clients from '../components/templates/Clients';

import type { NextPage } from 'next';

const clientsData = [
  {
    src: '/images/clients/creative-market.jpg',
    alt: 'Creative Market',
    href: 'https://creativemarket.com/',
  },
  {
    src: '/images/clients/design-modo.jpg',
    alt: 'Design Modo',
    href: 'https://designmodo.com/',
  },
  {
    src: '/images/clients/envato.jpg',
    alt: 'Envato',
    href: 'https://envato.com/',
  },
  {
    src: '/images/clients/themeforest.jpg',
    alt: 'Themeforest',
    href: 'https://themeforest.com/',
  },
];

const Home: NextPage = () => {
  return (
    <>
      <Clients clients={clientsData} />
    </>
  );
};

export default Home;
