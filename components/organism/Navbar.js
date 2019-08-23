import Link from 'next/link'

export default class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = { addClass: false }
    }
    toggle() {
        this.setState({ addClass: !this.state.addClass });
    }

    render() {
        let boxClass = [''];
        if (this.state.addClass) {
            boxClass.push('open');
        }
        return (
            <div>
                <header className="page-header">
                    <nav id="Top-bar" className="page-nav-container">
                        <div className="page-nav-content">
                            <ul id="nav-large" className="nav-list page-nav-menu-large">
                                <li className="logo item logo-container">
                                    <Link href='/' as="/">
                                        <a title="Logo">
                                            <div className="glyphsSprite logo" />
                                        </a>
                                    </Link>
                                </li>
                                <li className="item button-link menu-toggle-button" onClick={this.toggle.bind(this)}>
                                    <div className={boxClass.join('')} >
                                        <i className="glyphsSprite menu" />
                                    </div>
                                </li>
                            </ul>
                            <div className={boxClass.join('')}>
                                <div className="nav-container">
                                    <ul className="page-menu">
                                        <li>
                                            <form role="search" method="get" id="searchform" className="searchform" action="/resultados">
                                                <input className="menu-item" id="search" type="search" placeholder="Buscar" name="s" required />
                                            </form>
                                        </li>
                                        <li onClick={this.toggle.bind(this)}><Link href='/categorias/[type]' as='/categorias/poemas'><a className="menu-item">Poemas</a></Link></li>
                                        <li onClick={this.toggle.bind(this)}><Link href='/categorias/[type]' as='/categorias/frases'><a className="menu-item">Frases</a></Link></li>
                                        <li onClick={this.toggle.bind(this)}><Link href='/categorias/[type]' as='/categorias/comics'><a className="menu-item">Cómics</a></Link></li>
                                        <li onClick={this.toggle.bind(this)}><Link href='/categorias/[type]' as='/categorias/videos'><a className="menu-item">Videos</a></Link></li>
                                        <li onClick={this.toggle.bind(this)}><Link href='/categorias/[type]' as='/categorias/descargas'><a className="menu-item">Descargas</a></Link></li>
                                        <li onClick={this.toggle.bind(this)}><Link href='/categorias/[type]' as='/categorias/podcasts'><a className="menu-item">Podcasts</a></Link></li>
                                        <li onClick={this.toggle.bind(this)}><Link href='/categorias/[type]' as='/categorias/juegos'><a className="menu-item">Juegos</a></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>
                <div className={boxClass.join('')}>
                    <div className="menu-overley" onClick={this.toggle.bind(this)} />
                </div>
            </div>
        );
    }
}
