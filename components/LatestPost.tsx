import Section from "@aura-design/system/section";
import Grid from "@aura-design/system/grid";

import { createClient } from "@/prismicio";
import { InView } from "@/lib/motion-primitives/components/InView";
import CollectionPost from "@/components/CollectionPost";

type LastPostProps = {
  uid?: string;
};

export default async function LastPost({ uid }: LastPostProps) {
  const client = createClient();
  const posts = await client.getByType("post", { pageSize: 5 });

  return (
    <Section container="smash" className="min-h-[50vh] px-1">
      <InView>
        <h3 className="mb-1.5">Poemas destacados</h3>

        <Grid col="one" className="full">
          {posts.total_results_size > 0 &&
            posts.results
              .filter((post) => post.uid !== uid)
              .map((post) => <CollectionPost doc={post} key={post.id} />)}
        </Grid>
      </InView>
    </Section>
  );
}
