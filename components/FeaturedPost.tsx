import Section from "@aura-design/system/section";
import Grid from "@aura-design/system/grid";
import { filter } from "@prismicio/client";

import { createClient } from "@/prismicio";
import { InView } from "@/lib/motion-primitives/components/InView";
import CollectionPost from "@/components/CollectionPost";

type LastPostProps = {
  uid?: string;
};

export default async function FeaturedPost({ uid }: LastPostProps) {
  const client = createClient();
  const posts = await client.getByType("post", {
    pageSize: 5,
    predicates: [filter.any("document.tags", ["featured"])],
  });

  return (
    <Section container="smash">
      <InView>
        <div className="px-1">
          <h3 className="mb-2">Poemas destacados</h3>

          <Grid col="one" className="full">
            {posts.total_results_size > 0 &&
              posts.results
                .filter((post) => post.uid !== uid)
                .map((post) => <CollectionPost doc={post} key={post.id} />)}
          </Grid>
        </div>
      </InView>
    </Section>
  );
}
