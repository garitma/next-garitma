import type { AppProps } from "next/app";
import "@aura-design/system/main.css";

import "@/styles/main.css";
import "@/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
