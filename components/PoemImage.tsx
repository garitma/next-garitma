import Image from "next/image";
import { cache } from "react";
import { imageSize } from "image-size";

const getRemoteImageSize = cache(async (src: string) => {
  const response = await fetch(src, { next: { revalidate: 86400 } });
  if (!response.ok) return null;

  const size = imageSize(new Uint8Array(await response.arrayBuffer()));
  if (!size.width || !size.height) return null;

  return { width: size.width, height: size.height };
});

export async function PoemImage({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  const size = await getRemoteImageSize(src);
  if (!size) return null;

  return (
    <Image
      src={src}
      alt={alt}
      width={size.width}
      height={size.height}
      sizes="(min-width: 768px) 740px, 100vw"
      priority={priority}
      className="my-2"
      style={{ width: "100%", height: "auto" }}
    />
  );
}
