import React from "react";
import Router from "next/router";
import NProgress from "nprogress";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Meta from "@/components/Meta";

NProgress.configure({ showSpinner: false });

Router.events.on("routeChangeStart", () => {
  NProgress.start();
});

Router.events.on("routeChangeComplete", () => {
  NProgress.done();
});

Router.events.on("routeChangeError", () => {
  NProgress.done();
});

const Layout = ({ children, text, seo, isSuscribePage, menu }) => {
  return (
    <main>
      <div className="page">
        <Meta {...seo} />
        <Header text={text} menu={menu} />
        <div className="page-body">{children}</div>
        <Footer isSuscribePage={isSuscribePage} />
      </div>
    </main>
  );
};

export default Layout;
