import Navbar from '../components/organisms/Navbar';
import Top from '../components/organisms/Top';
import Services from '../components/organisms/Services';
import Clients from '../components/organisms/Clients';
import TeamMembers from '../components/organisms/Team';
import Timeline from '../components/organisms/Timeline';
import Contact from '../components/organisms/Contact';
import Footer from '../components/organisms/Footer';
import Portfolio from '../components/organisms/Portfolio';

import type { NextPage } from 'next';

const navData = {
  brand: 'Start Bootstrap',
  menuText: 'Menu ',
  menus: ['services', 'portfolio', 'about', 'team', 'contact'],
};

const topData = {
  header: "It's Nice To Meet You",
  subheader: 'Welcome To Our Studio!',
  imageSrc: '/images/top/header-bg.jpg',
  jumpToAnchor: 'about',
  jumpToAnchorText: 'Tell Me More',
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

const portfolioData = {
  title: 'PORTFOLIO',
  subTitle: 'Lorem ipsum dolor sit amet consectetur.',
  data: [
    {
      imageSrc: '/images/portfolios/thumbnail-1.jpg',
      header: 'Threads',
      subheader: 'Illustration',
      imageSrcDetail: '/images/portfolios/full-1.jpg',
      content:
        'Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!',
      extraInfo: ['Date: January 2017', 'Client: Threads', 'Category: Illustration'],
    },
    {
      imageSrc: '/images/portfolios/thumbnail-2.jpg',
      header: 'Explorer',
      subheader: 'Graphic Design',
      imageSrcDetail: '/images/portfolios/full-2.jpg',
      content:
        'Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!',
      extraInfo: ['Date: January 2017', 'Client: Explorer', 'Category: Graphic Design'],
    },
    {
      imageSrc: '/images/portfolios/thumbnail-3.jpg',
      header: 'Finish',
      subheader: 'Identity',
      imageSrcDetail: '/images/portfolios/full-3.jpg',
      content:
        'Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!',
      extraInfo: ['Date: January 2017', 'Client: Finish', 'Category: Identity'],
    },
    {
      imageSrc: '/images/portfolios/thumbnail-4.jpg',
      header: 'Lines',
      subheader: 'Branding',
      imageSrcDetail: '/images/portfolios/full-4.jpg',
      content:
        'Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!',
      extraInfo: ['Date: January 2017', 'Client: Lines', 'Category: Branding'],
    },
    {
      imageSrc: '/images/portfolios/thumbnail-5.jpg',
      header: 'Southwest',
      subheader: 'Website Design',
      imageSrcDetail: '/images/portfolios/full-5.jpg',
      content:
        'Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!',
      extraInfo: ['Date: January 2017', 'Client: Southwest', 'Category: Website Design'],
    },
    {
      imageSrc: '/images/portfolios/thumbnail-6.jpg',
      header: 'Window',
      subheader: 'Photography',
      imageSrcDetail: '/images/portfolios/full-1.jpg',
      content:
        'Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!',
      extraInfo: ['Date: January 2017', 'Client: Window', 'Category: Photography'],
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
      <Navbar brand={navData.brand} menuText={navData.menuText} menus={navData.menus} />
      <Top {...topData} />
      <Services
        title={servicesData.title}
        subTitle={servicesData.subTitle}
        data={servicesData.data}
      />
      <Portfolio
        title={portfolioData.title}
        subTitle={portfolioData.subTitle}
        data={portfolioData.data}
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
        termsText={footerData.termsText}
        termsHref={footerData.termsHref}
        social={footerData.social}
      />
    </>
  );
};

export default Home;
