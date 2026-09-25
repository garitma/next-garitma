import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { PoemImage } from "@/components/PoemImage";
import { getPoemContent, parsePoemContent } from "@/utils/content";
import { generatePoemMetadata } from "@/utils/seo";

interface PageProps {
  params: Promise<{
    uid: string;
  }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { uid } = await params;
  const content = await getPoemContent(uid);

  if (!content) {
    return {
      title: "Poema no encontrado",
    };
  }

  const { title, body, segments } = parsePoemContent(content);
  const imageSegment = segments.find((segment) => segment.type === "image");
  const image = imageSegment?.type === "image" ? imageSegment.src : undefined;

  return generatePoemMetadata({
    poem: {
      title,
      body,
      uid,
      image,
    },
  });
}

export default async function PoemPage({ params }: PageProps) {
  const { uid } = await params;
  const content = await getPoemContent(uid);

  if (!content) {
    notFound();
  }

  const { title, segments } = parsePoemContent(content);

  return (
    <div className="page">
      <section>
        <div className="smash">
          <article>
            {title && (
              <h1 className="h1 mb-2 text-center text-grat-12 leading-tight">
                {title}
              </h1>
            )}
            {segments.map((segment, index) =>
              segment.type === "image" ? (
                <PoemImage
                  key={`${segment.src}-${index}`}
                  src={segment.src}
                  alt={segment.alt || title || ""}
                  priority={
                    segments.findIndex((item) => item.type === "image") ===
                    index
                  }
                />
              ) : (
                <div
                  key={index}
                  className="p whitespace-pre-line text-grat-12 leading-relaxed px-1"
                >
                  {segment.value}
                </div>
              )
            )}
          </article>
        </div>
      </section>
    </div>
  );
}
