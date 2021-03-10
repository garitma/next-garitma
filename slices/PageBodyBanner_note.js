import Section from "aura-design-system/core/section";
import Button from "aura-design-system/core/button";
import { RichText } from "prismic-reactjs";
import Image from "next/image";
import Link from "next/link";

const PageBodyBanner_note = ({ data, ...props }) => {
  const primaryButton =
    (data.primary.banner_note_first_button_pathname && {
      pathname: data.primary.banner_note_first_button_pathname,
      query: { uid: data.primary.banner_note_first_button_item?._meta?.uid },
    }) ||
    (data.primary.banner_note_first_button_item?.__typename ===
      "_ExternalLink" &&
      data.primary.banner_note_first_button_item?.url) ||
    `/${data.primary.banner_note_first_button_item?._meta?.uid}` ||
    "/";
  const headerLinkRel =
    data.primary.banner_note_first_button_item?.__typename === "_ExternalLink"
      ? "noopener"
      : "";

  return (
    <div {...props}>
      <Section
        subClassName="centertxt"
        color={data.primary.banner_note_color_class}
        {...props}
      >
        {RichText.render(data.primary.banner_note_title)}
        <div className="h6">
          {RichText.render(data.primary.banner_note_description)}
        </div>
      </Section>
      <Section
        color={data.primary.banner_note_color_class}
        className="centertxt"
      >
        <Image
          src={data.primary.banner_note_image.url}
          width={1920}
          height={1440}
        />
        <Section passDiv>
          {RichText.render(data.primary.banner_note_caption)}
          <Link href={primaryButton} passHref>
            <Button
              type="link"
              label={data.primary.banner_note_first_button_text}
              mode="fill"
              rel={headerLinkRel}
            />
          </Link>
        </Section>
      </Section>
    </div>
  );
};

export default PageBodyBanner_note;
