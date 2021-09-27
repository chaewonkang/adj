import React from 'react';
import Head from 'next/head';
import '../static/css/style.css';
import ogImage from '../static/images/ogImage.png';

function MyApp({ Component, pageProps }) {
  const currentUrl = 'https://adj.kr';
  return (
    <>
      <Head>
        <link rel='shortcut icon' href='../static/images/fav.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
        <meta property='og:url' content={currentUrl} />
        <meta property='og:title' content='adj' />
        <meta
          property='og:description'
          content='Adj is a creative agency specializing in branding and advertising.'
        />
        <meta property='og:image' content={ogImage} />
        <title>ADJ</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
