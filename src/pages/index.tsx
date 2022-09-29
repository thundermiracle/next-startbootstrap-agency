import fs from 'fs';
import path from 'path';

import Navbar from '../components/organisms/Navbar';
import Top from '../components/organisms/Top';
import Services from '../components/organisms/Services';
import Clients from '../components/organisms/Clients';
import TeamMembers from '../components/organisms/Team';
import Timeline from '../components/organisms/Timeline';
import Contact from '../components/organisms/Contact';
import Footer from '../components/organisms/Footer';
import Portfolio from '../components/organisms/Portfolio';
import LanguageSelector from '../components/atoms/LanguageSelector';

import type { GetStaticProps, NextPage } from 'next';

interface HomeProps {
  data: {
    navbarData?: Record<string, any>;
    topData?: Record<string, any>;
    servicesData?: Record<string, any>;
    portfolioData?: Record<string, any>;
    timelineData?: Record<string, any>;
    teamMembersData?: Record<string, any>;
    clientsData?: Record<string, any>;
    contractData?: Record<string, any>;
    footerData?: Record<string, any>;
  };
}

const Home: NextPage<HomeProps> = ({
  data: {
    navbarData,
    topData,
    servicesData,
    portfolioData,
    timelineData,
    teamMembersData,
    clientsData,
    contractData,
    footerData,
  },
}) => {
  return (
    <>
      {navbarData && (
        <Navbar
          brand={navbarData.brand}
          menuText={navbarData.menuText}
          menus={navbarData.menus}
          extraItems={<LanguageSelector />}
        />
      )}
      {topData && (
        <Top
          header={topData.header}
          subheader={topData.subHeader}
          imageSrc={topData.imageSrc}
          jumpToAnchor={topData.jumpToAnchor}
          jumpToAnchorText={topData.jumpToAnchorText}
        />
      )}
      {servicesData && (
        <Services
          title={servicesData.title}
          subTitle={servicesData.subTitle}
          data={servicesData.data}
        />
      )}
      {portfolioData && (
        <Portfolio
          title={portfolioData.title}
          subTitle={portfolioData.subTitle}
          data={portfolioData.data}
        />
      )}
      {timelineData && (
        <Timeline
          title={timelineData.title}
          subTitle={timelineData.subTitle}
          data={timelineData.data}
        />
      )}
      {teamMembersData && (
        <TeamMembers
          title={teamMembersData.title}
          subTitle={teamMembersData.subTitle}
          footer={teamMembersData.footer}
          data={teamMembersData.data}
        />
      )}
      {clientsData && <Clients data={clientsData.data} />}
      {contractData && (
        <Contact
          title={contractData.title}
          subTitle={contractData.subTitle}
          telephone={contractData.telephone}
          email={contractData.email}
        />
      )}
      {footerData && (
        <Footer
          copyright={footerData.copyright}
          privacyText={footerData.privacyText}
          privacyHref={footerData.privacyHref}
          termsText={footerData.termsText}
          termsHref={footerData.termsHref}
          social={footerData.social}
        />
      )}
    </>
  );
};

export const getStaticProps: GetStaticProps = async (_context) => {
  const basePath = `${process.cwd()}/contents/en`;

  const files = fs.readdirSync(basePath, 'utf-8');
  const data = files.reduce((acc, file) => {
    const fileStr = fs.readFileSync(path.resolve(basePath, file), { encoding: 'utf8' });
    acc[path.basename(file, '.json')] = JSON.parse(fileStr);

    return acc;
  }, {} as Record<string, any>);

  return {
    props: {
      data,
    },
  };
};

export default Home;
