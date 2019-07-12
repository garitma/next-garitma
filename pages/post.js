import Layout from '../components/Layout'
import { Client, Prismic } from '../api/prismic'

import SingleRead from '../components/SinglePost/SingleRead'


export default class Post extends React.Component {

    static async getInitialProps({ req, query }) {

        const { uid } = query

        try {
            const poems = await Client(req).query(Prismic.Predicates.at('my.poemas.uid', `${uid}`));

            return { poems }
        } catch (error) {
            return { error: true }
        }
    }

    renderPoems() {
        return this.props.poems.results.map((document) =>
            <SingleRead document={document} />
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