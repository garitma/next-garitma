import Layout from '../components/Layout'
import { Client, Prismic } from '../api/prismic'

import SingleRead from '../components/SinglePost/SingleRead'
import SinglePages from '../components/SinglePost/SinglePages'


export default class Post extends React.Component {

    static async getInitialProps({ req, query }) {

        const { uid } = query

        try {
            const poems = await Client(req).query(Prismic.Predicates.at('my.poemas.uid', `${uid}`));
            const comics = await Client(req).query(Prismic.Predicates.at('my.comics.uid', `${uid}`));
            const descargas = await Client(req).query(Prismic.Predicates.at('my.descargas.uid', `${uid}`));
            const games = await Client(req).query(Prismic.Predicates.at('my.juegos.uid', `${uid}`));
            const podcasts = await Client(req).query(Prismic.Predicates.at('my.podcasts.uid', `${uid}`));
            const videos = await Client(req).query(Prismic.Predicates.at('my.videos.uid', `${uid}`));
            const pages = await Client(req).query(Prismic.Predicates.at('my.paginas.uid', `${uid}`));

            return { poems, comics, descargas, games, podcasts, videos, pages }
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
            <SingleRead document={document} key={index} />
        )
    }

    renderWallpapers() {
        return this.props.descargas.results.map((document, index) =>
            <SingleRead document={document} key={index} />
        )
    }

    renderGames() {
        return this.props.games.results.map((document, index) =>
            <SingleRead document={document} key={index} />
        )
    }

    renderPodcasts() {
        return this.props.podcasts.results.map((document, index) =>
            <SingleRead document={document} key={index} />
        )
    }

    renderVideos() {
        return this.props.videos.results.map((document, index) =>
            <SingleRead document={document} key={index} />
        )
    }

    renderPages() {
        return this.props.pages.results.map((document, index) =>
            <SinglePages document={document} key={index} />
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
                {this.props.games.results.length > 0 &&
                    this.renderGames()
                }
                {this.props.podcasts.results.length > 0 &&
                    this.renderPodcasts()
                }
                {this.props.videos.results.length > 0 &&
                    this.renderVideos()
                }
                {this.props.pages.results.length > 0 &&
                    this.renderPages()
                }
            </Layout>
        )
    }

    render() {
        if (this.props.error) return <Error />
        else return this.renderBody()
    }
}