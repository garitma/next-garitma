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

type Params = { uid: string };

export const relative = 60

export const dynamicParams = true;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const client = createClient();
  const page = await client.getByUID("post", params.uid);
  const settings = await client.getSingle("settings");
  const seo = getPrismicSEO(page, settings);

  return seo;
}

export default async function SinglePost({ params }) {
  const client = createClient();
  const page = await client.getByUID("post", params.uid);

  return (
    <div className="mt-5 relative">
      <Section className="text-center">
        {isFilled.keyText(page.data.title) && (
          <TextEffect per="char">{page.data.title}</TextEffect>
        )}
        <p>
          <TextEffect per="char" as="em">
            Por Garitma
          </TextEffect>
        </p>
        {isFilled.image(page.data.image) && (
          <InView>
            <PrismicNextImage field={page.data.image} height={350} />
          </InView>
        )}
      </Section>
      <article>
        <SliceZone slices={page.data.slices} components={components} />
      </article>
      <LastPost uid={params.uid} />
    </div>
  );
}

export async function generateStaticParams() {
  const client = createClient();
  const posts = await client.getAllByType("post");

  return posts.map((post) => {
    return { uid: post.uid };
  });
}