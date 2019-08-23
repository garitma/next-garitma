export default class SearchForm extends React.Component {
    render() {
        const { value } = this.props
        return (
            <form role="search" method="get" id="searchform" className="page-search-bar searchform block" action="/resultados">
                <div className="page-typeahead coat inputer">
                    <input className="page-typeahead-input block" id="search" type="search" placeholder="Buscar en Garitma" name="s" required />
                    <div className="glyphsSprite search"></div>
                </div>
            </form>
        )
    }
}