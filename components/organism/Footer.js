import Link from 'next/link'

export default class Footer extends React.Component {

    render() {
        return (
            <footer id="Footer">
                <div className="halo smush">
                    <div className="firs-section">
                        <div className="logo copyright">
                            <Link href="/" as="/">
                                <a><div className="glyphsSprite logo" /></a>
                            </Link>
                            <p className="page-footer-legal">© 2019 Garitma. Todos los derechos reservados</p>
                        </div>
                        <ul className="page-footer-legal-wrapper nav-list halo">
                            <li className="page-footer-link item">
                                <Link href="/[uid]" as="/informacion-legal">
                                    <a>Terminos de uso</a>
                                </Link>
                            </li>
                            <li className="page-footer-link item">
                                <Link href="/[uid]" as="/informacion-legal">
                                    <a>Políticas de privacidad</a>
                                </Link>
                            </li>

                        </ul>
                    </div>
                    <div className="contact-section page-footer-second-section">
                        <ul className="page-footer-follow nav-list">
                            <li className="page-footer-link item"><a href="https://www.instagram.com/garitma" target="_blank"><div className="glyphsSprite instagram" /></a></li>
                            <li className="page-footer-link item"><a href="https://www.twitter.com/garitma" target="_blank"><div className="glyphsSprite twitter" /></a></li>
                            <li className="page-footer-link item"><a href="https://www.youtube.com/channel/UCXqv9Itys4Nya5S54L3jqGA?sub_confirmation=1" target="_blank"><div className="glyphsSprite youtube" /></a></li>
                            <li className="page-footer-link item"><a href="https://www.facebook.com/garitma" target="_blank"><div className="glyphsSprite facebook" /></a></li>
                        </ul>
                        <ul className="page-footer-contact nav-list">
                            <li className="page-footer-link item"><p>
                                <Link href="/[uid]" as="/informacion-de-contacto">
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
