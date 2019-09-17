import Link from 'next/link'
import MenuSearchForm from '../atoms/MenuSearchForm'

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
            <header>
                <nav id="Navbar" className="navbar">
                    <div className="nav-wrapper">
                        <ul className="nav-list">
                            <li className="logo item">
                                <Link href='/' as="/">
                                    <a>
                                        <div className="glyphsSprite logo" />
                                    </a>
                                </Link>
                            </li>
                            <li className="item button-link menu-toggle-button" onClick={this.toggle.bind(this)}>
                                <div className={boxClass.join('')} >
                                    <i className="glyphsSprite menu point" />
                                </div>
                            </li>
                        </ul>
                        <div className={boxClass.join('')}>
                            <div className="sidenav">
                                <ul className="menu">
                                    <li className="">
                                        <MenuSearchForm />
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
                <div className={boxClass.join('')}>
                    <div className="menu-overley" onClick={this.toggle.bind(this)} />
                </div>
            </header>
        );
    }
}
