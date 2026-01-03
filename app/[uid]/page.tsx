import { notFound } from "next/navigation";

import { getPoemContent, parsePoemContent } from "@/utils/content";

interface PageProps {
  params: Promise<{
    uid: string;
  }>;
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
            <div className="p whitespace-pre-line text-grat-12 leading-relaxed">
              {body.join("\n")}
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
