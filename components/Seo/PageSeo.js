import NextSeo from 'next-seo'
import GaritmicConfig from '../../garitmic.config.json'
import { RichText } from 'prismic-reactjs'


export default class SingleSeo extends React.Component {
    render() {
        const { document } = this.props
        return (
            <NextSeo
                config={{
                    title: `${RichText.asText(document.data.title)}`,
                    titleTemplate: `%s - ${GaritmicConfig.siteName}`,
                    description: `${RichText.asText(document.data.excerpt)}`,
                    canonical: `${GaritmicConfig.siteURL}`,
                    openGraph: {
                        url: `${GaritmicConfig.siteURL}`,
                        title: `${RichText.asText(document.data.title)} - ${GaritmicConfig.siteName}`,
                        description: `${RichText.asText(document.data.excerpt)}`,
                        type: 'article',
                        article: {
                            publishedTime: `${document.first_publication_date}`,
                            modifiedTime: `${document.last_publication_date}`,
                        },
                        images: [
                            {
                                url: '/static/images/open_graph_logo.png',
                                width: 1140,
                                height: 570,
                                alt: 'Open Graph logo Garitma'
                            },
                        ],
                        site_name: `${GaritmicConfig.siteName}`,
                    },
                    facebook: {
                        appId: `${GaritmicConfig.social.facebookappId}`
                    },
                    twitter: {
                        handle: `@${GaritmicConfig.social.twitter}`,
                        site: `@${GaritmicConfig.social.twitter}`,
                        cardType: 'summary_large_image',
                    },
                }}
            />
        )
    }
}