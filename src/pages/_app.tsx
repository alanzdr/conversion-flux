import React from 'react';
import type { AppProps } from 'next/app';

import 'styles/global.css';

const MyApp: React.FC<AppProps> = ({ Component, pageProps, router }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
