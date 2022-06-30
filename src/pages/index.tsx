import Clients from '../components/organisms/Clients';
import Services from '../components/organisms/Services';
import TeamMembers from '../components/organisms/TeamMembers';

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

const teamMembersData = {
  title: 'Our Amazing Team',
  subTitle: 'Lorem ipsum dolor sit amet consectetur.',
  footer:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.',
  data: [
    {
      imageSrc: '/images/teammembers/member-1.jpg',
      header: 'Kay Garland',
      subheader: 'Lead Designer',
      social: {
        twitter: '#',
        facebook: '#',
        linkedin: '#',
      },
    },
    {
      imageSrc: '/images/teammembers/member-2.jpg',
      header: 'Larry Parker',
      subheader: 'Lead Marketer',
      social: {
        twitter: '#',
        facebook: '#',
        medium: '#',
      },
    },
    {
      imageSrc: '/images/teammembers/member-3.jpg',
      header: 'Diana Pertersen',
      subheader: 'Lead Developer',
      social: {
        twitter: '#',
        facebook: '#',
        medium: '#',
      },
    },
  ],
};

const Home: NextPage = () => {
  return (
    <>
      <Clients data={clientsData.data} />
      <Services
        title={servicesData.title}
        subTitle={servicesData.subTitle}
        data={servicesData.data}
      />
      <TeamMembers
        title={teamMembersData.title}
        subTitle={teamMembersData.subTitle}
        footer={teamMembersData.footer}
        data={teamMembersData.data}
      />
    </>
  );
};

export default Home;
