import Head from "next/head";
import GaritmicConfig from "../../garitmic.config.json";
import { RichText } from "prismic-reactjs";

export default class ArchiveSeo extends React.Component {
  render() {
    const { document, excerpt } = this.props;
    return (
      <Head>
        <title>
          {GaritmicConfig.types[document.results[0].type].name} |{" "}
          {GaritmicConfig.siteName}
        </title>
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta name="description" content={RichText.asText(excerpt)} />
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
        <meta
          property="og:url"
          content={`${GaritmicConfig.siteURL}/${document.results[0].type}`}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={`${GaritmicConfig.types[document.results[0].type].name} | ${
            GaritmicConfig.siteName
          }`}
        />
        <meta property="og:description" content={RichText.asText(excerpt)} />
        <meta property="og:image" content={GaritmicConfig.social.openGrap} />
        <meta property="og:image:alt" content="Open Graph logo Garitma" />
        <meta property="og:image:width" content="1140" />
        <meta property="og:image:height" content="570" />
        <link
          rel="canonical"
          href={`${GaritmicConfig.siteURL}/${document.results[0].type}`}
        />
      </Head>
    );
  }
}
