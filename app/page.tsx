import Link from "next/link";
import { getAllPoems } from "@/utils/content";


export default async function Home() {
  const poems = await getAllPoems();

  return (
    <div className="page">
      <section>
        <div className="smash">
          <h1 className="h1 mb-4 text-center">Poemas</h1>
          <ul className="space-y-2 m-1">
            {poems.map((poem) => (
              <li key={poem.slug}>
                <Link
                  href={`/${poem.slug}`}
                  className="p text-grat-12 transition-colors block underline"
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
