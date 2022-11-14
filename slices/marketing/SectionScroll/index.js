import React from "react";
import Section from "aura-design/section";
import * as prismicH from "@prismicio/helpers"

/**
 * @typedef {import("@prismicio/client").Content.SectionScrollSlice} SectionScrollSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SectionScrollSlice>} SectionScrollProps
 * @param { SectionScrollProps }
 */
const SectionScroll = ({ slice }) => (
  <Section color={slice.primary.color}>
    <div
      style={{
        backgroundImage: `url(${slice.primary.image.url})`,
        height: "80vh",
      }}
      className="valign background pad"
    >
      <h3 className="h1">{prismicH.asText(slice.primary.title)}</h3>
    </div>
  </Section>
);

export default SectionScroll;
