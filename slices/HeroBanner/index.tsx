import dynamic from "next/dynamic";
import { Content, isFilled, asText } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from "@prismicio/react";
import Section from "@aura-design/system/section";
import { PrismicNextImage } from "@prismicio/next";

import { InView } from "@/lib/motion-primitives/components/InView";
import { TextEffect } from "@/lib/motion-primitives/components/TextEffect";

const Flight = dynamic(() => import("@/components/Flight"), {
  ssr: false,
});
const FlightSecond = dynamic(() => import("@/components/FlightSecond"), {
  ssr: false,
});

/**
 * Props for `HeroBanner`.
 */
export type HeroBannerProps = SliceComponentProps<Content.HeroBannerSlice>;

/**
 * Component for "HeroBanner" Slices.
 */
const HeroBanner = ({ slice }: HeroBannerProps): JSX.Element => {
  return (
    <Section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      container="smosh"
      className="text-center relative min-h-[99vh] valign max-w-[100vw]"
    >
      {isFilled.image(slice.primary.image) && (
        <div className="absolute left-0 bottom-0 ">
          <InView>
            <PrismicNextImage
              field={slice.primary.image}
              className="floating"
              height={400}
            />
          </InView>
        </div>
      )}
      <div className="absolute left-0 right-0 top-0">
        <InView>
          <Flight />
          <FlightSecond />
        </InView>
      </div>

      <div className="relative z-10 min-w-0.5">
        {console.log(asText(slice.primary.title))}
        {isFilled.richText(slice.primary.title) && (
          <TextEffect>{asText(slice.primary.title)}</TextEffect>
        )}
      </div>
    </Section>
  );
};

export default HeroBanner;
