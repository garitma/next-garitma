import type { AppProps /*, AppContext */ } from 'next/app'
import Router from "next/router";
import "aura-design/style.css";

import "../public/style.css";



function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp;
