import Head from 'next/head'
import Navbar from '../Navbar'
import Footer from '../Footer'
import NProgress from 'nprogress'
import Router from 'next/router'
import GaritmicConfig from '../../garitmic.config.json'


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
                <link rel='shortcut icon' sizes='16x16 24x24 32x32 48x48 64x64' href='/static/favicon.ico' />
                <link rel='icon' type='image/x-icon' href='/static/favicon.ico' />
                <link rel='apple-touch-icon' sizes='57x57' href='https://images.prismic.io/garitma%2Fe357d4fe-1953-43e0-be0e-4f7f95e21fcc_favicon-192.png?auto=compress,format&w=57&h=57' />
                <link rel='apple-touch-icon-precomposed' sizes='57x57' href='https://images.prismic.io/garitma%2Fe357d4fe-1953-43e0-be0e-4f7f95e21fcc_favicon-192.png?auto=compress,format&w=57&h=57' />
                <link rel='apple-touch-icon' sizes='72x72' href='https://images.prismic.io/garitma%2Fe357d4fe-1953-43e0-be0e-4f7f95e21fcc_favicon-192.png?auto=compress,format&w=72&h=72' />
                <link rel='apple-touch-icon' sizes='114x114' href='https://images.prismic.io/garitma%2Fe357d4fe-1953-43e0-be0e-4f7f95e21fcc_favicon-192.png?auto=compress,format&w=114&h=114' />
                <link rel='apple-touch-icon' sizes='120x120' href='https://images.prismic.io/garitma%2Fe357d4fe-1953-43e0-be0e-4f7f95e21fcc_favicon-192.png?auto=compress,format&w=120&h=120' />
                <link rel='apple-touch-icon' sizes='144x144' href='https://images.prismic.io/garitma%2Fe357d4fe-1953-43e0-be0e-4f7f95e21fcc_favicon-192.png?auto=compress,format&w=144&h=144' />
                <link rel='apple-touch-icon' sizes='152x152' href='https://images.prismic.io/garitma%2Fe357d4fe-1953-43e0-be0e-4f7f95e21fcc_favicon-192.png?auto=compress,format&w=152&h=152' />
                <link href='/static/style.min.css' rel='stylesheet' />
                <meta content='yes' name='apple-mobile-web-app-capable' />
                <meta name='apple-mobile-web-app-status-bar-style' content='black-translucent' />
                <script dangerouslySetInnerHTML={{
                    __html: `
                        (function (d) {
                            var config = {
                                kitId: 'acc2awn',
                                scriptTimeout: 3000,
                                async: true
                            },
                                h = d.documentElement, t = setTimeout(function () { h.className = h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive"; }, config.scriptTimeout), tk = d.createElement("script"), f = false, s = d.getElementsByTagName("script")[0], a; h.className += " wf-loading"; tk.src = 'https://use.typekit.net/' + config.kitId + '.js'; tk.async = true; tk.onload = tk.onreadystatechange = function () { a = this.readyState; if (f || a && a != "complete" && a != "loaded") return; f = true; clearTimeout(t); try { Typekit.load(config) } catch (e) { } }; s.parentNode.insertBefore(tk, s)
                        })(document);
                 `}} />
                <script type="text/javascript" src="https://static.cdn.prismic.io/prismic.min.js" />


            </Head>

            <Navbar />

            <div className='page'>
                <div className='page-body'>
                    {children}
                </div>
            </div>

            <Footer />

            <script dangerouslySetInnerHTML={{
                __html: `
                  window.prismic = { endpoint: '${GaritmicConfig.apiEndpoint}' }
                 `}} />
            <script type="text/javascript" src="https://static.cdn.prismic.io/prismic.min.js" />


        </main>
    }
}
