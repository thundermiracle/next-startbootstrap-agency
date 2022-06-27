import Clients from '../components/organisms/Clients';
import Facebook from '../components/atoms/Facebook';
import Twitter from '../components/atoms/Twitter';
import Medium from '../components/atoms/Medium';
import Linkedin from '../components/atoms/Linkedin';
import Github from '../components/atoms/Github';
import Services from '../components/organisms/Services';

import type { NextPage } from 'next';

const clientsData = {
  data: [
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
  ],
};

const servicesData = {
  title: 'services',
  subTitle: 'Lorem ipsum dolor sit amet consectetur.',
  data: [
    {
      iconClassName: 'i-fa-shopping-cart',
      header: 'E-Commerce',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.',
    },
    {
      iconClassName: 'i-fa-laptop',
      header: 'Responsive Design',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.',
    },
    {
      iconClassName: 'i-fa-lock',
      header: 'Web Security',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.',
    },
  ],
};

const Home: NextPage = () => {
  return (
    <>
      <Clients data={clientsData.data} />
      <Twitter userName="thundermiracle" />
      <Facebook userName="thundermiracle" />
      <Medium userName="thundermiracle" />
      <Linkedin userName="thundermiracle" />
      <Github userName="thundermiracle" />
      <Services
        title={servicesData.title}
        subTitle={servicesData.subTitle}
        data={servicesData.data}
      />
    </>
  );
};

export default Home;
