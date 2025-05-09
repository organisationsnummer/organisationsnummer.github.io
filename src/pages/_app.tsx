import React from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import '../styles/main.css';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <div className="flex flex-col flex-1 md:justify-center max-w-3xl mx-auto p-5 w-full">
      <Head>
        <title>Organisationsnummer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div>
        <h1 className="text-4xl md:text-5xl text-center text-gray-700">
          <img
            alt="Organisationsnummer"
            src="/apple-touch-icon.png"
            className="w-8 sm:w-12 inline-block"
          />{' '}
          organisationsnummer
        </h1>
      </div>
      <Component {...pageProps} />
    </div>
    <div className="border-t border-solid border-gray-300 pt-5 my-5">
      <p className="text-center text-gray-600">
        Copyright © {new Date().getFullYear()} organisationsnummer and
        Contributors
      </p>
      <p className="text-center text-gray-600">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/organisationsnummer/organisationsnummer.github.io"
          className="text-blue-500 hover:underline"
        >
          GitHub
        </a>{' '}
        -{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/sweidproject"
          className="text-blue-500 hover:underline"
        >
          Twitter
        </a>
      </p>
    </div>
  </>
);

export default App;
