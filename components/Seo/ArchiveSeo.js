import NextSeo from 'next-seo'
import GaritmicConfig from '../../garitmic.config.json'

export default class ArchiveSeo extends React.Component {
    render() {
        const { document } = this.props
        return (
            <NextSeo
                config={{
                    title: `${GaritmicConfig.types[document.results[0].type].name}`,
                    titleTemplate: `%s | ${GaritmicConfig.siteName}`,
                    description: `${GaritmicConfig.siteDescription}`,
                    canonical: `${GaritmicConfig.siteURL}/categorias/${document.results[0].type}`,
                    openGraph: {
                        url: `${GaritmicConfig.siteURL}/categorias/${document.results[0].type}`,
                        title: `${GaritmicConfig.types[document.results[0].type].name} | ${GaritmicConfig.siteName}`,
                        description: `${GaritmicConfig.siteDescription}`,
                        type: 'Website',
                        images: [
                            {
                                url: `${GaritmicConfig.social.openGrap}`,
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