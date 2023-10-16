import { useState } from "react";
import Link from "next/link";
import { MenuIcon, CloseIcon } from "@aura-design/system/dist/icons";
import Button from "@aura-design/system/button";
import Image from "next/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0">
      <div className="smush">
        <ul className="nav-list h-6">
          <li className="item valign">
            <Link href="/" className="halo">
              <Image src="/logo.png" width={60} height={60} alt="Logo" />
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
              {/* <Menu
                onClose={() => setIsOpen(false)}
                menuTabs={menu.data.menuTabs}
              /> */}
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
        </ul>
      </div>
    </header>
  );
};

export default Header;
