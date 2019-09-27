export default class SearchForm extends React.Component {
    render() {
        const { value } = this.props
        return (
            <form role="search" method="get" id="searchform" className="layer" action="/resultados">
                <div className="halo inputer">
                    <input aria-label="Buscar en Garitma" className="typeahead layer" id="search" type="search" placeholder="Buscar en Garitma" name="s" required />
                    <div className="glyphsSprite search action left disable"></div>
                </div>
            </form>
        )
    }
}