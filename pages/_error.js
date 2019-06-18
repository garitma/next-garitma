import React from 'react'
import Layout from '../components/Layout'
import { Link } from '../routes'

export default class Error extends React.Component {
    static getInitialProps({ res, err }) {
        const statusCode = res ? res.statusCode : err ? err.statusCode : null;
        return { statusCode }
    }

    render() {
        const { statusCode } = this.props

        return (
            <Layout title="Oh no :(">
                {statusCode === 404 ?
                    <div className="message error coat">
                        <h1 className="block title-error">Esta página no existe :(</h1>
                        <p className="block"><Link route="home"><a className="button dark">Volver al inicio</a></Link></p>
                    </div>
                    :
                    <div className="message error coat">
                        <h1 className="block title-error">Hubo un problema :(</h1>
                        <p className="block">Intenta nuevamente en unos segundos</p>
                    </div>
                }
            </Layout>
        )
    }
}
