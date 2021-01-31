import React from "react";
import Router from "next/router";
import NProgress from "nprogress";

import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

Router.events.on("routeChangeStart", () => {
  NProgress.start();
});

Router.events.on("routeChangeComplete", () => {
  NProgress.done();
});

Router.events.on("routeChangeError", () => {
  NProgress.done();
});

const Layout = ({ children, preview, data, text }) => (
  <main>
    <div className="page">
      {/* <Navbar preview={preview} data={data} text={text} /> */}
      <div className="page-body">{children}</div>
      {/* <Footer document={data} /> */}
    </div>
  </main>
);

export default Layout;
