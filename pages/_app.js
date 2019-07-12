import App from 'next/app'
import Router from 'next/router'

import * as gtag from '../static/js/gtag'

Router.events.on('routeChangeComplete', url => gtag.pageview(url))

export default App
