import React from "react";
import Section from "aura-design/section";
import Grid from "aura-design/grid";

import Image from "@components/Image";

/**
 * @typedef {import("@prismicio/client").Content.HeroBannerSlice} HeroBannerSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroBannerSlice>} HeroBannerProps
 * @param { HeroBannerProps }
 */
const HeroBanner = ({ slice }) => (
  <Section className="center-text" color="teal-green" >
    <Grid col="two">
      <div>
        <div className="valign vfluid">
          <h1>Te doy la bienvenida a mi imaginación</h1>
        </div>
      </div>
      <div>
        <Image
          src="https://images.prismic.io/garitma/6435685c-7367-4bad-a9f2-8d382e324954_keyvisual.png?auto=compress,format"
          height={2448}
          width={3168}
        />
      </div>
    </Grid>
    <div className="pad">
      <Image
        src="https://images.prismic.io/garitma/5b046696-7a2a-41ec-947e-541bf78c9255_Mariposa-traicionera.png?auto=compress,format"
        width={177 / 2}
        height={100 / 2}
      />
    </div>
  </Section>
);

export default HeroBanner;
