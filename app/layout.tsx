import "@aura-design/system/main.css";

import { PrismicText } from "@prismicio/react";
import { PrismicNextImage, PrismicPreview } from "@prismicio/next";

import { createClient, repositoryName } from "@/prismicio";
import "@/styles/globals.css";
import "@/styles/main.css";
import HeadContent from "@/components/HeadContent";
import Separator from "@aura-design/system/separator";
import Section from "@aura-design/system/section";
import { isFilled } from "@prismicio/client";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-co">
      <body>
        <main>
          <div className="page-pancake">
            <Header />
            <HeadContent />
            {children}
            <Footer />
            <PrismicPreview repositoryName={repositoryName} />
          </div>
        </main>
      </body>
    </html>
  );
}

async function Header() {
  const client = createClient();
  const settings = await client.getSingle("settings");
  const menu = await client.getByUID("navigation", "menu");

  return (
    <header >
      <div className="smush">
        <ul className="nav-list h-6">
          <li className="item valign">
            {isFilled.image(menu.data.logo) && (
              <PrismicNextImage field={menu.data.logo} width={120} height={120} />
            )}
          </li>
          <li></li>
          <li className="hide-large"></li>
          <li className="hide-medium hide-small">
            <ul className="nav-list"></ul>
          </li>
        </ul>
      </div>
    </header>
  );
}

async function Footer() {
  const client = createClient();
  const footer = await client.getSingle("footer");

  return (
    <footer>
      <Separator />
      <Section className="p-1 text-center" passDiv>
        <PrismicText field={footer.data.copyright} />
      </Section>
    </footer>
  );
}
