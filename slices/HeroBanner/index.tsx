import dynamic from "next/dynamic";
import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from "@prismicio/react";
import Section from "@aura-design/system/section";

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
      className="text-center relative"
    >
      <div className="absolute left-0 right-0 top-0">
        <Flight />
        <FlightSecond />
      </div>
      <div className="relative z-10">
      {isFilled.richText(slice.primary.title) && (
        <PrismicRichText field={slice.primary.title} />
      )}
      </div>
    </Section>
  );
};

export default HeroBanner;
