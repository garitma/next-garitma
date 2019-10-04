import NextSeo from 'next-seo'
import GaritmicConfig from '../../garitmic.config.json'


export default class ResultsSeo extends React.Component {
    render() {
        const { s } = this.props
        return (
            <NextSeo
                config={{
                    title: `Resultados para ${s}`,
                    titleTemplate: `%s | ${GaritmicConfig.siteName}`,
                    description: `${GaritmicConfig.siteDescription}`,
                    canonical: `${GaritmicConfig.siteURL}`,
                    openGraph: {
                        url: `${GaritmicConfig.siteURL}`,
                        title: `Resultados para ${s} | ${GaritmicConfig.siteName}`,
                        description: `${GaritmicConfig.siteDescription}`,
                        type: 'website',
                        images: [
                            {
                                url: `${GaritmicConfig.social.openGrap}`,
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