export default class SearchForm extends React.Component {
    render() {
        const { value } = this.props
        return (
            <form role="search" method="get" id="searchform" className="searchform block" action="/resultados">
                <div className="coat inputer">
                    <input className="block" id="search" value={value} type="search" placeholder="Buscar otra cosa" name="s" required />
                    <div className="glyphsSprite search"></div>
                </div>
            </form>
        )
    }
}