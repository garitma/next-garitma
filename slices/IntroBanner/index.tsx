import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Section from "@aura-design/system/section";
import { InView } from "@/lib/motion-primitives/components/InView";

/**
 * Props for `IntroBanner`.
 */
export type IntroBannerProps = SliceComponentProps<Content.IntroBannerSlice>;

/**
 * Component for "IntroBanner" Slices.
 */
const IntroBanner = ({ slice }: IntroBannerProps): JSX.Element => {
  return (
    <Section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      container="smosh"
      className="text-center min-h-[90vh] valign"
    >
      <InView>
        {isFilled.richText(slice.primary.title) && (
          <PrismicRichText field={slice.primary.title} />
        )}
        {isFilled.richText(slice.primary.description) && (
          <PrismicRichText field={slice.primary.description} />
        )}
      </InView>
    </Section>
  );
};

export default IntroBanner;
