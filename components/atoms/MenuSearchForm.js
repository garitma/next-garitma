export default class MenuSearchForm extends React.Component {
    render() {
        const { value } = this.props
        return (
            <form role="search" method="get" id="searchform" className="layer" action="/resultados">
                <input style={{ border: 0, fontWeight: 700 }} className="layer" id="search" type="search" placeholder="Buscar" name="s" required />
            </form>
        )
    }
}