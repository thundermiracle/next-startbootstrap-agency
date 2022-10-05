import '@unocss/reset/normalize.css';
import '@unocss/reset/sanitize/sanitize.css';
import '@unocss/reset/sanitize/assets.css';
import '../styles/bootstrap.scss';
import '../styles/global.css';
import '../styles/uno.css';

import Head from 'next/head';
import SSRProvider from 'react-bootstrap/SSRProvider';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  const title = 'Next StartBootstrap Agency';
  const description = 'Next.js version of startbootstrap-agency with i18n support.';
  const ogType = 'website';

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
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

        <link rel="apple-touch-icon" sizes="48x48" href="/icons/icon-48x48.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/icons/icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="96x96" href="/icons/icon-96x96.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/icons/icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="192x192" href="/icons/icon-192x192.png" />
        <link rel="apple-touch-icon" sizes="256x256" href="/icons/icon-256x256.png" />
        <link rel="apple-touch-icon" sizes="384x384" href="/icons/icon-384x384.png" />
        <link rel="apple-touch-icon" sizes="512x512" href="/icons/icon-512x512.png" />

        <link rel="icon" href="/favicon-32x32.png" type="image/png" />
        <link rel="manifest" href="/manifest.json" crossOrigin="anonymous" />
      </Head>
      <SSRProvider>
        <Component {...pageProps} />
      </SSRProvider>
    </>
  );
}

export default MyApp;
