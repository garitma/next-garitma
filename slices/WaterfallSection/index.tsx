import Section from "@aura-design/system/dist/components/section";
import Grid from "@aura-design/system/dist/components/grid";
import dynamic from "next/dynamic";
import * as prismic from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
const FlightUp = dynamic(() => import("@/components/FlightUp"), { ssr: false });

/**
 * Props for `WaterfallSection`.
 */
export type WaterfallSectionProps =
  SliceComponentProps<prismic.Content.WaterfallSectionSlice>;

/**
 * Component for "WaterfallSection" Slices.
 */
const WaterfallSection = ({ slice }: WaterfallSectionProps): JSX.Element => {
  return (
    <Section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      color="purple"
      className="h-[100svh] relative overflow-hidden"
      subClassName="vfluid"
      style={{
        backgroundImage: "url('./watterfall.jpg')",
        backgroundPosition: "top right",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute left-0 right-0">
        <FlightUp />
      </div>
      <Grid col="two" className="vfluid text-white reverse">
        <div className="one">
          <Grid col="one" className="z-10">
            {prismic.isFilled.richText(slice.primary.title) && (
              <PrismicRichText field={slice.primary.title} />
            )}
            <div className="h6">
              {prismic.isFilled.richText(slice.primary.description) && (
                <PrismicRichText field={slice.primary.description} />
              )}
            </div>
          </Grid>
        </div>
        <div className="two"></div>
      </Grid>
    </Section>
  );
};

export default WaterfallSection;
