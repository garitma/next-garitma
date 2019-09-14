export default class MenuSearchForm extends React.Component {
    render() {
        const { value } = this.props
        return (
            <form role="search" method="get" id="searchform" className="menu-item" action="/resultados">
                <input style={{ border: 0, fontWeight: 700, paddingLeft: `45px` }} id="search" type="search" placeholder="" name="s" required />
                <div style={{ left: `15px` }} className="glyphsSprite search action left disable"></div>
            </form>
        )
    }
}