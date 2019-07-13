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

export default class extends React.Component {

    static async getInitialProps({ req, query }) {
        try {
            const poems = await Client(req).query(Prismic.Predicates.at('document.type', 'poemas'), { orderings: '[document.first_publication_date desc]', pageSize: 1 });
            const quotes = await Client(req).query(Prismic.Predicates.at('document.type', 'frases'), { orderings: '[document.first_publication_date desc]', pageSize: 2 });
            const games = await Client(req).query(Prismic.Predicates.at('document.type', 'juegos'), { orderings: '[document.first_publication_date desc]', pageSize: 1 });
            const podcasts = await Client(req).query(Prismic.Predicates.at('document.type', 'podcasts'), { orderings: '[document.first_publication_date desc]', pageSize: 1 });
            const comics = await Client(req).query(Prismic.Predicates.at('document.type', 'comics'), { orderings: '[document.first_publication_date desc]', pageSize: 1 });
            const videos = await Client(req).query(Prismic.Predicates.at('document.type', 'videos'), { orderings: '[document.first_publication_date desc]', pageSize: 2 });
            const downloads = await Client(req).query(Prismic.Predicates.at('document.type', 'descargas'), { orderings: '[document.first_publication_date desc]', pageSize: 1 });
            const featured = await Client(req).query(Prismic.Predicates.at('document.tags', ['featured']), { orderings: '[document.first_publication_date desc]', pageSize: 3 });

            return { poems, quotes, games, podcasts, comics, videos, downloads, featured }
        } catch (error) {
            return { error: true }
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
            <PromotionPlace document={document} key={index} />
        )
    }

    renderVideoTrailer() {
        return this.props.videos.results.map((document, index) =>
            <VideoTrailer document={document} key={index} />
        )
    }

    renderPromotionPlaceDownloads() {
        return this.props.downloads.results.map((document, index) =>
            <PromotionPlace document={document} key={index} />
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
        if (this.props.error) return <Error />
        else return this.renderBody()
    }

}