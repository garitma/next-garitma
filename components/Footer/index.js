export default class Navbar extends React.Component {

    render() {
        return (
            <footer className="page-footer">
                <div className="coat smush page-footer-container">
                    <div className="page-footer-firs-section">
                        <div className="block-copyright">
                            <a><div className="glyphsSprite logo" /></a>
                            <p>© 2019 Garitma. Todos los derechos reservados</p>
                        </div>

                        <ul className="nav-list coat">

                            <li className="item">
                                <a>Terminos de uso</a>
                            </li>
                            <li className="item">
                                <a>Políticas de privacidad</a>
                            </li>

                        </ul>

                    </div>
                    <div className="contact-section page-footer-second-section">
                        <ul className="nav-list">
                            <li className="item"><a href="https://www.instagram.com/garitma" target="_blank"><div className="glyphsSprite instagram" /></a></li>
                            <li className="item"><a href="https://www.twitter.com/garitma" target="_blank"><div className="glyphsSprite twitter" /></a></li>
                            <li className="item"><a href="https://www.youtube.com/channel/UCXqv9Itys4Nya5S54L3jqGA?sub_confirmation=1" target="_blank"><div className="glyphsSprite youtube" /></a></li>
                            <li className="item"><a href="https://www.facebook.com/garitma" target="_blank"><div className="glyphsSprite facebook" /></a></li>
                        </ul>
                        <ul className="nav-list">
                            <li className="item"><p><a>Información de contacto</a></p></li>
                        </ul>
                    </div>
                </div>
            </footer>
        );
    }
}
