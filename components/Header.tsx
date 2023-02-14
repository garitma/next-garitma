import { useState } from "react";
import Link from "next/link";
import { MenuIcon, CloseIcon } from "@aura-design/system/dist/icons";
import Button from "@aura-design/system/button";

import Image from "@/components/Image";
import Menu from "@/components/Menu";

const Header = ({ menu }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="purple">
      <div className="smush aura">
        <ul className="nav-list">
          <li className="item">
            <Link href="/">
              <a className="halo aura white circle">
                <Image {...menu.data.logo} priority={true} />
              </a>
            </Link>
          </li>
          <li></li>
          <li className="hide-large">
            <Button mode="link" onClick={() => setIsOpen(true)}>
              <MenuIcon />
            </Button>
          </li>
          <li className="hide-medium hide-small">
            <ul className="nav-list">
              <Menu
                onClose={() => setIsOpen(false)}
                menuTabs={menu.data.menuTabs}
              />
            </ul>
          </li>
        </ul>
      </div>
      <div
        className={`anchor fluid vfluid hold left top right bottom white aura ${
          !isOpen ? "hidden" : "active"
        }`}
      >
        <ul className="top right left bottom aureole one centertxt square">
          <ul className="nav-list">
            <li></li>
            <li></li>
            <li>
              <Button mode="link" onClick={() => setIsOpen(false)}>
                <CloseIcon />
              </Button>
            </li>
          </ul>
          <Menu
            onClose={() => setIsOpen(false)}
            menuTabs={menu.data.menuTabs}
            isMobile
          />
        </ul>
      </div>
    </header>
  );
};

export default Header;
