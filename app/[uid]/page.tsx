import { notFound } from "next/navigation";
import type { Metadata } from "next";

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

  const { title, body } = parsePoemContent(content);

  return generatePoemMetadata({
    poem: {
      title,
      body,
      uid,
    },
  });
}

export default async function PoemPage({ params }: PageProps) {
  const { uid } = await params;
  const content = await getPoemContent(uid);

  if (!content) {
    notFound();
  }

  const { title, body } = parsePoemContent(content);

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
            <div className="p whitespace-pre-line text-grat-12 leading-relaxed px-1">
              {body.join("\n")}
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
