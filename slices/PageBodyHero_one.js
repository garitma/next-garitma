import Section from "aura-design-system/core/section";
import Button from "aura-design-system/core/button";
import { RichText } from "prismic-reactjs";
import Image from "next/image";
import Link from "next/link";

const PageBodyHero_one = ({ data, ...props }) => {
  const primaryButton =
    (data.primary.hero_one_first_button_pathname && {
      pathname: data.primary.hero_one_first_button_pathname,
      query: { uid: data.primary.hero_one_first_button_item?._meta?.uid },
    }) ||
    (data.primary.hero_one_first_button_item?.__typename === "_ExternalLink" &&
      data.primary.hero_one_first_button_item?.url) ||
    `/${data.primary.hero_one_first_button_item?._meta?.uid}` ||
    "/";

  const secondaryButton =
    (data.primary.hero_one_second_button_pathname && {
      pathname: data.primary.hero_one_second_button_pathname,
      query: { uid: data.primary.hero_one_second_button_item?._meta?.uid },
    }) ||
    (data.primary.hero_one_second_button_item?.__typename === "_ExternalLink" &&
      data.primary.hero_one_second_button_item?.url) ||
    `/${data.primary.hero_one_second_button_item?._meta?.uid}` ||
    "/";

  const thirdButton =
    (data.primary.hero_one_third_button_pathname && {
      pathname: data.primary.hero_one_third_button_pathname,
      query: { uid: data.primary.hero_one_third_button_item?._meta?.uid },
    }) ||
    (data.primary.hero_one_third_button_item?.__typename === "_ExternalLink" &&
      data.primary.hero_one_third_button_item?.url) ||
    `/${data.primary.hero_one_third_button_item?._meta?.uid}` ||
    "/";

  return (
    <Section
      color="teal-green"
      container="smash"
      subClassName="centertxt"
      {...props}
    >
      <div className="mb0">{RichText.render(data.primary.hero_one_title)}</div>
      {RichText.render(data.primary.hero_one_description)}
      <div className="smosh">
        <Link href={primaryButton} passHref>
          <Button type="link" label="Get Started" mode="fill" />
        </Link>
        <span className="aura" />
        <Link href={secondaryButton} passHref>
          <Button
            label="Storybook"
            mode="pill"
            href="http://storybook.auradesignsystem.com/"
            target="_blank"
            rel="noopener"
            link
          />
        </Link>
        <p>
          {data.primary.hero_one_third_button_prefix}
          <Link href={thirdButton} passHref>
            <Button
              type="link"
              mode="link"
              label="Github"
              href="https://github.com/garitma/aura-design-system"
              target="_blank"
              rel="noopener"
              link
            />
          </Link>
        </p>
      </div>

      <div className="halo halign smosh">
        <Image
          src={data.primary.hero_one_image.url}
          width={320}
          height={320}
          className="floating"
          alt="Aura design system visual"
        />
      </div>
    </Section>
  );
};

export default PageBodyHero_one;
