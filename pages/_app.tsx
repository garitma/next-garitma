import type { AppProps } from "next/app";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import "@aura-design/system/main.css";
import * as Phanthom from "phantom-client";

import "@/styles/main.css";
import "@/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    Phanthom.load(process.env.NEXT_PUBLIC_PHANTOM_SITE_CODE, {
      includedDomains: ["garitma.com"],
      accessToken: process.env.NEXT_PUBLIC_FAUNA_SECRET,
    });

    function onRouteChangeComplete() {
      Phanthom.trackPageview();
    }
    // Record a pageview when route changes
    router.events.on("routeChangeComplete", onRouteChangeComplete);

    // Unassign event listener
    return () => {
      router.events.off("routeChangeComplete", onRouteChangeComplete);
    };
  }, [router.events]);

  return (
    <PrismicPreview repositoryName={repositoryName}>
      <Component {...pageProps} />
    </PrismicPreview>
  );
}

export default MyApp;
