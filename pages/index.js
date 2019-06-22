import Layout from '../components/Layout'
import { Client, Prismic, linkResolver } from '../api/prismic'

import HeroPoem from '../components/Home/HeroPoem'

import SubHero from '../components/Home/SubHero'
import SubHeroFirst from '../components/Home/SubHero/_First'
import SubHeroSecond from '../components/Home/SubHero/_Second'
import SubHeroSecondContainer from '../components/Home/SubHero/_SecondContainer'
import SubHeroThird from '../components/Home/SubHero/_Third'




export default class extends React.Component {

    static async getInitialProps({ req, query }) {
        try {
            const poems = await Client(req).query(Prismic.Predicates.at('document.type', 'poemas'), { orderings: '[document.first_publication_date desc]', pageSize: 1 });
            const quotes = await Client(req).query(Prismic.Predicates.at('document.type', 'frases'), { orderings: '[document.first_publication_date desc]', pageSize: 2 });
            const games = await Client(req).query(Prismic.Predicates.at('document.type', 'juegos'), { orderings: '[document.first_publication_date desc]', pageSize: 1 });
            const podcasts = await Client(req).query(Prismic.Predicates.at('document.type', 'podcasts'), { orderings: '[document.first_publication_date desc]', pageSize: 1 });

            return { poems, quotes, games, podcasts }
        } catch (error) {
            return { error: true }
        }
    }

    renderPoems() {
        return this.props.poems.results.map((document) =>
            <HeroPoem document={document} />
        )
    }

    renderSubHeroFirst() {
        return this.props.games.results.map((document) =>
            <SubHeroFirst document={document} />
        )
    }

    renderSubHeroSecond() {
        return this.props.quotes.results.map((document) =>
            <SubHeroSecond document={document} />
        )
    }
    renderSubHeroThird() {
        return this.props.podcasts.results.map((document) =>
            <SubHeroThird document={document} />
        )
    }

    renderBody() {
        return (
            <Layout>
                {this.renderPoems()}
                <SubHero>
                    {this.renderSubHeroFirst()}
                    <SubHeroSecondContainer>
                        {this.renderSubHeroSecond()}
                    </SubHeroSecondContainer>
                    <SubHeroSecondContainer>
                        {this.renderSubHeroThird()}
                    </SubHeroSecondContainer>

                </SubHero>
            </Layout>
        )
    }

    render() {
        if (this.props.error) return <Error />
        else return this.renderBody()
    }

}