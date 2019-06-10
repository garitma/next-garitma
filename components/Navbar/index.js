import { Link } from "../../routes"

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

                                    <Link route="home"><a title="Logo">
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
                                        <li onClick={this.toggle.bind(this)}><Link route="archives" params={{ slug: 'poemas' }}><a className="menu-item">Poemas</a></Link></li>
                                        <li onClick={this.toggle.bind(this)}><Link route="archives" params={{ slug: 'frases' }}><a className="menu-item">Frases</a></Link></li>
                                        <li onClick={this.toggle.bind(this)}><Link route="archives" params={{ slug: 'comics' }}><a className="menu-item">Cómics</a></Link></li>
                                        <li onClick={this.toggle.bind(this)}><Link route="archives" params={{ slug: 'videos' }}><a className="menu-item">Videos</a></Link></li>
                                        <li onClick={this.toggle.bind(this)}><Link route="archives" params={{ slug: 'descargas' }}><a className="menu-item">Descargas</a></Link></li>
                                        <li onClick={this.toggle.bind(this)}><Link route="archives" params={{ slug: 'podcasts' }}><a className="menu-item">Podcasts</a></Link></li>
                                        <li onClick={this.toggle.bind(this)}><Link route="archives" params={{ slug: 'juegos' }}><a className="menu-item">Juegos</a></Link></li>
                                        <li onClick={this.toggle.bind(this)}><Link route="authors"><a className="menu-item">Autores</a></Link></li>
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
