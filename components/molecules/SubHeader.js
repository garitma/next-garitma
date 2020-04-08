import Link from 'next/link'

export default class SubHeader extends React.Component {
    render() {
        const { text, plaintxt, archive, onClose } = this.props
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
                        <li onClick={onClose}><Link href='/categorias/[type]' as='/categorias/poemas'><a className="menu-item">Poemas</a></Link></li>
                        <li onClick={onClose}><Link href='/categorias/[type]' as='/categorias/frases'><a className="menu-item">Frases</a></Link></li>
                        <li onClick={onClose}><Link href='/categorias/[type]' as='/categorias/comics'><a className="menu-item">Cómics</a></Link></li>
                        <li onClick={onClose}><Link href='/categorias/[type]' as='/categorias/videos'><a className="menu-item">Videos</a></Link></li>
                        <li onClick={onClose}><Link href='/categorias/[type]' as='/categorias/descargas'><a className="menu-item">Descargas</a></Link></li>
                        <li onClick={onClose}><Link href='/categorias/[type]' as='/categorias/podcasts'><a className="menu-item">Podcasts</a></Link></li>
                    </ul>
                    
                </div>
            </div> 
        );
    }

}
