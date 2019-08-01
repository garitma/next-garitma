import Layout from '../components/Layout'
import { Client, Prismic } from '../api/prismic'
import HeroPoem from '../components/Home/HeroPoem'
import SubHero from '../components/Home/SubHero'
import SubHeroFirst from '../components/Home/SubHero/_First'
import SubHeroSecond from '../components/Home/SubHero/_Second'
import SubSection from '../components/Home/SectionsContainers/SubHeroContainer'
import SubHeroThird from '../components/Home/SubHero/_Third'
import PromotionPlace from '../components/Home/PromotionPlace'
import Section from '../components/Home/SectionsContainers/HomeContainer'
import VideoTrailer from '../components/Home/VideoTrailer'
import Featured from '../components/Home/Featured'
import GeneralSeo from '../components/Seo/GeneralSeo'
import Error from './_error'

export default class extends React.Component {

    static async getInitialProps({ req, res, query }) {
        try {
            let [poems, quotes, games, podcasts, comics, videos, downloads, featured] = await Promise.all([
                Client(req).query(Prismic.Predicates.at('document.type', 'poemas'), { orderings: '[my.poemas.date desc]', pageSize: 1 }),
                Client(req).query(Prismic.Predicates.at('document.type', 'frases'), { orderings: '[my.frases.date desc]', pageSize: 2 }),
                Client(req).query(Prismic.Predicates.at('document.type', 'juegos'), { orderings: '[my.juegos.date desc]', pageSize: 1 }),
                Client(req).query(Prismic.Predicates.at('document.type', 'podcasts'), { orderings: '[my.podcasts.date desc]', pageSize: 1 }),
                Client(req).query(Prismic.Predicates.at('document.type', 'comics'), { orderings: '[my.comics.date desc]', pageSize: 1 }),
                Client(req).query(Prismic.Predicates.at('document.type', 'videos'), { orderings: '[my.videos.date desc]', pageSize: 2 }),
                Client(req).query(Prismic.Predicates.at('document.type', 'descargas'), { orderings: '[my.descargas.date desc]', pageSize: 1 }),
                Client(req).query(Prismic.Predicates.at('document.tags', ['featured']), { orderings: '[my.featured.date desc]', pageSize: 3 })
            ])

            return { poems, quotes, games, podcasts, comics, videos, downloads, featured, statusCode: 200 }
        } catch (e) {
            res.statusCode = 503
            return { poems: null, quotes: null, games: null, podcasts: null, comics: null, videos: null, downloads: null, featured: null, statusCode: 503 }
        }
    }

    renderPoems() {
        return this.props.poems.results.map((document, index) =>
            <HeroPoem document={document} key={index} />
        )
    }

    renderSubHeroFirst() {
        return this.props.games.results.map((document, index) =>
            <SubHeroFirst document={document} key={index} />
        )
    }

    renderSubHeroSecond() {
        return this.props.quotes.results.map((document, index) =>
            <SubHeroSecond document={document} key={index} />
        )
    }

    renderSubHeroThird() {
        return this.props.podcasts.results.map((document, index) =>
            <SubHeroThird document={document} key={index} />
        )
    }

    renderPromotionPlaceComic() {
        return this.props.comics.results.map((document, index) =>
            <HeroPoem document={document} key={index} cta="Leer" />
        )
    }

    renderVideoTrailer() {
        return this.props.videos.results.map((document, index) =>
            <VideoTrailer document={document} key={index} />
        )
    }

    renderPromotionPlaceDownloads() {
        return this.props.downloads.results.map((document, index) =>
            <HeroPoem document={document} key={index} cta="Descargar" />
        )
    }


    renderFeatured() {
        return this.props.featured.results.map((document, index) =>
            <Featured document={document} key={index} />
        )
    }

    renderBody() {
        return (
            <Layout>
                <GeneralSeo />
                {this.renderPoems()}
                <SubHero>
                    {this.renderSubHeroFirst()}
                    <SubSection>
                        {this.renderSubHeroSecond()}
                    </SubSection>
                    <SubSection>
                        {this.renderSubHeroThird()}
                    </SubSection>
                </SubHero>
                {this.renderPromotionPlaceComic()}
                <Section name="VideoTrailer">
                    {this.renderVideoTrailer()}
                </Section>
                {this.renderPromotionPlaceDownloads()}
                <Section name="Featured">
                    {this.renderFeatured()}
                </Section>
            </Layout>
        )
    }

    render() {
        const { statusCode, } = this.props

        if (statusCode !== 200) {
            return <Error statusCode={statusCode} />
        }

        return this.renderBody()
    }

}