import Head from "next/head";
import GLOBAL from "garitmic.config.json";
import { RichText } from "prismic-reactjs";

const PageSeo = ({ document }) => (
  <Head>
    <title>
      {RichText.asText(document.title)} | {GLOBAL.siteName}
    </title>
    <meta name="robots" content="index,follow" />
    <meta name="googlebot" content="index,follow" />
    <meta name="description" content={RichText.asText(document.excerpt)} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content={`@${GLOBAL.social.twitter}`} />
    <meta name="twitter:creator" content={`@${GLOBAL.social.twitter}`} />
    <meta property="og:url" content={`${GLOBAL.siteURL}/${document.uid}`} />
    <meta property="og:type" content="website" />
    <meta
      property="og:title"
      content={`${RichText.asText(document.title)} | ${GLOBAL.siteName}`}
    />
    <meta
      property="og:description"
      content={RichText.asText(document.excerpt)}
    />
    <meta property="og:image" content={GLOBAL.social.openGrap} />
    <meta
      property="og:image:alt"
      content="Open Graph logo Aura Design System"
    />
    <meta property="og:image:width" content="1140" />
    <meta property="og:image:height" content="570" />
    <link rel="canonical" href={`${GLOBAL.siteURL}/${document._meta.uid}`} />
  </Head>
);

export default PageSeo;
