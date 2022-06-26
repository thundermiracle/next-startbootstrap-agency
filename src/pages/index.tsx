import Clients from '../components/organisms/Clients';
import Facebook from '../components/atoms/Facebook';
import Twitter from '../components/atoms/Twitter';
import Medium from '../components/atoms/Medium';
import Linkedin from '../components/atoms/Linkedin';
import Github from '../components/atoms/Github';
import ServiceIcon from '../components/atoms/ServiceIcon';

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
      <ServiceIcon iconClassName="i-fa-shopping-cart" />
      <ServiceIcon iconClassName="i-fa-laptop" />
      <ServiceIcon iconClassName="i-fa-lock" />
    </>
  );
};

export default Home;
