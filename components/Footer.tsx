import { PrismicText } from "@prismicio/react";

import { createClient } from "@/prismicio";
import "@/styles/globals.css";
import "@/styles/main.css";
import Separator from "@aura-design/system/separator";
import Section from "@aura-design/system/section";

export default async function Footer() {
  const client = createClient();
  const footer = await client.getSingle("footer");

  return (
    <footer>
      <Section className="p-1 text-center" passDiv>
        <PrismicText field={footer.data.copyright} />
      </Section>
    </footer>
  );
}
