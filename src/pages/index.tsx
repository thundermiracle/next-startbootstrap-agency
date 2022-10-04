import fs from 'fs';
import path from 'path';

import Head from 'next/head';

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
  locale: string;
  localeTextMap: Record<string, string>;
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
  locale,
  localeTextMap,
}) => {
  const title = 'Next StartBootstrap Agency';
  const description = 'Next.js version of startbootstrap-agency with i18n support.';
  const ogType = 'website';

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="keywords"
          content="next, next.js, startbootstrap, next-startbootstrap-agency, landing-page, landing, i18n, unocss, pnpm"
        />
        <meta name="description" content={description} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={description} />
        <meta name="og:type" content={ogType} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="ThunderMiracle" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Head>
      {navbarData && (
        <Navbar
          brand={navbarData.brand}
          menuText={navbarData.menuText}
          menus={navbarData.menus}
          extraItems={<LanguageSelector langKey={locale} langTextMap={localeTextMap} />}
        />
      )}
      {topData && (
        <Top
          header={topData.header}
          subheader={topData.subheader}
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

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const basePath = `${process.cwd()}/contents/${locale}`;

  const files = fs.readdirSync(basePath, 'utf-8');
  const data = files.reduce((acc, file) => {
    const fileStr = fs.readFileSync(path.resolve(basePath, file), { encoding: 'utf8' });
    acc[path.basename(file, '.json')] = JSON.parse(fileStr);

    return acc;
  }, {} as Record<string, any>);

  // localeTextMapを読み込み
  const localeTextMap = JSON.parse(
    fs.readFileSync(`${process.cwd()}/contents/localeTextMap.json`, { encoding: 'utf8' }),
  );

  return {
    props: {
      data,
      locale,
      localeTextMap,
    },
  };
};

export default Home;
