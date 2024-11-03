import { PrismicText } from "@prismicio/react";
import { createClient } from "@/prismicio";
import Section from "@aura-design/system/section";

import SuscribeBox from "@/components/SuscribeBox";

export default async function Footer() {
  const client = createClient();
  const footer = await client.getSingle("footer");

  return (
    <footer>
      <SuscribeBox />
      <Section className="p-1 text-center" passDiv>
        <PrismicText field={footer.data.copyright} />
      </Section>
    </footer>
  );
}
