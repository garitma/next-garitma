import React from "react";
import Link from "next/link";
import Layout from "../components/organism/Layout";
import Head from "next/head";
import GaritmicConfig from "../garitmic.config.json";

export default class Error extends React.Component {
  render() {
    return (
      <Layout>
        <Head>
          <title>Página no encontrada | {GaritmicConfig.siteName}</title>
        </Head>

        <div className="message error halo centertxt pad valign">
          <img
            className="smush"
            src="https://media.giphy.com/media/4HmjzL6Xm7XSCyzsF3/giphy.gif"
            height="80"
          />
          <h1 className="layer title-error">Esta página no existe :(</h1>
          <p className="layer">
            <Link href="/" as="/">
              <a className="button-link">Volver al inicio</a>
            </Link>
          </p>
        </div>
      </Layout>
    );
  }
}
