import { useEffect } from "react";
import { useRouter } from "next/router";
import "aura-design/style.css";

import * as Fathom from "fathom-client";
import "../public/style.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    Fathom.load(`VOLQQXCA`, {
      includedDomains: ["garitma.com"],
    });

    function onRouteChangeComplete() {
      Fathom.trackPageview();
    }
    // Record a pageview when route changes
    router.events.on("routeChangeComplete", onRouteChangeComplete);

    // Unassign event listener
    return () => {
      router.events.off("routeChangeComplete", onRouteChangeComplete);
    };
  }, [router.events]);

  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
