import Link from "next/link";

import { getAllPoems } from "@/utils/content";

export default async function Home() {
  const poems = await getAllPoems();

  return (
    <div className="page">
      <section>
        <div className="smash">
          <h1 className="h1 mb-4 text-center">Poemas <span className="text-grat-12 text-sm">({poems.length})</span></h1>
          <ul className="space-y-0.5 m-1">
            {poems.map((poem) => (
              <li key={poem.slug}>
                <Link
                  href={`/${poem.slug}`}
                  className="p text-grat-12 transition-colors block border-2 border-transparent hover:border-gray-12 p-1"
                >
                  {poem.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
