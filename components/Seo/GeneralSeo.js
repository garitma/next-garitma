import NextSeo from 'next-seo'
import GaritmicConfig from '../../garitmic.config.json'

export default class GeneralSeo extends React.Component {
    render() {
        return (
            <NextSeo
                config={{
                    title: `${GaritmicConfig.siteName}`,
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
                                width: 1200,
                                height: 630,
                                alt: 'Open Graph logo Garitma',
                            },
                        ],
                        site_name: `${GaritmicConfig.siteName}`,
                    },
                    twitter: {
                        handle: `@${GaritmicConfig.Social.twitter}`,
                        site: `@${GaritmicConfig.Social.twitter}`,
                        cardType: 'summary_large_image',
                    },
                    facebook: {
                        appId: `${GaritmicConfig.facebookappId}`
                    }
                }}
            />
        )
    }
}