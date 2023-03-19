import '@unocss/reset/normalize.css';
import '@unocss/reset/sanitize/sanitize.css';
import '@unocss/reset/sanitize/assets.css';
import '../styles/bootstrap.scss';
import '../styles/global.css';
import '../styles/uno.css';

import Head from 'next/head';
import SSRProvider from 'react-bootstrap/SSRProvider';

import MetaJson from '../../contents/meta.json';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  const ogType = 'website';

  return (
    <>
      <Head>
        <title>{MetaJson.title}</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, maximum-scale=5, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
        <meta name="keywords" content={MetaJson.keywords.join(' ')} />
        <meta name="description" content={MetaJson.description} />
        <meta name="og:title" content={MetaJson.title} />
        <meta name="og:description" content={MetaJson.description} />
        <meta name="og:type" content={ogType} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="ThunderMiracle" />
        <meta name="twitter:title" content={MetaJson.title} />
        <meta name="twitter:description" content={MetaJson.description} />

        <link rel="apple-touch-icon" sizes="48x48" href="/icons/icon-48x48.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/icons/icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="96x96" href="/icons/icon-96x96.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/icons/icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="192x192" href="/icons/icon-192x192.png" />
        <link rel="apple-touch-icon" sizes="256x256" href="/icons/icon-256x256.png" />
        <link rel="apple-touch-icon" sizes="384x384" href="/icons/icon-384x384.png" />
        <link rel="apple-touch-icon" sizes="512x512" href="/icons/icon-512x512.png" />

        <meta name="theme-color" content="#fed136" />
        <link rel="icon" href="/icons/favicon-32x32.png" type="image/png" />
        <link rel="manifest" href="/manifest.json" crossOrigin="anonymous" />
      </Head>
      <SSRProvider>
        <Component {...pageProps} />
      </SSRProvider>
    </>
  );
}

export default MyApp;
