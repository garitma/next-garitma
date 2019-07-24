import Layout from '../components/Layout'
import { Client, Prismic } from '../api/prismic'

import SingleRead from '../components/SinglePost/SingleRead'
import SingleComic from '../components/SinglePost/SingleComic'
import SingleWallpaper from '../components/SinglePost/SingleWallpapers'


export default class Post extends React.Component {

    static async getInitialProps({ req, query }) {

        const { uid } = query

        try {
            const poems = await Client(req).query(Prismic.Predicates.at('my.poemas.uid', `${uid}`));
            const comics = await Client(req).query(Prismic.Predicates.at('my.comics.uid', `${uid}`));
            const descargas = await Client(req).query(Prismic.Predicates.at('my.descargas.uid', `${uid}`));

            return { poems, comics, descargas }
        } catch (error) {
            return { error: true }
        }
    }

    renderPoems() {
        return this.props.poems.results.map((document, index) =>
            <SingleRead document={document} key={index} />
        )
    }

    renderComics() {
        return this.props.comics.results.map((document, index) =>
            <SingleComic document={document} key={index} />
        )
    }

    renderWallpapers() {
        return this.props.descargas.results.map((document, index) =>
            <SingleWallpaper document={document} key={index} />
        )
    }

    renderBody() {
        return (
            <Layout>
                {this.props.poems.results.length > 0 &&
                    this.renderPoems()
                }
                {this.props.comics.results.length > 0 &&
                    this.renderComics()
                }
                {this.props.descargas.results.length > 0 &&
                    this.renderWallpapers()
                }
            </Layout>
        )
    }

    render() {
        if (this.props.error) return <Error />
        else return this.renderBody()
    }
}