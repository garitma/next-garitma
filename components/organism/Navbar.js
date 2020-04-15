import Link from "next/link";

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { addClass: false };
  }

  render() {
    return (
      <header>
        <nav id="Navbar" className="navbar">
          <div className="nav-wrapper">
            <ul className="nav-list">
              <li className="logo item">
                <Link href="/" as="/">
                  <a aria-label="Logo Garitma">
                    <div className="glyphsSprite logo" />
                  </a>
                </Link>
              </li>
              <li className="item"></li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}
