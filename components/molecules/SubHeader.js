import Link from 'next/link'

export default class SubHeader extends React.Component {
    render() {
        const { text } = this.props
        return (
            <div className='SubHeader'>
                <div className='halo smash'>
                    <h1 className='content-center light centertxt mb0'>{text}</h1>
                    <ul className="nav-list flowx wall-pad">
                        {text != 'Poemas' &&
                            <li ><Link href='/categorias/[type]' as='/categorias/poemas'><a className="menu-item">Poemas</a></Link></li>
                        }
                        {text != 'Frases' && 
                            <li ><Link href='/categorias/[type]' as='/categorias/frases'><a className="menu-item">Frases</a></Link></li>
                        }
                        {text != 'Cómics' && 
                        <li ><Link href='/categorias/[type]' as='/categorias/comics'><a className="menu-item">Cómics</a></Link></li>
                        }
                        {text != 'Videos' && 
                        <li ><Link href='/categorias/[type]' as='/categorias/videos'><a className="menu-item">Videos</a></Link></li>
                        }
                        {text != 'Descargas' && 
                        <li ><Link href='/categorias/[type]' as='/categorias/descargas'><a className="menu-item">Descargas</a></Link></li>
                        }
                        {text != 'Podcasts' && 
                        <li ><Link href='/categorias/[type]' as='/categorias/podcasts'><a className="menu-item">Podcasts</a></Link></li>
                        }
                        {/* {text != 'Juegos' && 
                        <li ><Link href='/categorias/[type]' as='/categorias/juegos'><a className="menu-item">Juegos</a></Link></li>
                        }    */}
                    </ul>
                </div>
            </div>
        );
    }

}
