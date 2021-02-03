import Link from "next/link";
import { Navbar, Header, Menu, Icon, Button } from "aura-design-system";

import GLOBAL from "garitmic.config.json";

const MyNavbar = ({ text, document }) => {
  const date = new Date();
  return (
    <>
      <Navbar>
        <ul className="nav-list">
          <li className="item logo">
            <Link href="/">
              <a aria-label="Logo">
                <Icon className={`p ${document?.logo}`} />
              </a>
            </Link>
          </li>
          <li className="item"></li>
        </ul>
      </Navbar>
      <Header
        style={{ backgroundImage: `url(${document?.subheader_cover?.url})` }}
        text={text}
      >
        <Menu container="smosh">
          <li className="item">
            <Link href="/poemas" passHref>
              <Button mode="menu" label link>
                Poemas
              </Button>
            </Link>
          </li>
          <li className="item">
            <Link href="/comics" passHref>
              <Button mode="menu" label link>
                Cómics
              </Button>
            </Link>
          </li>
          <li className="item">
            <Link href="/frases" passHref>
              <Button mode="menu" label link>
                Frases
              </Button>
            </Link>
          </li>
          <li className="item">
            <Link href="/descargas" passHref>
              <Button mode="menu" label link>
                Descargas
              </Button>
            </Link>
          </li>
        </Menu>
      </Header>
    </>
  );
};

export default MyNavbar;
