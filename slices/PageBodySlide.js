import { Section, Button } from "aura-design-system";
import { RichText } from "prismic-reactjs";
import Image from "next/image";
import Link from "next/link";

const PageBodySlide = ({ data, ...props }) => {
  const primaryButton =
    (data.primary.slide_first_button_pathname && {
      pathname: data.primary.slide_first_button_pathname,
      query: { uid: data.primary.slide_first_button_item?._meta?.uid },
    }) ||
    (data.primary.slide_first_button_item?.__typename === "_ExternalLink" &&
      data.primary.slide_first_button_item?.url) ||
    `/${data.primary.slide_first_button_item?._meta?.uid}` ||
    "/";

  const slideGrid = ["aureole", "two"];

  if (data.primary.slide_direction) {
    slideGrid.push("revert");
  }

  return (
    <Section color={data.primary.slide_color_class} {...props}>
      <div className={slideGrid.join(" ").trim()}>
        <div className="one">
          <Image
            src={data.primary.slide_image.url}
            width={500}
            height={500}
            alt={data.primary.slide_image.alt}
          />
        </div>
        <div className="two">
          {RichText.render(data.primary.slide_title)}
          <div className="light">
            {RichText.render(data.primary.slide_subtitle)}
          </div>
          {RichText.render(data.primary.slide_description)}
          <Link href={primaryButton}>
            <Button
              type="link"
              label={data.primary.slide_first_button_text}
              mode="fill"
            />
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default PageBodySlide;
