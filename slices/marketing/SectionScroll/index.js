import React from "react";
import Section from "aura-design/section";
import * as prismicH from "@prismicio/helpers";

import Image from "@components/Image";

/**
 * @typedef {import("@prismicio/client").Content.SectionScrollSlice} SectionScrollSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SectionScrollSlice>} SectionScrollProps
 * @param { SectionScrollProps }
 */
const SectionScroll = ({ slice }) => (
  <Section color={slice.primary.color} className="motion-fadeUp">
    <div
      style={{
        height: "80vh",
        contain: "paint",
      }}
      className="anchor pad"
    >
      <div className="sticky">
        <div className="pin right top">
          <Image {...slice.primary.image} />
        </div>
      </div>
      <div className="valign vfluid">
        <h3 className="h1 anchor" style={{zIndex: 99}}>
          {prismicH.asText(slice.primary.title)}
        </h3>
      </div>
    </div>
  </Section>
);

export default SectionScroll;
