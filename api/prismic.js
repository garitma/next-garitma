import PrismicLib from 'prismic-javascript'
import PrismicConfig from '../prismic-configuration.json'

let frontClient

export const Client = (req = null) => {
    if (!req && frontClient) return frontClient
    else {
        const options = Object.assign({}, req ? { req } : {}, PrismicConfig.accessToken ? { accessToken: PrismicConfig.accessToken } : {})
        return PrismicLib.client(PrismicConfig.apiEndpoint, options)
    }
}
export const Prismic = PrismicLib

export const linkResolver = doc => {
    if (doc.type === 'homepage') return '/'
    else if (doc.type === 'poemas') return '/poemas'
    else if (doc.type === 'frases') return '/frases'
    else return '/'
}
