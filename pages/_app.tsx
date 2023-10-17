import type { AppProps } from "next/app";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import "@aura-design/system/main.css";

import "@/styles/main.css";
import "@/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PrismicPreview repositoryName={repositoryName}>
      <Component {...pageProps} />
    </PrismicPreview>
  );
}

export default MyApp;
