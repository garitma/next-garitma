import React from "react";
import Router from "next/router";
import NProgress from "nprogress";

import Header from "@components/Header";
import Footer from "@components/Footer";
import { formatMeta, formatMetaArchives } from "@utils/formatMeta";

Router.events.on("routeChangeStart", () => {
  NProgress.start();
});

Router.events.on("routeChangeComplete", () => {
  NProgress.done();
});

Router.events.on("routeChangeError", () => {
  NProgress.done();
});

const Layout = ({
  children,
  preview,
  data,
  text,
  meta,
  path,
  excerpt,
  isArchive,
}) => (
  <main>
    {isArchive
      ? formatMetaArchives(meta, path, text, excerpt)
      : formatMeta(meta)}
    <div className="page">
      <Header preview={preview} document={data} text={text} />
      <div className="page-body">{children}</div>
      <Footer document={data} />
    </div>
  </main>
);

export default Layout;
