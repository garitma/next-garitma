import { PrismicNextImage } from "@prismicio/next";
import { isFilled } from "@prismicio/client";
import Section from "@aura-design/system/section";
import Grid from "@aura-design/system/grid";

import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import { InView } from "@/lib/motion-primitives/components/InView";

export default async function LastPost() {
  const client = createClient();
  const posts = await client.getByType("post");

  return (
    <Section container="smash" className="min-h-[50vh]">
      <InView>
        <Grid col="one" className="full">
          {posts.total_results_size > 0 &&
            posts.results.map((post) => (
              <div
                key={post.id}
                className="relative border border-black/20 border-solid border-t-0 border-l-0 border-r-0 border-b-1"
              >
                {isFilled.keyText(post.data.title) && (
                  <PrismicNextLink
                    href={post.url}
                    className="transform transition duration-500 ease-in-out group flex hover:underline"
                  >
                    <h3 className="h6 py-1">{post.data.title}</h3>
                    {isFilled.image(post.data.image) && (
                      <div className="transition duration-500 ease-in-out bg-white opacity-0 group-hover:opacity-100 flex justify-center ml-2">
                        <PrismicNextImage
                          field={post.data.image}
                          className="inline-block w-auto h-4 px-2" // Image styles
                          height={300}
                        />
                      </div>
                    )}
                  </PrismicNextLink>
                )}
              </div>
            ))}
        </Grid>
      </InView>
    </Section>
  );
}
