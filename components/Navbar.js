import Link from "next/link";

import GLOBAL from "garitmic.config.json";

const MyNavbar = ({ text }) => {
  const date = new Date();
  return (
    <>
      <header
        className="blue aura"
        style={{
          backgroundImage:
            "url(https://images.prismic.io/garitma/a1b3faf2-cdb0-4bc4-b515-877c0da12a96_header_aura_design_system_garitma.jpg?auto=compress,format)",
        }}
      >
        <div className="smush aura">
          <ul className="nav-list">
            <li className="item logo-circle">
              <Link href="/">
                <a>
                  <div className="glyphsSprite logo" />
                </a>
              </Link>
            </li>
            <li className="mod">
              {/* <a className="button-link">
                <div className="glyphsSprite search" />
              </a> */}
            </li>
          </ul>
        </div>
        <div>
          <h1 className="light centertxt">{text}</h1>
        </div>
        <nav className="fluid smosh">
          <ul className="nav-list fluid flowx">
            <li className="item p0">
              <Link href="/poemas">
                <a className="button-menu">Poemas</a>
              </Link>
            </li>
            <li className="item p0">
              <Link href="/comics">
                <a className="button-menu">Cómics</a>
              </Link>
            </li>
            <li className="item p0">
              <Link href="/frases">
                <a className="button-menu">Frases</a>
              </Link>
            </li>
            <li className="item p0">
              <Link href="/descargas">
                <a className="button-menu">Descargas</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MyNavbar;
