import { PrismicNextImage } from "@prismicio/next";

import { createClient } from "@/prismicio";
import { isFilled } from "@prismicio/client";
import Link from "next/link";

export default async function Header() {
  const client = createClient();
  //const settings = await client.getSingle("settings");
  const menu = await client.getByUID("navigation", "menu");

  return (
    <header className="p-2 absolute z-20 left-0 right-0 top-0">
      <div className="smush">
        <ul className="nav-list">
          <li className="item"></li>
          <li>
            {isFilled.image(menu.data.logo) && (
              <Link href="/">
                <PrismicNextImage
                  field={menu.data.logo}
                  width={70}
                  height={70}
                />
              </Link>
            )}
          </li>
          <li className="item"></li>
        </ul>
      </div>
    </header>
  );
}
