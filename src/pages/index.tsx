import Clients from '../components/organisms/Clients';
import Twitter from '../components/atoms/Twitter';
import Facebook from '../components/atoms/Facebook';
import Medium from '../components/atoms/Medium';
import Linkedin from '../components/atoms/Linkedin';
import Github from '../components/atoms/Github';

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
      <Twitter userName="thundermiracle" />
      <Facebook userName="thundermiracle" />
      <Medium userName="thundermiracle" />
      <Linkedin userName="thundermiracle" />
      <Github userName="thundermiracle" />
    </>
  );
};

export default Home;
