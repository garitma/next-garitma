import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";
import Section from "@aura-design/system/section";
import { PrismicNextImage } from "@prismicio/next";
import { isFilled } from "@prismicio/client";

import { TextEffect } from "@/lib/motion-primitives/components/TextEffect";
import { InView } from "@/lib/motion-primitives/components/InView";
import { getPrismicSEO } from "@/lib/prismic/utils/seo";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import LastPost from "@/components/LatestPost";

export default async function SinglePost() {
  const client = createClient();
  const page = await client.getByUID("post", "aceleracion");

  return (
    <>
      <Section className="text-center">
        {isFilled.keyText(page.data.title) && (
          <h1>
            <TextEffect per="char">{page.data.title}</TextEffect>
          </h1>
        )}
        {isFilled.image(page.data.image) && (
          <InView>
            <PrismicNextImage field={page.data.image} height={350} />
          </InView>
        )}
      </Section>
      <SliceZone slices={page.data.slices} components={components} />
      <LastPost />
    </>
  );
}
