import GLOBAL from "../../garitmic.config.json";
import { RichText } from "prismic-reactjs";
import Head from "next/head";

const SingleSeo = ({ document, type = "poemas" }) => (
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
    <meta property="fb:app_id" content={GLOBAL.social.facebookappId} />
    <meta
      property="og:url"
      content={`${GLOBAL.siteURL}/${type}/${document._meta.uid}`}
    />
    <meta property="og:type" content="website" />
    <meta
      property="og:title"
      content={`${RichText.asText(document.title)} | ${GLOBAL.siteName}`}
    />
    <meta
      property="og:description"
      content={RichText.asText(document.excerpt)}
    />
    <meta
      property="og:image"
      content={`${document.featured_img.url}&w=1140&h=570&dpr=1&fit=crop`}
    />
    <meta property="og:image:alt" content={document.featured_img.alt} />
    <meta property="og:image:width" content="1140" />
    <meta property="og:image:height" content="570" />
    <link
      rel="canonical"
      href={`${GLOBAL.siteURL}/${type}/${document._meta.uid}`}
    />
  </Head>
);

export default SingleSeo;
