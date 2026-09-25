import { describe, expect, it } from "vitest";

import { parsePoemContent, resolveMediaSrc } from "@/utils/content";

const MEDIA = "https://agjr2io12d0kw6qt.public.blob.vercel-storage.com/media";

describe("poem media syntax", () => {
  it("resolves a filename in the blob media folder", () => {
    expect(resolveMediaSrc("deseos.png")).toBe(`${MEDIA}/deseos.png`);
    expect(resolveMediaSrc("media/deseos.png")).toBe(`${MEDIA}/deseos.png`);
    expect(resolveMediaSrc(`${MEDIA}/deseos.png`)).toBe(`${MEDIA}/deseos.png`);
  });

  it("ignores files outside the media folder", () => {
    expect(resolveMediaSrc("https://example.com/deseos.png")).toBeNull();
    expect(resolveMediaSrc("../secret.png")).toBeNull();
    expect(resolveMediaSrc("notes.txt")).toBeNull();
  });

  it("turns a mentioned image into a segment and keeps the poem text", () => {
    const parsed = parsePoemContent(
      "# Deseos\n\n![Deseos](deseos.png)\n\nA veces me gusta pasearme."
    );

    expect(parsed.title).toBe("Deseos");
    expect(parsed.body).toEqual(["A veces me gusta pasearme."]);
    expect(parsed.segments).toEqual([
      {
        type: "image",
        alt: "Deseos",
        src: `${MEDIA}/deseos.png`,
      },
      { type: "text", value: "A veces me gusta pasearme." },
    ]);
  });

  it("leaves a poem without an image as text", () => {
    const parsed = parsePoemContent("# Luz\n\nUna linea del poema.");

    expect(parsed.segments).toEqual([
      { type: "text", value: "Una linea del poema." },
    ]);
  });
});
