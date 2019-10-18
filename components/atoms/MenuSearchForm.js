export default class MenuSearchForm extends React.Component {
    render() {
        const { value } = this.props
        return (
            <form role="search" method="get" id="searchform" className="menu-item" action="/resultados">
                <input aria-label="Buscar en Garitma" id="search" type="search" placeholder="" name="s" required />
                <div className="glyphsSprite search action left-1 disable"></div>
            </form>
        )
    }
}