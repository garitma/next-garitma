import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import Head from 'next/head'
import GaritmicConfig from '../../garitmic.config.json'

export default class Error extends React.Component {
    static getInitialProps({ res, err }) {
        const statusCode = res ? res.statusCode : err ? err.statusCode : null
        return { statusCode }
    }

    render404() {
        return (
            <Layout>
                <Head>
                    <title>Esta página no existe - {GaritmicConfig.siteName}</title>
                </Head>
                <div className="message error coat">
                    <h1 className="block title-error pad">Esta página no existe :(</h1>
                    <p className="block"><Link href="/"><a className="button dark">Volver al inicio</a></Link></p>
                </div>
            </Layout>
        )
    }

    render500() {
        return (
            <Layout>
                <ErrorSeo />
                <div className="message error coat">
                    <h1 className="block title-error pad">Hubo un problema :(</h1>
                    <p className="block"><Link href="/"><a className="button dark">Volver al inicio</a></Link></p>
                </div>
            </Layout>
        )
    }

    renderDefault() {
        return (
            <Layout>
                <ErrorSeo />
                <div className="message error coat">
                    <h1 className="block title-error pad">Hubo un problema :(</h1>
                </div>
            </Layout>
        )
    }

    render() {
        if (this.props.statusCode == 404) return this.render404()
        else if (this.props.statusCode >= 500 && this.props.statusCode <= 599) return render500()
        else return this.renderDefault()
    }
}
