import NextSeo from 'next-seo'
import GaritmicConfig from '../../garitmic.config.json'

export default class SingleSeo extends React.Component {
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
                        type: 'article',
                        article: {
                            publishedTime: '2017-06-21T23:04:13Z',
                            modifiedTime: '2018-01-21T18:04:43Z',
                            expirationTime: '2022-12-21T22:04:11Z',
                        },
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
                    facebook: {
                        appId: `${GaritmicConfig.facebookappId}`
                    },
                    twitter: {
                        handle: `@${GaritmicConfig.Social.twitter}`,
                        site: `@${GaritmicConfig.Social.twitter}`,
                        cardType: 'summary_large_image',
                    },
                }}
            />
        )
    }
}