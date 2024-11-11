import Section from "@aura-design/system/section";
import Grid from "@aura-design/system/grid";
import Button from "@aura-design/system/button";
import { filter } from "@prismicio/client";
import Link from "next/link";

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
          <div className="text-center mt-2">
            <Link href="/blog" passHref legacyBehavior>
              <Button label="Ver más" mode="link" />
            </Link>
          </div>
        </div>
      </InView>
    </Section>
  );
}
