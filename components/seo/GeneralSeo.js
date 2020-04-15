import Head from "next/head";
import GaritmicConfig from "../../garitmic.config.json";

export default class GeneralSeo extends React.Component {
  render() {
    return (
      <Head>
        <title>{GaritmicConfig.siteName}</title>
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta name="description" content={GaritmicConfig.siteDescription} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:site"
          content={`@${GaritmicConfig.social.twitter}`}
        />
        <meta
          name="twitter:creator"
          content={`@${GaritmicConfig.social.twitter}`}
        />
        <meta
          property="fb:app_id"
          content={GaritmicConfig.social.facebookappId}
        />
        <meta property="og:url" content={GaritmicConfig.siteURL} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={GaritmicConfig.siteDescription} />
        <meta
          property="og:description"
          content={GaritmicConfig.siteDescription}
        />
        <meta property="og:image" content={GaritmicConfig.social.openGrap} />
        <meta property="og:image:alt" content="Open Graph logo Garitma" />
        <meta property="og:image:width" content="1140" />
        <meta property="og:image:height" content="570" />
        <link rel="canonical" href={GaritmicConfig.siteURL} />
      </Head>
    );
  }
}
