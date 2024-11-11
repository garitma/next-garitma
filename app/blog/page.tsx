import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";
import Section from "@aura-design/system/section";
import Grid from "@aura-design/system/grid";

import { getPrismicSEO } from "@/lib/prismic/utils/seo";
import { createClient } from "@/prismicio";
import CollectionPost from "@/components/CollectionPost";

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const blog = await client.getSingle("blog");
  const settings = await client.getSingle("settings");
  const seo = getPrismicSEO(blog, settings);

  return seo;
}

export default async function Blog() {
  const client = createClient();

  const posts = await client.getByType("post", {
    pageSize: 20,
    orderings: [{ field: "my.post.date", direction: "desc" }],
  });

  return (
    <div className="mt-5">
      <Section className="text-center">
        <h1>Blog</h1>
      </Section>
      <Section>
        <Grid col="one" className="full">
          {posts.total_results_size > 0 &&
            posts.results.map((post) => (
              <CollectionPost doc={post} key={post.id} />
            ))}
        </Grid>
      </Section>
    </div>
  );
}
