import type { Metadata } from "next";

interface PoemData {
  title: string | null;
  body: string[];
  uid: string;
}

interface GenerateSEOParams {
  poem: PoemData;
  siteName?: string;
  siteUrl?: string;
}

/**
 * Generates SEO metadata for a poem page
 * @param poem - The poem data containing title, body, and uid
 * @param siteName - The site name (defaults to "Garitma")
 * @param siteUrl - The base URL of the site (optional, for absolute URLs)
 * @returns Next.js Metadata object
 */
export function generatePoemMetadata({
  poem,
  siteName = "Garitma",
  siteUrl,
}: GenerateSEOParams): Metadata {
  const { title, body, uid } = poem;

  // Generate description from poem content
  const poemText = body.join(" ").trim();
  const description = poemText
    ? poemText.length > 160
      ? `${poemText.slice(0, 157)}...`
      : poemText
    : `Poema de ${siteName}`;

  // Generate title
  const pageTitle = title
    ? `${title} | ${siteName}`
    : `${siteName} - Poema`;

  // Generate canonical URL if siteUrl is provided
  const canonicalUrl = siteUrl ? `${siteUrl}/${uid}` : undefined;

  // Get first few lines for Open Graph description
  const ogDescription =
    body.length > 0
      ? body.slice(0, 3).join(" ").trim().slice(0, 200) || description
      : description;

  return {
    title: pageTitle,
    description,
    alternates: canonicalUrl
      ? {
          canonical: canonicalUrl,
        }
      : undefined,
    openGraph: {
      title: pageTitle,
      description: ogDescription,
      type: "article",
      url: canonicalUrl,
      siteName,
    },
    twitter: {
      card: "summary",
      title: pageTitle,
      description: ogDescription,
    },
  };
}

