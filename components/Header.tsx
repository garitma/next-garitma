import Link from "next/link";

import Image from "@components/Image";

const Header = ({ text }) => {
  return (
    <>
      <header
        className="purple aura"
     
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
          <h1 className="light centertxt mb0 mt0  motion">{text}</h1>
        </div>
      </header>
    </>
  );
};

export default Header;
