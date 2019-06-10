const routes = module.exports = require('next-routes')()

routes
    .add('home', '/', 'index')
    .add('results', '/resultados', 'results')
    .add('archives', '/categorias/:slug', 'categorys')
    .add('pagination', '/categorias/:slug/pagina/:page', 'archives')
    .add('authors', '/autores', 'authors')
    .add('author', '/autor/:slug', 'authorProfile')
    .add('post', '/:slug', 'post')

