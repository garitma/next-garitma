import NextSeo from 'next-seo'
import GaritmicConfig from '../../garitmic.config.json'

export default class GeneralSeo extends React.Component {
    render() {
        return (
            <NextSeo
                config={{
                    title: `${GaritmicConfig.siteName}`,
                    titleTemplate: `%s`,
                    description: `${GaritmicConfig.siteDescription}`,
                    canonical: `${GaritmicConfig.siteURL}`,
                    openGraph: {
                        url: `${GaritmicConfig.siteURL}`,
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