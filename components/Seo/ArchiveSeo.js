import NextSeo from 'next-seo'
import { RichText } from 'prismic-reactjs'
import GaritmicConfig from '../../garitmic.config.json'

export default class ArchiveSeo extends React.Component {
    render() {
        const { document } = this.props
        return (
            <NextSeo
                config={{
                    title: `${document.results[0].type}`,
                    titleTemplate: `%s - ${GaritmicConfig.siteName}`,
                    description: `${GaritmicConfig.siteDescription}`,
                    canonical: `${GaritmicConfig.siteURL}/${document.uid}`,
                    openGraph: {
                        url: `${GaritmicConfig.siteURL}/${document.uid}`,
                        title: `${GaritmicConfig.siteName}`,
                        description: `${GaritmicConfig.siteDescription}`,
                        type: 'Website',
                        images: [
                            {
                                url: '/static/images/open_graph_logo.png',
                                width: 1140,
                                height: 570,
                                alt: 'Open Graph logo Garitma',
                            },
                        ],
                        site_name: `${GaritmicConfig.siteName}`,
                    },
                    twitter: {
                        handle: `@${GaritmicConfig.social.twitter}`,
                        site: `@${GaritmicConfig.social.twitter}`,
                        cardType: 'summary_large_image',
                    },
                    facebook: {
                        appId: `${GaritmicConfig.social.facebookappId}`
                    }
                }}
            />
        )
    }
}