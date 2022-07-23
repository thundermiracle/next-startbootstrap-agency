import Clients from '../components/organisms/Clients';
import Services from '../components/organisms/Services';
import TeamMembers from '../components/organisms/TeamMembers';
import Timeline from '../components/organisms/Timeline';
import Contact from '../components/organisms/Contact';
import Footer from '../components/organisms/Footer';

import type { NextPage } from 'next';

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

const timelineData = {
  title: 'About',
  subTitle: 'Lorem ipsum dolor sit amet consectetur.',
  data: [
    {
      imageSrc: '/images/timelines/timeline-1.jpg',
      imageAlt: 'Our Humble Beginnings',
      header: '2009-2011',
      subheader: 'Our Humble Beginnings',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.',
    },
    {
      imageSrc: '/images/timelines/timeline-2.jpg',
      imageAlt: 'An Agency is Born',
      header: 'March 2011',
      subheader: 'An Agency is Born',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.',
    },
    {
      imageSrc: '/images/timelines/timeline-3.jpg',
      imageAlt: 'Transition to Full Service',
      header: 'December 2012',
      subheader: 'Transition to Full Service',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.',
    },
    {
      imageSrc: '/images/timelines/timeline-4.jpg',
      imageAlt: 'Phase Two Expansion',
      header: 'July 2014',
      subheader: 'Phase Two Expansion',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.',
    },
    {
      imageContent: 'Be Part\r\nOf Our\r\nStory!',
    },
  ],
};

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

const contractData = {
  title: "Let's Get In Touch!",
  subTitle:
    'Ready to start your next project with us? Give us a call or send us an email and we will get back to you as soon as possible!',
  telephone: '+1 (234) 567-890',
  email: 'contact@yourwebsite.com',
};

const footerData = {
  copyright: 'Copyright © Start Bootstrap 2020',
  privacyText: 'Privacy Policy',
  privacyHref: '#!',
  termsText: 'Terms of Use',
  termsHref: '#!',
  social: {
    twitter: '#',
    facebook: '#',
    medium: '#',
  },
};

const Home: NextPage = () => {
  return (
    <>
      <Services
        title={servicesData.title}
        subTitle={servicesData.subTitle}
        data={servicesData.data}
      />
      <Timeline
        title={timelineData.title}
        subTitle={timelineData.subTitle}
        data={timelineData.data}
      />
      <TeamMembers
        title={teamMembersData.title}
        subTitle={teamMembersData.subTitle}
        footer={teamMembersData.footer}
        data={teamMembersData.data}
      />
      <Clients data={clientsData.data} />
      <Contact
        title={contractData.title}
        subTitle={contractData.subTitle}
        telephone={contractData.telephone}
        email={contractData.email}
      />
      <Footer
        copyright={footerData.copyright}
        privacyText={footerData.privacyText}
        privacyHref={footerData.privacyHref}
        termsText={footerData.privacyText}
        termsHref={footerData.termsHref}
        social={footerData.social}
      />
    </>
  );
};

export default Home;
