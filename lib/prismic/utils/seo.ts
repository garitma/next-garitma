import { Metadata } from "next";
import { asText, isFilled, asLink, Content } from "@prismicio/client";

export function getPrismicSEO(
  doc: Content.HomepageDocument | Content.PostDocument,
  settings: Content.SettingsDocument
): Metadata {
  const siteName = settings.data.site_name;
  const title = doc.data?.title ?? doc.data.meta_title;
  const description =
    doc.data.meta_description ?? settings.data.site_description;
  const fullTitle = title ? `${title} | ${siteName}` : siteName;

  return {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      url: isFilled.image(doc.data.meta_image)
        ? doc.data.meta_image.url
        : isFilled.image(settings.data.open_graph)
          ? settings.data.open_graph.url
          : undefined,
    },
  };
}
