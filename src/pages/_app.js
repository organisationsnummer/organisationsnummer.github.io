import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import 'tailwindcss/tailwind.css';
import '../styles/main.css';

export default class Application extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <div className="flex flex-col flex-1 md:justify-center max-w-3xl mx-auto p-5 w-full">
          <Head>
            <title>Personnummer</title>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
          </Head>
          <div className="text-center mb-5">
            <img
              src="/apple-touch-icon.png"
              alt="Personnummer"
              width="48"
              height="48"
            />
            <h1 className="text-4xl md:text-5xl text-gray-700">personnummer</h1>
          </div>
          <Component {...pageProps} />
        </div>
        <div className="border-t border-solid border-gray-300 pt-5 my-5">
          <p className="text-center text-gray-600">
            Copyright © {new Date().getFullYear()} Personnummer and Contributors
          </p>
          <p className="text-center text-gray-600">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/personnummer/personnummer.github.io"
              className="text-blue-500 hover:underline"
            >
              GitHub
            </a>{' '}
            -{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/personnummerdev"
              className="text-blue-500 hover:underline"
            >
              Twitter
            </a>
          </p>
        </div>
      </>
    );
  }
}
