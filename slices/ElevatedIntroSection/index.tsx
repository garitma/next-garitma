import Section from "@aura-design/system/dist/components/section";
import Grid from "@aura-design/system/dist/components/grid";
import dynamic from "next/dynamic";
import * as prismic from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";

const Flight = dynamic(() => import("@/components/Flight"), { ssr: false });
const FlightSecond = dynamic(() => import("@/components/FlightSecond"), {
  ssr: false,
});

/**
 * Props for `ElevatedIntroSection`.
 */
export type ElevatedIntroSectionProps =
  SliceComponentProps<prismic.Content.ElevatedIntroSectionSlice>;

/**
 * Component for "ElevatedIntroSection" Slices.
 */
const ElevatedIntroSection = ({
  slice,
}: ElevatedIntroSectionProps): JSX.Element => {
  return (
    <Section
      color="pink"
      className="h-[100svh] relative"
      subClassName="vfluid"
      style={{
        backgroundImage: "url('./mountain.jpg')",
        backgroundPosition: "bottom center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute left-0 right-0">
        <Flight />
        <FlightSecond />
      </div>
      <Grid col="two" className="vfluid">
        <div className="valign">
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
      </Grid>
    </Section>
  );
};

export default ElevatedIntroSection;
