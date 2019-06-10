import Head from 'next/head'
import Navbar from '../Navbar'
import Footer from '../Footer'
import NProgress from 'nprogress'
import Router from 'next/router'
import PrismicConfig from '../../prismic-configuration.json'


Router.onRouteChangeStart = (url) => {
    NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()


export default class Layout extends React.Component {
    render() {
        const { children } = this.props
        return <main>

            <Head>
                <link rel="shortcut icon" sizes="16x16 24x24 32x32 48x48 64x64" href="static/images/favicon.ico" />
                <link rel='icon' type='image/x-icon' href='static/images/favicon.ico' />
                <link rel="apple-touch-icon" sizes="57x57" href="static/images/favicon-57.png" />
                <link rel="apple-touch-icon-precomposed" sizes="57x57" href="static/images/favicon-57.png" />
                <link rel="apple-touch-icon" sizes="72x72" href="static/images/favicon-72.png" />
                <link rel="apple-touch-icon" sizes="114x114" href="static/images/favicon-114-precomposed.png" />
                <link rel="apple-touch-icon" sizes="120x120" href="static/images/favicon-120-precomposed.png" />
                <link rel="apple-touch-icon" sizes="144x144" href="static/images/favicon-144-precomposed.png" />
                <link rel="apple-touch-icon" sizes="152x152" href="static/images/favicon-152-precomposed.png" />
                <link href="/static/css/style.min.css" rel="stylesheet" />
                <meta content="yes" name="apple-mobile-web-app-capable" />
                <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
                <script src='/static/js/typekit.js' />
                <script dangerouslySetInnerHTML={{
                    __html: `
                  window.prismic = { endpoint: "${PrismicConfig.apiEndpoint}" }
                 `}} />
                <script src="//static.cdn.prismic.io/prismic.min.js" />
            </Head>

            <Navbar />

            <div className='page'>
                {children}
            </div>

            <Footer />


        </main>
    }
}
