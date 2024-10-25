import Section from "@aura-design/system/dist/components/section";
import Grid from "@aura-design/system/dist/components/grid";
import { isFilled, Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";

/**
 * Props for `ElevatedIntroSection`.
 */
export type ElevatedIntroSectionProps =
  SliceComponentProps<Content.ElevatedIntroSectionSlice>;

/**
 * Component for "ElevatedIntroSection" Slices.
 */
const ElevatedIntroSection = ({
  slice,
}: ElevatedIntroSectionProps): JSX.Element => {
  return (
    <Section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="absolute left-0 right-0">
        {/* <Flight />
        <FlightSecond /> */}
      </div>
      <Grid col="two" className="vfluid">
        <div className="valign">
          <Grid col="one" className="z-10">
            {isFilled.richText(slice.primary.title) && (
              <PrismicRichText field={slice.primary.title} />
            )}
            <div className="h6">
              {isFilled.richText(slice.primary.description) && (
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
