import Link from 'next/link'
import moment from 'moment'
import GaritmicConfig from '../../garitmic.config.json'


export default class Footer extends React.Component {

    render() {
        return (
            <footer id="Footer">
                <div className="halo smush">
                    <div className="firs-section">
                        <div className="logo copyright">
                            <Link href="/" as="/">
                                <a aria-label="Logo Garitma"><div className="glyphsSprite logo" /></a>
                            </Link>
                            <p className="page-footer-legal">© {moment().locale(`${GaritmicConfig.lang}`).format('YYYY')} Garitma. Todos los derechos reservados</p>
                        </div>
                        <ul className="page-footer-legal-wrapper nav-list halo">
                            <li className="page-footer-link item">
                                <Link href="/informacion-legal" as="/informacion-legal">
                                    <a>Terminos de uso</a>
                                </Link>
                            </li>
                            <li className="page-footer-link item">
                                <Link href="/informacion-legal" as="/informacion-legal">
                                    <a>Políticas de privacidad</a>
                                </Link>
                            </li>

                        </ul>
                    </div>
                    <div className="contact-section">
                        <ul className="page-footer-follow nav-list">
                            <li className="item"><a aria-label="Instagram de Garitma" rel="noopener" href="https://www.instagram.com/garitma" target="_blank"><div className="glyphsSprite instagram" /></a></li>
                            <li className="item"><a aria-label="Twitter de Garitma" rel="noopener" href="https://www.twitter.com/garitma" target="_blank"><div className="glyphsSprite twitter" /></a></li>
                            <li className="item"><a aria-label="Giphy de Garitma" rel="noopener" href="https://giphy.com/garitma" target="_blank"><div className="glyphsSprite giphy" /></a></li>
                            <li className="item"><a aria-label="Youtube de Garitma" rel="noopener" href="https://www.youtube.com/channel/UCXqv9Itys4Nya5S54L3jqGA?sub_confirmation=1" target="_blank"><div className="glyphsSprite youtube" /></a></li>
                            <li className="item"><a aria-label="Facebook de Garitma" rel="noopener" href="https://www.facebook.com/garitma" target="_blank"><div className="glyphsSprite facebook" /></a></li>
                        </ul>
                        <ul className="nav-list">
                            <li className="item fluid centertxt"><p>
                                <Link href="/informacion-de-contacto" as="/informacion-de-contacto">
                                    <a>Información de contacto</a>
                                </Link>
                            </p></li>
                        </ul>
                    </div>
                </div>
            </footer>
        );
    }
}
