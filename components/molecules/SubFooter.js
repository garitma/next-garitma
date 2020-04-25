import Link from "next/link";

export default class SubFooter extends React.Component {
  render() {
    return (
      <div className="pad">
        <div className="halo smash">
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
              <Link href="/[type]" as="/videos">
                <a className="menu-item">Videos</a>
              </Link>
            </li>
            <li>
              <Link href="/[type]" as="/descargas">
                <a className="menu-item">Descargas</a>
              </Link>
            </li>
            <li>
              <Link href="/[type]" as="/podcasts">
                <a className="menu-item">Podcasts</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
