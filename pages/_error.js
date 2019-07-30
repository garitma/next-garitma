import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'

export default class Error extends React.Component {
    static getInitialProps({ res, err }) {
        const statusCode = res ? res.statusCode : err ? err.statusCode : null
        return { statusCode }
    }

    render404() {
        return (
            <Layout>
                <div className="message error coat">
                    <h1 className="block title-error">Esta página no existe :(</h1>
                    <p className="block"><Link><a className="button dark">Volver al inicio</a></Link></p>
                </div>
            </Layout>
        )
    }

    render500() {
        return (
            <Layout>
                <div className="message error coat">
                    <h1 className="block title-error">Hubo un problema :(</h1>
                    <p className="block">Intenta nuevamente en unos segundos</p>
                    <p className="block"><Link><a className="button dark">Volver al inicio</a></Link></p>
                </div>
            </Layout>
        )
    }

    renderDefault() {
        return (
            <Layout>
                <h1 className="block title-error">Hubo un problema :(</h1>
                <p className="block">
                    {this.props.statusCode
                        ? `An error ${this.props.statusCode} occurred on server`
                        : 'An error occurred on client'}
                </p>
            </Layout>
        )
    }

    render() {
        if (this.props.statusCode == 404) return this.render404()
        else if (this.props.statusCode >= 500 && this.props.statusCode <= 599) return render500()
        else return this.renderDefault()
    }
}
