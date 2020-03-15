import GaritmicConfig from '../../garitmic.config.json'
import { RichText } from 'prismic-reactjs'
import Head from 'next/head'



export default class PageSeo extends React.Component {
    render() {
        const { document } = this.props
        return (
            <Head>
                <title>{RichText.asText(document.data.title)} | {GaritmicConfig.siteName}</title>
                <meta name="robots" content="index,follow" />
                <meta name="googlebot" content="index,follow"/>
                <meta name="description" content={RichText.asText(document.data.excerpt)} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content={`@${GaritmicConfig.social.twitter}`} />
                <meta name="twitter:creator" content={`@${GaritmicConfig.social.twitter}`} />
                <meta property="fb:app_id" content={GaritmicConfig.social.facebookappId}  />
                <meta property="og:url" content={GaritmicConfig.siteURL} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={`${RichText.asText(document.data.title)} | ${GaritmicConfig.siteName}`} />
                <meta property="og:description" content={RichText.asText(document.data.excerpt)} />
                <meta property="og:image" content={GaritmicConfig.social.openGrap} />
                <meta property="og:image:alt" content="Open Graph logo Garitma" />
                <meta property="og:image:width" content="1140" />
                <meta property="og:image:height" content="570" />
                <link rel="canonical" href={`${GaritmicConfig.siteURL}/${document.uid}`} />
            </Head>
        )
    }
}