import App from "next/app";
import Router from "next/router";
import "react-multi-carousel/lib/styles.css";

import * as gtag from "../public/gtag";

Router.events.on("routeChangeComplete", (url) => gtag.pageview(url));

export default App;
