import Link from "next/link";

export default class SubHeader extends React.Component {
  render() {
    const { text, plaintxt, archive, onClose } = this.props;
    return (
      <div className="SubHeader">
        <div className="halo smash">
          {text && (
            <h1 className="content-center light centertxt mb0">{text}</h1>
          )}
          {plaintxt && (
            <h3 className="content-center light centertxt mb0">{plaintxt}</h3>
          )}
          <ul className="nav-list flowx wall-pad">
            <li>
              <Link href="/[type]" as="/poemas">
                <a className="menu-item">Poemas</a>
              </Link>
            </li>
            <li>
              <Link href="/[type]" as="/frases">
                <a className="menu-item">Frases</a>
              </Link>
            </li>
            <li>
              <Link href="/[type]" as="/comics">
                <a className="menu-item">Cómics</a>
              </Link>
            </li>
            <li>
              <Link href="/[type]" as="/descargas">
                <a className="menu-item">Descargas</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
