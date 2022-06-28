import React from 'react';
import { AppProps } from "../../node_modules/next/app"

import GlobalStyle from '../styles/global';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle/>
    </>
  )
}

export default MyApp
