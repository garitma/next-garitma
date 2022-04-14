import Link from "next/link";

import Image from "@components/Image";

const Header = ({ text }) => {
  return (
    <>
      <header
        className="blue aura"
        style={{
          backgroundImage:
            "url(https://images.prismic.io/garitma/a1b3faf2-cdb0-4bc4-b515-877c0da12a96_header_aura_design_system_garitma.jpg?auto=compress,format)",
        }}
      >
        <div className="smush wall-pad">
          <ul className="nav-list">
            <li className="logo-circle">
              <Link href="/">
                <a className="halo">
                  <Image
                    src="https://images.prismic.io/garitma/281392c3-2020-4925-b71e-1d28db63a5bf_garitma-logo.png?auto=compress,format"
                    width={48}
                    aspectRatio="1:1"
                    alt="Logo Garitma"
                    priority={true}
                  />
                </a>
              </Link>
            </li>
            <li className="mod"></li>
          </ul>
        </div>
        <div>
          <h1 className="light centertxt mb0 mt0 motion-fadeUp motion">{text}</h1>
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

export default Header;
