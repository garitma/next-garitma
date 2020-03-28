import PrismicLib from 'prismic-javascript'
import GaritmicConfig from '../garitmic.config.json'

let frontClient

export const Client = (req = null) => {
    if (!req && frontClient) return frontClient
    else {
        const options = Object.assign({}, req ? { req } : {}, { accessToken: `${process.env.ACCESS_TOKEN}` })
        return PrismicLib.client(GaritmicConfig.apiEndpoint, options)
    }
}
export const Prismic = PrismicLib

export const linkResolver = doc => {
    if (doc.type === 'paginas') return '/' + doc.uid
    else if (doc.type === 'poemas') return '/' + doc.uid
    else if (doc.type === 'comics') return '/' + doc.uid
    else if (doc.type === 'videos') return '/' + doc.uid
    else if (doc.type === 'descargas') return '/' + doc.uid
    else if (doc.type === 'frases') return '/' + doc.uid
    else if (doc.type === 'juegos') return '/' + doc.uid
    else if (doc.type === 'podcasts') return '/' + doc.uid
    else return '/'
}

