import Link from 'next/link'

export default class SubHeader extends React.Component {
    render() {
        const { text, plaintxt, onClose } = this.props
        return (
            <div className='SubHeader'>
                <div className='halo smash'>
                    {text &&
                        <h1 className='content-center light centertxt mb0'>{text}</h1>
                    }
                    {plaintxt &&
                        <h3  className='content-center light centertxt mb0'>{plaintxt}</h3>
                    }
                    <ul className="nav-list flowx wall-pad">
                        {text != 'Poemas' &&
                            <li ><Link href='/categorias/[type]' as='/categorias/poemas'><a onClick={onClose} className="menu-item">Poemas</a></Link></li>
                        }
                        {text != 'Frases' && 
                            <li ><Link href='/categorias/[type]' as='/categorias/frases'><a onClick={onClose} className="menu-item">Frases</a></Link></li>
                        }
                        {text != 'Cómics' && 
                        <li ><Link href='/categorias/[type]' as='/categorias/comics'><a onClick={onClose} className="menu-item">Cómics</a></Link></li>
                        }
                        {text != 'Videos' && 
                        <li ><Link href='/categorias/[type]' as='/categorias/videos'><a onClick={onClose} className="menu-item">Videos</a></Link></li>
                        }
                        {text != 'Descargas' && 
                        <li ><Link href='/categorias/[type]' as='/categorias/descargas'><a onClick={onClose} className="menu-item">Descargas</a></Link></li>
                        }
                        {text != 'Podcasts' && 
                        <li ><Link href='/categorias/[type]' as='/categorias/podcasts'><a onClick={onClose} className="menu-item">Podcasts</a></Link></li>
                        }
                    </ul>
                </div>
                {plaintxt &&
                    <style jsx>{`
                        .SubHeader {
                          background: transparent  
                        }
                    `}</style>
                }
            </div> 
        );
    }

}
