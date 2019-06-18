import Layout from '../components/Layout'
import PrismicLink from '../api/PrismicLink'
import { RichText } from 'prismic-reactjs'
import { Client, Prismic, linkResolver } from '../api/prismic'

import HeroPoem from '../components/Home/HeroPoem'


export default class extends React.Component {

    static async getInitialProps({ req, query }) {
        try {
            const poems = await Client(req).query(Prismic.Predicates.at('document.type', 'poemas'), { pageSize: 1 });
            const quotes = await Client(req).query(Prismic.Predicates.at('document.type', 'frases'), { pageSize: 1 });
            const comics = await Client(req).query(Prismic.Predicates.at('document.type', 'comics'), { pageSize: 1 });
            const wallpapers = await Client(req).query(Prismic.Predicates.at('document.type', 'descargas'), { pageSize: 1 });
            const podcasts = await Client(req).query(Prismic.Predicates.at('document.type', 'podcasts'), { pageSize: 1 });
            const videos = await Client(req).query(Prismic.Predicates.at('document.type', 'videos'), { pageSize: 1 });

            return { poems, quotes }
        } catch (error) {
            return { error: true }
        }
    }

    renderPoems() {
        return this.props.poems.results.map((document) =>
            <HeroPoem document={document} />
        )
    }

    renderBody() {
        return (
            <Layout>
                {this.renderPoems()}
            </Layout>
        )
    }

    render() {
        if (this.props.error) return <Error />
        else return this.renderBody()
    }

}